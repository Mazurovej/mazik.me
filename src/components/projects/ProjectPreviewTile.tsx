import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Project } from '../../data/projects';

interface Props {
  project: Project;
}

export function ProjectPreviewTile({ project }: Props) {
  const accentColor = project.accentColor || '#5eead4';
  const accentStyle = {
    '--project-accent': accentColor,
  } as React.CSSProperties;

  return (
    <Link to={`/projects/${project.id}`} style={accentStyle}>
      <motion.div
        whileHover={{ scale: 0.99 }}
        whileTap={{ scale: 0.97 }}
        className="group relative flex items-center justify-between p-4 rounded-2xl bg-background border border-border hover:bg-surface-hover hover:border-zinc-700 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center shrink-0 overflow-hidden relative">
            <img
              src={project.icon}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover z-10"
            />

          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-lg font-bold text-white group-hover:text-[var(--project-accent)] transition-colors">
                {project.name}
              </h3>
              {project.isPopular && (
                <span className="bg-[color-mix(in_srgb,var(--project-accent)_10%,transparent)] text-[var(--project-accent)] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-[color-mix(in_srgb,var(--project-accent)_20%,transparent)]">
                  New
                </span>
              )}
              {project.version && (
                <span className="bg-surface-hover text-zinc-500 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-border">
                  {project.version}
                </span>
              )}
            </div>
            <p className="text-sm text-zinc-400 mt-0.5 line-clamp-1">
              {project.hook}
            </p>
          </div>
        </div>

        {(project.price || project.stars) && (
          <div className="hidden sm:flex items-center gap-4 text-right">
            <div className="flex flex-col items-end">
              {project.price && (
                <div className="flex items-center gap-1 text-[var(--project-accent)] text-xs font-bold mb-1">
                  {project.price}
                </div>
              )}
              {project.stars && (
                <span className="flex items-center gap-1 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  <Star className="w-3 h-3 fill-zinc-500" /> {project.stars.toFixed(1)}
                </span>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </Link>
  );
}
