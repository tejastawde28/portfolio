"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Building2 } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      id: "education-neu",
      company: "Northeastern University",
      position: "Master of Science in Software Engineering Systems",
      period: "Sep. 2024 - May 2026",
      location: "Boston, MA",
      responsibilities: [
        "Pursuing advanced studies in software engineering with focus on enterprise systems",
        "Coursework includes Object-Oriented Design, Data Management & Database Design",
        "Developing expertise in Network Structures and Cloud Computing, Enterprise Software Design",
      ],
      technologies: ["Object-Oriented Design", "Cloud Computing", "Design Patterns", "Enterprise Software"],
    },
    {
      id: "route",
      company: "Route Mobile Limited",
      position: "Software Engineer",
      period: "Nov. 2023 - Jul. 2024",
      location: "Mumbai, India",
      responsibilities: [
        "Designed and implemented RESTful APIs using Flask, enabling seamless data exchange between React frontend and backend services",
        "Optimized data architecture by implementing Redis caching and AWS RDS for persistent storage, reducing database load",
        "Enhanced system performance through service decomposition and containerization with Docker and Kubernetes",
      ],
      technologies: ["Flask", "React", "AWS", "Docker", "Kubernetes", "Redis", "PyTest"],
    },
    {
      id: "education-mu",
      company: "Mumbai University",
      position: "Bachelor of Engineering in Electronics and Telecommunication",
      period: "Aug. 2019 - Jul. 2023",
      location: "Mumbai, India",
      responsibilities: [
        "Completed undergraduate studies with focus on electronics and telecommunication engineering",
        "Developed strong foundation in engineering principles and problem-solving methodologies",
        "Gained expertise in technical communication and project management",
      ],
      technologies: ["Engineering Fundamentals", "Electronics", "Telecommunications"],
    },
  ]

  return (
    <section id="experience" className="section-container bg-muted/30">
      <div className="space-y-4 text-center mb-12">
        <h2 className="section-heading">Work & Education</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and academic background.</p>
      </div>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}>
            <Card className="timeline-content glow-border">
              <CardHeader className="pb-2">
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-xl">{exp.position}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Building2 className="h-4 w-4 mr-2" />
                    {exp.company}
                  </CardDescription>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    {exp.period} • {exp.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <ul className="space-y-2 list-disc pl-5 text-sm">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
