import { portfolioData } from '../data/portfolio-data';

const Hero: React.FC = () => {
  const { intro } = portfolioData;

  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">{intro.title}</h1>
        <p className="text-2xl leading-relaxed">{intro.description}</p>
      </div>
    </section>
  );
};

export default Hero;

