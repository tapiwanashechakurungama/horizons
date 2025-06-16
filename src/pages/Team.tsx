
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import TeamMember from '@/components/TeamMember';

const Team = () => {
  const teamMembers = [
    {
      name: 'Tapiwanashe Chakurungama',
      role: 'CTO, Systems Engineer (Zimbabwe)',
      image: 'https://nashy.vercel.app/assets/img/banner.png',
      socialLinks: {
        twitter: '#',
        linkedin: 'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEqyzJgB36FdYFsgJsFBlAjnyPKJvQ061vk&keywords=tapiwanashe%20chakurungama&origin=RICH_QUERY_SUGGESTION&position=0&searchId=5ff7279c-9609-4beb-8d0c-38637d0b32a0&sid=i(G&spellCorrectionEnabled=false',
        github: '#'
      }
    },
    {
      name: 'Samuel Yaw Dawson',
      role: 'CXO, Software Developer (Ghana)',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'MacDonald Gudo',
      role: 'Lead Systems developer (Zimbabwe)',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Tatenda Muponda',
      role: 'Mobile App Developer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Rufaro Manyika',
      role: 'Lead UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Tafadzwa Ncube',
      role: 'Graphic Designer',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Kudzai Mutero',
      role: 'Digital Marketing Specialist',
      image: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Farai Dube',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1541855492-581f618f69a0',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The creative minds and technical experts behind our innovative digital solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 100}>
                <TeamMember 
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  socialLinks={member.socialLinks}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Culture Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimatedSection className="lg:w-1/2" animation="fade">
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <p className="text-gray-600 mb-6">
                At TechVision, we believe that our people are our greatest asset. We foster a culture of innovation, 
                collaboration, and continuous learning, where every team member is encouraged to bring their unique 
                perspectives and skills to the table.
              </p>
              <p className="text-gray-600 mb-6">
                We are committed to creating an inclusive environment where creativity flourishes and where each 
                person can grow both professionally and personally. Our team's diverse backgrounds and expertise 
                allow us to approach challenges from multiple angles and deliver exceptional results for our clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Innovation-Driven</h3>
                    <p className="text-gray-600">We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Collaborative</h3>
                    <p className="text-gray-600">We believe that the best solutions come from diverse perspectives working together.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Adaptable</h3>
                    <p className="text-gray-600">In the fast-paced tech world, we stay agile and ready to embrace change.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="lg:w-1/2" animation="slide">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Team Culture" 
                className="rounded-lg shadow-xl w-full"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-primary p-12 text-white">
                <AnimatedSection>
                  <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
                  <p className="mb-6">
                    We're always looking for talented individuals who are passionate about technology and innovation. 
                    If you're interested in becoming part of our team, check out our current openings or send us your resume.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Competitive salary</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Professional growth opportunities</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Collaborative work environment</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Work on exciting projects</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a 
                      href="/contact" 
                      className="bg-white text-primary hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-colors duration-300 inline-block"
                    >
                      View Openings
                    </a>
                  </div>
                </AnimatedSection>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b" 
                  alt="Office Environment" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
