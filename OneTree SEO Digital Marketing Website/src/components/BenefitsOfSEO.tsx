import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingUp, Users, DollarSign, Globe, Eye, MousePointer, Sparkles, Zap, Target } from "lucide-react";

export default function BenefitsOfSEO() {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Increase Organic Traffic",
      percentage: "+247%",
      description: "Average increase in organic website traffic within 6 months",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-500" />,
      title: "Higher ROI",
      percentage: "685%",
      description: "Average return on investment compared to traditional advertising",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Better Lead Quality",
      percentage: "+156%",
      description: "Improvement in lead quality from organic search traffic",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      title: "Brand Visibility",
      percentage: "+89%",
      description: "Increase in brand awareness and online presence",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: <Eye className="h-8 w-8 text-red-500" />,
      title: "Page 1 Rankings",
      percentage: "76%",
      description: "Of our clients' target keywords rank on Google's first page",
      gradient: "from-red-400 to-pink-500",
      bgGradient: "from-red-50 to-pink-50"
    },
    {
      icon: <MousePointer className="h-8 w-8 text-teal-500" />,
      title: "Conversion Rate",
      percentage: "+92%",
      description: "Improvement in website conversion rates through optimization",
      gradient: "from-teal-400 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-2xl bounce-subtle"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-10 w-8 h-8 border-2 border-blue-300/30 rounded-lg rotate-45 rotate-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-purple-300/30 rounded-full pulse-grow"></div>
        <div className="absolute top-1/2 right-10 w-10 h-10 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-lg transform rotate-12 bounce-subtle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header with creative elements */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-sm font-medium text-gray-700 border border-green-200/50 slide-in-up">
            <Zap className="mr-2 h-4 w-4 text-yellow-500 animate-pulse" />
            Proven Results & Impact
            <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 slide-in-up" style={{ animationDelay: '0.2s' }}>
            The <span className="gradient-text">Power of SEO</span> for Your Business
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto slide-in-up" style={{ animationDelay: '0.4s' }}>
            Search engine optimization isn't just about rankings – it's about driving real business results and sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left - Enhanced Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 group cursor-pointer tilt-hover slide-in-up overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                
                {/* Glowing effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-gray-50 group-hover:scale-110 transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <div className="relative">
                      <span className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform inline-block">
                        {benefit.percentage}
                      </span>
                      <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all animate-pulse" />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <CardTitle className="text-lg mb-2 group-hover:text-gray-900 transition-colors">{benefit.title}</CardTitle>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right - Enhanced Image */}
          <div className="space-y-8 slide-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl tilt-hover">
              {/* Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20"></div>
              
              <div className="relative bg-white rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8fDE3NTU1MTc5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business Growth Statistics"
                  className="w-full h-auto"
                />
                
                {/* Shimmer overlay */}
                <div className="absolute inset-0 shimmer opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* Enhanced Results Summary */}
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-2xl border border-gray-100 relative overflow-hidden shadow-lg">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Target className="mr-2 h-6 w-6 text-blue-500" />
                  What This Means for Your Business
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">More Qualified Traffic:</strong> Attract visitors who are actively searching for your products or services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Better ROI:</strong> SEO provides long-term value with compounding returns on your investment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Increased Authority:</strong> Higher search rankings establish credibility and trust with your audience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Competitive Advantage:</strong> Outrank competitors and capture market share in your industry
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-12 rounded-2xl relative overflow-hidden slide-in-up" style={{ animationDelay: '0.8s' }}>
          {/* Background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-size-200 animate-gradient-x"></div>
          
          {/* Floating elements */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-xl float-animation"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full blur-lg bounce-subtle"></div>
          <div className="absolute top-1/2 left-8 w-6 h-6 bg-white/15 rounded-full blur-md pulse-grow"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Zap className="mr-2 h-8 w-8 animate-pulse" />
              <h3 className="text-2xl font-bold">Ready to Transform Your Business?</h3>
              <Sparkles className="ml-2 h-6 w-6 animate-pulse" />
            </div>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have grown with our SEO expertise.
            </p>
            
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group">
              <span className="flex items-center">
                Start Your SEO Journey Today
                <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}