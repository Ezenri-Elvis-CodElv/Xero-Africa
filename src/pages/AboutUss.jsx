import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaGlobe,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import { motion as Motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
const coreValues = [
  {
    icon: <FaHandshake className="text-4xl text-cyan-400" />,
    title: "Integrity",
    desc: "We uphold the highest standards of integrity in all our actions and decisions.",
  },
  {
    icon: <FaLightbulb className="text-4xl text-cyan-400" />,
    title: "Innovation",
    desc: "We foster creativity and embrace new ideas to drive progress and deliver value.",
  },
  {
    icon: <FaUsers className="text-4xl text-cyan-400" />,
    title: "Collaboration",
    desc: "We believe in the power of teamwork and open communication to achieve shared goals.",
  },
  {
    icon: <FaGlobe className="text-4xl text-cyan-400" />,
    title: "Diversity",
    desc: "We celebrate diversity and create an inclusive environment for all.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-cyan-400" />,
    title: "Trust",
    desc: "We build trust through transparency, reliability, and accountability.",
  },
  {
    icon: <FaRocket className="text-4xl text-cyan-400" />,
    title: "Excellence",
    desc: "We strive for excellence in everything we do, exceeding expectations.",
  },
];

const AboutUss = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      missionRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      visionRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      valuesRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  // Framer Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black relative overflow-x-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4">
        <Motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg text-center mb-6"
        >
          About <span className="text-cyan-400">Xero Africa</span>
        </Motion.h1>
        <Motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.1 }}
          className="text-lg md:text-2xl text-gray-300 max-w-3xl text-center mb-10"
        >
          Empowering businesses with secure, scalable, and innovative technology solutions for a borderless Africa.
        </Motion.p>
        {/* Animated gradient line */}
        <Motion.div
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ delay: 0.7, duration: 1.2 }}
          className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full mt-10 mx-auto"
        />
      </section>

      {/* Mission Section */}
      <section
        ref={missionRef}
        className="relative py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-10"
      >
        <Motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            To revolutionize Africa's digital landscape by providing secure, seamless,
            and scalable solutions that empower businesses and individuals to thrive
            in a digital-first world.
          </p>
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="w-24 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-2"
          />
        </Motion.div>
        <Motion.div
          className="flex-1 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <div className="w-64 h-64 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-3xl shadow-xl flex items-center justify-center">
            <span className="text-cyan-400 font-bold text-xl">Mission</span>
          </div>
        </Motion.div>
      </section>

      {/* Vision Section */}
      <section
        ref={visionRef}
        className="relative py-16 px-4 flex flex-col-reverse md:flex-row items-center justify-center gap-10"
      >
        <Motion.div
          className="flex-1 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <div className="w-64 h-64 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-3xl shadow-xl flex items-center justify-center">
            <span className="text-cyan-400 font-bold text-xl">Vision</span>
          </div>
        </Motion.div>
        <Motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            To be the leader in Africa's digital transformation, enabling frictionless
            commerce and financial inclusion for everyone, everywhere.
          </p>
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="w-24 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-2"
          />
        </Motion.div>
      </section>

      {/* Core Values Section */}
      <section
        ref={valuesRef}
        className="relative py-20 px-4 flex flex-col items-center justify-center bg-gray-900/30 backdrop-blur-lg"
      >
        <Motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
        >
          Our Core Values
        </Motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-5xl">
          <AnimatePresence>
            {coreValues.map((value, idx) => (
              <Motion.div
                key={value.title}
                className="bg-gray-800/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center border border-cyan-500/30 hover:scale-105 hover:shadow-2xl transition-all duration-500"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.7,
                  type: "spring",
                }}
                exit={{ opacity: 0, y: 60 }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-base text-center">
                  {value.desc}
                </p>
              </Motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Animated underline */}
        <Motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ delay: 0.3, duration: 1.2 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full mt-12 mx-auto"
        />
      </section>
    </div>
  );
};

export default AboutUss;