import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="section-container">
      <div className="space-y-4 text-center mb-12">
        <h2 className="section-heading">About Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Get to know me beyond the code.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden glow-border">
            <Image
              src="./profile-pic.jpg?height=400&width=300"
              alt="Tejas Tawde"
              width={300}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <Card className="glow-border">
            <CardHeader>
              <CardTitle>Nice to see you here!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I'm currently pursuing my Master's in Software Engineering Systems at Northeastern University in Boston,
                where I'm expanding my knowledge in advanced software design patterns, cloud architecture, and
                enterprise systems. Prior to this, I completed my Bachelor's in Electronics and Telecommunication
                Engineering from Mumbai University.
              </p>

              <p>
                My professional journey includes working as a Software Engineer at Route Mobile Limited, where I
                developed full-stack applications and implemented cloud infrastructure solutions. I'm passionate about
                creating efficient, scalable software that solves real-world problems.
              </p>

              <p>
                Beyond the world of code, I have a deep appreciation for Indian Classical Music. I've been studying and
                practicing Indian Classical Vocals for several years, finding it to be both a creative outlet and a meditative
                practice that complements my technical work. The discipline, pattern recognition, and attention to
                detail required in Indian Classical Music have surprising parallels to software engineering.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
