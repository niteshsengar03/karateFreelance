import { Award, Trophy, Users, BookOpen, Globe, Shield, Star, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import Link from "next/link";
import Image from "next/image"

export default function AboutPage() {
  const offerings = [
    {
      icon: BookOpen,
      title: "Comprehensive Training",
      description: "Covering Kihon (fundamentals), Kata (forms), and Kumite (sparring)",
    },
    {
      icon: Award,
      title: "International Certification",
      description: "Grading and ranks recognized globally under JTK standards",
    },
    {
      icon: Trophy,
      title: "Competitions",
      description: "Opportunities to participate in local, national, and international tournaments",
    },
    {
      icon: Users,
      title: "Seminars & Workshops",
      description: "Regular training events led by expert instructors from India and Japan",
    },
  ]

  const reasons = [
    {
      icon: Shield,
      title: "Authenticity",
      description: "Direct affiliation with JTK Japan ensures training that adheres to traditional standards",
    },
    {
      icon: Star,
      title: "Expert Guidance",
      description: "Our instructors are certified and experienced, with extensive knowledge of Shotokan Karate",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access to international championships, seminars, and cultural exchanges",
    },
    {
      icon: Heart,
      title: "Holistic Growth",
      description:
        "Beyond physical skills, we focus on character building, mental discipline, and personal development",
    },
  ]

  const teamMembers = [
    {
      image: "/image2.jpg?height=400&width=300",
      name: "Mr.NITESH PATRA",
      post: "President"
    },
    {
      image: "/image4.jpg?height=600&width=300",
      name: "SHIHAN AMIN ALI",
      post: "General Secretary , Chairman & Founder"
    }
  ]

  return (
    <main className="min-h-screen bg-[#0B1120] pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#0B1120] to-[#131B2E]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Shotokan Traditional Karate-Do Association
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              The official representative of the Japan Traditional Karate Association (JTKA) in India
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Who We Are</h2>
              <p className="text-gray-400 mb-6">
                The JTK India Branch - Shotokan Traditional Karate-Do Association is the official representative of the
                Japan Traditional Karate Association (JTKA) in India. Dedicated to the practice, preservation, and
                promotion of traditional Shotokan Karate, our mission is to provide authentic training and foster a
                community of disciplined, skilled, and respectful practitioners.
              </p>
              <p className="text-gray-400">
                As a proud affiliate of JTK Japan, we follow the highest standards of karate instruction, ensuring that
                our members gain a deep understanding of the art and its philosophy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-[#131B2E] border-[#1F2937]">
                <CardContent className="p-0">
                  <img
                    src="/images/image3.jpg?height=300&width=400"
                    alt="Karate training session"
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="bg-[#131B2E] border-[#1F2937]">
                <CardContent className="p-0">
                  <img
                    src="/images/image4.jpg?height=300&width=400"
                    alt="Karate competition"
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="bg-[#131B2E] border-[#1F2937] col-span-2">
                <CardContent className="p-0">
                  <img
                    src="/images/image5.jpg?height=300&width=800"
                    alt="Group training"
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* <section className="py-16 bg-[#0B1120]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div className="relative w-full aspect-[4/4] overflow-hidden rounded-lg">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-white">{member.name}</h3>
              <h3 className="font-bold text-yellow-500 ">{member.post}</h3>
            </div>
          ))}
        </div>
      </div>
    </section> */}

      {/* Vision & Mission Section */}
      <section className="py-16 bg-[#131B2E]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#0B1120] border-[#1F2937]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Our vision is to spread the values of traditional karate across India, nurturing individuals who excel
                  both on and off the mat.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#0B1120] border-[#1F2937]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Provide authentic Shotokan Karate training aligned with JTKA standards.</li>
                  <li>Develop disciplined and skilled karateka who embody respect, perseverance, and humility.</li>
                  <li>Promote the cultural and philosophical essence of traditional Japanese karate.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, index) => (
              <Card key={index} className="bg-[#131B2E] border-[#1F2937]">
                <CardHeader>
                  <offering.icon className="w-10 h-10 mb-4 text-yellow-400" />
                  <CardTitle className="text-xl text-white">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#131B2E]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Why Choose Shotokan Traditional Karate-Do Association?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="bg-[#0B1120] border-[#1F2937]">
                <CardHeader>
                  <reason.icon className="w-10 h-10 mb-4 text-yellow-400" />
                  <CardTitle className="text-xl text-white">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Presence & Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Presence in India</h2>
            <p className="text-gray-400 mb-12">
              The Shotokan Traditional Karate-Do Association has a growing network of dojos and instructors across the
              country. Whether you are in a major city or a smaller town, we are dedicated to bringing traditional
              karate training closer to you.
            </p>

            <div className="bg-[#131B2E] p-8 rounded-lg border border-[#1F2937]">
              <h3 className="text-2xl font-bold mb-4 text-white">Join Us</h3>
              <p className="text-gray-400 mb-6">
                Be a part of the Shotokan Traditional Karate-Do Association family and embark on a journey of growth,
                discipline, and excellence in Shotokan Karate. Whether you are a beginner, an advanced practitioner, or
                a dojo seeking affiliation, we welcome you to join us.
              </p>
              <div className="flex flex-wrap gap-4">
              <Link href="#contact" passHref>
                <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white">
                   <span>Contact Us</span>
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white">
                  <span>Learn More</span>
                </Button>
              </Link>
  
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

