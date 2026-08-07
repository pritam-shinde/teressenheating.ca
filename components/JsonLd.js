const JsonLd = ({ json, faqArr }) => {
  if (faqArr && Array.isArray(faqArr) && faqArr.length > 0) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqArr.map((faq) => ({
        "@type": "Question",
        "name": faq.que,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": (faq.ans || "") + (faq.list && Array.isArray(faq.list) ? "\n" + faq.list.join("\n") : "")
        }
      }))
    }
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        suppressHydrationWarning
      />
    )
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
      suppressHydrationWarning
    />
  )
}

export const FaqJsonLd = ({ faqs }) => {
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) return null
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.que,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": (faq.ans || "") + (faq.list && Array.isArray(faq.list) ? "\n" + faq.list.join("\n") : "")
      }
    }))
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

export default JsonLd
