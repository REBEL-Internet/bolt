import { PageLayout } from "@/components/layout/page-layout"

import { Helmet } from "react-helmet-async"

export default function AboutPage() {
  return (
    <PageLayout>
      <Helmet>
        <title>🏢 About DiskPrices - Our Mission</title>
        <meta name="description" content="Learn about our TRUSTED disk price comparison platform. Helping users find the best storage deals since 2024." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-8">About DiskPrices</h1>
      
      <div className="prose prose-lg max-w-none">
        <p>
          DiskPrices is your trusted source for finding the best deals on storage devices. 
          We continuously monitor prices across major retailers to help you make informed 
          purchasing decisions.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify the process of finding the right storage solution 
          at the best price. We believe in transparency and providing accurate, up-to-date 
          information to our users.
        </p>

        <h2>How We Work</h2>
        <p>
          We aggregate prices and specifications from trusted retailers, validate the data, 
          and present it in an easy-to-compare format. Our scoring system takes into account 
          factors like price-per-terabyte, performance metrics, and user reviews.
        </p>
      </div>
    </PageLayout>
  )
}