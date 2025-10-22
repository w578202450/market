export interface MarketData {
  name: string;
  code: string;
  icon: string;
  isMain: boolean;
  price: number;
  priceChange: 'up' | 'down';
  targetChange: number;
  remainingDays: number;
  currentVol: number;
  volChange: number;
  volSpeed: number;
  realVol: number;
  premium: number;
  skewness: number;
  volPercentile: number;
  skewPercentile: number;
  trend: 'up' | 'down';
}

export interface MockData {
  tableData: MarketData[];
}
