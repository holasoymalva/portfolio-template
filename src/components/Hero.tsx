import { portfolioData } from '../data/portfolio-data';

const Hero: React.FC = () => {
  const { intro } = portfolioData;

  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-3xl animate-fade-in">
        <h1 className="text-5xl font-bold mb-6 text-gradient">{intro.title}</h1>
        <p className="text-2xl leading-relaxed animate-slide-in" style={{ animationDelay: '0.3s' }}>
          {intro.description}
        </p>
        <div className="mt-8 flex gap-4" style={{ animationDelay: '0.6s' }}>
          <button className="px-8 py-3 bg-white text-black rounded-full hover-lift">
            View Projects
          </button>
          <button className="px-8 py-3 border border-white rounded-full hover-lift">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

