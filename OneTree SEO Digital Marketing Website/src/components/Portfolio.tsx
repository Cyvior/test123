import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, TrendingUp } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Fashion Store",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTU1MTc5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      results: {
        traffic: "+340%",
        ranking: "85% Top 3",
        revenue: "+280%"
      },
      description: "Transformed an online fashion retailer's SEO strategy, resulting in massive organic growth and revenue increase.",
      timeframe: "6 months"
    },
    {
      title: "Local Service Business",
      industry: "Home Services",
      image: "https://images.unsplash.com/photo-1579389248774-07907f421a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTU0ODYxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      results: {
        traffic: "+450%",
        ranking: "Page 1",
        leads: "+320%"
      },
      description: "Helped a local HVAC company dominate their geographic market through strategic local SEO optimization.",
      timeframe: "4 months"
    },
    {
      title: "SaaS Technology Platform",
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTU1MTc5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      results: {
        traffic: "+290%",
        ranking: "92% Top 10",
        signups: "+180%"
      },
      description: "Elevated a B2B SaaS platform's organic visibility and increased qualified demo requests significantly.",
      timeframe: "8 months"
    }
  ];

  const testimonials = [
    {
      quote: "OneTree SEO transformed our online presence. We went from page 3 to dominating page 1 for our main keywords.",
      author: "Sarah Johnson",
      company: "TechStart Solutions",
      role: "Marketing Director"
    },
    {
      quote: "The results speak for themselves - 340% increase in organic traffic and our best year ever in terms of revenue.",
      author: "Michael Chen",
      company: "Urban Fashion Co.",
      role: "CEO"
    },
    {
      quote: "Professional, knowledgeable, and results-driven. OneTree SEO exceeded all our expectations.",
      author: "David Rodriguez",
      company: "HomeComfort HVAC",
      role: "Owner"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses across different industries achieve remarkable SEO results and sustainable growth.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.industry}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </CardTitle>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-green-600">{project.results.traffic}</div>
                      <div className="text-xs text-gray-600">Traffic</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">{project.results.ranking}</div>
                      <div className="text-xs text-gray-600">Rankings</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">{project.results.revenue || project.results.leads || project.results.signups}</div>
                      <div className="text-xs text-gray-600">{project.results.revenue ? 'Revenue' : project.results.leads ? 'Leads' : 'Signups'}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-600">Timeframe: {project.timeframe}</span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 p-12 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}