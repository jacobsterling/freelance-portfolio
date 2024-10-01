import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Skill {
    name: string;
    value: number;
}

interface SkillsListProps {
    skills: Skill[];
    title: string;
}

export function SkillsList({ skills, title }: SkillsListProps,) {
    return (
        <Card className="md:col-span-2">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {skills.map((skill) => (
                        <div key={skill.name}>
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">{skill.name}</span>
                                <span className="text-sm font-medium">{skill.value}%</span>
                            </div>
                            <Progress value={skill.value} className="w-full" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
