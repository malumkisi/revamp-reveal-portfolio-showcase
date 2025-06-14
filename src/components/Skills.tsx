
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Teknolojileri",
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Duyarlı Tasarım", level: 95 },
        { name: "CSS Framework'leri (Tailwind)", level: 85 }
      ]
    },
    {
      title: "Geliştirme Araçları",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Git & GitHub", level: 85 },
        { name: "Tarayıcı DevTools", level: 90 },
        { name: "Performans Optimizasyonu", level: 80 }
      ]
    },
    {
      title: "Tasarım & UX",
      skills: [
        { name: "UI/UX Prensipleri", level: 85 },
        { name: "Mobil Öncelikli Tasarım", level: 90 },
        { name: "Tipografi & Renk", level: 80 },
        { name: "Kullanıcı Deneyimi Tasarımı", level: 85 }
      ]
    },
    {
      title: "Temel Backend",
      skills: [
        { name: "İletişim Formu Entegrasyonu", level: 80 },
        { name: "Basit Veri İşleme", level: 75 },
        { name: "Temel Sunucu Kurulumu", level: 70 },
        { name: "API Entegrasyonu", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-background to-blue-50/20 dark:to-blue-950/10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-blue-600 bg-clip-text text-transparent">
            Yetenekler & Teknolojiler
          </h2>
          <p className="text-xl text-muted-foreground">
            Harika web siteleri oluşturmak için kullandığım araçlar ve teknolojiler
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card shadow-lg animate-fade-in border-border transition-all duration-300 hover:shadow-xl group cursor-pointer" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6 text-center text-foreground transition-colors duration-300">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground transition-colors duration-300">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-bold">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-3 bg-secondary/50 dark:bg-secondary/30 transition-all duration-300" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ek Teknoloji Yığını */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Çalıştığım Teknolojiler</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS",
              "Bootstrap", "Sass/SCSS", "Git", "GitHub", "Figma", "Adobe XD",
              "Duyarlı Tasarım", "SEO", "Web Performansı", "Tarayıcılar Arası Test"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary/80 dark:bg-secondary/60 text-secondary-foreground rounded-full text-sm font-medium transition-all duration-300 animate-fade-in border border-border cursor-pointer"
                style={{ animationDelay: `${0.6 + index * 0.05}s` }}
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
