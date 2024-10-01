'use client'

import { useEffect, useRef, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter, Text } from 'recharts'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { SkillsList } from '@/components/portfolio/SkillsList'
import Image from 'next/image';

const dataTechnologies = [
  { name: 'SQL', value: 90 },
  { name: 'PostgreSQL', value: 85 },
  { name: 'Blockchain (Ethereum + NEAR Protocol)', value: 70 },
  { name: 'Diesel', value: 60 },
  { name: 'Prisma', value: 50 },
]

const aiTools = [
  { name: 'ChatGPT', value: 95 },
  { name: 'Cursor', value: 90 },
  { name: 'Stable Diffusion', value: 85 },
  { name: 'Replit', value: 70 },
  { name: 'V0', value: 60 },
  { name: 'Claude AI', value: 50 },
]

const toolsFrameworks = [
  { name: 'Excel', value: 90 },
  { name: 'PowerBi', value: 85 },
  { name: 'git', value: 70 },
  { name: 'Mage.ai', value: 60 },
  { name: 'Flask', value: 50 },
  { name: 'Nuxt3', value: 40 },
  { name: 'Actix', value: 30 },
]

const programmingLanguages = [
  { name: 'Python', value: 95 },
  { name: 'SQL', value: 90 },
  { name: 'TypeScript', value: 85 },
  { name: 'Rust', value: 80 },
  { name: 'C++', value: 75 },
  { name: 'Solidity', value: 60 },
]

const projectsData = [
  { name: 'Data Science', value: 40 },
  { name: 'Data Engineering', value: 30 },
  { name: 'Web Development', value: 20 },
  { name: 'Machine Learning', value: 10 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      if (activeTab !== 'home') return
      const pageTop = window.pageYOffset
      const pageBottom = pageTop + window.innerHeight
      const tags = sectionRefs.current

      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i] as HTMLElement; // Explicitly cast to HTMLElement
        if (tag.offsetTop < pageBottom && tag.offsetTop + tag.offsetHeight > pageTop) {
          setActiveSection(i)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeTab])

  const sections = [
    {
      title: "Quantitative Analysis",
      description: "A passion for AI-driven trading algorithms and quantitative analysis. Specializing in developing trading strategies and indepth statistical analysis on financial markets.",
      service: "Accurate mathmatical modelling and financial analysis",
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
      title: "In-depth Reporting And Data Representation",
      description: "Implemented machine learning models for risk analysis on the SpaceX Falcon 9 to predict the first stage landing success rate. Generated a report with detailed analysis and visualizations.",
      service: "Operational optimization and Report generation",
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
      title: "Predictive Modeling",
      description: "Housing Price Prediction using Linear Regression. Using multiple parameters to predict the price of houses in King County, USA",
      service: "Data Analysis and Forecasting",
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
      githubLink: "https://github.com/jacobsterling/data-science/blob/main/House_Sales_in_King_Count_USA.ipynb"
    },
    {
      title: "Classification Modeling",
      description: "Credit Card Fraud Detection using Decision Trees. Using data from Kaggle to train a model to detect fraudulent credit card transactions.",
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
      title: "More Classification using SVM",
      description: "Cancer cell classification using Support Vector Machine (SVM) algorithms. Expertise in training and testing AI models to aid in data driven decision making.",
      service: "Medical Diagnosis Support Systems",
      chart: (
        <div className="relative w-full h-64">
          <Image
            src="/project-images/cancer_cell_classification.png"
            alt="Cancer Cell Classification Chart"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ),
      githubLink: "https://github.com/jacobsterling/data-science/blob/main/Clas_SVM_cancer.ipynb"
    },
    {
      title: "Weather Classification and Rainfall Prediction in Australia",
      description: "Weather Classification and Rainfall Prediction in Australia using SVM. Expertise in training and testing AI models to aid in data driven decision making.",
      service: "Environmental Data Analysis and Forecasting",
      githubLink: "https://github.com/jacobsterling/data-science/blob/main/Classification_Rain_Fall.ipynb"
    },
    {
      title: "Web3 Browser Game Development",
      description: "Experience in full-stack development, combining cutting-edge web technologies with blockchain integration, systems design, integration and development",
      service: "Web3 Game Development and Blockchain Integration",
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
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Header />

      <main className="flex-grow">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-2/3 flex flex-col">
                    <p className="text-lg">
                      Adaptable and results-driven Data Engineer with a passion for Data Science. Expert in developing workflows, process optimization, and integrating cutting-edge technologies. Proficient in Python, Typescript, Rust, SQL, and C++, with a solid foundation in mathematical modeling from a Physics with Astrophysics degree and trading algorithm development. Skilled in leveraging AI tools and automation to enhance productivity, streamline processes, and drive innovation. Committed to using advanced data analysis, AI prompting, and programming expertise to support strategic decision-making and deliver impactful results.
                    </p>
                  </div>
                  <div className="md:w-1/3 flex flex-col">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold">Project Distribution</h3>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={projectsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>

            {sections.map((section, index) => (
              <section
                key={index}
                ref={el => sectionRefs.current[index] = el}
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
            ))}
          </TabsContent>

          <TabsContent value="experience">
            <div className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Engineer</CardTitle>
                  <CardDescription>Manufacture 2030 | Oxford, UK | Feb 2023 to Sept 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developed Python algorithms and classification models for accurate company name and address matching.</li>
                    <li>Designed and implemented a data integration platform with Mage.ai, optimizing data transfer between Salesforce and PostgreSQL.</li>
                    <li>Improved cross-platform synchronization and efficiency through enhanced collaboration between data operations and software engineering teams.</li>
                    <li>Significantly improved Salesforce workflow efficiency using Python Salesforce REST API.</li>
                    <li>Enhanced data accuracy by integrating DUNS database API for comprehensive data enrichment.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Analyst</CardTitle>
                  <CardDescription>Advance Contracting Solutions Limited | Deeside, UK | Oct 2021 to Feb 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Automated financial processes with Python, streamlining workflows and improving data accuracy.</li>
                    <li>Created daily and ad-hoc reports to support data-driven decisions and performance tracking.</li>
                    <li>Implemented process improvements, reducing manual workload and increasing operational efficiency.</li>
                    <li>Developed detailed reports for client and internal use, ensuring data security and accuracy.</li>
                    <li>Enhanced customer relations software with JavaScript, addressing critical needs and improving functionality.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mental Health & Personal Development Coach</CardTitle>
                  <CardDescription>Freelance | 2023 to Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Coached individuals in personal development, helping them set goals and build healthier mental habits.</li>
                    <li>Guided clients through stress management, emotional intelligence, and self-improvement strategies.</li>
                    <li>Facilitated workshops and one-on-one sessions focused on improving social skills, resilience, and leadership.</li>
                    <li>Developed personalized action plans and provided ongoing support to enhance self-awareness and mental well-being.</li>
                    <li>Empowered clients to achieve personal growth, enhancing their confidence and emotional regulation.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>BSc (Hons) Physics with Astrophysics</CardTitle>
                  <CardDescription>University of Dundee, Scotland | Sept 2017 to July 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p><strong>Dissertation:</strong> Analyzed X-Ray Emission from Young Stars using Python for advanced model development.</p>
                  <p><strong>Key Courses:</strong> Computational Astrophysics • Quantum Mechanics • Mathematics and Mechanics.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>C++ Programming for Unreal Game Development Specialization</CardTitle>
                  <CardDescription>University of Colorado System | Coursera | 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Mastered C++ fundamentals and advanced Unreal Engine concepts, focusing on performance optimization and object-oriented programming.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Science Professional Certificate</CardTitle>
                  <CardDescription>IBM | Coursera | Sept 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Python programming for data science, utilizing libraries like Pandas and Numpy.</li>
                    <li>Data visualization using tools like Matplotlib, Seaborn, and Plotly. </li>
                    <li>Databases and SQL for analyzing and managing data within relational databases.</li>
                    <li>Machine learning with Python, applying algorithms like K-Nearest Neighbors, decision trees, and logistic regression. </li>
                    <li>Hands-on use of Jupyter Notebooks, RStudio, and GitHub for version control.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <div className="mt-6">
              <SkillsList skills={dataTechnologies} title="Data Engineering" />
            </div>
            <div className="mt-6">
              <SkillsList skills={aiTools} title="AI Tools" />
            </div>
            <div className="mt-6">
              <SkillsList skills={toolsFrameworks} title="Tools & Frameworks" />
            </div>
            <div className="mt-6">
              <SkillsList skills={programmingLanguages} title="Programming Languages" />
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer
        sectionRefs={sectionRefs.current}
        activeSection={activeSection}
        activeTab={activeTab}
      />
    </div>
  )
}