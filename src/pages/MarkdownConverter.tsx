import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

const emilTransition = { duration: 0.4, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] };
const emilEnter = { opacity: 1, transform: "translateY(0px) scale(1)" };
const emilInitial = { opacity: 0, transform: "translateY(10px) scale(0.98)" };

export function MarkdownConverter() {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  // If input is empty, return empty, otherwise JSON stringify and remove the wrapping quotes
  const output = input ? JSON.stringify(input).slice(1, -1) : '';

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEO
        title="Markdown Converter"
        description="Convert multi-line markdown to single-line string for devnotes"
      />
      <article className="min-h-screen flex flex-col items-center py-24 px-4 sm:px-6">
        <div className="w-full max-w-4xl space-y-4">
          <motion.div
            initial={emilInitial}
            animate={emilEnter}
            transition={emilTransition}
            className="bg-surface border border-border rounded-[2rem] p-6 md:p-8"
          >

            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Markdown Converter
              </h1>
            </div>

            <p className="text-sm text-zinc-400 mb-8">
              easy tool to make your markdown ready for devnotes
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                  Input
                </label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full h-96 bg-[#0f0f11] border border-border/50 rounded-2xl p-4 text-sm text-zinc-300 font-mono focus:border-minecraft-green/50 focus:outline-none resize-none transition-colors"
                  placeholder="makrdown here..."
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                    Output
                  </label>
                  <button
                    onClick={handleCopy}
                    disabled={!output}
                    className="flex items-center gap-1.5 px-3 py-1 bg-minecraft-green/10 border border-minecraft-green/20 rounded-lg text-[10px] font-bold text-minecraft-green hover:bg-minecraft-green hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                  >
                    {copied ? <><CheckCircle2 className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
                  </button>
                </div>
                <textarea
                  value={output}
                  readOnly
                  className="w-full h-96 bg-[#0f0f11] border border-border/50 rounded-2xl p-4 text-sm text-minecraft-green font-mono focus:outline-none resize-none selection:bg-minecraft-green/30"
                  placeholder="devnotes text here..."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
}
