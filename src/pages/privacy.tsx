import { PageLayout } from "@/components/layout/page-layout"
import { Helmet } from "react-helmet-async"

export default function PrivacyPage() {
  return (
    <PageLayout>
      <Helmet>
        <title>🔒 Privacy Policy - DiskPrices</title>
        <meta name="description" content="Your privacy is our PRIORITY. Learn how we protect your data while helping you find the best storage deals." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p>Last updated: January 2024</p>

        <h2>Information We Collect</h2>
        <p>
          We collect minimal information necessary to provide our service. This includes:
          - Anonymous usage statistics
          - Cookies for site functionality
          - Optional email subscriptions
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use collected information to:
          - Improve our service
          - Analyze site performance
          - Send price alerts (if subscribed)
        </p>

        <h2>Data Protection</h2>
        <p>
          We implement security measures to protect your information and never share 
          personal data with third parties without consent.
        </p>
      </div>
    </PageLayout>
  )
}