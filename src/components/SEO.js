import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  product = null,
  breadcrumbs = null,
  faqs = null
}) => {
  const defaultTitle = 'Ethnobrodery - Традиционни български мотиви и ръчно бродирани облекла';
  const defaultDescription = 'Открийте красотата на българските мотиви чрез нашите ръчно бродирани облекла, тениски, суитшърти и аксесоари. Автентични български шевици в съвременен дизайн.';
  const defaultImage = '/static/media/firstpage1.webp';
  const defaultUrl = 'https://ethnobrodery.com';

  const seoTitle = title ? `${title} | Ethnobrodery` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = image || defaultImage;
  const seoUrl = url || defaultUrl;

  // Generate enhanced product structured data if product is provided
  const productStructuredData = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": "Ethnobrodery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Ethnobrodery",
      "url": "https://ethnobrodery.com"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "EUR",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "url": seoUrl,
      "seller": {
        "@type": "Organization",
        "name": "Ethnobrodery"
      }
    },
    "category": product.category || "Clothing",
    "material": product.material || "Cotton",
    "color": product.color || "Multiple",
    "sizes": product.sizes || ["S", "M", "L", "XL", "2XL"],
    "aggregateRating": product.rating ? {
      "@type": "AggregateRating",
      "ratingValue": product.rating.value,
      "reviewCount": product.rating.count
    } : undefined,
    "review": product.reviews ? product.reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.text
    })) : undefined
  } : null;

  // Generate breadcrumb structured data
  const breadcrumbStructuredData = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  // Generate FAQ structured data
  const faqStructuredData = faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:locale" content="bg_BG" />
      <meta property="og:site_name" content="Ethnobrodery" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />

      {/* Structured Data */}
      {productStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
      )}
      {breadcrumbStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      )}
      {faqStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 