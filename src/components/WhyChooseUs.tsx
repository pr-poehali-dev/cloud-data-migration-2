import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Globe",
    title: "Global Coverage",
    description: "Access to 500+ airlines, 300,000+ hotels and ground transport in over 100 countries worldwide",
  },
  {
    icon: "ShieldCheck",
    title: "Policy Compliance",
    description: "Built-in travel policy controls, approval workflows and spend limits keep your company fully compliant",
  },
  {
    icon: "Headphones",
    title: "24/7 Travel Support",
    description: "Dedicated corporate support team available around the clock for re-booking, changes and emergencies",
  },
  {
    icon: "BarChart3",
    title: "Cost Savings",
    description: "Negotiated corporate rates and automated expense reporting reduce business travel costs by up to 30%",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Why companies choose <span className="font-semibold">Business Pleasure Travel</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            We deliver full control over your corporate travel — from booking to reporting — with zero compromise on comfort or compliance
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <Icon name={feature.icon} size={32} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}