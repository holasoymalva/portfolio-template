import { portfolioData } from '../data/portfolio-data';

const Footer: React.FC = () => {
  const { contact, social } = portfolioData;

  return (
    <footer className="py-20 px-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold mb-4">YourName.dev</h2>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Looking for a front-end developer?
          </h3>
          <button className="px-6 py-2 bg-white text-black rounded-full">
            Let's talk
          </button>
        </div>
      </div>
      <div className="flex space-x-4 mt-12">
        <a href={social.github} className="text-gray-500 hover:text-gray-300">
          GitHub
        </a>
        <a href={social.linkedin} className="text-gray-500 hover:text-gray-300">
          LinkedIn
        </a>
        <a href={social.twitter} className="text-gray-500 hover:text-gray-300">
          Twitter
        </a>
        <a href={social.instagram} className="text-gray-500 hover:text-gray-300">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;