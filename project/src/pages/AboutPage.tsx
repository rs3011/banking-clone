import React from 'react';
import { Users, Building, Globe, Heart, Award, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wells-red to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Wells Fargo</h1>
            <p className="text-xl mb-6">
              Founded in 1852, Wells Fargo provides banking, investment and mortgage products and services, as well as consumer and commercial finance.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Our Company</h2>
              <p className="text-gray-700 mb-4">
                Wells Fargo & Company is a leading financial services company that has approximately $1.9 trillion in assets and proudly serves one in three U.S. households and more than 10% of all middle market companies and small businesses in the U.S.
              </p>
              <p className="text-gray-700 mb-4">
                We provide a diversified set of banking, investment and mortgage products and services, as well as consumer and commercial finance, through our four reportable operating segments: Consumer Banking and Lending, Commercial Banking, Corporate and Investment Banking, and Wealth and Investment Management.
              </p>
              <p className="text-gray-700">
                Wells Fargo ranks No. 41 on Fortune's 2022 rankings of America's largest corporations. In the communities we serve, the company focuses its social impact on building a sustainable, inclusive future for all by supporting housing affordability, small business growth, financial health, and a low-carbon economy.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Historic Wells Fargo stagecoach" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 bg-wells-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="bg-wells-red rounded-full p-3 text-white w-12 h-12 flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                We put customers at the center of everything we do. We value what's best for our customers in every interaction.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="bg-wells-red rounded-full p-3 text-white w-12 h-12 flex items-center justify-center mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Care</h3>
              <p className="text-gray-600">
                We care about people - our customers, employees, and communities. We practice empathy and respect for everyone.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="bg-wells-red rounded-full p-3 text-white w-12 h-12 flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We hold ourselves to the highest standards of integrity and ethical behavior. We do what's right for customers and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our History</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 border-wells-red pl-8 space-y-12">
              <div className="relative">
                <div className="absolute -left-12 bg-wells-red rounded-full p-2 text-white w-8 h-8 flex items-center justify-center">
                  <span className="text-sm font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">1852: Founding</h3>
                <p className="text-gray-700">
                  Henry Wells and William G. Fargo found Wells, Fargo & Co. to provide banking and express services to California during the gold rush era.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 bg-wells-red rounded-full p-2 text-white w-8 h-8 flex items-center justify-center">
                  <span className="text-sm font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">1860s: The Stagecoach Era</h3>
                <p className="text-gray-700">
                  Wells Fargo's famous stagecoach line began carrying passengers, mail, and valuables across the American West, becoming an iconic symbol of the company.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 bg-wells-red rounded-full p-2 text-white w-8 h-8 flex items-center justify-center">
                  <span className="text-sm font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">1905: Separation of Banking and Express</h3>
                <p className="text-gray-700">
                  Banking operations were separated from express delivery services, with Wells Fargo focusing on expanding its financial services.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 bg-wells-red rounded-full p-2 text-white w-8 h-8 flex items-center justify-center">
                  <span className="text-sm font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">1998: Merger with Norwest</h3>
                <p className="text-gray-700">
                  Wells Fargo merged with Norwest Corporation, creating one of the nation's largest financial services companies.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 bg-wells-red rounded-full p-2 text-white w-8 h-8 flex items-center justify-center">
                  <span className="text-sm font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold mb-2">2008: Acquisition of Wachovia</h3>
                <p className="text-gray-700">
                  Wells Fargo acquired Wachovia Corporation, significantly expanding its presence across the United States.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 bg-wells-red rounded-full p-2 text-white w-8 h-8 flex items-center justify-center">
                  <span className="text-sm font-bold">6</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Today: A Modern Financial Institution</h3>
                <p className="text-gray-700">
                  Wells Fargo continues to evolve as a modern financial services company, focusing on innovation, customer service, and community impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-12 bg-wells-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Community Impact</h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-xl font-bold mb-4">Building a Better Future</h3>
              <p className="text-gray-700 mb-4">
                We're committed to making a positive impact in the communities we serve. Through the Wells Fargo Foundation, we focus our philanthropic activities on creating long-term, strategic relationships with nonprofits and other organizations.
              </p>
              <p className="text-gray-700 mb-4">
                Our key focus areas include:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Building className="text-wells-red mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Housing affordability</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="text-wells-red mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Small business growth</span>
                </li>
                <li className="flex items-start">
                  <Globe className="text-wells-red mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Environmental sustainability</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-wells-red mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Financial health and education</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Community volunteer work" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CEO portrait" 
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">John A. Smith</h3>
                <p className="text-wells-red">Chief Executive Officer</p>
                <p className="text-gray-600 mt-2">
                  John joined Wells Fargo in 2010 and has served as CEO since 2020. He brings over 25 years of financial industry experience.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CFO portrait" 
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-wells-red">Chief Financial Officer</p>
                <p className="text-gray-600 mt-2">
                  Sarah oversees all financial operations and strategy, having joined the company in 2015 after a distinguished career in investment banking.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="COO portrait" 
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-wells-red">Chief Operating Officer</p>
                <p className="text-gray-600 mt-2">
                  Michael leads the company's operations and technology teams, focusing on digital transformation and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-wells-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Join the Wells Fargo Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're looking for talented individuals to help us build a better bank for our customers and communities.
          </p>
          <a 
            href="#"
            className="btn bg-white text-wells-red hover:bg-gray-100 font-semibold px-6 py-3 rounded"
          >
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;