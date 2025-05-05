import type { Metadata } from "next"
import Hero from "@/components/hero-section"
import About from "@/components/about-section"
import Experience from "@/components/experience-section"
import Projects from "@/components/projects-section"
import Skills from "@/components/skills-section"
import Contact from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Tejas Tawde | Software Engineer",
  description:
    "Portfolio of Tejas Tawde, a Software Engineer specializing in full-stack development with expertise in React, Java, Python, and cloud technologies.",
  keywords: ["software engineer", "full-stack developer", "react", "java", "python", "aws", "cloud"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tejastawde.com",
    title: "Tejas Tawde | Software Engineer",
    description:
      "Portfolio of Tejas Tawde, a Software Engineer specializing in full-stack development with expertise in React, Java, Python, and cloud technologies.",
    siteName: "Tejas Tawde Portfolio",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
