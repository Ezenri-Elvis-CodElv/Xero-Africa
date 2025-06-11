import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaBitcoin, FaMoneyBillWave, FaExchangeAlt, FaShieldAlt, FaChartLine, FaMobileAlt, FaGlobe, FaLock } from 'react-icons/fa';

const Features = () => {
  const [activeTab, setActiveTab] = useState('crypto');
  
  // Features data organized by category
  const features = {
    crypto: [
      {
        icon: <FaBitcoin className="text-3xl text-yellow-500" />,
        title: "Instant Crypto Transactions",
        description: "Buy, sell, and transfer cryptocurrencies in seconds with our lightning-fast blockchain technology.",
        highlight: "0.1% transaction fee - lowest in the market"
      },
      {
        icon: <FaChartLine className="text-3xl text-green-500" />,
        title: "Real-time Market Analysis",
        description: "Advanced charts and indicators to track crypto prices and make informed investment decisions.",
        highlight: "200+ cryptocurrencies supported"
      },
      {
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        title: "Secure Cold Storage",
        description: "98% of assets stored in offline, military-grade cold storage for maximum security.",
        highlight: "Insured against theft and hacking"
      }
    ],
    payments: [
      {
        icon: <FaMoneyBillWave className="text-3xl text-purple-500" />,
        title: "One-Click Bill Payments",
        description: "Pay all your bills in one place - utilities, subscriptions, loans, and more with a single tap.",
        highlight: "Schedule recurring payments automatically"
      },
      {
        icon: <FaExchangeAlt className="text-3xl text-teal-500" />,
        title: "Multi-Currency Support",
        description: "Pay international bills in local currencies without worrying about exchange rates.",
        highlight: "Supports 150+ global currencies"
      },
      {
        icon: <FaMobileAlt className="text-3xl text-red-500" />,
        title: "Mobile Wallet Integration",
        description: "Link your mobile money wallets for seamless transfers between accounts and services.",
        highlight: "Supports M-Pesa, Airtel Money, and more"
      }
    ],
    conversion: [
      {
        icon: <FaExchangeAlt className="text-3xl text-indigo-500" />,
        title: "Real-Time Currency Conversion",
        description: "Instant conversion between cryptocurrencies and fiat currencies at the best rates.",
        highlight: "0.5% spread - industry-leading rates"
      },
      {
        icon: <FaGlobe className="text-3xl text-cyan-500" />,
        title: "Global Payment Network",
        description: "Send money to anyone, anywhere in the world with minimal fees and maximum speed.",
        highlight: "200+ countries supported"
      },
      {
        icon: <FaLock className="text-3xl text-orange-500" />,
        title: "Rate Lock Guarantee",
        description: "Lock in exchange rates for up to 24 hours to protect against market fluctuations.",
        highlight: "Guaranteed best rates"
      }
    ]
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-28 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-40"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-700/50">
              <span className="text-blue-400 font-medium">FEATURES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Financial Freedom <br />In Your Hands
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of finance with our all-in-one platform for crypto transactions, 
              bill payments, and currency conversion. Secure, fast, and designed for you.
            </p>
          </Motion.div>
          
          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'crypto' 
                  ? 'bg-blue-600 shadow-lg shadow-blue-500/30' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('crypto')}
            >
              <div className="flex items-center gap-2">
                <FaBitcoin className="text-yellow-400" />
                <span>Crypto Transactions</span>
              </div>
            </Motion.button>
            
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'payments' 
                  ? 'bg-blue-600 shadow-lg shadow-blue-500/30' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('payments')}
            >
              <div className="flex items-center gap-2">
                <FaMoneyBillWave className="text-purple-400" />
                <span>Bill Payments</span>
              </div>
            </Motion.button>
            
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'conversion' 
                  ? 'bg-blue-600 shadow-lg shadow-blue-500/30' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('conversion')}
            >
              <div className="flex items-center gap-2">
                <FaExchangeAlt className="text-teal-400" />
                <span>Money Conversion</span>
              </div>
            </Motion.button>
          </div>
          
          {/* Feature Cards */}
          <Motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features[activeTab].map((feature, index) => (
              <Motion.div 
                key={index}
                variants={item}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all"
              >
                <div className="p-8">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <div className="inline-block px-4 py-2 bg-cyan-900/30 text-cyan-400 rounded-full text-sm">
                    {feature.highlight}
                  </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              How It <span className="text-cyan-400">Works</span>
            </Motion.h2>
            <Motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming your financial experience in just a few simple steps
            </Motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Create Account", 
                description: "Sign up in minutes with your email and phone number" 
              },
              { 
                step: "02", 
                title: "Verify Identity", 
                description: "Complete KYC verification for enhanced security" 
              },
              { 
                step: "03", 
                title: "Fund Your Wallet", 
                description: "Add funds via bank transfer, card, or mobile money" 
              },
              { 
                step: "04", 
                title: "Start Transacting", 
                description: "Buy crypto, pay bills, or convert currencies instantly" 
              }
            ].map((step, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-cyan-500/30 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-900/30 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
                  <span className="text-cyan-400 text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Security Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-900/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-700/50">
              <span className="text-blue-400 font-medium">SECURITY FIRST</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Military-Grade <span className="text-cyan-400">Security</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your financial security is our top priority. We employ the most advanced security 
              measures to protect your assets and personal information.
            </p>
            
            <div className="space-y-6">
              {[
                "256-bit bank-level encryption for all transactions",
                "Biometric authentication and 2FA protection",
                "98% of assets stored in offline cold wallets",
                "Regular third-party security audits",
                "Real-time transaction monitoring"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-900/30 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </Motion.div>
          
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Encrypted", value: "100%" },
                  { title: "Uptime", value: "99.99%" },
                  { title: "Audits", value: "Monthly" },
                  { title: "Protected", value: "$250M" },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-900/50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{item.value}</div>
                    <div className="text-gray-400">{item.title}</div>
                  </div>
                ))}
              </div>
              
              <div className="absolute -inset-4 -z-10">
                <div className="w-full h-full rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl opacity-70"></div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
          </Motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Trusted by <span className="text-cyan-400">Thousands</span>
            </Motion.h2>
            <Motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hear from our users who are transforming their financial lives
            </Motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Crypto Trader",
                content: "This platform has revolutionized how I manage my crypto portfolio. The low fees and instant transactions are game-changers!",
                delay: 0
              },
              {
                name: "Sarah Williams",
                role: "Freelancer",
                content: "Paying international clients and bills has never been easier. The currency conversion rates are the best I've found anywhere.",
                delay: 0.1
              },
              {
                name: "David Chen",
                role: "Business Owner",
                content: "The bill payment feature saves me hours every month. Now I can manage all my business expenses in one place with just a few taps.",
                delay: 0.2
              }
            ].map((testimonial, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: testimonial.delay }}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all"
              >
                <div className="text-cyan-400 text-5xl mb-6">"</div>
                <p className="text-gray-300 mb-8 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700/50 pt-6">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-cyan-400">{testimonial.role}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your <span className="text-cyan-400">Financial Life</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of users who are already experiencing the future of finance
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/30"
              >
                Get Started for Free
              </Motion.button>
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500/10 transition-all"
              >
                View Pricing Plans
              </Motion.button>
            </div>
          </Motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;