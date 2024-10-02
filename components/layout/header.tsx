import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Header() {
    return (
        <header className="bg-slate-900 shadow sticky top-0 z-10">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">Jacob Sterling</h1>
                    <p className="mt-1 text-sm text-gray-300">Freelance Data Scientist | Data Solutions and Application Development | Specializing in Process Automation</p>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="https://github.com/jacobsterling" target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6 text-gray-300 hover:text-white" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jsterling0171/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6 text-gray-300 hover:text-white" />
                    </Link>
                    <Link href="mailto:sterling0171@gmail.com">
                        <Mail className="h-6 w-6 text-gray-300 hover:text-white" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
