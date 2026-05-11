const JsonLd = ({ json }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: json }}
    suppressHydrationWarning
  />
)

export default JsonLd
