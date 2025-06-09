import React from "react";
import { motion as Motion } from "motion/react"
import { FaMobileAlt, FaGlobe, FaPlug, FaCloud, FaLock } from "react-icons/fa";

const products = [
	{
		icon: <FaMobileAlt className="text-4xl text-black" />,
		title: "Mobile App",
		desc: "Manage your business on the go with our intuitive mobile application, available for iOS and Android.",
	},
	{
		icon: <FaGlobe className="text-4xl text-gray-700" />,
		title: "Web Platform",
		desc: "Access a full-featured dashboard for all users, with real-time analytics and business tools.",
	},
	{
		icon: <FaPlug className="text-4xl text-black" />,
		title: "API Integration",
		desc: "Integrate Xero Africa’s services into your own products with our secure and robust APIs.",
	},
	{
		icon: <FaCloud className="text-4xl text-gray-700" />,
		title: "Cloud Services",
		desc: "Enjoy reliable, scalable, and secure cloud infrastructure for your business operations.",
	},
	{
		icon: <FaLock className="text-4xl text-black" />,
		title: "Security Suite",
		desc: "Industry-standard encryption, two-factor authentication, and regular security audits.",
	},
];

const Productss = () => {
	return (
		<div className="min-h-screen w-full bg-gradient-to-br from-white via-white to-black pt-20 px-4">
			<section className="flex flex-col items-center justify-center mb-12">
				<Motion.h1
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, type: "spring" }}
					className="text-4xl md:text-6xl font-extrabold text-black text-center mb-4"
				>
					Our Products
				</Motion.h1>
				<Motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 1 }}
					className="text-lg md:text-2xl text-black/80 max-w-2xl text-center mb-8"
				>
					Discover the suite of digital solutions Xero Africa offers to empower
					your business and streamline your operations.
				</Motion.p>
				<Motion.div
					initial={{ width: 0 }}
					animate={{ width: "60%" }}
					transition={{ delay: 0.4, duration: 1.2 }}
					className="h-1 bg-gradient-to-r from-black via-gray-400 to-black rounded-full mx-auto"
				/>
			</section>
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
				{products.map((product, idx) => (
					<Motion.div
						key={product.title}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							delay: idx * 0.1,
							duration: 0.7,
							type: "spring",
						}}
						className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center border border-black/10 hover:scale-105 hover:shadow-2xl transition-all duration-500"
					>
						<div className="mb-4">{product.icon}</div>
						<h3 className="text-xl font-bold text-black mb-2 text-center">
							{product.title}
						</h3>
						<p className="text-black/80 text-base text-center">
							{product.desc}
						</p>
					</Motion.div>
				))}
			</section>
		</div>
	);
};

export default Productss;
