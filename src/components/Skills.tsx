
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "CSS Frameworks (Tailwind)", level: 85 }
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Git & GitHub", level: 85 },
        { name: "Browser DevTools", level: 90 },
        { name: "Performance Optimization", level: 80 }
      ]
    },
    {
      title: "Design & UX",
      skills: [
        { name: "UI/UX Principles", level: 85 },
        { name: "Mobile-First Design", level: 90 },
        { name: "Typography & Color", level: 80 },
        { name: "User Experience Design", level: 85 }
      ]
    },
    {
      title: "Basic Backend",
      skills: [
        { name: "Contact Form Integration", level: 80 },
        { name: "Simple Data Handling", level: 75 },
        { name: "Basic Server Setup", level: 70 },
        { name: "API Integration", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">
            The tools and technologies I use to create amazing websites
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS",
              "Bootstrap", "Sass/SCSS", "Git", "GitHub", "Figma", "Adobe XD",
              "Responsive Design", "SEO", "Web Performance", "Cross-browser Testing"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
