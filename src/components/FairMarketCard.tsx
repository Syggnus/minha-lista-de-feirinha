import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Edit3, Trash2 } from "lucide-react";
import { FairMarket } from "@/types/fairmarket";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface FairMarketCardProps {
  fairMarket: FairMarket;
  onEdit: (fairMarket: FairMarket) => void;
  onDelete: (id: string) => void;
}

export function FairMarketCard({ fairMarket, onEdit, onDelete }: FairMarketCardProps) {
  const formattedDate = format(new Date(fairMarket.date), "EEEE, dd 'de' MMMM", { locale: ptBR });

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border bg-card">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
              {fairMarket.name}
            </CardTitle>
            <CardDescription className="mt-1 text-muted-foreground">
              {fairMarket.description}
            </CardDescription>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit(fairMarket)}
              className="h-8 w-8 p-0"
            >
              <Edit3 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(fairMarket.id)}
              className="h-8 w-8 p-0 text-destructive hover:text-destructive-foreground hover:bg-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Calendar className="h-4 w-4 text-primary" />
          <span className="capitalize">{formattedDate}</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Clock className="h-4 w-4 text-primary" />
          <span>{fairMarket.startTime} às {fairMarket.endTime}</span>
        </div>
        
        <div className="flex items-start gap-2 text-muted-foreground text-sm">
          <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <div>{fairMarket.address}</div>
            <div className="font-medium">{fairMarket.city}</div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {fairMarket.productTypes.map((type) => (
            <Badge key={type} variant="secondary" className="text-xs bg-secondary/80">
              {type}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}