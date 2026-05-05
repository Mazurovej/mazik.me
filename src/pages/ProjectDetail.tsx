import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { SEO } from '../components/seo/SEO';
import { projects } from '../data/projects';

const emilTransition = { duration: 0.4, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] };
const emilEnter = { opacity: 1, transform: "translateY(0px) scale(1)" };
const emilInitial = { opacity: 0, transform: "translateY(10px) scale(0.98)" };

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.name,
    "applicationCategory": "GameApplication",
    "operatingSystem": "Java",
    "description": project.description,
  };

  return (
    <>
      <SEO
        title={project.name}
        description={project.description}
        schema={JSON.stringify(schema)}
      />

      <article className="min-h-screen flex flex-col items-center py-24 px-4 sm:px-6">
        <div className="w-full max-w-5xl space-y-4">

          <motion.div
            initial={emilInitial}
            animate={emilEnter}
            transition={emilTransition}
            className="bg-surface border border-border rounded-[2rem] p-8"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full border border-minecraft-green/20 text-minecraft-green text-[10px] font-bold uppercase tracking-wider bg-minecraft-green/5">
                  {tag}
                </span>
              ))}
              {project.version && (
                <span className="px-3 py-1 rounded-full border border-border text-zinc-400 text-[10px] font-mono font-bold uppercase tracking-wider bg-surface-hover">
                  {project.version}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {project.name}
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-minecraft-green/10 border border-minecraft-green/20 text-minecraft-green hover:bg-minecraft-green hover:text-black transition-colors rounded-xl font-bold text-xs uppercase tracking-widest flex-1"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-surface-hover border border-border text-white hover:border-zinc-700 transition-colors rounded-xl font-bold text-xs uppercase tracking-widest flex-1"
                >
                  <GitBranch className="w-4 h-4" /> View Source
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={emilInitial}
            animate={emilEnter}
            transition={{ ...emilTransition, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="md:col-span-2 bg-surface border border-border rounded-2xl p-6">
              <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Overview</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.overview}
              </p>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Codebase</h2>
              <ul className="space-y-3">
                {project.techStack.map(tech => (
                  <li key={tech} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 bg-minecraft-green rounded-full shadow-sm"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={emilInitial}
            animate={emilEnter}
            transition={{ ...emilTransition, delay: 0.2 }}
            className="bg-surface border border-border rounded-[2rem] p-6"
          >
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6 px-2">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map(feature => (
                <div key={feature} className="bg-background border border-border p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-minecraft-green shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {project.devNotes && project.devNotes.map((note, idx) => (
            <motion.div
              key={`note-${idx}`}
              initial={emilInitial}
              animate={emilEnter}
              transition={{ ...emilTransition, delay: 0.3 + (idx * 0.1) }}
              className="bg-[#0f0f11] border border-border/50 rounded-[2rem] p-6 md:p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-minecraft-green/20 group-hover:bg-minecraft-green transition-colors" />
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xs font-mono font-bold text-minecraft-green tracking-wide flex items-center gap-2 uppercase">
                  <span className="text-zinc-600">~</span> {note.title}
                </h2>
              </div>

              <div className="text-sm text-zinc-300 leading-relaxed 
                [&>p]:mb-4 [&>p:last-child]:mb-0 
                [&>table]:w-full [&>table]:border-collapse [&>table]:mb-4
                [&_th]:border [&_th]:border-border/50 [&_th]:p-2 [&_th]:bg-surface [&_th]:text-left [&_th]:text-zinc-200
                [&_td]:border [&_td]:border-border/50 [&_td]:p-2
              ">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ node, inline, className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || '')
                      return !inline && match ? (
                        <SyntaxHighlighter
                          {...props}
                          style={vscDarkPlus as any}
                          language={match[1]}
                          PreTag="div"
                          className="!mt-0 !mb-4 rounded-xl border border-border/50 !bg-black text-xs"
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code {...props} className="bg-surface px-1.5 py-0.5 rounded-md text-minecraft-green font-mono text-xs border border-border/50">
                          {children}
                        </code>
                      )
                    }
                  }}
                >
                  {note.content}
                </ReactMarkdown>
              </div>
            </motion.div>
          ))}

        </div>
      </article>
    </>
  );
}
