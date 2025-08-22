import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Locations() {
  const locations = [
    {
      city: "New York",
      address: "123 Broadway, Suite 500",
      zipcode: "New York, NY 10001",
      phone: "(555) 123-4567",
      email: "ny@onetreeseo.com",
      hours: "Mon-Fri: 9AM-6PM EST"
    },
    {
      city: "Los Angeles",
      address: "456 Sunset Blvd, Floor 10",
      zipcode: "Los Angeles, CA 90028",
      phone: "(555) 234-5678",
      email: "la@onetreeseo.com",
      hours: "Mon-Fri: 9AM-6PM PST"
    },
    {
      city: "Chicago",
      address: "789 Michigan Ave, Suite 300",
      zipcode: "Chicago, IL 60611",
      phone: "(555) 345-6789",
      email: "chicago@onetreeseo.com",
      hours: "Mon-Fri: 9AM-6PM CST"
    }
  ];

  const serviceAreas = [
    "New York Metro", "Los Angeles County", "Chicago Metro", "San Francisco Bay Area",
    "Boston", "Philadelphia", "Washington DC", "Atlanta", "Miami", "Dallas",
    "Houston", "Phoenix", "Seattle", "Denver", "Austin", "San Diego"
  ];

  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're strategically located to serve businesses across major metropolitan areas, with remote support available nationwide.
          </p>
        </div>

        {/* Office Locations */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{location.city}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-gray-600">{location.address}</p>
                  <p className="text-gray-600">{location.zipcode}</p>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{location.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{location.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{location.hours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas */}
        <div className="bg-white p-12 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Areas</h3>
            <p className="text-gray-600">
              We provide SEO and digital marketing services to businesses in these metropolitan areas and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-gray-700">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Don't see your area listed? We work with businesses nationwide through our remote services.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Contact Us for Your Area
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}