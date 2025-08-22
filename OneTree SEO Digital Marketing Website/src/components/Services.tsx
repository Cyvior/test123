import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Search, BarChart3, Globe, PenTool, Smartphone, TrendingUp, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Technical SEO",
      description: "Complete website optimization including site speed, mobile responsiveness, and search engine crawlability.",
      features: ["Site Speed Optimization", "Mobile Optimization", "Schema Markup", "XML Sitemaps"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Content Marketing",
      description: "Strategic content creation that engages your audience and drives organic traffic to your website.",
      features: ["Keyword Research", "Blog Writing", "Content Strategy", "SEO Copywriting"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your area with targeted local optimization.",
      features: ["Google My Business", "Local Citations", "Review Management", "Local Link Building"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Link Building",
      description: "High-quality backlink acquisition to boost your domain authority and search engine rankings.",
      features: ["Guest Posting", "Digital PR", "Broken Link Building", "Competitor Analysis"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "PPC Management",
      description: "Maximize your ad spend with data-driven pay-per-click campaigns across Google and social platforms.",
      features: ["Google Ads", "Facebook Ads", "Keyword Bidding", "Landing Page Optimization"],
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and reporting to measure success and optimize performance continuously.",
      features: ["Custom Dashboards", "Monthly Reports", "Goal Tracking", "ROI Analysis"],
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 border border-blue-200/50 slide-in-up">
            <Sparkles className="mr-2 h-4 w-4 text-yellow-500 animate-pulse" />
            Our Expert Services
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 slide-in-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive <span className="gradient-text">SEO Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto slide-in-up" style={{ animationDelay: '0.4s' }}>
            We offer comprehensive digital marketing solutions designed to increase your online visibility, drive qualified traffic, and grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group cursor-pointer tilt-hover slide-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Glowing border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
              
              <CardHeader className="space-y-4 relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.bgGradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative`}>
                  {service.icon}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-lg blur transition-all duration-300`}></div>
                </div>
                
                <div>
                  <CardTitle className="text-xl mb-2 group-hover:text-gray-900 transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:scale-125 transition-transform`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Hover effect sparkles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action with glowing button */}
        <div className="text-center mt-16 slide-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Boost Your Rankings?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let our expert team create a custom SEO strategy tailored to your business goals and industry.
              </p>
              <button className="glow-button border-0 text-white px-8 py-3 rounded-lg font-semibold">
                <span className="flex items-center">
                  Get Started Today
                  <Sparkles className="ml-2 h-4 w-4 animate-pulse" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}