import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const packages = [
  {
    title: "Starter Plan",
    travelersRange: "Up to 50 travellers",
    support: "Business hours support",
    badge: "Popular",
    image: "/european-cities-paris-eiffel-tower-romantic.jpg",
    highlights: ["Flight booking", "Hotel search", "Expense reports", "Email support"],
    price: "Contact us",
  },
  {
    title: "Business Plan",
    travelersRange: "Up to 200 travellers",
    support: "Extended support",
    badge: "Best Value",
    image: "/asian-temples-thailand-bangkok-golden-temple.jpg",
    highlights: ["All Starter features", "Travel policy tools", "Approval workflows", "Priority support"],
    price: "Contact us",
  },
  {
    title: "Enterprise Plan",
    travelersRange: "Unlimited travellers",
    support: "24/7 dedicated support",
    badge: "Full Service",
    image: "/dubai-modern-skyline-luxury-desert.jpg",
    highlights: ["All Business features", "Dedicated account manager", "Custom integrations", "SLA guarantee"],
    price: "Contact us",
  },
]

export function PopularPackages() {
  return (
    <section id="solutions" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Corporate <span className="font-semibold">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Flexible plans tailored for businesses of any size — from growing teams to large enterprises
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary text-primary-foreground backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-xs font-semibold">{pkg.badge}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{pkg.title}</h3>

                  {/* Meta Info */}
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Icon name="Users" size={16} />
                      <span>{pkg.travelersRange}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Headphones" size={16} />
                      <span>{pkg.support}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Pricing</div>
                    <div className="text-xl font-semibold text-primary">{pkg.price}</div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
