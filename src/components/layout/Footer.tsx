import { GitBranch, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-zinc-400 text-sm">
          &copy; {new Date().getFullYear()} Mazurovej. All rights reserved.
        </div>
        
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GitBranch className="w-5 h-5" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="Discord"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
