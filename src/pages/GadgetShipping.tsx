
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Package, Clock, CheckCircle, Shield, Truck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const GadgetShipping = () => {
  const benefits = [
    {
      title: 'Access to Global Tech',
      description: 'Get the latest gadgets and tech products from around the world delivered to Zimbabwe.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Reliable Delivery',
      description: 'Our established shipping routes and partnerships ensure your items arrive safely.',
      icon: <Truck className="w-8 h-8" />
    },
    {
      title: 'Competitive Pricing',
      description: 'We offer transparent pricing with no hidden fees, making international shipping affordable.',
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: 'Secure Handling',
      description: 'Your valuable tech products are handled with care throughout the shipping process.',
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const process = [
    {
      title: 'Consultation',
      description: "Discuss your needs with our team so we understand exactly what products you're looking for."
    },
    {
      title: 'Sourcing',
      description: 'We identify and verify suppliers for your desired products to ensure quality and authenticity.'
    },
    {
      title: 'Purchase & Collection',
      description: 'We handle the purchase process and collect your items from suppliers worldwide.'
    },
    {
      title: 'International Shipping',
      description: 'Your products are prepared for international transit with proper packaging and documentation.'
    },
    {
      title: 'Customs Clearance',
      description: 'We manage all customs paperwork and import duties to ensure smooth entry into Zimbabwe.'
    },
    {
      title: 'Local Delivery',
      description: 'Your gadgets are delivered directly to your specified location in Zimbabwe.'
    }
  ];

  const products = [
    'Laptops & Computers',
    'Smartphones & Tablets',
    'Camera Equipment',
    'Audio Devices',
    'Gaming Consoles',
    'Computer Components',
    'Smart Home Devices',
    'Wearable Tech',
    'Network Equipment',
    'Electronic Accessories',
    'Development Hardware',
    'Specialized Tech Equipment'
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <AnimatedSection className="lg:w-1/2 mb-10 lg:mb-0" animation="fade">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Gadget & Tech <span className="text-primary">Shipping Services</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                We bridge the global technology gap by bringing the latest gadgets and tech equipment directly to Zimbabwe.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Fast Delivery</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Secure Handling</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Competitive Rates</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Global Sourcing</span>
              </div>
              <Link
                to="/contact"
                className="bg-primary hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-block"
              >
                Inquire About Shipping
              </Link>
            </AnimatedSection>
            <AnimatedSection className="lg:w-1/2" animation="slide">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                alt="Tech Gadgets" 
                className="rounded-lg shadow-xl w-full"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Shipping Service?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make international tech procurement simple, secure, and affordable.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection 
                key={benefit.title} 
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                delay={index * 100}
              >
                <div className="bg-primary/10 p-4 rounded-full inline-flex items-center justify-center mb-6">
                  <div className="text-primary">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Shipping Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures your tech products arrive safely and efficiently.
            </p>
          </AnimatedSection>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {process.map((step, index) => (
                <AnimatedSection key={step.title} delay={index * 100}>
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 mb-6 md:mb-0 flex md:justify-end">
                      <div className={`relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} p-6 bg-white rounded-lg shadow-md`}>
                        <h3 className="text-xl font-bold mb-2">{index + 1}. {step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center z-10 bg-primary text-white w-10 h-10 rounded-full">
                      {index + 1}
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimatedSection className="lg:w-1/2" animation="fade">
              <h2 className="text-3xl font-bold mb-6">What We Can Ship</h2>
              <p className="text-gray-600 mb-8">
                We specialize in sourcing and shipping a wide range of technology products and gadgets from 
                global markets directly to Zimbabwe. Our expertise covers everything from consumer electronics 
                to specialized tech equipment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.map((product) => (
                  <div key={product} className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{product}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <p className="text-gray-600 italic">
                  Don't see what you're looking for? Contact us to discuss your specific requirements.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection className="lg:w-1/2" animation="slide">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Tech Products" 
                className="rounded-lg shadow-xl w-full"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our gadget shipping service.
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">How long does shipping usually take?</h3>
                <p className="text-gray-600">
                  Shipping times vary based on product availability and origin, but typically range from 2-4 weeks. 
                  Express options are available for urgent requirements at an additional cost.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="mb-6" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">How are shipping costs calculated?</h3>
                <p className="text-gray-600">
                  Shipping costs are based on weight, dimensions, value, and origin of the products. We provide 
                  transparent quotes that include all applicable duties and taxes before you commit.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="mb-6" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Do you handle customs clearance?</h3>
                <p className="text-gray-600">
                  Yes, we manage the entire customs clearance process, including all documentation and payment 
                  of import duties and taxes, ensuring a smooth entry into Zimbabwe.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">What happens if my item is damaged during shipping?</h3>
                <p className="text-gray-600">
                  All shipments are insured against damage or loss. In the unlikely event of an issue, we'll work 
                  with you to file a claim and resolve the situation promptly.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Ready to Ship Your Tech Products?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your shipping needs and get a personalized quote.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block"
            >
              Request a Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GadgetShipping;
