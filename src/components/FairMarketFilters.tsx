import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Calendar, Package, X } from "lucide-react";

export interface FilterValues {
  search: string;
  city: string;
  dateFrom: string;
  dateTo: string;
  category: string;
}

const initialFilters: FilterValues = {
  search: "",
  city: "",
  dateFrom: "",
  dateTo: "",
  category: "",
};

interface FairMarketFiltersProps {
  filters: FilterValues;
  onFiltersChange: (filters: FilterValues) => void;
  cities: string[];
  productTypes: string[];
}

export const FairMarketFilters: React.FC<FairMarketFiltersProps> = ({
  filters,
  onFiltersChange,
  cities,
  productTypes
}) => {
  const handleFilterChange = (key: keyof FilterValues, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      city: "",
      dateFrom: "",
      dateTo: "",
      category: "",
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== "");

  return (
    <div className="mb-6">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="pl-10 h-10"
              />
            </div>

            {/* City Filter */}
            <Select 
              value={filters.city || undefined} 
              onValueChange={(value) => handleFilterChange("city", value || "")}
            >
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Todas as cidades" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select 
              value={filters.category || undefined} 
              onValueChange={(value) => handleFilterChange("category", value || "")}
            >
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Todas as categorias" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {productTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Date From */}
            <Input
              type="date"
              placeholder="Data inicial"
              value={filters.dateFrom}
              onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
              className="h-10"
            />

            {/* Date To */}
            <Input
              type="date"
              placeholder="Data final"
              value={filters.dateTo}
              onChange={(e) => handleFilterChange("dateTo", e.target.value)}
              className="h-10"
            />
          </div>

          {hasActiveFilters && (
            <div className="flex justify-end mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4 mr-2" />
                Limpar filtros
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};