import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import BenefitsOfSEO from "./components/BenefitsOfSEO";
import IndustryStats from "./components/IndustryStats";
import Portfolio from "./components/Portfolio";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-up');
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.slide-in-up');
    animateElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Global background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Large background gradients */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-bl from-pink-100/20 to-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-green-100/20 to-blue-100/30 rounded-full blur-3xl"></div>
        
        {/* Animated floating particles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-400/40 rounded-full blur-sm float-animation"></div>
        <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-purple-400/30 rounded-full blur-sm bounce-subtle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-400/40 rounded-full blur-sm pulse-grow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-2.5 h-2.5 bg-green-400/30 rounded-full blur-sm float-animation" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <BenefitsOfSEO />
          <IndustryStats />
          <Portfolio />
          <Locations />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Scroll to top button */}
      <button 
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 glow-button opacity-0 translate-y-8 hover:scale-110"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        id="scroll-to-top"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <style jsx>{`
        #scroll-to-top {
          animation: fadeInUp 0.5s ease-out 1s forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}