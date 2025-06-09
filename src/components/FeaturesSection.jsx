import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'Payroll Card',
    description:
      'Streamlined wage access – The Spentra Payroll Card functions like a debit card, only better. Wages are loaded onto the card each payday...',
    image: '/images/payroll-card.png',
    btnText: 'Learn More',
  },
  {
    title: 'Money Earned®',
    description:
      'Enhancing financial flexibility – The Money Earned® feature lets employees access up to 50% of their earned net wages at any time...',
    image: '/images/money-earned.png',
    btnText: 'Learn More',
    reverse: true,
  },
  {
    title: 'Instapay',
    description:
      'Streamlined Final Pay Disbursement – Streamline employee exits with InstaPay, ensuring final pay is processed swiftly...',
    image: '/images/instapay.png',
    btnText: 'Learn More',
  },
];

export default function FeaturesSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  );
}
