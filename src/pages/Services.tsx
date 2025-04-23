
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { 
  Code, 
  Smartphone, 
  Palette, 
  BarChart3, 
  Megaphone, 
  Package, 
  Globe, 
  ShoppingBag,
  Brush,
  Share2,
  Video,
  Mail
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      title: 'Website Development',
      description: 'We create custom websites that are visually stunning, highly functional, and optimized for performance.',
      icon: <Code className="w-12 h-12" />,
      details: [
        'Custom Website Design & Development',
        'E-commerce Solutions',
        'WordPress Development',
        'Web Application Development',
        'Website Maintenance & Support'
      ]
    },
    {
      title: 'Mobile App Development',
      description: 'Our team builds mobile applications that provide seamless experiences across all devices.',
      icon: <Smartphone className="w-12 h-12" />,
      details: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform App Development',
        'UI/UX Design for Mobile',
        'App Maintenance & Updates'
      ]
    },
    {
      title: 'Graphic Design',
      description: 'We craft visual communication that enhances your brand and captivates your audience.',
      icon: <Palette className="w-12 h-12" />,
      details: [
        'Brand Identity Design',
        'Logo Design',
        'Print Design',
        'Packaging Design',
        'Social Media Graphics'
      ]
    },
    {
      title: 'Digital Marketing',
      description: 'Our data-driven approach helps you reach your target audience and achieve your marketing goals.',
      icon: <BarChart3 className="w-12 h-12" />,
      details: [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing',
        'Email Marketing Campaigns',
        'Content Marketing',
        'Analytics & Reporting'
      ]
    },
    {
      title: 'Advertising',
      description: 'We create compelling advertising campaigns that drive awareness, engagement, and conversions.',
      icon: <Megaphone className="w-12 h-12" />,
      details: [
        'Google Ads Campaigns',
        'Social Media Advertising',
        'Display Advertising',
        'Video Advertising',
        'Retargeting Campaigns'
      ]
    }
  ];
  
  const additionalServices = [
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'E-commerce Solutions',
      description: 'Create online stores that provide seamless shopping experiences and drive sales.',
      icon: <ShoppingBag className="w-8 h-8" />
    },
    {
      title: 'UI/UX Design',
      description: 'Design intuitive interfaces that enhance user experience and engagement.',
      icon: <Brush className="w-8 h-8" />
    },
    {
      title: 'Social Media Management',
      description: 'Build and manage your brand presence across key social media platforms.',
      icon: <Share2 className="w-8 h-8" />
    },
    {
      title: 'Video Production',
      description: 'Create compelling video content that tells your brand story and engages your audience.',
      icon: <Video className="w-8 h-8" />
    },
    {
      title: 'Email Marketing',
      description: 'Develop targeted email campaigns that nurture leads and drive conversions.',
      icon: <Mail className="w-8 h-8" />
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of digital solutions to help your business thrive in the digital age.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div 
                key={service.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <AnimatedSection className="lg:w-1/2" animation={index % 2 === 0 ? 'fade' : 'slide'}>
                  <div className="bg-primary/10 p-6 rounded-full inline-block mb-6">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
                <AnimatedSection className="lg:w-1/2" animation={index % 2 === 0 ? 'slide' : 'fade'}>
                  <img 
                    src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1486312338219-ce68d2c6f44d' : '1581091226825-a6a2a5aee158'}`}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full"
                  />
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gadget Shipping */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <div className="bg-primary/10 p-4 rounded-full inline-block mb-6">
              <Package className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Gadget Shipping</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide reliable shipping services for tech gadgets and materials from international sources directly to Zimbabwe.
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg mb-8" delay={200}>
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-8">
                <h3 className="text-2xl font-bold mb-4">Bringing Global Tech to Your Doorstep</h3>
                <p className="text-gray-600 mb-6">
                  With our international shipping expertise, we ensure that you can access the latest technology products 
                  and gadgets from around the world. Our service handles everything from sourcing to delivery, making the 
                  import process simple and hassle-free.
                </p>
                <Link
                  to="/gadget-shipping"
                  className="inline-flex items-center text-primary font-medium"
                >
                  Learn more about our shipping services
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                  alt="Gadget Shipping" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complementary services that enhance our core offerings and provide added value to your business.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <AnimatedSection 
                key={service.title} 
                className="bg-white p-6 rounded-lg shadow-md hover-scale"
                delay={index * 100}
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-md mr-4">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help you achieve your business goals.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
