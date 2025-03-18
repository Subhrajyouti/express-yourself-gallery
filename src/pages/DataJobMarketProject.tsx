import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DataJobMarketSidebar from "@/components/DataJobMarketSidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const DataJobMarketProject = () => {
  const location = useLocation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Main Navigation */}
      <Navbar />
      
      {/* Hero Section - Reduced height and moved title up */}
      <div className="relative h-[65vh] w-full">
        <img 
          src="/data_science.jpg" 
          alt="Data Job Market Analysis" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70">
          <div className="container h-full flex flex-col justify-center pb-20">
            <div className="max-w-3xl">              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Data Job Market Analysis
              </h1>
              
              <p className="text-lg text-white/80 mb-8">
                A data-driven exploration of the current data job landscape—empowering insights for career decisions and hiring strategies.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-white text-black hover:bg-white/90">Python</Badge>
                <Badge className="bg-white text-black hover:bg-white/90">Pandas</Badge>
                <Badge className="bg-white text-black hover:bg-white/90">Data Visualization</Badge>
                <Badge className="bg-white text-black hover:bg-white/90">Matplotlib</Badge>
                <Badge className="bg-white text-black hover:bg-white/90">Seaborn</Badge>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-blue-500 text-white border-blue-500/20 hover:bg-blue-600"
                asChild
              >
                <a href="https://github.com/yourusername/data-job-market-analysis" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <DataJobMarketSidebar />
      
      {/* Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section id="overview" className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground mb-4">
                This project presents a comprehensive analysis of the current data job market landscape, examining trends in job postings, required skills, salary distributions, and geographic concentrations for data science, data engineering, and data analysis roles.
              </p>
              <p className="text-muted-foreground">
                Using data collected from major job platforms and professional networks, this analysis provides insights into how the data profession is evolving, what employers are looking for, and how job seekers can position themselves for success in this rapidly growing field.
              </p>
            </section>

            <section id="objectives" className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Objectives</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Identify current trends in data job postings across different industries</li>
                <li>Analyze the distribution of required skills and qualifications for data roles</li>
                <li>Examine salary ranges and factors influencing compensation</li>
                <li>Map geographic distribution of data job opportunities</li>
                <li>Compare entry-level versus senior role requirements and expectations</li>
                <li>Identify emerging skills and technologies in the data field</li>
              </ul>
            </section>

            <section id="data-sources" className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Data Sources</h2>
              <p className="text-muted-foreground mb-4">
                The analysis draws on multiple data sources to provide a comprehensive view of the current job market:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Over 10,000 job postings from LinkedIn, Indeed, and Glassdoor</li>
                <li>Salary information from H1B visa applications and anonymous self-reported data</li>
                <li>Industry reports on hiring trends in technology and data fields</li>
                <li>Survey data from current professionals in data roles</li>
              </ul>
            </section>

            <section id="methodology" className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Methodology</h2>
              <p className="text-muted-foreground mb-4">
                This project employed a mixed-methods approach combining web scraping, natural language processing, and statistical analysis:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Web scraping using Python (BeautifulSoup and Selenium) to collect job posting data</li>
                <li>Text analysis and NLP techniques to extract and categorize skills from job descriptions</li>
                <li>Statistical analysis to identify patterns in salary data and job requirements</li>
                <li>Geospatial analysis to map job concentrations across regions</li>
                <li>Time series analysis to identify trends over the past 24 months</li>
              </ul>
            </section>

            <section id="key-findings" className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Key Findings</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Growth Trends:</strong> The demand for data professionals has increased by 37% over the past two years, with data engineering roles growing at the fastest rate (45% increase).
                </p>
                <p>
                  <strong>Industry Distribution:</strong> Financial services, healthcare, and technology remain the top industries hiring data professionals, with e-commerce showing the fastest growth in new positions.
                </p>
                <p>
                  <strong>Required Experience:</strong> 65% of roles require at least 3-5 years of experience, with only 15% of postings explicitly labeled as entry-level positions.
                </p>
                <p>
                  <strong>Education Requirements:</strong> While 78% of postings prefer or require advanced degrees, there is a growing trend (22% increase) in roles that prioritize skills and experience over formal education.
                </p>
              </div>
            </section>

            <section id="skills-analysis" className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Skills Analysis</h2>
              <p className="text-muted-foreground mb-4">
                Analysis of technical and non-technical skills mentioned in job postings reveals:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-3">Technical Skills</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Python (87% of postings)</li>
                    <li>SQL (82%)</li>
                    <li>Machine Learning frameworks (64%)</li>
                    <li>Cloud platforms - AWS, Azure, GCP (58%)</li>
                    <li>Big Data technologies (52%)</li>
                    <li>Data visualization tools (48%)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Non-Technical Skills</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Communication (74% of postings)</li>
                    <li>Problem-solving (68%)</li>
                    <li>Teamwork/collaboration (61%)</li>
                    <li>Business acumen (47%)</li>
                    <li>Project management (43%)</li>
                    <li>Domain expertise (38%)</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground">
                Emerging skills showing the fastest growth in demand include MLOps, data ethics, causal inference, and specialized industry knowledge in regulated sectors.
              </p>
            </section>

            <section id="salary-trends" className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Salary Trends</h2>
              <p className="text-muted-foreground mb-4">
                Salary analysis reveals significant variations based on role, location, industry, and experience:
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Role-Based Differences:</strong> Data Engineers ($120,000-$160,000) and Machine Learning Engineers ($125,000-$165,000) command higher median salaries than Data Analysts ($85,000-$115,000).
                </p>
                <p>
                  <strong>Experience Premium:</strong> The salary jump from 0-2 years to 3-5 years of experience averages 32%, while the increase from 3-5 years to 6+ years averages 28%.
                </p>
                <p>
                  <strong>Industry Variations:</strong> Finance and pharmaceutical sectors offer 15-20% higher compensation for equivalent roles compared to retail and education sectors.
                </p>
                <p>
                  <strong>Remote Work Impact:</strong> Fully remote roles offer salaries 5-8% lower than on-site positions in high-cost locations, but 10-15% higher than on-site positions in lower-cost areas.
                </p>
              </div>
            </section>

            <section id="geographic-distribution" className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Geographic Distribution</h2>
              <p className="text-muted-foreground mb-4">
                Data job opportunities continue to be concentrated in major tech hubs, but with notable changes:
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Traditional Hubs:</strong> San Francisco Bay Area, New York, and Seattle remain the top regions by total job count, but their share of overall postings has decreased from 41% to 36% in the past two years.
                </p>
                <p>
                  <strong>Emerging Hubs:</strong> Austin, Denver, and Raleigh-Durham show the fastest growth rates (45-60% increase in postings).
                </p>
                <p>
                  <strong>Remote Opportunities:</strong> 42% of all data job postings now offer remote or hybrid options, compared to just 18% pre-pandemic.
                </p>
                <p>
                  <strong>International Trends:</strong> Toronto, London, and Singapore lead in international growth markets for data professionals outside the US.
                </p>
              </div>
            </section>

            <section id="conclusion" className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
              <p className="text-muted-foreground mb-4">
                The data job market continues to evolve rapidly, with several key implications for job seekers and employers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>T-shaped skill profiles (deep expertise in one area, broad knowledge across others) are increasingly valued</li>
                <li>Specialized domain knowledge combined with technical skills commands premium compensation</li>
                <li>Geographic flexibility is expanding opportunities beyond traditional tech hubs</li>
                <li>The entry barrier remains high, with most roles requiring prior experience</li>
                <li>Continuous learning is essential as the half-life of technical skills continues to shorten</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                As the field matures, employers are increasingly seeking candidates who can bridge technical expertise with business impact, placing greater emphasis on communication skills and domain knowledge alongside technical proficiency.
              </p>
            </section>
          </div>
            
          <div className="lg:col-span-1 relative">
            <div className="sticky top-[120px] space-y-8">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/data_science2.jpg" 
                  alt="Data visualization" 
                  className="w-full aspect-video object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Project Highlights</h3>
                  <Separator className="mb-4" />
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Analyzed 10,000+ job postings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Identified 37% growth in data jobs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Mapped salary trends across regions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Explored emerging skills in the field</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Tools & Technologies</h3>
                  <Separator className="mb-4" />
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Pandas</Badge>
                    <Badge variant="outline">NumPy</Badge>
                    <Badge variant="outline">Matplotlib</Badge>
                    <Badge variant="outline">Seaborn</Badge>
                    <Badge variant="outline">BeautifulSoup</Badge>
                    <Badge variant="outline">Selenium</Badge>
                    <Badge variant="outline">NLTK</Badge>
                    <Badge variant="outline">GeoPandas</Badge>
                  </div>
                </div>
                  
                <div>
                  <h3 className="text-lg font-medium mb-2">Project Timeline</h3>
                  <Separator className="mb-4" />
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Data Collection</span>
                      <span>3 weeks</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Data Cleaning & Processing</span>
                      <span>2 weeks</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Analysis & Visualization</span>
                      <span>4 weeks</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Report & Presentation</span>
                      <span>2 weeks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DataJobMarketProject;
