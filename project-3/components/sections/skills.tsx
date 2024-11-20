"use client";

import { motion } from "framer-motion";
import { Code, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const webSkills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "React", level: 88 },
  { name: "TypeScript", level: 82 },
];

const securitySkills = [
  { name: "Penetration Testing", level: 88 },
  { name: "Network Security", level: 85 },
  { name: "Web Security", level: 92 },
  { name: "Security Auditing", level: 80 },
  { name: "Cryptography", level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical skills in web development and cybersecurity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <Code className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Web Development</h3>
            </div>
            <div className="space-y-6">
              {webSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Cybersecurity</h3>
            </div>
            <div className="space-y-6">
              {securitySkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}