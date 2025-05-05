"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages")

  const skillCategories = [
    {
      id: "languages",
      name: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "HTML/CSS", "C++", "Dart"],
    },
    {
      id: "frontend",
      name: "Web Technologies",
      skills: ["React", "Vue.js", "Next.js", "Material UI", "Tailwind CSS", "Bootstrap", "Flutter"],
    },
    {
      id: "backend",
      name: "Backend Frameworks",
      skills: ["Flask", "Django", "FastAPI", "Spring Boot", "Express.js", "Node.js", "GraphQL", "Microservices"],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Packer", "Terraform"],
    },
    {
      id: "databases",
      name: "Databases",
      skills: ["MySQL", "PostgreSQL", "Oracle SQL", "MongoDB", "Redis"],
    },
  ]

  return (
    <section id="skills" className="section-container bg-muted/30">
      <div className="space-y-4 text-center mb-12">
        <h2 className="section-heading">Technical Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">My technical toolkit and areas of expertise.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="languages" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="py-3">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="fade-in">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <Card key={index} className="p-4 rounded-lg text-center shadow-sm glow-border">
                    <div className="font-medium">{skill}</div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
