import { portfolioData } from '../data/portfolio-data';

const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section className="py-20 px-6">
      <h2 className="text-2xl font-bold mb-10">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80">
              <div className="flex space-x-2 mb-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
