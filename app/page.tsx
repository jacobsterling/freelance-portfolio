'use client'

import { useEffect, useRef, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CertificationDisplayComponent } from '@/components/portfolio/Certification'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { SkillsList } from '@/components/portfolio/SkillsList'
import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';


const dataTechnologies = [
  { name: 'Pandas', value: 85 },
  { name: 'Mage.ai', value: 80 },
  { name: 'PostgreSQL', value: 80 },
  { name: 'Dask', value: 70 },
  { name: 'Apache Spark', value: 60 },
  { name: 'PostgreSQL', value: 50 },
]

const aiTools = [
  { name: 'OpenAI GPT models', value: 95 },
  { name: 'SciPy', value: 80 },
  { name: 'TensorFlow', value: 70 },
  { name: 'PyTorch', value: 70 },
  { name: 'SDV', value: 50 },
  { name: 'GANs', value: 50 },
]

const toolsFrameworks = [
  { name: 'Flask', value: 80 },
  { name: 'Next.js', value: 70 },
  { name: 'Nuxt3', value: 70 },
  { name: 'Actix', value: 60 },
  { name: 'Streamlit', value: 60 },
  { name: 'Dash', value: 60 },
]

const otherTools = [
  { name: 'Excel', value: 90 },
  { name: 'PowerBi', value: 85 },
]

const programmingLanguages = [
  { name: 'Python', value: 95 },
  { name: 'SQL', value: 90 },
  { name: 'TypeScript', value: 70 },
  { name: 'Rust', value: 70 },
  { name: 'C++', value: 60 },
  { name: 'Solidity', value: 40 },
  { name: 'JavaScript', value: 40 },
]

const projectsData = [
  { name: 'Data Science', value: 3 },
  { name: 'Machine Learning', value: 2 },
  { name: 'Data Engineering', value: 2 },
  { name: 'Application Development', value: 2 },
  { name: 'Quantitative Analysis', value: 1 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

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

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Header />

      <main className="flex-grow">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <TabsList className="grid w-full grid-cols-4">
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
                    <p className="text-lg mb-4">
                      Adaptable and results-driven Data Scientist with hands-on experience in Machine Learning, Full-stack web development, and Data Engineering. Expert in developing workflows, process optimization, and integrating cutting-edge technologies.
                    </p>

                    <p className="text-lg mb-4">
                      Showcasing 3 years of data analysis experience with Python, and a solid foundation in mathematical modeling from a Physics with Astrophysics degree. Skilled in leveraging AI and ML tools in automation to enhance productivity, streamline processes, and drive innovation.
                    </p>

                    <p className="text-lg mb-4">
                      Committed to using advanced data analysis and application development expertise to support strategic decision-making and deliver impactful results.
                    </p>

                    <p className="text-lg">
                      Let’s connect to explore how my expertise can help drive your next project or initiative forward.
                    </p>
                  </div>
                  <div className="md:w-1/3 flex flex-col">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold">Project Distribution</h3>
                    </div>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={projectsData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="name"
                          angle={-45}
                          textAnchor="end"
                          height={80}
                          tick={{ fontSize: 12 }}
                          interval={0}
                        />
                        <YAxis tickFormatter={(value) => Math.round(value).toString()} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#0f172a" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => {
                      const firstProjectSection = sectionRefs.current[0];
                      if (firstProjectSection) {
                        firstProjectSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded"
                  >
                    View Projects
                  </button>
                </div>

              </CardContent>

              <div className="flex flex-col md:flex-row gap-6 mt-8">
                <Card className="w-full md:w-1/2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Achievements</CardTitle>
                  </CardHeader>
                  <CertificationDisplayComponent title="Full Application Synchronisation with CRM Platform" badge="Manufacture2030" date="October 2023 to Sept 2024" achievements={["Independently designed and implemented a data integration platform using Mage.ai, automating data flow between Salesforce and PostgreSQL.", "Boosted operational efficiency by 8x, transforming manual data transfer processes into an optimized, automated solution.", "Gained extensive hands-on experience across the full data engineering development lifecycle, facilitating key discussions for collaboration between data operations and software engineering teams."]} />
                  <CertificationDisplayComponent title="Engineering Education Scheme Award" badge="Department for Education" date="2015 to 2016" achievements={["Led a team in real-world engineering projects, showcasing strong leadership, project management, and problem-solving abilities.", "Developed public speaking and presentation skills through regular project updates and final presentations to stakeholders."]} />
                  <CertificationDisplayComponent title="Prime ISM BESMA Award-Winning Sales Training Day" badge="Prime ISM" date="2024" achievements={["Developed advanced communication skills and strategic questioning techniques to effectively engage clients and understand their needs.", "Gained hands-on sales experience, practicing leadership, public speaking and teamwork in dynamic group settings.", "Enhanced storytelling abilities to create compelling narratives that resonate with clients, fostering deeper connections and improving sales outcomes."]} />
                </Card>

                <Card className="w-full md:w-1/2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Certifications</CardTitle>
                  </CardHeader>
                  <CertificationDisplayComponent title="Data Science Professional Certificate" badge="IBM" date="Sept 2024" achievements={["Established a solid foundation in data science principles, encompassing data analysis, machine learning, and data visualization techniques.", "Enhanced proficiency in Python, SQL, and machine learning, with a focus on creating insightful visualizations and reports.", "Completed various labs and projects addressing real-world challenges, showcasing adaptability and a comprehensive understanding of data science methodologies."]} />
                </Card>
              </div>
            </Card>


            {sections.map((section, index) => (
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
                    <li>Improved cross-platform synchronization and boosted operational efficiency by developing and maintaining a data integration platform (as highlighted in the Achievements section).</li>
                    <li>Utilized Data Science techniques to develop Python algorithms and machine learning models for company name and address matching, significantly improving duplicate account detection and enhancing company hierarchy recognition.</li>
                    <li>Increased data accuracy and reliability by integrating the DUNS database API for real-time data enrichment in daily processes.</li>
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
                    <li>Collaborated closely with the Sales team to design and deliver daily ad-hoc and client-facing reports in Power BI, facilitating data-driven decision-making, performance tracking, and enhancing client retention.</li>
                    <li>Enhanced customer relationship management software using JavaScript, effectively addressing critical needs and improving overall functionality.</li>
                    <li>Introduced and leveraged Python to automate HMRC-regulated financial processes, significantly reducing manual workload, streamlining workflows, and enhancing data accuracy.</li>
                    <li>Identified process inefficiencies and developed scripts to securely manage sensitive contractor data, improving operational efficiency.</li>
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
                  <CardTitle>Python for Data Science, AI & Development</CardTitle>
                  <CardDescription>IBM | Coursera | July 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developed AI models and implemented data science techniques using Python</li>
                    <li>Flask for web application development.</li>
                  </ul>
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

            </div>
          </TabsContent>

          <TabsContent value="skills">
            <div className="mt-6">
              <SkillsList skills={programmingLanguages} title="Programming Languages" />
            </div>
            <div className="mt-6">
              <SkillsList skills={toolsFrameworks} title="Application Frameworks" />
            </div>
            <div className="mt-6">
              <SkillsList skills={dataTechnologies} title="Data Engineering Tools" />
            </div>
            <div className="mt-6">
              <SkillsList skills={aiTools} title="AI Tools" />
            </div>
            <div className="mt-6">
              <SkillsList skills={otherTools} title="Other Tools" />
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer
        sectionRefs={sectionRefs}
        activeSection={activeSection}
        activeTab={activeTab}
      />
    </div>
  )
}