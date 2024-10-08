import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
                    Jacob Sterling
                </Link>
                <div className="flex space-x-6">
                    <Link href="https://github.com/jacobsterling" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com/in/jacobsterling" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:jacob.sterling@example.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
