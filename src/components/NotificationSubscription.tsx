import React, { useState } from 'react';
import { Bell, Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

export interface NotificationSubscription {
  id: string;
  email: string;
  cities: string[];
  categories: string[];
  reminderTime: number; // minutes before event
  isActive: boolean;
  createdAt: string;
}

interface NotificationSubscriptionProps {
  cities: string[];
  productTypes: string[];
  onSubscribe: (subscription: Omit<NotificationSubscription, 'id' | 'createdAt'>) => void;
}

export const NotificationSubscriptionComponent: React.FC<NotificationSubscriptionProps> = ({
  cities,
  productTypes,
  onSubscribe
}) => {
  const [email, setEmail] = useState('');
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [reminderTime, setReminderTime] = useState(60); // 1 hour default
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleCityChange = (city: string, checked: boolean) => {
    if (checked) {
      setSelectedCities(prev => [...prev, city]);
    } else {
      setSelectedCities(prev => prev.filter(c => c !== city));
    }
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories(prev => [...prev, category]);
    } else {
      setSelectedCategories(prev => prev.filter(c => c !== category));
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, informe seu email para receber notificações.",
        variant: "destructive",
      });
      return;
    }

    if (selectedCities.length === 0 && selectedCategories.length === 0) {
      toast({
        title: "Selecione suas preferências",
        description: "Escolha pelo menos uma cidade ou categoria de interesse.",
        variant: "destructive",
      });
      return;
    }

    onSubscribe({
      email,
      cities: selectedCities,
      categories: selectedCategories,
      reminderTime,
      isActive: true,
    });

    setIsSubscribed(true);
    
    toast({
      title: "Inscrição realizada com sucesso!",
      description: `Você receberá notificações em ${email} sobre feirinhas que correspondem às suas preferências.`,
    });
  };

  if (isSubscribed) {
    return (
      <Card className="bg-card/80 backdrop-blur-sm border-border/50">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <Check className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">Inscrição Confirmada!</CardTitle>
          <CardDescription>
            Você receberá notificações sobre novas feirinhas que correspondem às suas preferências.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          <CardTitle>Receber Notificações</CardTitle>
        </div>
        <CardDescription>
          Seja notificado sobre novas feirinhas na sua região
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Cidades de interesse</Label>
            <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
              {cities.map((city) => (
                <div key={city} className="flex items-center space-x-2">
                  <Checkbox
                    id={`city-${city}`}
                    checked={selectedCities.includes(city)}
                    onCheckedChange={(checked) => handleCityChange(city, checked as boolean)}
                  />
                  <Label
                    htmlFor={`city-${city}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {city}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Categorias de interesse</Label>
            <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
              {productTypes.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  />
                  <Label
                    htmlFor={`category-${category}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Lembrete antes do evento</Label>
            <Select value={reminderTime.toString()} onValueChange={(value) => setReminderTime(parseInt(value))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30 minutos antes</SelectItem>
                <SelectItem value="60">1 hora antes</SelectItem>
                <SelectItem value="120">2 horas antes</SelectItem>
                <SelectItem value="1440">1 dia antes</SelectItem>
                <SelectItem value="2880">2 dias antes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full" variant="default">
            <Mail className="h-4 w-4 mr-2" />
            Inscrever-se para Notificações
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};