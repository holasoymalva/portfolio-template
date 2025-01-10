import { portfolioData } from '../data/portfolio-data';

const Services: React.FC = () => {
  const { services } = portfolioData;

  return (
    <section id='services' className="py-20 px-6">
      <h2 className="text-2xl font-bold mb-10">My Services</h2>
      {services.map((service) => (
        <div key={service.id} className="mb-20">
          <div className="text-8xl font-bold mb-6">{service.number}</div>
          <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
          <p className="mb-8 max-w-3xl">{service.description}</p>
          <div className="space-y-2">
            {service.details.map((detail, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">
                  ({String(index + 1).padStart(2, "0")})
                </span>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
