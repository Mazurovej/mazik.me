import { SEO } from '../components/seo/SEO';
import { projects } from '../data/projects';
import { ProjectPreviewTile } from '../components/projects/ProjectPreviewTile';
import { motion } from 'framer-motion';

const emilTransition = { duration: 0.4, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] };
const emilEnter = { opacity: 1, transform: "translateY(0px) scale(1)" };
const emilInitial = { opacity: 0, transform: "translateY(10px) scale(0.98)" };

export function Projects() {
  return (
    <>
      <SEO 
        title="Projects" 
        description="Explore the Minecraft plugins, Skript systems, and backend tools I've developed." 
      />
      
      <div className="min-h-screen flex flex-col items-center py-24 px-4 sm:px-6">
        <div className="w-full max-w-2xl space-y-6">
          <motion.div
            initial={emilInitial}
            animate={emilEnter}
            transition={emilTransition}
          >
            <h1 className="text-3xl font-bold text-white mb-2">Systems & Plugins</h1>
            <p className="text-zinc-400 text-sm leading-relaxed">
              A collection of products, systems, and open-source resources I've built for the Minecraft ecosystem. All products come with lifetime support.
            </p>
          </motion.div>

          <motion.div 
            initial={emilInitial}
            animate={emilEnter}
            transition={{ ...emilTransition, delay: 0.1 }}
            className="bg-surface border border-border rounded-[2rem] p-6"
          >
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6 px-2">
              All Products
            </h2>
            
            <div className="flex flex-col gap-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={emilInitial}
                  animate={emilEnter}
                  transition={{ ...emilTransition, delay: 0.1 + index * 0.05 }}
                >
                  <ProjectPreviewTile project={project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
