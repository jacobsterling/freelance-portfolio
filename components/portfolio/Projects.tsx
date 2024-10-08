import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Github } from 'lucide-react'
import Link from 'next/link'
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import Image from 'next/image';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

interface ProjectCardProps {
    title: string;
    description: React.ReactNode;
    service: string;
    chart?: React.ReactNode; // Make chart optional
    githubLink?: string;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']


const sections = [
    {
        title: "Quantitative Analysis",
        description: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Developed trading algorithms in Python, utilizing Pandas for data manipulation and machine learning models for enhanced accuracy.</li>
                <li>Conducted advanced data analysis and visualized financial trends from stock and crypto-currency data with Matplotlib, Seaborn, and Plotly.</li>
                <li>Performed extensive backtesting to refine execution, alpha and risk models to construct reliable trading strategies.</li>
            </ul>
        ),
        service: "Accurate mathematical modelling and financial analysis",
        chart: (
            <ResponsiveContainer width="100%" height={300}>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="relative w-full sm:w-1/2 h-[300px]">
                        <Image
                            src="/project-images/order_heat_map.png"
                            alt="Order Heat Map"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="relative w-full sm:w-1/2 h-[300px]">
                        <Image
                            src="/project-images/volitility_surface_analysis.png"
                            alt="Volatility Surface Analysis"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </ResponsiveContainer>
        ),
        githubLink: "https://github.com/jacobsterling/quantative-analysis"
    },
    {
        title: "Application Development",
        description: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Developed interactive frontend with Nuxt3 and JavaScript Game Engine (Phaser3)</li>
                <li>Integrated AI-generated art using Stable Diffusion</li>
                <li>Backend Rust WebSocket server implemented with high performance web framework Actix</li>
                <li>Stored game data using PostgreSQL and managed with ORM frameworks; Diesel (Rust) – Backend, Prisma (Typescript) – Frontend</li>
                <li>Integrated blockchain technology NEAR Protocol for in-game asset management and transactions.</li>
            </ul>
        ),
        service: "Experience in full-stack development, combining cutting-edge web technologies with blockchain integration, systems design, integration and development",
        chart: (
            <ResponsiveContainer width="100%" height={300}>
                <div className="relative w-full h-full">
                    <Image
                        src="/project-images/Wizard.png"
                        alt="Web3 Game Development"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </ResponsiveContainer>
        ),
        githubLink: "https://github.com/jacobsterling/delt"
    },
    {
        title: "In-depth Reporting And Data Representation",
        description: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Implemented machine learning models for risk analysis on the SpaceX Falcon 9 to predict the first stage landing success rate.</li>
                <li>Web scraping and API Data collection, followed by processing raw data</li>
                <li>Exploratory data analysis with visualizations and in-depth insights</li>
                <li>Predictive machine learning models and model evaluation</li>
            </ul>
        ),
        service: "SpaceX Falcon 9 First Stage Landing Prediction",
        chart: (
            <ResponsiveContainer width="100%" height={500}>
                <div className="relative w-full h-full">
                    <Image
                        src="/project-images/space_x_report.png"
                        alt="SpaceX Data Science Report"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </ResponsiveContainer>
        ),
        githubLink: "https://github.com/jacobsterling/data-science/tree/main/spacex_project/Falcon9_First_Stage_Landing_Prediction_Report.ipynb"
    },
    {
        title: "Predictive Analysis",
        description: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Preprocesses and analyses house sales data to uncover insights.</li>
                <li>Developed predictive ML Model from multiple key features of the data set to predict house prices</li>
                <li>Model evaluation and refinement</li>
            </ul>
        ),
        service: "Housing Price Analysis using Linear Regression",
        chart: (
            <ResponsiveContainer width="100%" height={300}>
                <div className="relative w-full h-full">
                    <Image
                        src="/project-images/regression_house_prices.png"
                        alt="House Prices in King County, USA"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </ResponsiveContainer>
        ),
        githubLink: "https://github.com/jacobsterling/data-science/blob/main/Housing_Price_Prediction.ipynb"
    },
    {
        title: "Classification Modeling",
        description: (
            <div>

                <ul className="list-disc pl-5 space-y-2">
                    <li>Uses data from Kaggle to train a model to detect fraudulent credit card transactions</li>
                    <li>Built a Decision Tree Classifier model using Scikit-Learn and Snap-ML</li>
                    <li>Created and evaluated Scikit-Learn and Snap-ML Vector Machine Models for comparison</li>
                </ul>

                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm text-muted-foreground mb-4">SVM Cancer Cell Classification</CardTitle>
                    <Link href={"https://github.com/jacobsterling/data-science/blob/main/Clas_SVM_cancer.ipynb"} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                        <Github className="h-6 w-6" />
                    </Link>
                </CardHeader>


                <div className="relative w-full h-64">
                    <Image
                        src="/project-images/cancer_cell_classification.png"
                        alt="Cancer Cell Classification Chart"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                <ul className="list-disc pl-5 space-y-2">
                    <li>Built and trained a SVM (Support Vector Machines) model using human cell records to classify cells to whether the samples are benign or malignant.</li>
                    <li>Used multiple kernel functions to process the data</li>
                    <li>Evaluated and compared each kernel functions performance to identify cancer cells.</li>
                </ul>
            </div>
        ),
        service: "Financial Fraud Detection and Prevention Systems",
        chart: (
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={[
                            { name: 'Genuine', value: 99.8 },
                            { name: 'Fraudulent', value: 0.2 },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {
                            [{ name: 'Genuine', value: 99.8 }, { name: 'Fraudulent', value: 0.2 }].map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        ),
        githubLink: "https://github.com/jacobsterling/data-science/blob/main/Classification_Tree_Credit_Card_Fraud_Detection.ipynb"
    },
    {
        title: "Model Evaluation",
        description: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Collected and preprocessed data from the Australian Government&apos;s Bureau of Meteorology</li>
                <li>Trained and evaluated multiple ML models:
                    <ul className="list-circle pl-5 space-y-1">
                        <li>Logistic Regression</li>
                        <li>K-Nearest Neighbor</li>
                        <li>Decision Tree</li>
                        <li>Support Vector Machine</li>
                        <li>Linear Regression</li>
                    </ul>
                </li>
                <li>Compared each model&apos;s performance across multiple metrics:
                    <ul className="list-circle pl-5 space-y-1">
                        <li>Accuracy</li>
                        <li>Jaccard index</li>
                        <li>F1-Score</li>
                        <li>Log Loss</li>
                    </ul>
                </li>
            </ul>
        ),
        chart: (
            <div className="relative w-full h-64">
                <Image
                    src="/project-images/weather_predictions.png"
                    alt="Weather Classification Model Performance"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        ),
        service: "Weather Classification and Rainfall Prediction",
        githubLink: "https://github.com/jacobsterling/data-science/blob/main/Classification_Rain_Fall.ipynb"
    },
]

function ProjectCard({ title, description, service, chart, githubLink }: ProjectCardProps) {
    return (
        <Card className="w-full max-w-4xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                {githubLink && (
                    <Button variant="outline">
                        <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                            <Github className="h-6 w-6 mr-2" />
                        </Link>
                        View on Github
                    </Button>
                )}
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{service}</p>
                {chart && <div className="mb-4">{chart}</div>} {/* Only render chart if it exists */}
                <CardDescription className="text-sm text-muted-foreground mb-4">{description}</CardDescription>
            </CardContent>
        </Card>
    );
}

export function Projects() {

    const [activeSection] = useState(0)
    const sectionRefs = useRef<(HTMLElement | null)[]>([])

    return (
        <>
            {
                sections.map((section, index) => (
                    <section
                        key={index}
                        ref={(el: HTMLElement | null) => {
                            if (el) sectionRefs.current[index] = el;
                        }}
                        className={`min-h-screen flex items-center justify-center p-8 ${activeSection === index ? 'opacity-100' : 'opacity-50'
                            } transition-opacity duration-500`}
                    >
                        <ProjectCard
                            title={section.title}
                            description={section.description}
                            service={section.service}
                            chart={section.chart}
                            githubLink={section.githubLink}
                        />
                    </section>
                ))
            }
        </>
    );
}

export function ProjectSummary({ projectData }: { projectData: { id: number, title: string, description: string }[] }) {

    const scrollRef = useRef<HTMLDivElement | null>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollAmount = direction === 'left' ? container.scrollLeft - 200 : container.scrollLeft + 200;
            container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full max-w-4xl relative">
            <h3 className="text-2xl font-bold mb-4">Featured Projects</h3>
            <div className="flex items-center">
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-0 z-10"
                    onClick={() => scroll('left')}
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {projectData.map((project) => (
                        <Card key={project.id} className="flex-shrink-0 w-64 bg-white/10 backdrop-blur-md">
                            <CardContent className="p-4">
                                <h4 className="font-bold mb-2">{project.title}</h4>
                                <p className="text-sm">{project.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 z-10"
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}