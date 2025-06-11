import React from "react";
import { motion as Motion } from "framer-motion";
import logo from "../../public/Option.jpg";

const Loader = () => {
  return (
    <div className="fixed inset-0 w-full h-screen bg-gradient-to-br from-gray-900 to-black z-[9999] flex justify-center items-center">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <Motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? '#0ea5e9' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'
              } 0%, transparent 70%)`,
              opacity: 0.1,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Main loader container */}
      <Motion.div 
        className="relative w-[180px] h-[180px] flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Outer ring with gradient */}
        <div className="absolute w-full h-full">
          <div className="w-full h-full rounded-full border-8 border-transparent border-t-cyan-500 border-r-cyan-500 animate-spin"></div>
          <div className="absolute inset-0 rounded-full border-8 border-transparent border-b-purple-500 border-l-purple-500 animate-spin animation-delay-1000"></div>
        </div>
        
        {/* Middle ring with gradient */}
        <div className="absolute w-[70%] h-[70%]">
          <div className="w-full h-full rounded-full border-6 border-transparent border-t-blue-500 border-r-blue-500 animate-spin animation-delay-500"></div>
          <div className="absolute inset-0 rounded-full border-6 border-transparent border-b-indigo-500 border-l-indigo-500 animate-spin animation-delay-1500"></div>
        </div>
        
        {/* Inner ring with gradient */}
        <div className="absolute w-[40%] h-[40%]">
          <div className="w-full h-full rounded-full border-4 border-transparent border-t-cyan-300 border-r-cyan-300 animate-spin animation-delay-2000"></div>
        </div>
        
        {/* Logo with pulse animation */}
        <Motion.div
          className="relative z-10 w-24 h-24 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-cyan-500/30 shadow-lg flex items-center justify-center"
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 0px rgba(6, 182, 212, 0.2)",
              "0 0 0 10px rgba(6, 182, 212, 0)",
              "0 0 0 0px rgba(139, 92, 246, 0.2)",
              "0 0 0 10px rgba(139, 92, 246, 0)",
              "0 0 0 0px rgba(14, 165, 233, 0.2)",
              "0 0 0 10px rgba(14, 165, 233, 0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Motion.img
            src={logo}
            alt="Xero Africa Logo"
            className="w-16 h-auto"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </Motion.div>
        
        {/* Floating dots */}
        {[...Array(4)].map((_, i) => (
          <Motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            style={{
              left: `${Math.cos((i * Math.PI) / 2) * 80}px`,
              top: `${Math.sin((i * Math.PI) / 2) * 80}px`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </Motion.div>
      
      {/* Loading text */}
      <Motion.div 
        className="absolute bottom-1/4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">Loading Experience</h3>
        <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
          <Motion.div 
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </div>
      </Motion.div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 2s linear infinite;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Loader;