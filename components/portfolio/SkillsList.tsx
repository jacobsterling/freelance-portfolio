"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

interface Skill {
    name: string
    value: number
    description?: string
}

interface SkillsListProps {
    skills: Skill[]
    title: string
}

function SkillCard({ skill }: { skill: Skill }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Card
                        className="relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <CardContent className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                        </CardContent>
                        {isHovered && skill.description && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-primary/90 text-primary-foreground p-4 flex items-center justify-center text-center"
                            >
                                <p className="text-sm">{skill.description}</p>
                            </motion.div>
                        )}
                    </Card>
                </TooltipTrigger>
            </Tooltip>
        </TooltipProvider>
    )
}

function SkillCategory({ skills, title }: SkillsListProps) {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

const skillCategories = [
    {
        title: "Soft Skills",
        skills: [
            { name: "Problem-Solving", value: 90, description: "Adept at analyzing complex issues and developing innovative solutions" },
            { name: "Adaptability", value: 90, description: "Quick to learn and adjust to new technologies and methodologies" },
            { name: "Critical Thinking", value: 90, description: "Skilled in evaluating information objectively to make informed decisions" },
            { name: "Communication", value: 80, description: "Effective in conveying complex technical concepts to diverse audiences" },
            { name: "Leadership", value: 80, description: "Experienced in guiding teams and projects to successful outcomes" },
            { name: "Teamwork", value: 70, description: "Collaborative team player with a track record of successful group projects" },
        ],
    },
    {
        title: "Programming Languages",
        skills: [
            { name: "Python", value: 95, description: "Expert-level proficiency in data analysis, machine learning, and web development" },
            { name: "SQL", value: 90, description: "Advanced skills in database management and complex queries" },
            { name: "TypeScript", value: 70, description: "Proficient in building robust front-end applications" },
            { name: "Rust", value: 70, description: "Experienced in systems programming and high-performance computing" },
            { name: "C++", value: 60, description: "Competent in developing efficient algorithms and data structures" },
            { name: "Solidity", value: 40, description: "Basic knowledge of smart contract development for blockchain" },
            { name: "JavaScript", value: 40, description: "Foundational skills in web development and scripting" },
        ],
    },
    {
        title: "Application Frameworks",
        skills: [
            { name: "Flask", value: 80, description: "Proficient in building scalable web applications and RESTful APIs" },
            { name: "Next.js", value: 70, description: "Experienced in server-side rendering and static site generation" },
            { name: "Nuxt3", value: 70, description: "Skilled in developing Vue.js applications with server-side rendering" },
            { name: "Actix", value: 60, description: "Competent in building high-performance web services in Rust" },
            { name: "Streamlit", value: 60, description: "Proficient in creating interactive data science applications" },
            { name: "Dash", value: 60, description: "Experienced in developing analytical web applications" },
        ],
    },
    {
        title: "Data Engineering Tools",
        skills: [
            { name: "Pandas", value: 85, description: "Expert in data manipulation and analysis" },
            { name: "Mage.ai", value: 80, description: "Proficient in building and deploying data pipelines" },
            { name: "PostgreSQL", value: 80, description: "Advanced skills in relational database management" },
            { name: "Dask", value: 70, description: "Experienced in parallel computing for large-scale data processing" },
            { name: "Apache Spark", value: 60, description: "Competent in distributed data processing" },
        ],
    },
    {
        title: "AI Tools",
        skills: [
            { name: "OpenAI GPT models", value: 95, description: "Expert in leveraging large language models for various applications" },
            { name: "SciPy", value: 80, description: "Proficient in scientific computing and technical computing" },
            { name: "TensorFlow", value: 70, description: "Experienced in building and training deep learning models" },
            { name: "PyTorch", value: 70, description: "Skilled in developing and deploying neural networks" },
            { name: "SDV", value: 50, description: "Competent in synthetic data generation" },
            { name: "GANs", value: 50, description: "Basic knowledge of generative adversarial networks" },
        ],
    },
    {
        title: "Other Tools",
        skills: [
            { name: "Excel", value: 90, description: "Expert in data analysis, visualization, and financial modeling" },
            { name: "PowerBI", value: 85, description: "Proficient in creating interactive dashboards and business intelligence reports" },
        ],
    },
]

export function SkillsList() {
    return (
        <div className="space-y-8">
            {skillCategories.map((category) => (
                <SkillCategory key={category.title} title={category.title} skills={category.skills} />
            ))}
        </div>
    )
}