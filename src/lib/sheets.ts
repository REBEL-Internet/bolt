import { DiskData } from "@/types"

// Read environment variables
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
const RANGE = "A2:L" // Headers in row 1, data starts row 2, includes isSponsored column

export async function fetchDiskData(): Promise<DiskData[]> {
  if (!SHEET_ID || !API_KEY) {
    console.error("Missing Google Sheets configuration")
    return []
  }

  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
    )
    
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.statusText}`)
    }

    const data = await response.json()
    
    if (!data.values) {
      console.warn("No data found in sheet")
      return []
    }

    return data.values.map((row: any[]) => ({
      model: row[0] || "",
      brand: row[1] || "",
      capacity: parseFloat(row[2]) || 0,
      price: parseFloat(row[3]) || 0,
      type: row[4] as "SSD" | "HDD",
      interface: row[5] || "",
      socket: row[6] || "",
      pricePerTB: parseFloat(row[7]) || 0,
      vendor: row[8] || "",
      url: row[9] || "",
      score: parseInt(row[10]) || 0,
      isSponsored: row[11] === "true"
    }))
  } catch (error) {
    console.error("Error fetching sheet data:", error)
    return []
  }
}