import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Award, Target, Zap } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your bottom line."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Team",
      description: "Our certified SEO specialists have years of experience across industries."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Proven Track Record",
      description: "We've helped hundreds of businesses achieve top rankings and increased revenue."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Cutting-Edge Strategies",
      description: "We stay ahead of algorithm changes and industry best practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1622258418550-46a51f29f084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NTU1MTc5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="OneTree SEO Team"
                className="w-full h-auto"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -top-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                About OneTree SEO
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2016, OneTree SEO has been at the forefront of digital marketing innovation. We believe that every business deserves to be found online, and we're passionate about making that happen through strategic SEO and digital marketing solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our data-driven approach combines technical expertise with creative thinking to deliver sustainable growth for our clients. We don't just improve rankings – we transform businesses.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    {value.icon}
                    <h3 className="font-semibold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}