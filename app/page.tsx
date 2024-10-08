"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from '@/components/layout/header'
import { ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { SkillsList } from '@/components/portfolio/SkillsList'
import { CertificationDisplayComponent } from '@/components/portfolio/Certification'
import { Process } from '@/components/ui/process'
import { Projects } from '@/components/portfolio/Projects'

const BackgroundAnimation = () => {
  const [data, setData] = useState(() => Array.from({ length: 50 }, () => ({ value: Math.random() * 100 })))

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => [
        ...prevData.slice(1),
        { value: Math.random() * 100 }
      ])
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 opacity-20">
      <ResponsiveContainer width="100%" height="50%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="50%">
        <AreaChart data={data}>
          <Area type="monotone" dataKey="value" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("home")
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [, setActiveSection] = useState(0)
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <BackgroundAnimation />
      <Header />

      <main className="flex-grow flex flex-col z-10">
        <div className="sticky top-0 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="flex-grow overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              <TabsContent value="home">
                <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="pt-2">
                    <main className="pt-10">
                      <section id="hero" className="relative overflow-hidden">
                        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
                          <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                              Data Scientist & Engineer
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                              Automating workflows to drive innovation and transforming data into actionable insights.
                            </p>
                            <div className="flex space-x-4">
                              <Button asChild>
                                <Link href="#contact">Get in touch</Link>
                              </Button>
                              <Button variant="outline" asChild>
                                <Link href="#projects">View projects</Link>
                              </Button>
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <Process />
                          </div>
                        </div>
                      </section>

                      <section id="about" ref={(el) => { sectionRefs.current[0] = el; }} className="bg-white dark:bg-gray-800 py-20">
                        <div className="container mx-auto px-4">
                          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-2">
                            <div className="md:w-1/2 mb-12 md:mb-0">
                              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">About Me</h2>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Adaptable and results-driven Data Scientist with hands-on experience in Machine Learning (ML), Full-stack web development, and Data Engineering. Expert in developing workflows, process optimization, and integrating cutting-edge technologies. Showcasing 3 years of data analysis experience with Python, and a solid foundation in mathematical modeling from a Physics with Astrophysics degree.
                              </p>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Skilled in leveraging AI and ML tools in automation to enhance productivity, streamline processes, and drive innovation. Committed to using advanced data analysis and application development expertise to support strategic decision-making and deliver impactful results.
                              </p>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Get in touch to discuss how I can help your business.
                              </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center md:justify-end">
                              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 shadow-lg">
                                <Image
                                  src="/jacob_sterling.png"
                                  alt="Jacob Sterling"
                                  layout="fill"
                                  objectFit="cover"
                                  className="rounded-full"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section id="project_summarys" ref={(el) => { sectionRefs.current[1] = el; }} className="py-20">
                        <div className="container mx-auto px-4">
                          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Featured Projects</h2>
                          <div className="grid md:grid-cols-2 gap-8">
                            <Card>
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2">SpaceX Falcon 9 Landing Prediction</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                  Implemented machine learning models to predict the success rate of SpaceX Falcon 9 first stage landings.
                                </p>
                                <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" onClick={() => { setActiveTab("projects"); setActiveSection(5); }}>
                                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2">ML AssistedTrading Algorithms</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                  Developed multiple trading algorithms using a combination of technical analysis and machine learning models to predict cryptocurrency prices from order book data.
                                </p>
                                <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" onClick={() => { setActiveTab("projects"); setActiveSection(0); }}>
                                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </section>

                      <section id="certifications" ref={(el) => { sectionRefs.current[2] = el; }} className="bg-white dark:bg-gray-800 py-20">

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
                      </section>

                    </main>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience">
                <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
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
                </Card>
              </TabsContent>

              <TabsContent value="education">
                <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <TabsContent value="education">
                    <div className="space-y-6 mt-6">
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

                      <Card>
                        <CardHeader>
                          <CardTitle>BSc (Hons) Physics with Astrophysics</CardTitle>
                          <CardDescription>University of Dundee, Scotland | Sept 2017 to July 2021</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p><strong>Key Courses:</strong> Computational Astrophysics • Quantum Mechanics • Mathematics and Mechanics.</p>
                          <p><strong>Dissertation:</strong> Analyzed X-Ray Emission from Young Stars using Python for advanced model development.</p>
                          <div className="mt-4">
                            <Button
                              onClick={() => window.open('/Project_Dissertation.pdf', '_blank')}
                              variant="outline"
                            >
                              View Dissertation PDF
                            </Button>
                          </div>
                          <div className="mt-4 aspect-[16/9] w-full">
                            <iframe
                              src="/Project_Dissertation.pdf"
                              width="100%"
                              height="100%"
                              style={{ border: "none" }}
                              title="Dissertation PDF"
                            />
                          </div>
                        </CardContent>
                      </Card>



                    </div>
                  </TabsContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects">
                <Projects />
              </TabsContent>

              <TabsContent value="skills">
                <SkillsList />
              </TabsContent>

              <section id="contact" ref={(el) => { sectionRefs.current[2] = el; }} className="bg-white dark:bg-gray-800 py-20">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Get in Touch</h2>
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                    <Button variant="outline" asChild>
                      <Link href="mailto:jacob.sterling@example.com" className="inline-flex items-center">
                        <Mail className="mr-2 h-4 w-4" /> Email Me
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="https://github.com/jacobsterling" className="inline-flex items-center">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="https://linkedin.com/in/jacobsterling" className="inline-flex items-center">
                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
            </Tabs>
          </div>
        </div >
      </main >
    </div >
  )
}