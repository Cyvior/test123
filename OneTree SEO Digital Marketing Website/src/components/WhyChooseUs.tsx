import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Clock, Shield, Users } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Proven Results",
      description: "Our strategies have helped clients achieve average traffic increases of 300% within 6 months."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Fast Implementation",
      description: "We start delivering results within the first 30 days of engagement with quick wins and optimizations."
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      title: "White-Hat Only",
      description: "We follow Google's guidelines strictly, ensuring your website's long-term safety and sustainability."
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "Dedicated Support",
      description: "Your dedicated account manager provides regular updates and is always available for consultation."
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Projects" },
    { number: "98%", label: "Client Retention Rate" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Industry Awards" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Choose OneTree SEO?
              </h2>
              <p className="text-lg text-gray-600">
                We're not just another SEO agency. We're your strategic partner in digital growth, committed to delivering measurable results that matter to your business.
              </p>
            </div>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}

          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579389248774-07907f421a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTU0ODYxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Collaboration"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Google Partner</div>
                <div className="text-lg font-bold text-primary">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}