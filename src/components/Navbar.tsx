export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-[20px]">analytics</span>
                    </div>
                    <span className="font-bold text-lg tracking-tight text-white uppercase tracking-widest">DS Portfolio</span>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#about">About</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#experience">Experience</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#projects">Projects</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#stack">Tech Stack</a>
                </nav>
                <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer">
                    Resume
                </button>
            </div>
        </header>
    );
}
