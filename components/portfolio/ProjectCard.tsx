import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardProps {
    title: string;
    description: string;
    service: string;
    chart?: React.ReactNode; // Make chart optional
    githubLink: string;
}

export function ProjectCard({ title, description, service, chart, githubLink }: ProjectCardProps) {
    return (
        <Card className="w-full max-w-4xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    <Github className="h-6 w-6" />
                </Link>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-sm text-muted-foreground mb-4">{description}</CardDescription>
                {chart && <div className="mb-4">{chart}</div>} {/* Only render chart if it exists */}
                <p className="text-sm text-muted-foreground mb-4">{service}</p>
            </CardContent>
        </Card>
    );
}