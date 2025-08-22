import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Play, Sparkles, TrendingUp, Zap, Target } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-xl float-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-200/40 to-orange-200/40 rounded-full blur-lg" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-green-200/40 to-blue-200/40 rounded-full blur-lg bounce-subtle" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-blue-300/30 rounded-lg rotate-45 rotate-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-purple-300/30 rounded-full pulse-grow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center subtle-glow-bg">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Animated badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 border border-blue-200/50 slide-in-up">
                <Sparkles className="mr-2 h-4 w-4 text-yellow-500 animate-pulse" />
                #1 SEO Agency - Trusted by 500+ Businesses
                <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight slide-in-up" style={{ animationDelay: '0.2s' }}>
                Grow Your Business with 
                <span className="gradient-text block"> Expert SEO</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed slide-in-up" style={{ animationDelay: '0.4s' }}>
                We help businesses increase their online visibility, drive more qualified traffic, and convert visitors into customers through proven SEO strategies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 slide-in-up" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="glow-button border-0 text-white group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Get Free SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button variant="outline" size="lg" className="group relative overflow-hidden border-2 hover:border-purple-300 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <span className="relative flex items-center">
                  <Play className="mr-2 h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  Watch Our Process
                </span>
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="pt-8 border-t border-gray-200 slide-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center group cursor-pointer">
                  <div className="relative">
                    <div className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">500+</div>
                    <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all animate-pulse" />
                  </div>
                  <div className="text-sm text-gray-600">Websites Optimized</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="relative">
                    <div className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">95%</div>
                    <Target className="absolute -top-2 -right-2 h-4 w-4 text-green-400 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="relative">
                    <div className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">3x</div>
                    <Zap className="absolute -top-2 -right-2 h-4 w-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-all animate-pulse" />
                  </div>
                  <div className="text-sm text-gray-600">Average Traffic Increase</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image with creative enhancements */}
          <div className="relative slide-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl tilt-hover">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20"></div>
              
              <div className="relative bg-white rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhTRU8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTU1MTc5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="SEO Analytics Dashboard"
                  className="w-full h-auto"
                />
                
                {/* Animated overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 shimmer"></div>
              </div>
            </div>
            
            {/* Enhanced Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 float-animation">
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full pulse-grow"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-green-400 rounded-full blur-md opacity-50 m-auto"></div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Organic Traffic</div>
                  <div className="text-xl font-bold gradient-text">+247%</div>
                </div>
              </div>
            </div>

            {/* Additional floating elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-full shadow-xl text-white bounce-subtle">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}