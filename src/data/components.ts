// Comprehensive component database with compatibility information

export interface Processor {
  name: string;
  price: number;
  socket: string;
  tdp: number;
  specs: string;
  brand: 'Intel' | 'AMD';
  generation: string;
  cores: number;
  threads: number;
}

export interface Motherboard {
  name: string;
  price: number;
  socket: string;
  chipset: string;
  formFactor: string;
  specs: string;
  brand: string;
  memoryType: 'DDR4' | 'DDR5';
  maxMemory: number;
}

export interface GraphicsCard {
  name: string;
  price: number;
  wattage: number;
  specs: string;
  brand: 'NVIDIA' | 'AMD';
  vram: number;
  series: string;
}

export interface Memory {
  name: string;
  price: number;
  type: 'DDR4' | 'DDR5';
  specs: string;
  capacity: number;
  speed: number;
  brand: string;
}

export interface Storage {
  name: string;
  price: number;
  specs: string;
  capacity: number;
  type: 'NVMe' | 'SATA SSD' | 'HDD';
  brand: string;
}

export interface PSU {
  name: string;
  price: number;
  wattage: number;
  specs: string;
  efficiency: string;
  modular: boolean;
  brand: string;
}

export interface Case {
  name: string;
  price: number;
  formFactor: string;
  specs: string;
  brand: string;
  color: string;
}

export interface Cooling {
  name: string;
  price: number;
  specs: string;
  type: 'AIO' | 'Air' | 'Custom Loop';
  brand: string;
  size?: string;
}

export const processors: Processor[] = [
  // Intel 14th Gen (LGA1700)
  { name: 'Intel Core i9-14900KS', price: 64999, socket: 'LGA1700', tdp: 150, specs: '24 Cores • 32 Threads • 6.2 GHz Boost', brand: 'Intel', generation: '14th Gen', cores: 24, threads: 32 },
  { name: 'Intel Core i9-14900K', price: 52999, socket: 'LGA1700', tdp: 125, specs: '24 Cores • 32 Threads • 6.0 GHz Boost', brand: 'Intel', generation: '14th Gen', cores: 24, threads: 32 },
  { name: 'Intel Core i9-14900F', price: 48999, socket: 'LGA1700', tdp: 125, specs: '24 Cores • 32 Threads • 5.8 GHz Boost', brand: 'Intel', generation: '14th Gen', cores: 24, threads: 32 },
  { name: 'Intel Core i7-14700K', price: 39999, socket: 'LGA1700', tdp: 125, specs: '20 Cores • 28 Threads • 5.6 GHz Boost', brand: 'Intel', generation: '14th Gen', cores: 20, threads: 28 },
  { name: 'Intel Core i7-14700F', price: 35999, socket: 'LGA1700', tdp: 125, specs: '20 Cores • 28 Threads • 5.4 GHz Boost', brand: 'Intel', generation: '14th Gen', cores: 20, threads: 28 },
  { name: 'Intel Core i5-14600K', price: 27999, socket: 'LGA1700', tdp: 125, specs: '14 Cores • 20 Threads • 5.3 GHz Boost', brand: 'Intel', generation: '14th Gen', cores: 14, threads: 20 },
  { name: 'Intel Core i5-14600', price: 24999, socket: 'LGA1700', tdp: 65, specs: '14 Cores • 20 Threads • 5.2 GHz Boost', brand: 'Intel', generation: '14th Gen', cores: 14, threads: 20 },
  { name: 'Intel Core i5-14500', price: 21999, socket: 'LGA1700', tdp: 65, specs: '14 Cores • 20 Threads • 5.0 GHz Boost', brand: 'Intel', generation: '14th Gen', cores: 14, threads: 20 },
  { name: 'Intel Core i5-14400F', price: 18999, socket: 'LGA1700', tdp: 65, specs: '10 Cores • 16 Threads • 4.7 GHz Boost', brand: 'Intel', generation: '14th Gen', cores: 10, threads: 16 },
  { name: 'Intel Core i3-14100F', price: 11999, socket: 'LGA1700', tdp: 60, specs: '4 Cores • 8 Threads • 4.7 GHz Boost', brand: 'Intel', generation: '14th Gen', cores: 4, threads: 8 },
  
  // Intel 13th Gen (LGA1700)
  { name: 'Intel Core i9-13900KS', price: 59999, socket: 'LGA1700', tdp: 150, specs: '24 Cores • 32 Threads • 6.0 GHz Boost', brand: 'Intel', generation: '13th Gen', cores: 24, threads: 32 },
  { name: 'Intel Core i9-13900K', price: 49999, socket: 'LGA1700', tdp: 125, specs: '24 Cores • 32 Threads • 5.8 GHz Boost', brand: 'Intel', generation: '13th Gen', cores: 24, threads: 32 },
  { name: 'Intel Core i9-13900F', price: 45999, socket: 'LGA1700', tdp: 125, specs: '24 Cores • 32 Threads • 5.6 GHz Boost', brand: 'Intel', generation: '13th Gen', cores: 24, threads: 32 },
  { name: 'Intel Core i7-13700K', price: 37999, socket: 'LGA1700', tdp: 125, specs: '16 Cores • 24 Threads • 5.4 GHz Boost', brand: 'Intel', generation: '13th Gen', cores: 16, threads: 24 },
  { name: 'Intel Core i7-13700F', price: 33999, socket: 'LGA1700', tdp: 125, specs: '16 Cores • 24 Threads • 5.2 GHz Boost', brand: 'Intel', generation: '13th Gen', cores: 16, threads: 24 },
  { name: 'Intel Core i5-13600K', price: 25999, socket: 'LGA1700', tdp: 125, specs: '14 Cores • 20 Threads • 5.1 GHz Boost', brand: 'Intel', generation: '13th Gen', cores: 14, threads: 20 },
  { name: 'Intel Core i5-13500', price: 19999, socket: 'LGA1700', tdp: 65, specs: '14 Cores • 20 Threads • 4.8 GHz Boost', brand: 'Intel', generation: '13th Gen', cores: 14, threads: 20 },
  { name: 'Intel Core i5-13400F', price: 16999, socket: 'LGA1700', tdp: 65, specs: '10 Cores • 16 Threads • 4.6 GHz Boost', brand: 'Intel', generation: '13th Gen', cores: 10, threads: 16 },
  
  // AMD Ryzen 7000 (AM5)
  { name: 'AMD Ryzen 9 7950X3D', price: 59999, socket: 'AM5', tdp: 120, specs: '16 Cores • 32 Threads • 5.7 GHz Boost • 3D V-Cache', brand: 'AMD', generation: 'Ryzen 7000', cores: 16, threads: 32 },
  { name: 'AMD Ryzen 9 7950X', price: 54999, socket: 'AM5', tdp: 170, specs: '16 Cores • 32 Threads • 5.7 GHz Boost', brand: 'AMD', generation: 'Ryzen 7000', cores: 16, threads: 32 },
  { name: 'AMD Ryzen 9 7900X3D', price: 47999, socket: 'AM5', tdp: 120, specs: '12 Cores • 24 Threads • 5.6 GHz Boost • 3D V-Cache', brand: 'AMD', generation: 'Ryzen 7000', cores: 12, threads: 24 },
  { name: 'AMD Ryzen 9 7900X', price: 44999, socket: 'AM5', tdp: 170, specs: '12 Cores • 24 Threads • 5.4 GHz Boost', brand: 'AMD', generation: 'Ryzen 7000', cores: 12, threads: 24 },
  { name: 'AMD Ryzen 9 7900', price: 41999, socket: 'AM5', tdp: 65, specs: '12 Cores • 24 Threads • 5.4 GHz Boost', brand: 'AMD', generation: 'Ryzen 7000', cores: 12, threads: 24 },
  { name: 'AMD Ryzen 7 7800X3D', price: 38999, socket: 'AM5', tdp: 120, specs: '8 Cores • 16 Threads • 5.0 GHz Boost • 3D V-Cache', brand: 'AMD', generation: 'Ryzen 7000', cores: 8, threads: 16 },
  { name: 'AMD Ryzen 7 7700X', price: 33999, socket: 'AM5', tdp: 105, specs: '8 Cores • 16 Threads • 5.4 GHz Boost', brand: 'AMD', generation: 'Ryzen 7000', cores: 8, threads: 16 },
  { name: 'AMD Ryzen 7 7700', price: 30999, socket: 'AM5', tdp: 65, specs: '8 Cores • 16 Threads • 5.3 GHz Boost', brand: 'AMD', generation: 'Ryzen 7000', cores: 8, threads: 16 },
  { name: 'AMD Ryzen 5 7600X', price: 21999, socket: 'AM5', tdp: 105, specs: '6 Cores • 12 Threads • 5.3 GHz Boost', brand: 'AMD', generation: 'Ryzen 7000', cores: 6, threads: 12 },
  { name: 'AMD Ryzen 5 7600', price: 18999, socket: 'AM5', tdp: 65, specs: '6 Cores • 12 Threads • 5.1 GHz Boost', brand: 'AMD', generation: 'Ryzen 7000', cores: 6, threads: 12 },
  { name: 'AMD Ryzen 5 7500F', price: 15999, socket: 'AM5', tdp: 65, specs: '6 Cores • 12 Threads • 5.0 GHz Boost', brand: 'AMD', generation: 'Ryzen 7000', cores: 6, threads: 12 },
  
  // AMD Ryzen 5000 (AM4)
  { name: 'AMD Ryzen 9 5950X', price: 44999, socket: 'AM4', tdp: 105, specs: '16 Cores • 32 Threads • 4.9 GHz Boost', brand: 'AMD', generation: 'Ryzen 5000', cores: 16, threads: 32 },
  { name: 'AMD Ryzen 9 5900X', price: 36999, socket: 'AM4', tdp: 105, specs: '12 Cores • 24 Threads • 4.8 GHz Boost', brand: 'AMD', generation: 'Ryzen 5000', cores: 12, threads: 24 },
  { name: 'AMD Ryzen 7 5800X3D', price: 32999, socket: 'AM4', tdp: 105, specs: '8 Cores • 16 Threads • 4.5 GHz Boost • 3D V-Cache', brand: 'AMD', generation: 'Ryzen 5000', cores: 8, threads: 16 },
  { name: 'AMD Ryzen 7 5800X', price: 27999, socket: 'AM4', tdp: 105, specs: '8 Cores • 16 Threads • 4.7 GHz Boost', brand: 'AMD', generation: 'Ryzen 5000', cores: 8, threads: 16 },
  { name: 'AMD Ryzen 7 5700X', price: 23999, socket: 'AM4', tdp: 65, specs: '8 Cores • 16 Threads • 4.6 GHz Boost', brand: 'AMD', generation: 'Ryzen 5000', cores: 8, threads: 16 },
  { name: 'AMD Ryzen 5 5600X', price: 17999, socket: 'AM4', tdp: 65, specs: '6 Cores • 12 Threads • 4.6 GHz Boost', brand: 'AMD', generation: 'Ryzen 5000', cores: 6, threads: 12 },
  { name: 'AMD Ryzen 5 5600', price: 14999, socket: 'AM4', tdp: 65, specs: '6 Cores • 12 Threads • 4.4 GHz Boost', brand: 'AMD', generation: 'Ryzen 5000', cores: 6, threads: 12 },
  { name: 'AMD Ryzen 5 5500', price: 11999, socket: 'AM4', tdp: 65, specs: '6 Cores • 12 Threads • 4.2 GHz Boost', brand: 'AMD', generation: 'Ryzen 5000', cores: 6, threads: 12 },
  
  // Intel 12th Gen (LGA1700)
  { name: 'Intel Core i9-12900KS', price: 54999, socket: 'LGA1700', tdp: 150, specs: '16 Cores • 24 Threads • 5.5 GHz Boost', brand: 'Intel', generation: '12th Gen', cores: 16, threads: 24 },
  { name: 'Intel Core i9-12900K', price: 45999, socket: 'LGA1700', tdp: 125, specs: '16 Cores • 24 Threads • 5.2 GHz Boost', brand: 'Intel', generation: '12th Gen', cores: 16, threads: 24 },
  { name: 'Intel Core i7-12700K', price: 34999, socket: 'LGA1700', tdp: 125, specs: '12 Cores • 20 Threads • 5.0 GHz Boost', brand: 'Intel', generation: '12th Gen', cores: 12, threads: 20 },
  { name: 'Intel Core i5-12600K', price: 23999, socket: 'LGA1700', tdp: 125, specs: '10 Cores • 16 Threads • 4.9 GHz Boost', brand: 'Intel', generation: '12th Gen', cores: 10, threads: 16 },
  { name: 'Intel Core i5-12400F', price: 14999, socket: 'LGA1700', tdp: 65, specs: '6 Cores • 12 Threads • 4.4 GHz Boost', brand: 'Intel', generation: '12th Gen', cores: 6, threads: 12 },
  
  // More budget Intel options
  { name: 'Intel Core i3-13100', price: 12999, socket: 'LGA1700', tdp: 60, specs: '4 Cores • 8 Threads • 4.5 GHz Boost', brand: 'Intel', generation: '13th Gen', cores: 4, threads: 8 },
  { name: 'Intel Core i3-12100F', price: 9999, socket: 'LGA1700', tdp: 60, specs: '4 Cores • 8 Threads • 4.3 GHz Boost', brand: 'Intel', generation: '12th Gen', cores: 4, threads: 8 },
  
  // More budget AMD options
  { name: 'AMD Ryzen 3 4100', price: 7999, socket: 'AM4', tdp: 65, specs: '4 Cores • 8 Threads • 4.0 GHz Boost', brand: 'AMD', generation: 'Ryzen 4000', cores: 4, threads: 8 },
];

export const motherboards: Motherboard[] = [
  // Intel Z790 (LGA1700, DDR5)
  { name: 'ASUS ROG MAXIMUS Z790 HERO', price: 52999, socket: 'LGA1700', chipset: 'Z790', formFactor: 'ATX', specs: 'DDR5 • PCIe 5.0 • WiFi 6E', brand: 'ASUS', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'ASUS ROG STRIX Z790-E GAMING', price: 47999, socket: 'LGA1700', chipset: 'Z790', formFactor: 'ATX', specs: 'DDR5 • PCIe 5.0 • WiFi 6E • RGB', brand: 'ASUS', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'MSI MPG Z790 CARBON WIFI', price: 45999, socket: 'LGA1700', chipset: 'Z790', formFactor: 'ATX', specs: 'DDR5 • PCIe 5.0 • WiFi 6E', brand: 'MSI', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'GIGABYTE Z790 AORUS MASTER', price: 49999, socket: 'LGA1700', chipset: 'Z790', formFactor: 'ATX', specs: 'DDR5 • PCIe 5.0 • WiFi 6E • 20+1 VRM', brand: 'GIGABYTE', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'ASRock Z790 Taichi', price: 42999, socket: 'LGA1700', chipset: 'Z790', formFactor: 'ATX', specs: 'DDR5 • PCIe 5.0 • WiFi 6E', brand: 'ASRock', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'GIGABYTE Z790 AORUS ELITE AX', price: 26999, socket: 'LGA1700', chipset: 'Z790', formFactor: 'ATX', specs: 'DDR5 • PCIe 5.0 • WiFi 6E', brand: 'GIGABYTE', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'MSI PRO Z790-A WIFI', price: 23999, socket: 'LGA1700', chipset: 'Z790', formFactor: 'ATX', specs: 'DDR5 • PCIe 4.0 • WiFi 6', brand: 'MSI', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'ASUS PRIME Z790-P WIFI', price: 21999, socket: 'LGA1700', chipset: 'Z790', formFactor: 'ATX', specs: 'DDR5 • PCIe 4.0 • WiFi 6', brand: 'ASUS', memoryType: 'DDR5', maxMemory: 128 },
  
  // Intel B760 (LGA1700, DDR5/DDR4)
  { name: 'MSI MAG B760 TOMAHAWK WIFI', price: 19999, socket: 'LGA1700', chipset: 'B760', formFactor: 'ATX', specs: 'DDR5 • PCIe 4.0 • WiFi 6', brand: 'MSI', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'GIGABYTE B760 AORUS ELITE AX', price: 18999, socket: 'LGA1700', chipset: 'B760', formFactor: 'ATX', specs: 'DDR5 • PCIe 4.0 • WiFi 6', brand: 'GIGABYTE', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'ASUS TUF GAMING B760-PLUS WIFI', price: 17999, socket: 'LGA1700', chipset: 'B760', formFactor: 'ATX', specs: 'DDR5 • PCIe 4.0 • WiFi 6', brand: 'ASUS', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'ASRock B760 Pro RS', price: 14999, socket: 'LGA1700', chipset: 'B760', formFactor: 'ATX', specs: 'DDR5 • PCIe 4.0', brand: 'ASRock', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'MSI PRO B760-P WIFI DDR4', price: 13999, socket: 'LGA1700', chipset: 'B760', formFactor: 'ATX', specs: 'DDR4 • PCIe 4.0 • WiFi 6', brand: 'MSI', memoryType: 'DDR4', maxMemory: 128 },
  
  // AMD X670E (AM5, DDR5)
  { name: 'ASUS ROG CROSSHAIR X670E HERO', price: 54999, socket: 'AM5', chipset: 'X670E', formFactor: 'ATX', specs: 'DDR5 • PCIe 5.0 • WiFi 6E', brand: 'ASUS', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'MSI MPG X670E CARBON WIFI', price: 44999, socket: 'AM5', chipset: 'X670E', formFactor: 'ATX', specs: 'DDR5 • PCIe 5.0 • WiFi 6E', brand: 'MSI', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'GIGABYTE X670E AORUS MASTER', price: 47999, socket: 'AM5', chipset: 'X670E', formFactor: 'ATX', specs: 'DDR5 • PCIe 5.0 • WiFi 6E • 18+2 VRM', brand: 'GIGABYTE', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'ASRock X670E Taichi', price: 41999, socket: 'AM5', chipset: 'X670E', formFactor: 'ATX', specs: 'DDR5 • PCIe 5.0 • WiFi 6E', brand: 'ASRock', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'ASUS TUF GAMING X670E-PLUS WIFI', price: 29999, socket: 'AM5', chipset: 'X670E', formFactor: 'ATX', specs: 'DDR5 • PCIe 5.0 • WiFi 6E', brand: 'ASUS', memoryType: 'DDR5', maxMemory: 128 },
  
  // AMD B650 (AM5, DDR5)
  { name: 'MSI MAG B650 TOMAHAWK WIFI', price: 22999, socket: 'AM5', chipset: 'B650', formFactor: 'ATX', specs: 'DDR5 • PCIe 4.0 • WiFi 6', brand: 'MSI', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'GIGABYTE B650 AORUS ELITE AX', price: 21999, socket: 'AM5', chipset: 'B650', formFactor: 'ATX', specs: 'DDR5 • PCIe 4.0 • WiFi 6', brand: 'GIGABYTE', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'ASUS TUF GAMING B650-PLUS WIFI', price: 19999, socket: 'AM5', chipset: 'B650', formFactor: 'ATX', specs: 'DDR5 • PCIe 4.0 • WiFi 6', brand: 'ASUS', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'ASRock B650 Steel Legend', price: 18999, socket: 'AM5', chipset: 'B650', formFactor: 'ATX', specs: 'DDR5 • PCIe 4.0', brand: 'ASRock', memoryType: 'DDR5', maxMemory: 128 },
  { name: 'MSI PRO B650-P WIFI', price: 16999, socket: 'AM5', chipset: 'B650', formFactor: 'ATX', specs: 'DDR5 • PCIe 4.0 • WiFi 6', brand: 'MSI', memoryType: 'DDR5', maxMemory: 128 },
  
  // AMD X570 (AM4, DDR4)
  { name: 'ASUS ROG CROSSHAIR VIII HERO', price: 36999, socket: 'AM4', chipset: 'X570', formFactor: 'ATX', specs: 'DDR4 • PCIe 4.0 • WiFi 6', brand: 'ASUS', memoryType: 'DDR4', maxMemory: 128 },
  { name: 'MSI MPG X570 GAMING EDGE WIFI', price: 23999, socket: 'AM4', chipset: 'X570', formFactor: 'ATX', specs: 'DDR4 • PCIe 4.0 • WiFi 6', brand: 'MSI', memoryType: 'DDR4', maxMemory: 128 },
  { name: 'GIGABYTE X570 AORUS ELITE WIFI', price: 21999, socket: 'AM4', chipset: 'X570', formFactor: 'ATX', specs: 'DDR4 • PCIe 4.0 • WiFi 6', brand: 'GIGABYTE', memoryType: 'DDR4', maxMemory: 128 },
  
  // AMD B550 (AM4, DDR4)
  { name: 'MSI MAG B550 TOMAHAWK', price: 17999, socket: 'AM4', chipset: 'B550', formFactor: 'ATX', specs: 'DDR4 • PCIe 4.0', brand: 'MSI', memoryType: 'DDR4', maxMemory: 128 },
  { name: 'ASUS TUF GAMING B550-PLUS', price: 15999, socket: 'AM4', chipset: 'B550', formFactor: 'ATX', specs: 'DDR4 • PCIe 4.0', brand: 'ASUS', memoryType: 'DDR4', maxMemory: 128 },
  { name: 'GIGABYTE B550 AORUS ELITE V2', price: 14999, socket: 'AM4', chipset: 'B550', formFactor: 'ATX', specs: 'DDR4 • PCIe 4.0', brand: 'GIGABYTE', memoryType: 'DDR4', maxMemory: 128 },
  { name: 'ASRock B550 Phantom Gaming 4', price: 11999, socket: 'AM4', chipset: 'B550', formFactor: 'ATX', specs: 'DDR4 • PCIe 4.0', brand: 'ASRock', memoryType: 'DDR4', maxMemory: 128 },
];

export const graphicsCards: GraphicsCard[] = [
  // NVIDIA RTX 40 Series
  { name: 'NVIDIA GeForce RTX 4090 24GB', price: 155900, wattage: 450, specs: '24GB GDDR6X • 16384 CUDA Cores • 2520 MHz', brand: 'NVIDIA', vram: 24, series: 'RTX 4090' },
  { name: 'ASUS ROG STRIX RTX 4090 OC', price: 169900, wattage: 450, specs: '24GB GDDR6X • Factory OC • RGB', brand: 'NVIDIA', vram: 24, series: 'RTX 4090' },
  { name: 'MSI RTX 4090 SUPRIM X', price: 174900, wattage: 450, specs: '24GB GDDR6X • Tri Frozr 3 • RGB', brand: 'NVIDIA', vram: 24, series: 'RTX 4090' },
  { name: 'GIGABYTE RTX 4090 GAMING OC', price: 159900, wattage: 450, specs: '24GB GDDR6X • WINDFORCE Cooling', brand: 'NVIDIA', vram: 24, series: 'RTX 4090' },
  
  { name: 'NVIDIA GeForce RTX 4080 SUPER 16GB', price: 114900, wattage: 320, specs: '16GB GDDR6X • 10240 CUDA Cores', brand: 'NVIDIA', vram: 16, series: 'RTX 4080' },
  { name: 'NVIDIA GeForce RTX 4080 16GB', price: 109900, wattage: 320, specs: '16GB GDDR6X • 9728 CUDA Cores', brand: 'NVIDIA', vram: 16, series: 'RTX 4080' },
  { name: 'ASUS TUF RTX 4080 SUPER OC', price: 119900, wattage: 320, specs: '16GB GDDR6X • Military-grade Components', brand: 'NVIDIA', vram: 16, series: 'RTX 4080' },
  { name: 'MSI RTX 4080 GAMING X TRIO', price: 112900, wattage: 320, specs: '16GB GDDR6X • Tri Frozr 3', brand: 'NVIDIA', vram: 16, series: 'RTX 4080' },
  
  { name: 'NVIDIA GeForce RTX 4070 Ti SUPER 16GB', price: 84900, wattage: 285, specs: '16GB GDDR6X • 8448 CUDA Cores', brand: 'NVIDIA', vram: 16, series: 'RTX 4070 Ti' },
  { name: 'NVIDIA GeForce RTX 4070 Ti 12GB', price: 74999, wattage: 285, specs: '12GB GDDR6X • 7680 CUDA Cores', brand: 'NVIDIA', vram: 12, series: 'RTX 4070 Ti' },
  { name: 'GIGABYTE RTX 4070 Ti SUPER AERO', price: 87900, wattage: 285, specs: '16GB GDDR6X • WINDFORCE', brand: 'NVIDIA', vram: 16, series: 'RTX 4070 Ti' },
  { name: 'ASUS DUAL RTX 4070 Ti', price: 76900, wattage: 285, specs: '12GB GDDR6X • Axial-tech Fans', brand: 'NVIDIA', vram: 12, series: 'RTX 4070 Ti' },
  
  { name: 'NVIDIA GeForce RTX 4070 SUPER 12GB', price: 64999, wattage: 220, specs: '12GB GDDR6X • 7168 CUDA Cores', brand: 'NVIDIA', vram: 12, series: 'RTX 4070' },
  { name: 'NVIDIA GeForce RTX 4070 12GB', price: 57999, wattage: 200, specs: '12GB GDDR6X • 5888 CUDA Cores', brand: 'NVIDIA', vram: 12, series: 'RTX 4070' },
  { name: 'MSI RTX 4070 SUPER VENTUS 3X', price: 66900, wattage: 220, specs: '12GB GDDR6X • Triple Fan', brand: 'NVIDIA', vram: 12, series: 'RTX 4070' },
  { name: 'ZOTAC RTX 4070 Twin Edge OC', price: 59900, wattage: 200, specs: '12GB GDDR6X • Compact Design', brand: 'NVIDIA', vram: 12, series: 'RTX 4070' },
  
  { name: 'NVIDIA GeForce RTX 4060 Ti 16GB', price: 49999, wattage: 165, specs: '16GB GDDR6 • 4352 CUDA Cores', brand: 'NVIDIA', vram: 16, series: 'RTX 4060 Ti' },
  { name: 'NVIDIA GeForce RTX 4060 Ti 8GB', price: 42999, wattage: 160, specs: '8GB GDDR6 • 4352 CUDA Cores', brand: 'NVIDIA', vram: 8, series: 'RTX 4060 Ti' },
  { name: 'GIGABYTE RTX 4060 Ti WINDFORCE', price: 44900, wattage: 160, specs: '8GB GDDR6 • Dual Fan', brand: 'NVIDIA', vram: 8, series: 'RTX 4060 Ti' },
  
  { name: 'NVIDIA GeForce RTX 4060 8GB', price: 32999, wattage: 115, specs: '8GB GDDR6 • 3072 CUDA Cores', brand: 'NVIDIA', vram: 8, series: 'RTX 4060' },
  { name: 'ASUS DUAL RTX 4060 OC', price: 34900, wattage: 115, specs: '8GB GDDR6 • Compact', brand: 'NVIDIA', vram: 8, series: 'RTX 4060' },
  { name: 'MSI RTX 4060 VENTUS 2X', price: 33900, wattage: 115, specs: '8GB GDDR6 • Dual Fan', brand: 'NVIDIA', vram: 8, series: 'RTX 4060' },
  
  // NVIDIA RTX 30 Series
  { name: 'NVIDIA GeForce RTX 3090 Ti 24GB', price: 119900, wattage: 450, specs: '24GB GDDR6X • 10752 CUDA Cores', brand: 'NVIDIA', vram: 24, series: 'RTX 3090' },
  { name: 'NVIDIA GeForce RTX 3090 24GB', price: 109900, wattage: 350, specs: '24GB GDDR6X • 10496 CUDA Cores', brand: 'NVIDIA', vram: 24, series: 'RTX 3090' },
  { name: 'NVIDIA GeForce RTX 3080 Ti 12GB', price: 89900, wattage: 350, specs: '12GB GDDR6X • 10240 CUDA Cores', brand: 'NVIDIA', vram: 12, series: 'RTX 3080' },
  { name: 'NVIDIA GeForce RTX 3080 10GB', price: 74999, wattage: 320, specs: '10GB GDDR6X • 8704 CUDA Cores', brand: 'NVIDIA', vram: 10, series: 'RTX 3080' },
  { name: 'NVIDIA GeForce RTX 3070 Ti 8GB', price: 54999, wattage: 290, specs: '8GB GDDR6X • 6144 CUDA Cores', brand: 'NVIDIA', vram: 8, series: 'RTX 3070' },
  { name: 'NVIDIA GeForce RTX 3070 8GB', price: 47999, wattage: 220, specs: '8GB GDDR6 • 5888 CUDA Cores', brand: 'NVIDIA', vram: 8, series: 'RTX 3070' },
  { name: 'NVIDIA GeForce RTX 3060 Ti 8GB', price: 38999, wattage: 200, specs: '8GB GDDR6 • 4864 CUDA Cores', brand: 'NVIDIA', vram: 8, series: 'RTX 3060' },
  { name: 'NVIDIA GeForce RTX 3060 12GB', price: 32999, wattage: 170, specs: '12GB GDDR6 • 3584 CUDA Cores', brand: 'NVIDIA', vram: 12, series: 'RTX 3060' },
  
  // AMD RX 7000 Series
  { name: 'AMD Radeon RX 7900 XTX 24GB', price: 89999, wattage: 355, specs: '24GB GDDR6 • RDNA 3 • 96 CUs', brand: 'AMD', vram: 24, series: 'RX 7900 XTX' },
  { name: 'SAPPHIRE RX 7900 XTX NITRO+ OC', price: 94999, wattage: 355, specs: '24GB GDDR6 • RGB • Premium Cooling', brand: 'AMD', vram: 24, series: 'RX 7900 XTX' },
  { name: 'XFX RX 7900 XTX MERC 310', price: 92999, wattage: 355, specs: '24GB GDDR6 • Triple Fan', brand: 'AMD', vram: 24, series: 'RX 7900 XTX' },
  
  { name: 'AMD Radeon RX 7900 XT 20GB', price: 79999, wattage: 315, specs: '20GB GDDR6 • RDNA 3 • 84 CUs', brand: 'AMD', vram: 20, series: 'RX 7900 XT' },
  { name: 'SAPPHIRE RX 7900 XT PULSE', price: 82999, wattage: 315, specs: '20GB GDDR6 • Dual BIOS', brand: 'AMD', vram: 20, series: 'RX 7900 XT' },
  
  { name: 'AMD Radeon RX 7800 XT 16GB', price: 54999, wattage: 263, specs: '16GB GDDR6 • RDNA 3 • 60 CUs', brand: 'AMD', vram: 16, series: 'RX 7800 XT' },
  { name: 'GIGABYTE RX 7800 XT GAMING OC', price: 57999, wattage: 263, specs: '16GB GDDR6 • WINDFORCE', brand: 'AMD', vram: 16, series: 'RX 7800 XT' },
  { name: 'XFX RX 7800 XT QICK 319', price: 56999, wattage: 263, specs: '16GB GDDR6 • Triple Fan', brand: 'AMD', vram: 16, series: 'RX 7800 XT' },
  
  { name: 'AMD Radeon RX 7700 XT 12GB', price: 44999, wattage: 245, specs: '12GB GDDR6 • RDNA 3 • 54 CUs', brand: 'AMD', vram: 12, series: 'RX 7700 XT' },
  { name: 'SAPPHIRE RX 7700 XT PULSE', price: 46999, wattage: 245, specs: '12GB GDDR6 • Dual Fan', brand: 'AMD', vram: 12, series: 'RX 7700 XT' },
  
  { name: 'AMD Radeon RX 7600 XT 16GB', price: 34999, wattage: 190, specs: '16GB GDDR6 • RDNA 3 • 32 CUs', brand: 'AMD', vram: 16, series: 'RX 7600' },
  { name: 'AMD Radeon RX 7600 8GB', price: 27999, wattage: 165, specs: '8GB GDDR6 • RDNA 3 • 32 CUs', brand: 'AMD', vram: 8, series: 'RX 7600' },
  { name: 'ASRock RX 7600 Challenger', price: 28999, wattage: 165, specs: '8GB GDDR6 • Dual Fan', brand: 'AMD', vram: 8, series: 'RX 7600' },
  
  // AMD RX 6000 Series
  { name: 'AMD Radeon RX 6950 XT 16GB', price: 79999, wattage: 335, specs: '16GB GDDR6 • RDNA 2 • 80 CUs', brand: 'AMD', vram: 16, series: 'RX 6950 XT' },
  { name: 'AMD Radeon RX 6900 XT 16GB', price: 69999, wattage: 300, specs: '16GB GDDR6 • RDNA 2 • 80 CUs', brand: 'AMD', vram: 16, series: 'RX 6900 XT' },
  { name: 'AMD Radeon RX 6800 XT 16GB', price: 59999, wattage: 300, specs: '16GB GDDR6 • RDNA 2 • 72 CUs', brand: 'AMD', vram: 16, series: 'RX 6800 XT' },
  { name: 'AMD Radeon RX 6800 16GB', price: 52999, wattage: 250, specs: '16GB GDDR6 • RDNA 2 • 60 CUs', brand: 'AMD', vram: 16, series: 'RX 6800' },
  { name: 'AMD Radeon RX 6750 XT 12GB', price: 42999, wattage: 250, specs: '12GB GDDR6 • RDNA 2 • 40 CUs', brand: 'AMD', vram: 12, series: 'RX 6750 XT' },
  { name: 'AMD Radeon RX 6700 XT 12GB', price: 37999, wattage: 230, specs: '12GB GDDR6 • RDNA 2 • 40 CUs', brand: 'AMD', vram: 12, series: 'RX 6700 XT' },
  { name: 'AMD Radeon RX 6650 XT 8GB', price: 29999, wattage: 180, specs: '8GB GDDR6 • RDNA 2 • 32 CUs', brand: 'AMD', vram: 8, series: 'RX 6650 XT' },
  { name: 'AMD Radeon RX 6600 XT 8GB', price: 26999, wattage: 160, specs: '8GB GDDR6 • RDNA 2 • 32 CUs', brand: 'AMD', vram: 8, series: 'RX 6600 XT' },
  { name: 'AMD Radeon RX 6600 8GB', price: 22999, wattage: 132, specs: '8GB GDDR6 • RDNA 2 • 28 CUs', brand: 'AMD', vram: 8, series: 'RX 6600' },
];

export const memory: Memory[] = [
  // DDR5 High-End
  { name: 'G.Skill Trident Z5 RGB 64GB (2x32GB) 6400MHz CL32', price: 29999, type: 'DDR5', specs: '64GB • 6400MHz • CL32 • RGB', capacity: 64, speed: 6400, brand: 'G.Skill' },
  { name: 'Corsair Dominator Platinum RGB 64GB (2x32GB) 6000MHz', price: 31999, type: 'DDR5', specs: '64GB • 6000MHz • CL30 • Premium RGB', capacity: 64, speed: 6000, brand: 'Corsair' },
  { name: 'G.Skill Trident Z5 RGB 32GB (2x16GB) 6400MHz CL32', price: 15999, type: 'DDR5', specs: '32GB • 6400MHz • CL32 • RGB', capacity: 32, speed: 6400, brand: 'G.Skill' },
  { name: 'Corsair Vengeance RGB 32GB (2x16GB) 6000MHz', price: 12999, type: 'DDR5', specs: '32GB • 6000MHz • CL36 • RGB', capacity: 32, speed: 6000, brand: 'Corsair' },
  { name: 'Kingston Fury Beast RGB 32GB (2x16GB) 6000MHz', price: 11999, type: 'DDR5', specs: '32GB • 6000MHz • CL40 • RGB', capacity: 32, speed: 6000, brand: 'Kingston' },
  
  // DDR5 Mid-Range
  { name: 'Corsair Vengeance 32GB (2x16GB) 5600MHz', price: 10999, type: 'DDR5', specs: '32GB • 5600MHz • CL40', capacity: 32, speed: 5600, brand: 'Corsair' },
  { name: 'Kingston Fury Beast 32GB (2x16GB) 5600MHz', price: 10499, type: 'DDR5', specs: '32GB • 5600MHz • CL40', capacity: 32, speed: 5600, brand: 'Kingston' },
  { name: 'Crucial 32GB (2x16GB) 5600MHz', price: 9999, type: 'DDR5', specs: '32GB • 5600MHz • CL46', capacity: 32, speed: 5600, brand: 'Crucial' },
  { name: 'TeamGroup T-Force Delta RGB 32GB (2x16GB) 6000MHz', price: 11499, type: 'DDR5', specs: '32GB • 6000MHz • CL38 • RGB', capacity: 32, speed: 6000, brand: 'TeamGroup' },
  
  // DDR5 Budget
  { name: 'Corsair Vengeance 16GB (2x8GB) 5200MHz', price: 5999, type: 'DDR5', specs: '16GB • 5200MHz • CL40', capacity: 16, speed: 5200, brand: 'Corsair' },
  { name: 'Kingston Fury Beast 16GB (2x8GB) 5200MHz', price: 5499, type: 'DDR5', specs: '16GB • 5200MHz • CL40', capacity: 16, speed: 5200, brand: 'Kingston' },
  { name: 'Crucial 16GB (2x8GB) 4800MHz', price: 4999, type: 'DDR5', specs: '16GB • 4800MHz • CL40', capacity: 16, speed: 4800, brand: 'Crucial' },
  
  // DDR4 High-End
  { name: 'G.Skill Trident Z RGB 64GB (2x32GB) 3600MHz', price: 19999, type: 'DDR4', specs: '64GB • 3600MHz • CL16 • RGB', capacity: 64, speed: 3600, brand: 'G.Skill' },
  { name: 'Corsair Vengeance RGB Pro 64GB (2x32GB) 3600MHz', price: 18999, type: 'DDR4', specs: '64GB • 3600MHz • CL18 • RGB', capacity: 64, speed: 3600, brand: 'Corsair' },
  { name: 'G.Skill Trident Z RGB 32GB (2x16GB) 3600MHz CL16', price: 9999, type: 'DDR4', specs: '32GB • 3600MHz • CL16 • RGB', capacity: 32, speed: 3600, brand: 'G.Skill' },
  { name: 'Corsair Vengeance RGB Pro 32GB (2x16GB) 3600MHz', price: 8999, type: 'DDR4', specs: '32GB • 3600MHz • CL18 • RGB', capacity: 32, speed: 3600, brand: 'Corsair' },
  
  // DDR4 Mid-Range
  { name: 'Corsair Vengeance LPX 32GB (2x16GB) 3200MHz', price: 7499, type: 'DDR4', specs: '32GB • 3200MHz • CL16', capacity: 32, speed: 3200, brand: 'Corsair' },
  { name: 'Kingston Fury Beast 32GB (2x16GB) 3200MHz', price: 6999, type: 'DDR4', specs: '32GB • 3200MHz • CL16', capacity: 32, speed: 3200, brand: 'Kingston' },
  { name: 'Crucial Ballistix 32GB (2x16GB) 3200MHz', price: 6499, type: 'DDR4', specs: '32GB • 3200MHz • CL16', capacity: 32, speed: 3200, brand: 'Crucial' },
  
  // DDR4 Budget
  { name: 'Corsair Vengeance LPX 16GB (2x8GB) 3200MHz', price: 3999, type: 'DDR4', specs: '16GB • 3200MHz • CL16', capacity: 16, speed: 3200, brand: 'Corsair' },
  { name: 'Kingston Fury Beast 16GB (2x8GB) 3200MHz', price: 3699, type: 'DDR4', specs: '16GB • 3200MHz • CL16', capacity: 16, speed: 3200, brand: 'Kingston' },
  { name: 'Crucial 16GB (2x8GB) 3200MHz', price: 3299, type: 'DDR4', specs: '16GB • 3200MHz • CL22', capacity: 16, speed: 3200, brand: 'Crucial' },
  { name: 'TeamGroup Elite 16GB (2x8GB) 3200MHz', price: 2999, type: 'DDR4', specs: '16GB • 3200MHz • CL22', capacity: 16, speed: 3200, brand: 'TeamGroup' },
];

export const storage: Storage[] = [
  // NVMe Gen5
  { name: 'Samsung 990 PRO 4TB PCIe 4.0 NVMe', price: 34999, specs: '4TB • 7450 MB/s Read • 6900 MB/s Write', capacity: 4000, type: 'NVMe', brand: 'Samsung' },
  { name: 'Samsung 990 PRO 2TB PCIe 4.0 NVMe', price: 16999, specs: '2TB • 7450 MB/s Read • 6900 MB/s Write', capacity: 2000, type: 'NVMe', brand: 'Samsung' },
  { name: 'Samsung 990 PRO 1TB PCIe 4.0 NVMe', price: 9999, specs: '1TB • 7450 MB/s Read • 6900 MB/s Write', capacity: 1000, type: 'NVMe', brand: 'Samsung' },
  { name: 'Crucial T700 4TB PCIe 5.0 NVMe', price: 49999, specs: '4TB • 12400 MB/s Read • PCIe 5.0', capacity: 4000, type: 'NVMe', brand: 'Crucial' },
  { name: 'Crucial T700 2TB PCIe 5.0 NVMe', price: 26999, specs: '2TB • 12400 MB/s Read • PCIe 5.0', capacity: 2000, type: 'NVMe', brand: 'Crucial' },
  
  // NVMe Gen4 High-End
  { name: 'WD Black SN850X 4TB NVMe', price: 29999, specs: '4TB • 7300 MB/s Read • 6600 MB/s Write', capacity: 4000, type: 'NVMe', brand: 'Western Digital' },
  { name: 'WD Black SN850X 2TB NVMe', price: 14999, specs: '2TB • 7300 MB/s Read • 6300 MB/s Write', capacity: 2000, type: 'NVMe', brand: 'Western Digital' },
  { name: 'WD Black SN850X 1TB NVMe', price: 8999, specs: '1TB • 7300 MB/s Read • 6300 MB/s Write', capacity: 1000, type: 'NVMe', brand: 'Western Digital' },
  { name: 'Samsung 980 PRO 2TB NVMe', price: 15999, specs: '2TB • 7000 MB/s Read • 5100 MB/s Write', capacity: 2000, type: 'NVMe', brand: 'Samsung' },
  { name: 'Samsung 980 PRO 1TB NVMe', price: 9999, specs: '1TB • 7000 MB/s Read • 5000 MB/s Write', capacity: 1000, type: 'NVMe', brand: 'Samsung' },
  { name: 'Seagate FireCuda 530 2TB NVMe', price: 16999, specs: '2TB • 7300 MB/s Read • 6900 MB/s Write', capacity: 2000, type: 'NVMe', brand: 'Seagate' },
  
  // NVMe Gen4 Mid-Range
  { name: 'Crucial P5 Plus 2TB NVMe', price: 12999, specs: '2TB • 6600 MB/s Read • 5000 MB/s Write', capacity: 2000, type: 'NVMe', brand: 'Crucial' },
  { name: 'Crucial P5 Plus 1TB NVMe', price: 7999, specs: '1TB • 6600 MB/s Read • 5000 MB/s Write', capacity: 1000, type: 'NVMe', brand: 'Crucial' },
  { name: 'Kingston KC3000 2TB NVMe', price: 13999, specs: '2TB • 7000 MB/s Read • 7000 MB/s Write', capacity: 2000, type: 'NVMe', brand: 'Kingston' },
  { name: 'Kingston KC3000 1TB NVMe', price: 8499, specs: '1TB • 7000 MB/s Read • 6000 MB/s Write', capacity: 1000, type: 'NVMe', brand: 'Kingston' },
  { name: 'WD Blue SN580 2TB NVMe', price: 11999, specs: '2TB • 4150 MB/s Read • 4150 MB/s Write', capacity: 2000, type: 'NVMe', brand: 'Western Digital' },
  { name: 'WD Blue SN580 1TB NVMe', price: 6999, specs: '1TB • 4150 MB/s Read • 4150 MB/s Write', capacity: 1000, type: 'NVMe', brand: 'Western Digital' },
  
  // NVMe Gen3 Budget
  { name: 'Samsung 970 EVO Plus 2TB NVMe', price: 11999, specs: '2TB • 3500 MB/s Read • 3300 MB/s Write', capacity: 2000, type: 'NVMe', brand: 'Samsung' },
  { name: 'Samsung 970 EVO Plus 1TB NVMe', price: 6999, specs: '1TB • 3500 MB/s Read • 3300 MB/s Write', capacity: 1000, type: 'NVMe', brand: 'Samsung' },
  { name: 'Crucial P3 2TB NVMe', price: 9999, specs: '2TB • 3500 MB/s Read • 3000 MB/s Write', capacity: 2000, type: 'NVMe', brand: 'Crucial' },
  { name: 'Crucial P3 1TB NVMe', price: 5999, specs: '1TB • 3500 MB/s Read • 3000 MB/s Write', capacity: 1000, type: 'NVMe', brand: 'Crucial' },
  { name: 'WD Blue SN570 1TB NVMe', price: 5499, specs: '1TB • 3500 MB/s Read • 3000 MB/s Write', capacity: 1000, type: 'NVMe', brand: 'Western Digital' },
  { name: 'Kingston NV2 1TB NVMe', price: 4999, specs: '1TB • 3500 MB/s Read • 2100 MB/s Write', capacity: 1000, type: 'NVMe', brand: 'Kingston' },
  
  // SATA SSD
  { name: 'Samsung 870 EVO 4TB SATA', price: 24999, specs: '4TB • 560 MB/s Read • 530 MB/s Write', capacity: 4000, type: 'SATA SSD', brand: 'Samsung' },
  { name: 'Samsung 870 EVO 2TB SATA', price: 12999, specs: '2TB • 560 MB/s Read • 530 MB/s Write', capacity: 2000, type: 'SATA SSD', brand: 'Samsung' },
  { name: 'Samsung 870 EVO 1TB SATA', price: 7499, specs: '1TB • 560 MB/s Read • 530 MB/s Write', capacity: 1000, type: 'SATA SSD', brand: 'Samsung' },
  { name: 'Crucial MX500 2TB SATA', price: 11499, specs: '2TB • 560 MB/s Read • 510 MB/s Write', capacity: 2000, type: 'SATA SSD', brand: 'Crucial' },
  { name: 'Crucial MX500 1TB SATA', price: 6499, specs: '1TB • 560 MB/s Read • 510 MB/s Write', capacity: 1000, type: 'SATA SSD', brand: 'Crucial' },
  { name: 'WD Blue 2TB SATA SSD', price: 10999, specs: '2TB • 560 MB/s Read • 530 MB/s Write', capacity: 2000, type: 'SATA SSD', brand: 'Western Digital' },
  { name: 'WD Blue 1TB SATA SSD', price: 5999, specs: '1TB • 560 MB/s Read • 530 MB/s Write', capacity: 1000, type: 'SATA SSD', brand: 'Western Digital' },
];

export const psus: PSU[] = [
  // 1000W+
  { name: 'Corsair HX1500i 1500W 80+ Platinum', price: 29999, wattage: 1500, specs: '1500W • Fully Modular • 80+ Platinum • Digital', efficiency: '80+ Platinum', modular: true, brand: 'Corsair' },
  { name: 'Corsair HX1200 1200W 80+ Platinum', price: 24999, wattage: 1200, specs: '1200W • Fully Modular • 80+ Platinum', efficiency: '80+ Platinum', modular: true, brand: 'Corsair' },
  { name: 'Corsair HX1000i 1000W 80+ Platinum', price: 18999, wattage: 1000, specs: '1000W • Fully Modular • 80+ Platinum • Digital', efficiency: '80+ Platinum', modular: true, brand: 'Corsair' },
  { name: 'Seasonic PRIME TX-1000 1000W 80+ Titanium', price: 24999, wattage: 1000, specs: '1000W • Fully Modular • 80+ Titanium', efficiency: '80+ Titanium', modular: true, brand: 'Seasonic' },
  { name: 'EVGA SuperNOVA 1000 P6 80+ Platinum', price: 17999, wattage: 1000, specs: '1000W • Fully Modular • 80+ Platinum', efficiency: '80+ Platinum', modular: true, brand: 'EVGA' },
  { name: 'be quiet! Dark Power Pro 12 1200W', price: 27999, wattage: 1200, specs: '1200W • Fully Modular • 80+ Titanium • Silent', efficiency: '80+ Titanium', modular: true, brand: 'be quiet!' },
  
  // 850W
  { name: 'Corsair RM850x 850W 80+ Gold', price: 12999, wattage: 850, specs: '850W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'Corsair' },
  { name: 'Seasonic Focus GX-850 850W 80+ Gold', price: 11999, wattage: 850, specs: '850W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'Seasonic' },
  { name: 'EVGA SuperNOVA 850 G6 80+ Gold', price: 12999, wattage: 850, specs: '850W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'EVGA' },
  { name: 'MSI MPG A850GF 850W 80+ Gold', price: 11499, wattage: 850, specs: '850W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'MSI' },
  { name: 'Thermaltake Toughpower GF1 850W', price: 10999, wattage: 850, specs: '850W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'Thermaltake' },
  { name: 'be quiet! Straight Power 11 850W', price: 13999, wattage: 850, specs: '850W • Fully Modular • 80+ Gold • Silent', efficiency: '80+ Gold', modular: true, brand: 'be quiet!' },
  
  // 750W
  { name: 'Corsair RM750x 750W 80+ Gold', price: 10999, wattage: 750, specs: '750W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'Corsair' },
  { name: 'Seasonic Focus GX-750 750W 80+ Gold', price: 10499, wattage: 750, specs: '750W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'Seasonic' },
  { name: 'EVGA SuperNOVA 750 GT 80+ Gold', price: 9999, wattage: 750, specs: '750W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'EVGA' },
  { name: 'Cooler Master V750 Gold V2', price: 9499, wattage: 750, specs: '750W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'Cooler Master' },
  { name: 'MSI MAG A750GL 750W 80+ Gold', price: 8999, wattage: 750, specs: '750W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'MSI' },
  { name: 'Antec HCG750 750W 80+ Gold', price: 8499, wattage: 750, specs: '750W • Semi-Modular • 80+ Gold', efficiency: '80+ Gold', modular: false, brand: 'Antec' },
  
  // 650W
  { name: 'Corsair RM650x 650W 80+ Gold', price: 8999, wattage: 650, specs: '650W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'Corsair' },
  { name: 'Seasonic Focus GM-650 650W 80+ Gold', price: 8499, wattage: 650, specs: '650W • Semi-Modular • 80+ Gold', efficiency: '80+ Gold', modular: false, brand: 'Seasonic' },
  { name: 'EVGA SuperNOVA 650 GA 80+ Gold', price: 7999, wattage: 650, specs: '650W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'EVGA' },
  { name: 'Cooler Master MWE Gold 650W V2', price: 6999, wattage: 650, specs: '650W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'Cooler Master' },
  { name: 'Thermaltake Smart BM2 650W', price: 6499, wattage: 650, specs: '650W • Semi-Modular • 80+ Bronze', efficiency: '80+ Bronze', modular: false, brand: 'Thermaltake' },
  
  // 550W
  { name: 'Corsair RM550x 550W 80+ Gold', price: 7499, wattage: 550, specs: '550W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'Corsair' },
  { name: 'Seasonic Focus GM-550 550W 80+ Gold', price: 6999, wattage: 550, specs: '550W • Semi-Modular • 80+ Gold', efficiency: '80+ Gold', modular: false, brand: 'Seasonic' },
  { name: 'Cooler Master MWE Gold 550W V2', price: 5999, wattage: 550, specs: '550W • Fully Modular • 80+ Gold', efficiency: '80+ Gold', modular: true, brand: 'Cooler Master' },
  { name: 'Antec NeoECO Gold 550W', price: 5499, wattage: 550, specs: '550W • Semi-Modular • 80+ Gold', efficiency: '80+ Gold', modular: false, brand: 'Antec' },
];

export const cases: Case[] = [
  // Premium Cases
  { name: 'Lian Li O11 Dynamic EVO', price: 18999, formFactor: 'ATX', specs: 'Mid Tower • Tempered Glass • RGB Support', brand: 'Lian Li', color: 'Black' },
  { name: 'Lian Li O11 Dynamic EVO White', price: 19999, formFactor: 'ATX', specs: 'Mid Tower • Tempered Glass • RGB Support', brand: 'Lian Li', color: 'White' },
  { name: 'Corsair 5000D Airflow', price: 16999, formFactor: 'ATX', specs: 'Mid Tower • Tempered Glass • High Airflow', brand: 'Corsair', color: 'Black' },
  { name: 'NZXT H7 Flow', price: 14999, formFactor: 'ATX', specs: 'Mid Tower • Mesh Front • RGB', brand: 'NZXT', color: 'Black' },
  { name: 'NZXT H7 Flow White', price: 15999, formFactor: 'ATX', specs: 'Mid Tower • Mesh Front • RGB', brand: 'NZXT', color: 'White' },
  { name: 'Fractal Design Torrent', price: 19999, formFactor: 'ATX', specs: 'Mid Tower • Massive Airflow • Premium', brand: 'Fractal Design', color: 'Black' },
  { name: 'be quiet! Dark Base Pro 900', price: 24999, formFactor: 'ATX', specs: 'Full Tower • Silent • Modular', brand: 'be quiet!', color: 'Black' },
  { name: 'Phanteks Enthoo Elite', price: 29999, formFactor: 'ATX', specs: 'Full Tower • Tempered Glass • Premium', brand: 'Phanteks', color: 'Black' },
  
  // Mid-Range Cases
  { name: 'Corsair 4000D Airflow', price: 9999, formFactor: 'ATX', specs: 'Mid Tower • High Airflow • Clean Design', brand: 'Corsair', color: 'Black' },
  { name: 'Corsair 4000D Airflow White', price: 10499, formFactor: 'ATX', specs: 'Mid Tower • High Airflow • Clean Design', brand: 'Corsair', color: 'White' },
  { name: 'NZXT H510 Flow', price: 8999, formFactor: 'ATX', specs: 'Mid Tower • Mesh Panel • Cable Management', brand: 'NZXT', color: 'Black' },
  { name: 'Fractal Design Meshify 2', price: 12999, formFactor: 'ATX', specs: 'Mid Tower • Angular Mesh • Airflow', brand: 'Fractal Design', color: 'Black' },
  { name: 'Lian Li Lancool 216', price: 11999, formFactor: 'ATX', specs: 'Mid Tower • Mesh Front • Value', brand: 'Lian Li', color: 'Black' },
  { name: 'Phanteks Eclipse P400A', price: 8999, formFactor: 'ATX', specs: 'Mid Tower • Mesh Front • RGB', brand: 'Phanteks', color: 'Black' },
  { name: 'Cooler Master H500', price: 10999, formFactor: 'ATX', specs: 'Mid Tower • Mesh Front • 2x200mm Fans', brand: 'Cooler Master', color: 'Black' },
  { name: 'be quiet! Pure Base 500DX', price: 9999, formFactor: 'ATX', specs: 'Mid Tower • Silent • Airflow', brand: 'be quiet!', color: 'Black' },
  
  // Budget Cases
  { name: 'Corsair 4000D', price: 7999, formFactor: 'ATX', specs: 'Mid Tower • Tempered Glass', brand: 'Corsair', color: 'Black' },
  { name: 'NZXT H510', price: 6999, formFactor: 'ATX', specs: 'Mid Tower • Cable Management • Clean', brand: 'NZXT', color: 'Black' },
  { name: 'Fractal Design Focus G', price: 4999, formFactor: 'ATX', specs: 'Mid Tower • Budget Friendly', brand: 'Fractal Design', color: 'Black' },
  { name: 'Cooler Master MasterBox TD500', price: 7999, formFactor: 'ATX', specs: 'Mid Tower • Mesh • RGB', brand: 'Cooler Master', color: 'Black' },
  { name: 'Phanteks Eclipse P300A', price: 5999, formFactor: 'ATX', specs: 'Mid Tower • Mesh Front • Compact', brand: 'Phanteks', color: 'Black' },
  { name: 'Deepcool MATREXX 55 Mesh', price: 4499, formFactor: 'ATX', specs: 'Mid Tower • Mesh • ARGB', brand: 'Deepcool', color: 'Black' },
  { name: 'Antec NX410', price: 3999, formFactor: 'ATX', specs: 'Mid Tower • Mesh Front • Budget', brand: 'Antec', color: 'Black' },
];

export const cooling: Cooling[] = [
  // Premium AIO 360mm+
  { name: 'Corsair iCUE H170i ELITE LCD 420mm', price: 34999, specs: '420mm • LCD Display • RGB • 3x140mm Fans', type: 'AIO', brand: 'Corsair', size: '420mm' },
  { name: 'NZXT Kraken Z73 RGB 360mm', price: 24999, specs: '360mm • 2.36" LCD Display • RGB Fans', type: 'AIO', brand: 'NZXT', size: '360mm' },
  { name: 'Corsair iCUE H150i Elite LCD 360mm', price: 22999, specs: '360mm • LCD Display • RGB • 3x120mm Fans', type: 'AIO', brand: 'Corsair', size: '360mm' },
  { name: 'ASUS ROG RYUJIN II 360 ARGB', price: 26999, specs: '360mm • 3.5" LCD • Noctua Fans', type: 'AIO', brand: 'ASUS', size: '360mm' },
  { name: 'Lian Li Galahad II 360 LCD', price: 19999, specs: '360mm • LCD Display • ARGB', type: 'AIO', brand: 'Lian Li', size: '360mm' },
  
  // AIO 280mm-360mm
  { name: 'Corsair iCUE H150i Elite 360mm', price: 18999, specs: '360mm • RGB Fans • iCUE Control', type: 'AIO', brand: 'Corsair', size: '360mm' },
  { name: 'NZXT Kraken X73 360mm', price: 17999, specs: '360mm • Infinity Mirror • RGB', type: 'AIO', brand: 'NZXT', size: '360mm' },
  { name: 'Arctic Liquid Freezer II 360mm', price: 13999, specs: '360mm • VRM Fan • High Performance', type: 'AIO', brand: 'Arctic', size: '360mm' },
  { name: 'Cooler Master MasterLiquid 360 Atmos', price: 16999, specs: '360mm • ARGB • 2.1" LCD', type: 'AIO', brand: 'Cooler Master', size: '360mm' },
  { name: 'Deepcool LT720 360mm', price: 12999, specs: '360mm • ARGB • Budget Friendly', type: 'AIO', brand: 'Deepcool', size: '360mm' },
  { name: 'Arctic Liquid Freezer II 280mm', price: 11999, specs: '280mm • VRM Fan • Quiet', type: 'AIO', brand: 'Arctic', size: '280mm' },
  { name: 'NZXT Kraken X63 280mm', price: 14999, specs: '280mm • Infinity Mirror • RGB', type: 'AIO', brand: 'NZXT', size: '280mm' },
  
  // AIO 240mm
  { name: 'Corsair iCUE H100i Elite 240mm', price: 14999, specs: '240mm • RGB Fans • iCUE', type: 'AIO', brand: 'Corsair', size: '240mm' },
  { name: 'NZXT Kraken X53 240mm', price: 12999, specs: '240mm • RGB • Infinity Mirror', type: 'AIO', brand: 'NZXT', size: '240mm' },
  { name: 'Arctic Liquid Freezer II 240mm', price: 8999, specs: '240mm • High Performance • Value', type: 'AIO', brand: 'Arctic', size: '240mm' },
  { name: 'Cooler Master MasterLiquid 240', price: 7999, specs: '240mm • Dual Chamber • RGB', type: 'AIO', brand: 'Cooler Master', size: '240mm' },
  { name: 'Deepcool LE520 240mm', price: 6999, specs: '240mm • ARGB • Budget', type: 'AIO', brand: 'Deepcool', size: '240mm' },
  
  // Premium Air Coolers
  { name: 'Noctua NH-D15 chromax.black', price: 11999, specs: 'Dual Tower • Premium • Ultra Quiet • 2 Fans', type: 'Air', brand: 'Noctua' },
  { name: 'Noctua NH-D15S', price: 9999, specs: 'Dual Tower • Single Fan • RAM Clearance', type: 'Air', brand: 'Noctua' },
  { name: 'be quiet! Dark Rock Pro 4', price: 9999, specs: 'Dual Tower • Silent • Premium Build', type: 'Air', brand: 'be quiet!' },
  { name: 'be quiet! Dark Rock Elite', price: 12999, specs: 'Dual Tower • 7 Heatpipes • Silent', type: 'Air', brand: 'be quiet!' },
  { name: 'Thermalright Peerless Assassin 120 SE', price: 3999, specs: 'Dual Tower • Excellent Value • 6 Heatpipes', type: 'Air', brand: 'Thermalright' },
  { name: 'DeepCool Assassin IV', price: 10999, specs: 'Dual Tower • 7 Heatpipes • High Performance', type: 'Air', brand: 'Deepcool' },
  { name: 'Scythe Fuma 3', price: 6999, specs: 'Dual Tower • Silent • Value', type: 'Air', brand: 'Scythe' },
  
  // Budget Air Coolers
  { name: 'Cooler Master Hyper 212 RGB', price: 3499, specs: 'Tower • RGB • Popular Choice', type: 'Air', brand: 'Cooler Master' },
  { name: 'Arctic Freezer 34 eSports DUO', price: 4499, specs: 'Tower • Dual Fan • Good Value', type: 'Air', brand: 'Arctic' },
  { name: 'Deepcool AK400', price: 2999, specs: 'Tower • Budget • Reliable', type: 'Air', brand: 'Deepcool' },
  { name: 'ID-COOLING SE-224-XT', price: 2499, specs: 'Tower • Entry Level • Quiet', type: 'Air', brand: 'ID-COOLING' },
];
