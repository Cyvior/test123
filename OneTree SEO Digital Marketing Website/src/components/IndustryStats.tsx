import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Globe, Eye, Target, TrendingUp, BarChart3, Users, Sparkles, Zap, ArrowRight } from "lucide-react";

export default function IndustryStats() {
  const industryStats = [
    {
      stat: "93% of online experiences begin with a search engine",
      icon: <Globe className="h-6 w-6" />,
      insight: "Search is the primary gateway to the internet",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      stat: "75% of users never scroll past the first page of search results",
      icon: <Eye className="h-6 w-6" />,
      insight: "First page rankings are crucial for visibility",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      stat: "SEO leads have a 14.6% close rate vs 1.7% for outbound leads",
      icon: <Target className="h-6 w-6" />,
      insight: "Organic traffic converts significantly better",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      stat: "61% of marketers say improving SEO is their top priority",
      icon: <TrendingUp className="h-6 w-6" />,
      insight: "SEO is recognized as a critical growth driver",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      stat: "68% of online experiences start with organic search",
      icon: <BarChart3 className="h-6 w-6" />,
      insight: "Organic search dominates web traffic sources",
      gradient: "from-indigo-400 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50"
    },
    {
      stat: "53% of website traffic comes from organic search",
      icon: <Users className="h-6 w-6" />,
      insight: "More than half of all website visitors find you through search",
      gradient: "from-teal-400 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50"
    }
  ];

  return (
    <section id="industry-stats" className="py-20 bg-white relative overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/15 to-purple-200/15 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-green-200/15 to-blue-200/15 rounded-full blur-2xl bounce-subtle"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-pink-200/10 to-orange-200/10 rounded-full blur-xl pulse-grow"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 right-10 w-8 h-8 border-2 border-blue-300/20 rounded-lg rotate-45 rotate-slow"></div>
        <div className="absolute bottom-1/4 left-10 w-6 h-6 border-2 border-purple-300/20 rounded-full pulse-grow"></div>
        <div className="absolute top-3/4 right-1/3 w-10 h-10 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-lg transform rotate-12 bounce-subtle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 border border-blue-200/50 slide-in-up">
            <BarChart3 className="mr-2 h-4 w-4 text-blue-500" />
            Industry Insights & Data
            <Sparkles className="ml-2 h-4 w-4 text-yellow-500 animate-pulse" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 slide-in-up" style={{ animationDelay: '0.2s' }}>
            The <span className="gradient-text">Numbers Behind</span> SEO Success
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto slide-in-up" style={{ animationDelay: '0.4s' }}>
            Understanding industry statistics helps businesses make informed decisions about their digital marketing investments and SEO strategies.
          </p>
        </div>

        <div className="mb-16">
          {/* Full Width Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industryStats.map((item, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative slide-in-up aspect-square"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                
                {/* Glowing effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                
                <CardContent className="p-6 relative z-10 h-full flex flex-col items-center justify-center text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.bgGradient} rounded-xl flex items-center justify-center text-gray-700 group-hover:scale-110 transition-all duration-300 mb-1`}>
                    {item.icon}
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-lg font-semibold text-gray-900 group-hover:text-gray-900 transition-colors leading-tight">
                      {item.stat}
                    </p>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors line-clamp-3 leading-snug">
                      {item.insight}
                    </p>
                  </div>
                  
                  {/* Hover sparkles */}
                  <Sparkles className="absolute top-4 right-4 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all animate-pulse" />
                  
                  {/* Hover arrow */}
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-y-1 transition-all opacity-0 group-hover:opacity-100" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden slide-in-up" style={{ animationDelay: '0.8s' }}>
          {/* Background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>
          
          {/* Floating elements */}
          <div className="absolute top-4 left-4 w-8 h-8 bg-blue-200/20 rounded-full blur-lg float-animation"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 bg-purple-200/30 rounded-full blur-md bounce-subtle"></div>
          <div className="absolute top-1/2 right-8 w-4 h-4 bg-pink-200/25 rounded-full blur-sm pulse-grow"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Target className="mr-2 h-6 w-6 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900">Ready to Join the Success Stories?</h3>
              <Sparkles className="ml-2 h-6 w-6 text-yellow-500 animate-pulse" />
            </div>
            
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
              Don't let your competitors dominate the search results. Start your SEO journey today and become part of these winning statistics.
            </p>
            
            <button className="glow-button border-0 text-white px-8 py-4 rounded-lg font-semibold group">
              <span className="flex items-center relative z-10">
                Get Your Free SEO Analysis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}