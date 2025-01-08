export default function Expertise() {
  const expertiseAreas = [
    {
      title: "Retail",
      icon: "/retail-icon.png",
    },
    {
      title: "Development Economics",
      icon: "/economics-icon.png",
    },
    {
      title: "Market Research and Feasibility",
      icon: "/research-icon.png",
    },
    {
      title: "Property Development and Investment",
      icon: "/property-icon.png",
    },
    {
      title: "Geo-Risk Analysis and Underwriting",
      icon: "/geo-risk-icon.png",
    }
  ]

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold mb-8">Areas of Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Expertise cards will go here */}
      </div>
    </section>
  )
}
