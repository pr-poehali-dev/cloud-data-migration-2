import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const services = [
  {
    name: "Flight Booking",
    category: "Air Travel",
    image: "/european-cities-paris-eiffel-tower-romantic.jpg",
    description: "Access to 500+ airlines worldwide with negotiated corporate fares and flexible change policies",
    feature: "Best Corporate Rates",
  },
  {
    name: "Hotel Accommodation",
    category: "Lodging",
    image: "/dubai-modern-skyline-luxury-desert.jpg",
    description: "Curated selection of business hotels with guaranteed corporate rates and loyalty program integration",
    feature: "Pre-negotiated Deals",
  },
  {
    name: "Travel Support",
    category: "24/7 Assistance",
    image: "/maldives-overwater-bungalows-crystal-clear-water.jpg",
    description: "Dedicated support team available around the clock for re-booking, emergencies, and on-trip assistance",
    feature: "Round-the-Clock",
  },
  {
    name: "Expense Management",
    category: "Finance",
    image: "/kyoto-japan-traditional-temples-cherry-blossoms.jpg",
    description: "Automated reporting, invoice consolidation, and seamless integration with your accounting systems",
    feature: "Full Automation",
  },
  {
    name: "Travel Policy Control",
    category: "Compliance",
    image: "/iceland-northern-lights-waterfalls-dramatic-landsc.jpg",
    description: "Set approval workflows, spending limits and traveller categories to ensure full policy compliance",
    feature: "Custom Rules",
  },
  {
    name: "Ground Transportation",
    category: "Transfers",
    image: "/bali-indonesia-rice-terraces-tropical-paradise.jpg",
    description: "Airport transfers, car rentals and chauffeur services in 100+ cities worldwide",
    feature: "Door-to-Door",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Our <span className="font-semibold">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Comprehensive corporate travel management — from booking to reporting, all in one platform
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="Briefcase" className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-medium">{service.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{service.feature}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Learn more
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
