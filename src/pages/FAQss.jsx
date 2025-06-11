import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail, MdExpandMore } from "react-icons/md";
import {
  FaCloud,
  FaLock,
  FaCreditCard,
  FaRegQuestionCircle,
  FaHandsHelping,
  FaMobileAlt,
  FaUserShield,
  FaUsers,
} from "react-icons/fa";
import gsap from "gsap";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { BarLoader } from "react-spinners";

const faqs = [
  {
    question: "What is Xero Africa?",
    shortAnswer:
      "Xero Africa is a digital platform empowering Africa through innovative technology solutions.",
    details: [
      "We provide digital products and services tailored for African businesses and individuals.",
      "Our platform is built for reliability, scalability, and ease of use.",
      "We support startups, SMEs, and enterprises across the continent.",
    ],
    icon: <FaCloud className="text-xl" />,
  },
  {
    question: "How do I contact Xero Africa?",
    shortAnswer: "You can reach us via our contact form or official email.",
    details: [
      "Use the Contact Us page for quick inquiries.",
      "Email us directly at support@xeroafrica.com.",
      "Our support team responds within 24 hours.",
    ],
    icon: <FaHandsHelping className="text-xl" />,
  },
  {
    question: "What products does Xero Africa offer?",
    shortAnswer: "We offer mobile apps, web platforms, and APIs for businesses.",
    details: [
      "Mobile App: Manage your business on the go.",
      "Web Platform: Full-featured dashboard for all users.",
      "API: Integrate our services into your own products.",
      "Regular updates and new features based on user feedback"
    ],
    icon: <FaMobileAlt className="text-xl text-cyan-400" />,
  },
  {
    question: "Is my data secure with Xero Africa?",
    shortAnswer:
      "Yes, we use industry-standard encryption and best security practices.",
    details: [
      "All data is encrypted in transit and at rest.",
      "We comply with global data protection standards.",
      "Regular security audits and monitoring.",
      "Your privacy and security are our top priorities"
    ],
    icon: <FaLock className="text-xl" />,
  },
  {
    question: "How can I get support?",
    shortAnswer:
      "Our support team is available via email and help center.",
    details: [
      "Email: support@xeroafrica.com",
      "Help Center: Guides, FAQs, and troubleshooting tips.",
      "Personalized onboarding and technical assistance.",
    ],
    icon: <FaHandsHelping className="text-xl" />,
  },
  {
    question: "Can I join the Xero Africa team?",
    shortAnswer: "Yes! We are always looking for talented individuals.",
    details: [
      "Visit our Careers page for open positions.",
      "Submit your CV and cover letter online.",
      "We value diversity and innovation.",
    ],
    icon: <FaUsers className="text-xl" />,
  },
  {
    question: "Where can I find more information about pricing?",
    shortAnswer: "Our pricing details are available on the Products page.",
    details: [
      "Transparent pricing for all services.",
      "Custom plans available for enterprises.",
      "Contact us for partnership or bulk pricing.",
    ],
    icon: <FaCreditCard className="text-xl" />,
  },
  {
    question: "How do I keep my account secure?",
    shortAnswer: "Use strong passwords and enable two-factor authentication.",
    details: [
      "Never share your password with anyone.",
      "Enable 2FA in your account settings.",
      "Contact support if you notice suspicious activity.",
    ],
    icon: <FaUserShield className="text-xl" />,
  },
];

// Spinner component
const Spinner = () => (
  <div className="flex items-center justify-center py-6">
    <BarLoader color="#38bdf8" width={120} height={6} />
  </div>
);

const FAQss = () => {
  const bgRef = useRef(null);
  const [openIdx, setOpenIdx] = useState(null);
  const [loadingIdx, setLoadingIdx] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });

    // Animate background elements with GSAP
    if (bgRef.current) {
      gsap.to(".bg-circle-1", {
        y: 40,
        x: 30,
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        duration: 8,
        ease: "power1.inOut",
      });
      gsap.to(".bg-circle-2", {
        y: -30,
        x: -40,
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 10,
        ease: "power1.inOut",
      });
      gsap.to(".bg-circle-3", {
        y: 20,
        x: -20,
        scale: 1.15,
        repeat: -1,
        yoyo: true,
        duration: 12,
        ease: "power1.inOut",
      });
    }
  }, []);

  const handleToggle = (idx) => {
    // If the box is already open, just close it immediately (no spinner)
    if (openIdx === idx) {
      setOpenIdx(null);
      setLoadingIdx(null);
      return;
    }
    // If opening a new box, show spinner for 1s
    setLoadingIdx(idx);
    setOpenIdx(null);
    setTimeout(() => {
      setOpenIdx(idx);
      setLoadingIdx(null);
    }, 1000);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden pt-30"
      style={{
        background: "linear-gradient(120deg, #0f172a 60%, #1e293b 80%, #0c4a6e 100%)"
      }}
    >
      {/* Animated Geometric background elements */}
      <div ref={bgRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <Motion.div
          className="bg-circle-1 absolute top-[10%] left-[10%] w-[220px] h-[220px] rounded-full z-0"
          style={{ background: "rgba(56, 189, 248, 0.1)", boxShadow: "0 0 80px 40px rgba(56, 189, 248, 0.07)" }}
          animate={{ x: [0, 60, 0], y: [0, 60, 0] }}
          transition={{ duration: 13, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
        <Motion.div
          className="bg-circle-2 absolute top-[60%] right-[15%] w-[270px] h-[270px] rounded-full z-0"
          style={{ background: "rgba(30, 58, 138, 0.1)", boxShadow: "0 0 80px 40px rgba(30, 58, 138, 0.07)" }}
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
        <Motion.div
          className="bg-circle-3 absolute bottom-[15%] left-[20%] w-[200px] h-[200px] rounded-full z-0"
          style={{ background: "rgba(14, 165, 233, 0.1)", boxShadow: "0 0 60px 30px rgba(14, 165, 233, 0.06)" }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 17, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />

        {/* Diagonal lines */}
        <Motion.div
          className="absolute inset-0"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20" />
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-15" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-10" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-5" />
        </Motion.div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <FaRegQuestionCircle className="text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4"></div>
        </h1>
        
        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => (
            <Motion.div
              key={idx}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-cyan-500/30"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <button
                className="w-full flex items-center gap-4 px-6 py-5 focus:outline-none group transition-colors hover:bg-cyan-500/10"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIdx === idx}
                disabled={loadingIdx !== null && loadingIdx !== idx}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
                  {React.cloneElement(faq.icon, { className: "text-white" })}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    {faq.shortAnswer}
                  </p>
                </div>
                <div className="ml-2 flex items-center min-w-[32px] min-h-[32px] justify-center">
                  {loadingIdx === idx ? (
                    <BarLoader color="#38bdf8" width={32} height={4} />
                  ) : (
                    <span
                      className={`transition-transform duration-300 ${
                        openIdx === idx ? "rotate-180 text-cyan-400" : "text-gray-500"
                      }`}
                    >
                      <MdExpandMore size={24} />
                    </span>
                  )}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === idx && !loadingIdx && (
                  <Motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-gray-700/50">
                      <ul className="space-y-3 text-gray-300">
                        {faq.details.map((line, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-cyan-400 mr-2 mt-1">•</span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </Motion.div>
          ))}
        </div>
        
        {/* Contact Section */}
        <Motion.div
          className="mt-12 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30 p-8 text-center"
          data-aos="fade-up"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MdEmail className="text-cyan-400 text-xl" />
              <h3 className="text-xl font-semibold text-white">
                Need more information?
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Contact our support team for any additional questions or assistance.
            </p>
            <a
              href="mailto:support@xeroafrica.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition-colors"
            >
              <MdEmail className="text-white" />
              support@xeroafrica.com
            </a>
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default FAQss;