# SSD Price Tracker

A real-time SSD price comparison tool that helps users find the best deals across major retailers.

## Features

- Real-time price tracking
- Performance scoring
- Price history charts
- Detailed product specifications
- Multi-language support (English, Dutch)
- Responsive design
- Dark/light theme

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your credentials:
   - Supabase configuration
   - Google Sheets API credentials

4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_GOOGLE_SHEET_ID`: Google Sheet ID for price data
- `VITE_GOOGLE_API_KEY`: Google API key for Sheets access

## Google Sheets Integration

1. Create a Google Sheet with columns:
   - Model
   - Brand
   - Capacity
   - Price
   - Type
   - Interface
   - Socket
   - PricePerTB
   - Vendor
   - URL
   - Score
   - IsSponsored

2. Share the sheet publicly
3. Enable Google Sheets API in Google Cloud Console
4. Create API credentials
5. Update `.env` with your Sheet ID and API key

## License

MIT