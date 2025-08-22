import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle, Sparkles, Zap, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      website: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "(555) 123-4567",
      subtext: "Mon-Fri, 9AM-6PM EST",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "hello@onetreeseo.com",
      subtext: "We respond within 24 hours",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Headquarters",
      content: "123 Broadway, Suite 500",
      subtext: "New York, NY 10001",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      content: "Available on website",
      subtext: "Mon-Fri, 9AM-6PM EST",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-2xl bounce-subtle"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl pulse-grow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 border border-blue-200/50 slide-in-up">
            <Sparkles className="mr-2 h-4 w-4 text-yellow-500 animate-pulse" />
            Free SEO Analysis
            <Zap className="ml-2 h-4 w-4 text-blue-500" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 slide-in-up" style={{ animationDelay: '0.2s' }}>
            Get Your <span className="gradient-text">Free SEO Audit</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto slide-in-up" style={{ animationDelay: '0.4s' }}>
            Ready to transform your online presence? Contact us today for a comprehensive SEO audit and custom strategy for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <div className="slide-in-up" style={{ animationDelay: '0.6s' }}>
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-20"></div>
              
              <div className="relative bg-white rounded-lg">
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-2xl opacity-50"></div>
                  <CardTitle className="text-2xl flex items-center relative z-10">
                    <Send className="mr-3 h-6 w-6 text-blue-500" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600 relative z-10">
                    Fill out the form below and we'll get back to you within 24 hours with your free SEO audit.
                  </p>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="group-hover:border-blue-300 transition-colors bg-white/50"
                          />
                        </div>
                      </div>
                      
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className="group-hover:border-purple-300 transition-colors bg-white/50"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="group">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                          className="group-hover:border-green-300 transition-colors bg-white/50"
                        />
                      </div>
                      
                      <div className="group">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                          className="group-hover:border-orange-300 transition-colors bg-white/50"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                        Website URL
                      </label>
                      <Input
                        id="website"
                        name="website"
                        type="url"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://yourwebsite.com"
                        className="group-hover:border-pink-300 transition-colors bg-white/50"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent group-hover:border-teal-300 transition-colors bg-white/50 backdrop-blur-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="seo-audit">Free SEO Audit</option>
                        <option value="technical-seo">Technical SEO</option>
                        <option value="content-marketing">Content Marketing</option>
                        <option value="local-seo">Local SEO</option>
                        <option value="link-building">Link Building</option>
                        <option value="ppc-management">PPC Management</option>
                        <option value="full-service">Full-Service SEO</option>
                      </select>
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your goals and how we can help..."
                        className="group-hover:border-indigo-300 transition-colors bg-white/50 resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full glow-button border-0 text-white group relative overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center">
                        Get My Free SEO Audit
                        <Sparkles className="ml-2 h-5 w-5 animate-pulse" />
                      </span>
                    </Button>
                  </form>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8 slide-in-up" style={{ animationDelay: '0.8s' }}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageCircle className="mr-3 h-6 w-6 text-blue-500" />
                Get in Touch
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Have questions about our services? Need to speak with someone right away? We're here to help you grow your business online.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-blue-200 tilt-hover relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                  
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${info.bgGradient} rounded-lg flex items-center justify-center text-gray-700 group-hover:scale-110 transition-all duration-300 relative z-10`}>
                    {info.icon}
                  </div>
                  
                  <div className="relative z-10">
                    <h4 className="font-semibold text-gray-900 group-hover:text-gray-900 transition-colors">{info.title}</h4>
                    <p className="text-gray-900 font-medium group-hover:text-gray-900 transition-colors">{info.content}</p>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{info.subtext}</p>
                  </div>
                  
                  <Sparkles className="absolute top-2 right-2 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all animate-pulse" />
                </div>
              ))}
            </div>

            {/* Enhanced Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white p-8 rounded-2xl relative overflow-hidden">
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 opacity-90"></div>
              
              {/* Floating elements */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-white/10 rounded-full blur-lg float-animation"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-white/20 rounded-full blur-md bounce-subtle"></div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="mr-2 h-6 w-6 animate-pulse" />
                  Emergency SEO Issues?
                </h4>
                <p className="mb-6 opacity-90">
                  If your website has been penalized or experienced a sudden drop in rankings, contact us immediately for emergency SEO support.
                </p>
                <Button 
                  variant="outline" 
                  className="bg-white text-gray-900 border-white hover:bg-gray-100 transition-all duration-300 group hover:scale-105"
                >
                  <span className="flex items-center">
                    Emergency Contact
                    <Phone className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}