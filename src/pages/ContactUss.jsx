import React, { useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
	{
		icon: <FaEnvelope className="text-3xl text-black" />,
		title: "Email",
		desc: "support@xeroafrica.com",
		link: "mailto:support@xeroafrica.com",
	},
	{
		icon: <FaPhoneAlt className="text-3xl text-black" />,
		title: "Phone",
		desc: "+234 808 614 9495",
		link: "tel:+2348086149495",
	},
	{
		icon: <FaMapMarkerAlt className="text-3xl text-black" />,
		title: "Office",
		desc: "Lagos, Nigeria",
		link: null,
	},
];

const ContactUss = () => {
	const formRef = useRef(null);
	const detailsRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			formRef.current,
			{ y: 80, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: formRef.current,
					start: "top 80%",
				},
			}
		);
		gsap.fromTo(
			detailsRef.current,
			{ x: 100, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 1.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: detailsRef.current,
					start: "top 80%",
				},
			}
		);
	}, []);

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

	return (
		<div
			className="min-h-screen w-full bg-gradient-to-br from-white via-white to-black relative overflow-x-hidden"
			style={{ fontFamily: "Inter, sans-serif" }}
		>
			{/* Hero Section */}
			<section className="relative flex flex-col items-center justify-center min-h-[40vh] py-16 px-4">
				<Motion.h1
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, type: "spring" }}
					className="text-5xl md:text-6xl font-extrabold text-black drop-shadow-lg text-center mb-6"
				>
					Contact{" "}
					<span className="text-black">
						Us
					</span>
				</Motion.h1>
				<Motion.p
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 1.1 }}
					className="text-lg md:text-2xl text-black/80 max-w-2xl text-center mb-10"
				>
					We'd love to hear from you! Reach out for support, partnership, or
					general inquiries.
				</Motion.p>
				{/* Animated gradient line */}
				<Motion.div
					initial={{ width: 0 }}
					animate={{ width: "60%" }}
					transition={{ delay: 0.7, duration: 1.2 }}
					className="h-1 bg-gradient-to-r from-black via-gray-400 to-black rounded-full mt-4 mx-auto"
				/>
			</section>

			{/* Contact Form & Details */}
			<section className="relative py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
				{/* Contact Form */}
				<Motion.div
					ref={formRef}
					className="flex-1 bg-white rounded-3xl shadow-xl p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center w-full max-w-lg"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInUp}
				>
					<form className="w-full max-w-full space-y-6">
						<div>
							<label className="block text-black font-semibold mb-2">
								Name
							</label>
							<input
								type="text"
								className="w-full px-4 py-3 rounded-xl border border-black/20 focus:outline-none focus:ring-2 focus:ring-black bg-white text-black"
								placeholder="Your Name"
								required
							/>
						</div>
						<div>
							<label className="block text-black font-semibold mb-2">
								Email
							</label>
							<input
								type="email"
								className="w-full px-4 py-3 rounded-xl border border-black/20 focus:outline-none focus:ring-2 focus:ring-black bg-white text-black"
								placeholder="you@email.com"
								required
							/>
						</div>
						<div>
							<label className="block text-black font-semibold mb-2">
								Message
							</label>
							<textarea
								className="w-full px-4 py-3 rounded-xl border border-black/20 focus:outline-none focus:ring-2 focus:ring-black bg-white text-black"
								rows={5}
								placeholder="Type your message..."
								required
							/>
						</div>
						<Motion.button
							whileHover={{
								scale: 1.05,
								boxShadow: "0 4px 24px #00000033",
							}}
							whileTap={{ scale: 0.97 }}
							className="w-full h-[48px] rounded-xl bg-gradient-to-r from-black via-gray-700 to-black text-white font-bold text-lg shadow-lg transition-all duration-300"
							type="submit"
						>
							Send Message
						</Motion.button>
					</form>
				</Motion.div>

				{/* Contact Details */}
				<Motion.div
					ref={detailsRef}
					className="flex-1 flex flex-col gap-8 items-center justify-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInUp}
				>
					<div className="grid grid-cols-1 gap-8 w-full max-w-xs">
						<AnimatePresence>
							{contactDetails.map((detail, idx) => (
								<Motion.div
									key={detail.title}
									className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-black/10 hover:scale-105 hover:shadow-2xl transition-all duration-500"
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
									<div className="mb-3">{detail.icon}</div>
									<h3 className="text-lg font-bold text-black mb-1 text-center">
										{detail.title}
									</h3>
									{detail.link ? (
										<a
											href={detail.link}
											className="text-black underline text-base text-center break-all"
										>
											{detail.desc}
										</a>
									) : (
										<p className="text-black/80 text-base text-center">
											{detail.desc}
										</p>
									)}
								</Motion.div>
							))}
						</AnimatePresence>
					</div>
				</Motion.div>
			</section>

			{/* Decorative animated background elements */}
			<Motion.div
				className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
			>
				{/* Floating circles */}
				{[...Array(6)].map((_, i) => (
					<Motion.div
						key={i}
						className="absolute rounded-full bg-black/10"
						style={{
							width: `${60 + i * 15}px`,
							height: `${60 + i * 15}px`,
							left: `${10 + i * 12}%`,
							top: `${10 + (i % 2 === 0 ? 5 : 15) * i}px`,
							zIndex: 0,
						}}
						animate={{
							y: [0, 20, 0],
							x: [0, -10, 0],
							opacity: [0.7, 0.5, 0.7],
						}}
						transition={{
							repeat: Infinity,
							duration: 6 + i,
							ease: "easeInOut",
							delay: i * 0.5,
						}}
					/>
				))}
			</Motion.div>
		</div>
	);
};

export default ContactUss;
