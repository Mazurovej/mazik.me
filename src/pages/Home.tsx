import { motion } from 'framer-motion';
import { ArrowRight, GitBranch, MessageSquare } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { projects } from '../data/projects';
import { ProjectPreviewTile } from '../components/projects/ProjectPreviewTile';
import { Link } from 'react-router-dom';

const emilTransition = { duration: 0.4, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] };
const emilEnter = { opacity: 1, transform: "translateY(0px) scale(1)" };
const emilInitial = { opacity: 0, transform: "translateY(10px) scale(0.98)" };

export function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <SEO
        title="Home"
        description="Mazurovej - Minecraft Plugin & Skript Developer with 6+ Years of Experience."
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mazurovej",
          "jobTitle": "Minecraft Developer",
          "url": "https://mazurovej.dev"
        })}
      />

      {/* Centralized Link-in-bio style layout */}
      <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6">
        <div className="w-full max-w-2xl space-y-4">

          {/* Top Profile Card */}
          <motion.div
            initial={emilInitial}
            animate={emilEnter}
            transition={emilTransition}
            className="bg-surface border border-border rounded-[2rem] p-8"
          >
            <div className="flex items-center gap-6 mb-6">
              <img
                src="/logo.jpg"
                alt="Profile Avatar"
                className="w-24 h-24 rounded-3xl bg-background border border-border object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-white flex items-center gap-2">
                  Mazurovej
                </h1>
                <p className="text-sm font-semibold text-zinc-500 tracking-widest mt-1 uppercase">
                  Minecraft Dev &middot; Vite & React Dev
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Making Minecraft resources since 2018. Specializing in plugins, Skripts and other stuff.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Plugins', 'Skripts', 'Configs'].map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full border border-minecraft-green/20 text-minecraft-green text-xs font-bold uppercase tracking-wider bg-minecraft-green/5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={emilInitial}
            animate={emilEnter}
            transition={{ ...emilTransition, delay: 0.05 }}
            className="grid grid-cols-3 gap-4"
          >
            {[
              { value: '6', label: 'Years of Experience' },
              { value: '4.0', label: 'Rating' },
              { value: '20+', label: 'Creations' },
            ].map(stat => (
              <div key={stat.label} className="bg-surface border border-border rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-minecraft-green mb-1 drop-shadow-md">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Featured Products */}
          <motion.div
            initial={emilInitial}
            animate={emilEnter}
            transition={{ ...emilTransition, delay: 0.1 }}
            className="bg-surface border border-border rounded-[2rem] p-6"
          >
            <div className="flex justify-between items-center mb-6 px-2">
              <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                Featured Products
              </h2>
              <Link to="/projects" className="text-xs font-bold text-minecraft-green flex items-center gap-1 hover:text-minecraft-dark-green transition-colors uppercase tracking-widest">
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {featuredProjects.map(project => (
                <ProjectPreviewTile key={project.id} project={project} />
              ))}
            </div>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div
            initial={emilInitial}
            animate={emilEnter}
            transition={{ ...emilTransition, delay: 0.15 }}
            className="grid grid-cols-2 gap-4 pt-2"
          >
            {[
              { icon: MessageSquare, label: 'Discord', href: 'https://discordapp.com/users/671357390758871060' },
              { icon: GitBranch, label: 'GitHub', href: 'https://github.com/Mazurovej' },
            ].map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface border border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-colors hover:bg-surface-hover hover:border-zinc-700 text-zinc-400 hover:text-white group"
              >
                <social.icon className="w-6 h-6 group-hover:text-minecraft-green transition-colors" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {social.label}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Simple Footer */}
          <div className="pt-8 text-center text-xs font-bold text-zinc-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Mazurovej &middot; All Rights Reserved
          </div>

        </div>
      </div>
    </>
  );
}
