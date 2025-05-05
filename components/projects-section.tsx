"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: "finance-navigator",
      title: "Finance Navigator",
      description:
        "A personal finance management system using Spring Boot, Hibernate ORM with manual session management, implementing DAO pattern and MVC architecture.",
      details: [
        "Engineered a personal finance management system using Spring Boot, Hibernate ORM with manual session management, implementing DAO pattern and MVC architecture",
        "Developed a robust authentication system with custom enrollment and profile management features using JSP, JSTL, and EL for dynamic views",
        "Implemented a financial tracking system with dual-classification transactions, custom category management, and real-time financial summary calculations",
      ],
      technologies: ["Java", "Spring Boot", "Hibernate", "JSP", "MVC", "DAO"],
      github: "https://github.com/tejastawde28/finance-navigator",
      live: null,
    },
    {
      id: "tripsync",
      title: "TripSync: Travel Itinerary Manager",
      description:
        "A comprehensive travel itinerary management system implementing design patterns for improved code reusability and faster development.",
      details: [
        "Designed a comprehensive travel itinerary management system by implementing design patterns, resulting in significantly improved code reusability and faster development of similar features",
        "Created a full-stack application with Java Spring Boot backend and React frontend, delivering streamlined trip and activity management with faster API response times",
        "Enhanced data processing capabilities by applying functional programming concepts and the Stream API, creating a maintainable codebase with reduced complexity while ensuring secure data storage using MySQL",
      ],
      technologies: ["Java", "Spring Boot", "React", "MySQL", "Design Patterns", "Stream API"],
      github: "https://github.com/tejastawde28/tripsync",
      live: null,
    },
    {
      id: "cloud-native-webapp",
      title: "Cloud-Native WebApp",
      description:
        "A cloud-native Flask application with PyTest automation and deployed Terraform IaC for AWS infrastructure orchestration.",
      details: [
        "Engineered a cloud-native Flask application with PyTest automation and deployed Terraform IaC for AWS infrastructure orchestration",
        "Constructed CI/CD pipelines using GitHub Actions and Packer to automate testing, validation, and cross-platform image creation",
        "Architected RESTful APIs integrating AWS S3 for file storage and RDS MySQL for metadata management with high-availability infrastructure",
      ],
      technologies: ["Flask", "Terraform", "AWS", "Packer", "GitHub Actions", "PyTest", "CI/CD"],
      github: "https://github.com/tejastawde28/webapp",
      live: null,
    },
  ]

  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null)
    } else {
      setExpandedProject(id)
    }
  }

  return (
    <section id="projects" className="section-container">
      <div className="space-y-4 text-center mb-12">
        <h2 className="section-heading">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">A showcase of my technical projects and applications.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="card-hover fade-in glow-border">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                {expandedProject === project.id ? (
                  <ul className="space-y-2 list-disc pl-5 text-sm">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">{project.details[0].substring(0, 120)}...</p>
                )}
                <Button variant="link" onClick={() => toggleExpand(project.id)} className="p-0 h-auto mt-2 text-sm">
                  {expandedProject === project.id ? "Show less" : "Read more"}
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <Badge key={index} variant="outline">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && <Badge variant="outline">+{project.technologies.length - 4}</Badge>}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-sm font-medium border rounded-md hover:bg-muted transition"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </div>
              {project.live && (
                <div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm font-medium border rounded-md hover:bg-muted transition"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
