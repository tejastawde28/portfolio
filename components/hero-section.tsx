"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative pt-40 pb-16 md:pt-56 md:pb-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi there, I'm <span className="text-primary">Tejas!</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">A Software Engineer</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              I specialize in building robust, scalable applications with modern technologies. Currently pursuing my
              Master's in Software Engineering Systems at Northeastern University.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="glow-primary">
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glow-secondary">
                <Link href="./TejasTawde_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Link href="https://github.com/tejastawde28" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full glow-icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/tejastawde28" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full glow-icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:tawde.te@northeastern.edu">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full glow-icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <code className="font-mono text-sm md:text-base text-white p-4 rounded-lg backdrop-blur-sm">
                <pre className="text-primary">
                    {`const developer = {
        name: "tejas tawde",
        skills: ["full-stack", "cloud", "devops"],
        languages: ["java", "python", "javascript", "typescript", "dart"],
        frameworks: ["flask", "django", "spring boot", "react", "next.js", "node.js", "flutter"],
        passion: "building scalable solutions"
};`}
                </pre>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
