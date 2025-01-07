import { DiskData } from "@/types"

export const sampleData: DiskData[] = [
  {
    model: "870 EVO",
    brand: "Samsung",
    capacity: 1,
    price: 79.99,
    type: "SSD",
    interface: "SATA",
    socket: "2.5\"",
    pricePerTB: 79.99,
    vendor: "Amazon",
    url: "https://example.com/samsung-870-evo",
    score: 92,
    powerSpecs: {
      idle: 0.05,
      active: 2.1,
      sleep: 0.004
    },
    noise: {
      idle: 20,
      seek: 27
    },
    isSponsored: true
  },
  {
    model: "Black SN850X",
    brand: "Western Digital",
    capacity: 2,
    price: 169.99,
    type: "SSD",
    interface: "NVMe",
    socket: "M.2",
    pricePerTB: 84.99,
    vendor: "Newegg",
    url: "https://example.com/wd-black-sn850x",
    score: 88
  },
  {
    model: "IronWolf Pro",
    brand: "Seagate",
    capacity: 4,
    price: 129.99,
    type: "HDD",
    interface: "SATA",
    socket: "3.5\"",
    pricePerTB: 32.50,
    vendor: "Best Buy",
    url: "https://example.com/seagate-ironwolf",
    score: 85
  },
  {
    model: "980 PRO",
    brand: "Samsung",
    capacity: 2,
    price: 159.99,
    type: "SSD",
    interface: "NVMe",
    socket: "M.2",
    pricePerTB: 79.99,
    vendor: "Amazon",
    url: "https://example.com/samsung-980-pro",
    score: 95,
    priceHistory: [
      { date: "Mar 1", price: 179.99 },
      { date: "Mar 5", price: 179.99 },
      { date: "Mar 10", price: 179.99 },
      { date: "Mar 15", price: 179.99 },
      { date: "Mar 16", price: 159.99 }
    ]
  },
  {
    model: "Blue SN570",
    brand: "Western Digital",
    capacity: 1,
    price: 59.99,
    type: "SSD",
    interface: "NVMe",
    socket: "M.2",
    pricePerTB: 59.99,
    vendor: "Newegg",
    url: "https://example.com/wd-blue-sn570",
    score: 82,
    isSponsored: true
  },
  {
    model: "MD12TBGSA25672",
    brand: "MDD",
    capacity: 12,
    price: 110,
    type: "HDD",
    interface: "SATA",
    socket: "3.5\"",
    pricePerTB: 9.17,
    vendor: "Amazon",
    url: "https://amazon.com",
    score: 78
  },
  {
    model: "HD-006",
    brand: "UnionSine",
    capacity: 0.25,
    price: 26,
    type: "HDD",
    interface: "USB",
    socket: "2.5\"",
    pricePerTB: 104,
    vendor: "Amazon",
    url: "https://amazon.com",
    score: 75
  },
  {
    model: "WDS240G3G0A",
    brand: "Western Digital",
    capacity: 0.24,
    price: 25,
    type: "SSD",
    interface: "SATA",
    socket: "2.5\"",
    pricePerTB: 104.17,
    vendor: "Amazon",
    url: "https://amazon.com",
    score: 80
  },
  {
    model: "Portable SSD",
    brand: "Vansuny",
    capacity: 0.25,
    price: 26,
    type: "SSD",
    interface: "USB",
    socket: "External",
    pricePerTB: 104,
    vendor: "Amazon",
    url: "https://amazon.com",
    score: 77
  },
  {
    model: "860 EVO",
    brand: "Samsung",
    capacity: 1,
    price: 105,
    type: "SSD",
    interface: "SATA",
    socket: "2.5\"",
    pricePerTB: 105,
    vendor: "Amazon",
    url: "https://amazon.com",
    score: 90
  },
  {
    model: "GM7000",
    brand: "Acer Predator",
    capacity: 0.512,
    price: 55,
    type: "SSD",
    interface: "NVMe",
    socket: "M.2",
    pricePerTB: 107.42,
    vendor: "Amazon",
    url: "https://amazon.com",
    score: 85
  }
]