import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Header() {
    return (
        <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-10">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Jacob Sterling</h1>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Freelance Data Scientist | Innovative Problem Solver | Specializing in Process Automation And Application Development | Experienced in AI and Machine Learning Algorithms</p>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="https://github.com/jacobsterling" target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jsterling0171/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                    </Link>
                    <Link href="mailto:sterling0171@gmail.com">
                        <Mail className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
