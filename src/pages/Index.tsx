import { useState, useMemo } from "react";
import { Plus, Calendar, MapPin, Users, Bell } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { FairMarketCard } from "@/components/FairMarketCard";
import { FairMarketForm } from "@/components/FairMarketForm";
import { FairMarketFilters, FilterValues } from "@/components/FairMarketFilters";
import { DeleteConfirmDialog } from "@/components/DeleteConfirmDialog";
import { FairMarket, CreateFairMarketData } from "@/types/fairmarket";
import { sampleFairMarkets, generateId, getFutureFairMarkets, getUniqueCities, getUniqueProductTypes } from "@/data/sampleData";
import { NotificationSubscriptionComponent, NotificationSubscription } from "@/components/NotificationSubscription";
import { addSubscription, scheduleReminder, getPendingReminders, markReminderAsSent } from "@/data/notificationData";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/feira-hero.jpg";

const Index = () => {
  const [fairMarkets, setFairMarkets] = useState<FairMarket[]>(sampleFairMarkets);
  const [showForm, setShowForm] = useState(false);
  const [editingMarket, setEditingMarket] = useState<FairMarket | null>(null);
  const [deleteDialog, setDeleteDialog] = useState<{ isOpen: boolean; market: FairMarket | null }>({
    isOpen: false,
    market: null,
  });
  const [filters, setFilters] = useState<FilterValues>({
    search: "",
    city: "",
    dateFrom: "",
    dateTo: "",
    category: "",
  });
  const [showNotifications, setShowNotifications] = useState(false);

  // Get only future events
  const futureFairMarkets = useMemo(() => {
    return getFutureFairMarkets(fairMarkets);
  }, [fairMarkets]);

  // Apply filters
  const filteredMarkets = useMemo(() => {
    return futureFairMarkets.filter(market => {
      const matchesSearch = market.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                          market.description.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesCity = !filters.city || market.city === filters.city;
      
      const matchesCategory = !filters.category || market.productTypes.includes(filters.category);
      
      const marketDate = new Date(market.date);
      const matchesDateFrom = !filters.dateFrom || marketDate >= new Date(filters.dateFrom);
      const matchesDateTo = !filters.dateTo || marketDate <= new Date(filters.dateTo);
      
      return matchesSearch && matchesCity && matchesCategory && matchesDateFrom && matchesDateTo;
    });
  }, [futureFairMarkets, filters]);

  const uniqueCities = useMemo(() => {
    return getUniqueCities(futureFairMarkets);
  }, [futureFairMarkets]);

  const uniqueProductTypes = useMemo(() => {
    return getUniqueProductTypes(futureFairMarkets);
  }, [futureFairMarkets]);

  const handleCreateMarket = (data: CreateFairMarketData) => {
    const newMarket: FairMarket = {
      ...data,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setFairMarkets(prev => [...prev, newMarket]);
    setShowForm(false);
    
    toast({
      title: "Feirinha cadastrada com sucesso!",
      description: `${data.name} foi adicionada à agenda.`,
    });
  };

  const handleUpdateMarket = (data: CreateFairMarketData) => {
    if (!editingMarket) return;

    const updatedMarket: FairMarket = {
      ...editingMarket,
      ...data,
      updatedAt: new Date().toISOString(),
    };

    setFairMarkets(prev => 
      prev.map(market => 
        market.id === editingMarket.id ? updatedMarket : market
      )
    );
    setEditingMarket(null);
    
    toast({
      title: "Feirinha atualizada com sucesso!",
      description: `${data.name} foi atualizada.`,
    });
  };

  const handleEditMarket = (market: FairMarket) => {
    setEditingMarket(market);
  };

  const handleDeleteMarket = (id: string) => {
    const market = fairMarkets.find(m => m.id === id);
    if (market) {
      setDeleteDialog({ isOpen: true, market });
    }
  };

  const confirmDeleteMarket = () => {
    if (deleteDialog.market) {
      setFairMarkets(prev => prev.filter(market => market.id !== deleteDialog.market!.id));
      
      toast({
        title: "Feirinha removida",
        description: `${deleteDialog.market.name} foi removida da agenda.`,
        variant: "destructive",
      });
    }
    setDeleteDialog({ isOpen: false, market: null });
  };

  const cancelDelete = () => {
    setDeleteDialog({ isOpen: false, market: null });
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingMarket(null);
  };

  const handleSubscribe = (subscriptionData: Omit<NotificationSubscription, 'id' | 'createdAt'>) => {
    const subscription = addSubscription(subscriptionData);
    
    // Schedule reminders for existing matching events
    filteredMarkets.forEach(market => {
      const matchesCity = subscriptionData.cities.length === 0 || subscriptionData.cities.includes(market.city);
      const matchesCategory = subscriptionData.categories.length === 0 || 
        market.productTypes.some(type => subscriptionData.categories.includes(type));
      
      if (matchesCity && matchesCategory) {
        const eventDateTime = `${market.date}T${market.startTime}`;
        scheduleReminder(subscription.id, market.id, eventDateTime, subscriptionData.reminderTime);
      }
    });
  };

  // Check for pending reminders (in a real app, this would be handled by a background service)
  React.useEffect(() => {
    const checkReminders = () => {
      const pendingReminders = getPendingReminders();
      pendingReminders.forEach(reminder => {
        const market = fairMarkets.find(m => m.id === reminder.fairMarketId);
        if (market) {
          // In a real app, this would send an actual notification
          console.log(`Lembrete: A feirinha "${market.name}" começará em breve!`);
          markReminderAsSent(reminder.id);
        }
      });
    };

    const interval = setInterval(checkReminders, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [fairMarkets]);

  if (showForm || editingMarket) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20 py-8 px-4">
        <FairMarketForm
          onSubmit={editingMarket ? handleUpdateMarket : handleCreateMarket}
          onCancel={handleCancelForm}
          initialData={editingMarket || undefined}
          isEditing={!!editingMarket}
        />
      </div>
    );
  }

  if (showNotifications) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20 py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => setShowNotifications(false)}
              className="mb-4"
            >
              ← Voltar
            </Button>
            <h1 className="text-3xl font-bold text-foreground">Notificações</h1>
            <p className="text-muted-foreground mt-2">
              Configure suas preferências para receber lembretes sobre feirinhas
            </p>
          </div>
          
          <NotificationSubscriptionComponent
            cities={uniqueCities}
            productTypes={uniqueProductTypes}
            onSubscribe={handleSubscribe}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-[400px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Feirinhas Locais
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Descubra e gerencie as melhores feirinhas da sua região. 
                Produtos frescos, artesanato local e experiências únicas.
              </p>
              <Button
                size="lg"
                onClick={() => setShowForm(true)}
                variant="hero"
                className="text-lg px-8 py-3 h-auto font-semibold"
              >
                <Plus className="h-5 w-5 mr-2" />
                Cadastrar Nova Feirinha
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50 text-center">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-card-foreground">{futureFairMarkets.length}</div>
            <div className="text-muted-foreground">Eventos Futuros</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50 text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-card-foreground">{uniqueCities.length}</div>
            <div className="text-muted-foreground">Cidades</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-card-foreground">{filteredMarkets.length}</div>
            <div className="text-muted-foreground">Resultados</div>
          </div>
        </div>

        {/* Filters */}
        <FairMarketFilters
          filters={filters}
          onFiltersChange={setFilters}
          cities={uniqueCities}
          productTypes={uniqueProductTypes}
        />

        {/* Action Buttons */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Próximas Feirinhas
          </h2>
          <div className="flex gap-2">
            <Button
              onClick={() => setShowNotifications(true)}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Bell className="h-4 w-4 mr-2" />
              Notificações
            </Button>
            <Button
              onClick={() => setShowForm(true)}
              variant="hero"
            >
              <Plus className="h-4 w-4 mr-2" />
              Nova Feirinha
            </Button>
          </div>
        </div>

        {/* Fair Markets Grid */}
        {filteredMarkets.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              Nenhuma feirinha encontrada
            </h3>
            <p className="text-muted-foreground mb-6">
              {futureFairMarkets.length === 0 
                ? "Não há feirinhas cadastradas. Que tal cadastrar a primeira?"
                : "Tente ajustar os filtros para encontrar o que procura."
              }
            </p>
            {futureFairMarkets.length === 0 && (
              <Button
                onClick={() => setShowForm(true)}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Plus className="h-4 w-4 mr-2" />
                Cadastrar Primeira Feirinha
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMarkets.map((market) => (
              <FairMarketCard
                key={market.id}
                fairMarket={market}
                onEdit={handleEditMarket}
                onDelete={handleDeleteMarket}
              />
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={deleteDialog.isOpen}
        onClose={cancelDelete}
        onConfirm={confirmDeleteMarket}
        fairMarketName={deleteDialog.market?.name || ""}
      />
    </div>
  );
};

export default Index;