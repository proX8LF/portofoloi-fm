"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    title: "Certified Ethical Hacker (CEH)",
    organization: "EC-Council",
    date: "2023",
    description: "Professional certification in ethical hacking and penetration testing",
  },
  {
    title: "AWS Certified Security - Specialty",
    organization: "Amazon Web Services",
    date: "2023",
    description: "Advanced security expertise for AWS cloud environments",
  },
  {
    title: "OSCP Certification",
    organization: "Offensive Security",
    date: "2022",
    description: "Practical penetration testing skills and methodologies",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements in cybersecurity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}