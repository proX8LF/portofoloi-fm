"use client";

import { motion } from "framer-motion";
import { Code2, Shield, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const features = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Expertise in HTML, CSS, JavaScript, and Next.js for building modern web applications",
    },
    {
      icon: Shield,
      title: "Ethical Hacking",
      description: "Skilled in penetration testing and identifying security vulnerabilities",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Strong analytical skills and creative approach to technical challenges",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate programmer with expertise in web development and ethical hacking.
            My goal is to create secure and innovative solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}