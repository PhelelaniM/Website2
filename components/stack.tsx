export default function Stack() {
  const tools = [
    { name: "GeoPandas", logo: "/geopandas-logo.png" },
    { name: "Flask", logo: "/flask-logo.jpg" },
    { name: "GCP", logo: "/gcp-logo.png" },
    { name: "Python", logo: "/python-logo.png" },
    { name: "AWS Services", logo: "/aws-logo.jpg" },
    { name: "ESRI", logo: "/esri-logo.jpg" },
    { name: "QGIS", logo: "/qgis-logo.png" },
    { name: "Carto", logo: "/carto-logo.png" },
    { name: "Alteryx", logo: "/alteryx-logo.jpg" },
    { name: "KNIME", logo: "/knime-logo.jpg" },
    { name: "GitHub", logo: "/github-logo.png" },
    { name: "Jupyter Labs", logo: "/jupyter-logo.png" }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold mb-8">Technology Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Technology icons and labels will go here */}
      </div>
    </section>
  )
}
