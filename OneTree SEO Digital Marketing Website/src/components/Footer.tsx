import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const services = [
    "Technical SEO",
    "Content Marketing",
    "Local SEO",
    "Link Building",
    "PPC Management",
    "SEO Audits"
  ];

  const company = [
    "About Us",
    "Our Team",
    "Careers",
    "Case Studies",
    "Blog",
    "Contact"
  ];

  const resources = [
    "SEO Guide",
    "Free Tools",
    "Industry Reports",
    "Webinars",
    "FAQ",
    "Support"
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-semibold">OneTree SEO</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              We're a leading digital marketing agency specializing in SEO, helping businesses across the nation achieve sustainable online growth and increased revenue.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">hello@onetreeseo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">New York, NY</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 OneTree SEO. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}