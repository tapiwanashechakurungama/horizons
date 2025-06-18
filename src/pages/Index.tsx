
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceCard from '@/components/ServiceCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Smartphone, Palette, BarChart3, Megaphone, Package } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Custom, responsive websites built with the latest technologies to enhance your online presence.',
      icon: <Code className="w-10 h-10" />,
      link: '/services'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences.',
      icon: <Smartphone className="w-10 h-10" />,
      link: '/services'
    },
    {
      title: 'Graphic Design',
      description: 'Eye-catching visuals and branding materials that communicate your message effectively.',
      icon: <Palette className="w-10 h-10" />,
      link: '/services'
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to increase your visibility and grow your audience.',
      icon: <BarChart3 className="w-10 h-10" />,
      link: '/services'
    },
    {
      title: 'Advertising',
      description: 'Strategic advertising campaigns that connect with your target market and drive results.',
      icon: <Megaphone className="w-10 h-10" />,
      link: '/services'
    },
    {
      title: 'Gadget Shipping',
      description: 'Reliable shipping of tech gadgets and materials from international sources to Zimbabwe.',
      icon: <Package className="w-10 h-10" />,
      link: '/gadget-shipping'
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <AnimatedSection className="lg:w-1/2 mb-10 lg:mb-0" animation="fade">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transforming Ideas Into <span className="text-primary">Digital Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                We build cutting-edge digital solutions that help businesses grow and thrive in the modern marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-primary hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center"
                >
                  Our Services
                </Link>
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-md border border-gray-300 transition-colors duration-300 text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection className="lg:w-1/2" animation="slide">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Digital Solutions" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of digital solutions to help your business succeed in today's competitive landscape.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <ServiceCard 
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon} 
                  link={service.link}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's collaborate to create innovative solutions that drive your business forward.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block"
            >
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <AnimatedSection className="lg:w-1/2" animation="fade">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Why Choose Us" 
                className="rounded-lg shadow-xl w-full"
              />
            </AnimatedSection>
            <AnimatedSection className="lg:w-1/2" animation="slide">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why choose us?</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Expertise</h3>
                    <p className="text-gray-600">
                      Our team consists of highly skilled professionals with extensive experience in their respective fields.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Innovation</h3>
                    <p className="text-gray-600">
                      We stay at the forefront of technological advancements to deliver cutting-edge solutions.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Client-Centric</h3>
                    <p className="text-gray-600">
                      We prioritize your needs and objectives, ensuring that our solutions align with your goals.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Results-Driven</h3>
                    <p className="text-gray-600">
                      We focus on delivering measurable results that contribute to your success.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
