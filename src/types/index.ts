export interface DiskData {
  model: string;
  brand: string;
  capacity: number;
  price: number;
  type: 'SSD' | 'HDD';
  interface: string;
  socket: string;
  pricePerTB: number;
  vendor: string;
  url: string;
  score: number;
  isSponsored?: boolean;
  powerSpecs?: {
    idle: number;     // Watts when idle
    active: number;   // Watts when active
    sleep: number;    // Watts in sleep mode
  };
  noise?: {
    idle: number;     // dB when idle
    seek: number;     // dB when seeking
  };
  priceHistory?: Array<{
    date: string;
    price: number;
  }>;
}