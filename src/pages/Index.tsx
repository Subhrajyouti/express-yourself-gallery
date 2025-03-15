
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Mail, ExternalLink } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of the first project and its key features.",
      link: "#",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Project Two",
      description: "Description of the second project highlighting its unique aspects.",
      link: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hello, I'm John Doe</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <Button className="mr-4" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get in Touch
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="container py-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-2xl mx-auto text-lg text-muted-foreground">
            <p className="mb-4">
              I'm a passionate developer with expertise in creating beautiful and functional web applications. 
              With years of experience in both frontend and backend development, I bring ideas to life through code.
            </p>
            <p>
              My focus is on building responsive, user-friendly applications that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="container py-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="container py-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
            <Button variant="outline" className="w-full" asChild>
              <a href="mailto:contact@example.com" className="flex items-center justify-center">
                <Mail className="mr-2 h-4 w-4" />
                contact@example.com
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
