import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'React & Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'Tailwind CSS', level: 92, color: 'from-cyan-500 to-teal-500' },
    { name: 'JavaScript (ES6+)', level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'Node.js & APIs', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'UI/UX Design', level: 80, color: 'from-purple-500 to-pink-500' },
  ];

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Creative Design',
      description: 'Combining aesthetics with functionality to create stunning user experiences.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and SEO best practices.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'User-Centric',
      description: 'Focusing on user needs and creating intuitive, accessible interfaces.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate software developer with 2+ years of experience creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-accent-purple via-accent-cyan to-accent-pink p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/nikhillande/Nikhil%20Lande.jpg?updatedAt=1749478051055"
                    alt="Nikhil Lande"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Crafting Digital Experiences
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate software developer based in Mumbai, India, with a keen eye for detail and a love for creating beautiful, functional applications. My journey in application development started 3 years ago, and I've been constantly learning and evolving with the ever-changing landscape of Infomation Technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or sharing my knowledge through blog posts and mentoring fellow developers.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-accent-purple dark:text-accent-cyan mb-2">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;