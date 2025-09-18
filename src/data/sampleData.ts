import { FairMarket } from "@/types/fairmarket";

export const sampleFairMarkets: FairMarket[] = [
  {
    id: "1",
    name: "Feira Orgânica do Parque Ibirapuera",
    description: "Uma feira com os melhores produtos orgânicos da região, diretamente do produtor ao consumidor. Encontre frutas, verduras e legumes frescos, além de produtos artesanais.",
    date: "2025-09-21",
    startTime: "08:00",
    endTime: "14:00",
    address: "Portão 7 - Av. Paulista, 1578",
    city: "São Paulo - SP",
    productTypes: ["Frutas e Verduras", "Produtos Orgânicos", "Pães e Doces", "Laticínios"],
    createdAt: "2024-09-15T10:00:00Z",
    updatedAt: "2024-09-15T10:00:00Z"
  },
  {
    id: "2", 
    name: "Feira de Artesanato da Praça da República",
    description: "Feira tradicional com artesanato local, roupas, acessórios e produtos únicos feitos à mão por artistas da região.",
    date: "2025-09-22",
    startTime: "09:00",
    endTime: "17:00", 
    address: "Praça da República, s/n - Centro",
    city: "São Paulo - SP",
    productTypes: ["Artesanato", "Roupas e Acessórios", "Flores e Plantas"],
    createdAt: "2024-09-15T11:00:00Z",
    updatedAt: "2024-09-15T11:00:00Z"
  },
  {
    id: "3",
    name: "Feira Gastronômica de Pinheiros", 
    description: "Uma experiência culinária única com comidas típicas, pratos gourmet e bebidas artesanais de diversos pontos do Brasil e do mundo.",
    date: "2025-09-28",
    startTime: "11:00",
    endTime: "20:00",
    address: "Largo da Batata, 100 - Pinheiros", 
    city: "São Paulo - SP",
    productTypes: ["Comida Pronta", "Bebidas", "Pães e Doces"],
    createdAt: "2024-09-15T12:00:00Z",
    updatedAt: "2024-09-15T12:00:00Z"
  },
  {
    id: "4",
    name: "Feira do Produtor Rural de Campinas",
    description: "Feira tradicional com produtos direto da roça. Frutas da estação, verduras frescas, queijos artesanais e muito mais.",
    date: "2025-09-25",
    startTime: "06:00", 
    endTime: "12:00",
    address: "Praça Arautos da Paz - Centro",
    city: "Campinas - SP",
    productTypes: ["Frutas e Verduras", "Laticínios", "Produtos Orgânicos", "Carnes e Peixes"],
    createdAt: "2024-09-15T13:00:00Z", 
    updatedAt: "2024-09-15T13:00:00Z"
  },
  {
    id: "5",
    name: "Feira Noturna de Food Trucks",
    description: "Encontro de food trucks com as melhores opções de street food da cidade. Música ao vivo e ambiente descontraído para toda a família.",
    date: "2025-09-30",
    startTime: "18:00",
    endTime: "23:00",
    address: "Parque Villa-Lobos - Portão A",
    city: "São Paulo - SP", 
    productTypes: ["Comida Pronta", "Bebidas"],
    createdAt: "2024-09-15T14:00:00Z",
    updatedAt: "2024-09-15T14:00:00Z"
  },
  {
    id: "6",
    name: "Feira de Flores e Plantas de Holambra",
    description: "A maior feira de flores e plantas da região. Mudas, flores cortadas, plantas ornamentais e produtos para jardinagem.",
    date: "2025-10-05",
    startTime: "07:00",
    endTime: "15:00",
    address: "Centro de Eventos - Rua das Tulipas, 123", 
    city: "Holambra - SP",
    productTypes: ["Flores e Plantas", "Artesanato"],
    createdAt: "2024-09-15T15:00:00Z",
    updatedAt: "2024-09-15T15:00:00Z"
  },
  {
    id: "7",
    name: "Feira da Lua - Santos",
    description: "Feira noturna à beira-mar com produtos locais, artesanato praiano e comidas típicas da região costeira.",
    date: "2025-10-12",
    startTime: "17:00",
    endTime: "22:00",
    address: "Praia do Gonzaga - Av. Vicente de Carvalho",
    city: "Santos - SP",
    productTypes: ["Comida Pronta", "Artesanato", "Bebidas"],
    createdAt: "2024-09-16T08:00:00Z",
    updatedAt: "2024-09-16T08:00:00Z"
  },
  {
    id: "8",
    name: "Feira Orgânica de Ribeirão Preto",
    description: "Produtos orgânicos certificados direto dos produtores locais. Variedade de frutas, verduras e produtos sem agrotóxicos.",
    date: "2025-10-08",
    startTime: "07:00",
    endTime: "13:00",
    address: "Praça XV de Novembro - Centro",
    city: "Ribeirão Preto - SP",
    productTypes: ["Frutas e Verduras", "Produtos Orgânicos", "Laticínios"],
    createdAt: "2024-09-16T09:00:00Z",
    updatedAt: "2024-09-16T09:00:00Z"
  },
  {
    id: "9",
    name: "Feira de Carnes Especiais - Bauru",
    description: "Especializada em carnes de qualidade premium, embutidos artesanais e produtos defumados da região.",
    date: "2025-10-15",
    startTime: "08:00",
    endTime: "16:00",
    address: "Terminal Rodoviário - Praça João Paulo II",
    city: "Bauru - SP",
    productTypes: ["Carnes e Peixes", "Laticínios", "Pães e Doces"],
    createdAt: "2024-09-16T10:00:00Z",
    updatedAt: "2024-09-16T10:00:00Z"
  },
  {
    id: "10",
    name: "Feira Hippie de Belo Horizonte",
    description: "Tradicional feira com artesanato mineiro, bijuterias, roupas alternativas e comida típica de Minas Gerais.",
    date: "2025-10-20",
    startTime: "09:00",
    endTime: "18:00",
    address: "Av. Afonso Pena - Centro",
    city: "Belo Horizonte - MG",
    productTypes: ["Artesanato", "Roupas e Acessórios", "Comida Pronta"],
    createdAt: "2024-09-16T11:00:00Z",
    updatedAt: "2024-09-16T11:00:00Z"
  },
  {
    id: "11",
    name: "Feira de Vinhos e Queijos - Campos do Jordão",
    description: "Seleção especial de vinhos nacionais e importados, queijos artesanais e produtos gourmet da serra.",
    date: "2025-11-02",
    startTime: "14:00",
    endTime: "20:00",
    address: "Capivari - Rua Djalma Forjaz",
    city: "Campos do Jordão - SP",
    productTypes: ["Bebidas", "Laticínios", "Pães e Doces"],
    createdAt: "2024-09-16T12:00:00Z",
    updatedAt: "2024-09-16T12:00:00Z"
  },
  {
    id: "12",
    name: "Feira de Produtos Naturais - Sorocaba",
    description: "Foco em produtos naturais, suplementos, ervas medicinais e alimentos funcionais para uma vida mais saudável.",
    date: "2025-10-25",
    startTime: "08:00",
    endTime: "17:00",
    address: "Parque Campolim - Av. Gen. Carneiro",
    city: "Sorocaba - SP",
    productTypes: ["Produtos Orgânicos", "Frutas e Verduras", "Bebidas"],
    createdAt: "2024-09-16T13:00:00Z",
    updatedAt: "2024-09-16T13:00:00Z"
  },
  {
    id: "13",
    name: "Feira de Doces e Guloseimas - Piracicaba",
    description: "Paraíso dos doces com brigadeiros gourmet, bolos artesanais, doces tradicionais e sobremesas especiais.",
    date: "2025-11-10",
    startTime: "10:00",
    endTime: "19:00",
    address: "Rua do Porto - Centro Histórico",
    city: "Piracicaba - SP",
    productTypes: ["Pães e Doces", "Bebidas"],
    createdAt: "2024-09-16T14:00:00Z",
    updatedAt: "2024-09-16T14:00:00Z"
  },
  {
    id: "14",
    name: "Feira da Madrugada - São José dos Campos",
    description: "Feira tradicional que começa de madrugada com os produtos mais frescos, frutas da época e verduras do dia.",
    date: "2025-10-18",
    startTime: "04:00",
    endTime: "10:00",
    address: "Mercado Municipal - Centro",
    city: "São José dos Campos - SP",
    productTypes: ["Frutas e Verduras", "Carnes e Peixes", "Laticínios"],
    createdAt: "2024-09-16T15:00:00Z",
    updatedAt: "2024-09-16T15:00:00Z"
  },
  {
    id: "15",
    name: "Feira Cultural de Brasília",
    description: "Mistura de cultura e gastronomia com artesanato do cerrado, comidas típicas regionais e apresentações artísticas.",
    date: "2025-11-15",
    startTime: "16:00",
    endTime: "22:00",
    address: "Eixo Monumental - Torre de TV",
    city: "Brasília - DF",
    productTypes: ["Artesanato", "Comida Pronta", "Roupas e Acessórios"],
    createdAt: "2024-09-16T16:00:00Z",
    updatedAt: "2024-09-16T16:00:00Z"
  },
  {
    id: "16",
    name: "Feira de Pescados - Guarujá",
    description: "Peixes frescos direto dos barcos pesqueiros, frutos do mar e especialidades da culinária caiçara.",
    date: "2025-10-28",
    startTime: "05:00",
    endTime: "12:00",
    address: "Porto da Praia Grande - Av. Miguel Estefno",
    city: "Guarujá - SP",
    productTypes: ["Carnes e Peixes", "Comida Pronta"],
    createdAt: "2024-09-16T17:00:00Z",
    updatedAt: "2024-09-16T17:00:00Z"
  },
  {
    id: "17",
    name: "Feira Nordestina - São Paulo",
    description: "Sabores e tradições do nordeste brasileiro com tapioca, cuscuz, queijo coalho e muito forró.",
    date: "2025-11-22",
    startTime: "08:00",
    endTime: "16:00",
    address: "Praça da Sé - Centro",
    city: "São Paulo - SP",
    productTypes: ["Comida Pronta", "Laticínios", "Artesanato"],
    createdAt: "2024-09-16T18:00:00Z",
    updatedAt: "2024-09-16T18:00:00Z"
  },
  {
    id: "18",
    name: "Feira Japonesa do Bairro da Liberdade",
    description: "Produtos orientais autênticos, desde temperos especiais até doces típicos e objetos decorativos japoneses.",
    date: "2025-11-08",
    startTime: "10:00",
    endTime: "18:00",
    address: "Rua Galvão Bueno - Liberdade",
    city: "São Paulo - SP",
    productTypes: ["Comida Pronta", "Artesanato", "Bebidas"],
    createdAt: "2024-09-16T19:00:00Z",
    updatedAt: "2024-09-16T19:00:00Z"
  },
  {
    id: "19",
    name: "Feira de Roupas Vintage - Campinas",
    description: "Roupas e acessórios vintage, brechós selecionados e peças únicas de décadas passadas.",
    date: "2025-12-01",
    startTime: "09:00",
    endTime: "17:00",
    address: "Shopping Iguatemi - Praça de Eventos",
    city: "Campinas - SP",
    productTypes: ["Roupas e Acessórios", "Artesanato"],
    createdAt: "2024-09-16T20:00:00Z",
    updatedAt: "2024-09-16T20:00:00Z"
  },
  {
    id: "20",
    name: "Feira de Tecnologia Verde - Curitiba",
    description: "Inovações sustentáveis, produtos eco-friendly e tecnologias verdes para um futuro mais limpo.",
    date: "2025-11-28",
    startTime: "08:00",
    endTime: "18:00",
    address: "Parque Barigui - Pavilhão de Eventos",
    city: "Curitiba - PR",
    productTypes: ["Produtos Orgânicos", "Artesanato", "Flores e Plantas"],
    createdAt: "2024-09-16T21:00:00Z",
    updatedAt: "2024-09-16T21:00:00Z"
  },
  {
    id: "21",
    name: "Feira Gastronômica Internacional - Rio de Janeiro",
    description: "Culinária mundial reunida em um só lugar, com pratos típicos de diversos países e chefs renomados.",
    date: "2025-12-05",
    startTime: "12:00",
    endTime: "22:00",
    address: "Lagoa Rodrigo de Freitas - Parque Garota de Ipanema",
    city: "Rio de Janeiro - RJ",
    productTypes: ["Comida Pronta", "Bebidas", "Pães e Doces"],
    createdAt: "2024-09-16T22:00:00Z",
    updatedAt: "2024-09-16T22:00:00Z"
  },
  {
    id: "22",
    name: "Feira de Plantas Medicinais - Salvador",
    description: "Ervas medicinais, chás terapêuticos e produtos naturais da medicina popular baiana.",
    date: "2025-11-12",
    startTime: "07:00",
    endTime: "15:00",
    address: "Mercado Modelo - Pelourinho",
    city: "Salvador - BA",
    productTypes: ["Produtos Orgânicos", "Flores e Plantas", "Bebidas"],
    createdAt: "2024-09-16T23:00:00Z",
    updatedAt: "2024-09-16T23:00:00Z"
  },
  {
    id: "23",
    name: "Feira de Cervejas Artesanais - Porto Alegre",
    description: "Encontro dos melhores cervejeiros artesanais do Sul, com degustação e venda de cervejas especiais.",
    date: "2025-12-14",
    startTime: "15:00",
    endTime: "23:00",
    address: "Parque da Redenção - Anfiteatro",
    city: "Porto Alegre - RS",
    productTypes: ["Bebidas", "Comida Pronta", "Pães e Doces"],
    createdAt: "2024-09-17T00:00:00Z",
    updatedAt: "2024-09-17T00:00:00Z"
  }
];

// Função para gerar um novo ID único
export function generateId(): string {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

// Função para filtrar feirinhas futuras
export function getFutureFairMarkets(fairMarkets: FairMarket[]): FairMarket[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return fairMarkets.filter(market => {
    const marketDate = new Date(market.date);
    return marketDate >= today;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

// Função para obter cidades únicas
export function getUniqueCities(fairMarkets: FairMarket[]): string[] {
  const cities = fairMarkets.map(market => market.city);
  return Array.from(new Set(cities)).sort();
}

// Função para obter tipos de produtos únicos
export function getUniqueProductTypes(fairMarkets: FairMarket[]): string[] {
  const allTypes = fairMarkets.flatMap(market => market.productTypes);
  return Array.from(new Set(allTypes)).sort();
}