import { PageLayout } from "@/components/layout/page-layout"

import { Helmet } from "react-helmet-async"

export default function ContactPage() {
  return (
    <PageLayout>
      <Helmet>
        <title>📧 Contact DiskPrices - Get in Touch</title>
        <meta name="description" content="Have questions? Our EXPERT team is here to help! Contact us for support with finding the best storage deals." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="max-w-2xl">
        <p className="text-lg text-muted-foreground mb-8">
          Have questions or feedback? We'd love to hear from you. Here's how you can reach us:
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p>info@diskprices.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
            <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <p>New York, NY</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}