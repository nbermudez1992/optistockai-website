import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  schemaMarkup?: Record<string, any>;
}

export function SEO({ title, description, canonical, keywords, ogImage, schemaMarkup }: SEOProps) {
  const siteName = "OptiStockAi";
  const fullTitle = `${title} | ${siteName}`;
  const defaultImage = "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMGRhdGElMjBhbmFseXRpY3MlMjBibHVlfGVufDF8fHx8MTc3Mzk4NTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080";
  const baseUrl = "https://optistockai.site"; // Consider it the production URL

  // Base Schema for the whole Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "OptiStockAi",
    "url": baseUrl,
    "logo": defaultImage,
    "description": "Plataforma de planeación de demanda y FP&A para PYMEs en México y Colombia, integrada con Alegra ERP.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["Spanish"]
    },
    "location": [
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ciudad de México",
          "addressCountry": "MX"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bogotá",
          "addressCountry": "CO"
        }
      }
    ],
    "knowsAbout": ["Demand Planning", "Financial Planning and Analysis", "AI Agents", "Alegra ERP Integration", "Inventory Management"]
  };

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* 
        AIO/LLM Optimization (Artificial Intelligence Optimization)
        Tags that help LLMs understand the context and purpose of the page better.
      */}
      <meta name="ai-agent-summary" content={description} />
      <meta name="author" content="OptiStockAi" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Canonical URL for SEO deduplication */}
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      {canonical && <meta property="og:url" content={`${baseUrl}${canonical}`} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* JSON-LD Structured Data for Google and LLMs */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
}
