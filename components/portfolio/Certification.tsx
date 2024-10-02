'use client'

import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

interface CertificationDisplayProps {
    title: string;
    badge: string;
    date: string;
    achievements: string[];
}

export function CertificationDisplayComponent({
    title,
    badge,
    date,
    achievements
}: CertificationDisplayProps) {
    return (

        <CardContent>
            <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <div className="flex items-center mt-1 sm:mt-0">
                        <Badge variant="secondary" className="mr-2">{badge}</Badge>
                        <span className="text-sm text-muted-foreground">{date}</span>
                    </div>
                </div>
                <ul className="list-none space-y-2 pl-5">
                    {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                            <span>{achievement}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </CardContent>
    )
}