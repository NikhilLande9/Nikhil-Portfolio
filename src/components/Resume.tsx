import React from 'react';
import { Download, Calendar, MapPin, Building, GraduationCap } from 'lucide-react';
import { Experience } from '../types';

const Resume: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'Mumbai, India',
      duration: '2022 - Present',
      description: [
        'Led a team of 4 developers in building responsive web applications using React and TypeScript',
        'Improved application performance by 40% through code optimization and lazy loading techniques',
        'Implemented design systems and component libraries used across 5+ projects',
        'Collaborated with UX/UI designers to create pixel-perfect, accessible interfaces'
      ],
      type: 'work'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Innovations',
      location: 'Mumbai, India',
      duration: '2021 - 2022',
      description: [
        'Developed and maintained multiple client projects using React, Vue.js, and vanilla JavaScript',
        'Worked closely with backend developers to integrate RESTful APIs and GraphQL endpoints',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Participated in code reviews and mentored junior developers'
      ],
      type: 'work'
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'StartupHub',
      location: 'Mumbai, India',
      duration: '2020 - 2021',
      description: [
        'Built interactive web applications using HTML5, CSS3, JavaScript, and React',
        'Collaborated with designers and product managers to implement user-friendly interfaces',
        'Optimized websites for speed and SEO, resulting in 25% increase in organic traffic',
        'Learned and applied modern development practices including Git workflow and Agile methodology'
      ],
      type: 'work'
    },
    {
      id: 4,
      title: 'Bachelor of Computer Science',
      company: 'Mumbai University',
      location: 'Mumbai, India',
      duration: '2016 - 2020',
      description: [
        'Graduated with First Class Honors (CGPA: 8.5/10)',
        'Specialized in Web Technologies and Software Engineering',
        'Led college technical team and organized multiple coding competitions',
        'Completed final year project on "Progressive Web Applications with React"'
      ],
      type: 'education'
    }
  ];

  const handleDownloadResume = () => {
    // In a real application, this would download an actual PDF file
    const link = document.createElement('a');
    link.href = '/resume-nikhil-lande.pdf';
    link.download = 'Nikhil_Lande_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A journey of continuous learning, growth, and passion for creating exceptional web experiences
          </p>
          
          {/* Download Resume Button */}
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-purple via-accent-cyan to-accent-pink rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-accent-purple dark:border-accent-cyan rounded-full z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    {/* Header */}
                    <div className="flex items-center space-x-2 mb-3">
                      {exp.type === 'work' ? (
                        <Building className="w-5 h-5 text-accent-purple dark:text-accent-cyan" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-accent-purple dark:text-accent-cyan" />
                      )}
                      <span className="text-sm font-medium text-accent-purple dark:text-accent-cyan uppercase tracking-wide">
                        {exp.type === 'work' ? 'Work Experience' : 'Education'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-1">
                        <Building size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-600 dark:text-gray-300 flex items-start space-x-2"
                        >
                          <span className="w-2 h-2 bg-accent-purple dark:bg-accent-cyan rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Certifications */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {[
                { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Vue.js'] },
                { category: 'Styling', skills: ['Tailwind CSS', 'Styled Components', 'SASS/SCSS'] },
                { category: 'Tools', skills: ['Git', 'Webpack', 'Vite', 'Docker'] },
                { category: 'Testing', skills: ['Jest', 'Cypress', 'Testing Library'] }
              ].map((group, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications
            </h3>
            <div className="space-y-4">
              {[
                'React Developer Certification - Meta',
                'Frontend Web Development - FreeCodeCamp',
                'JavaScript Algorithms and Data Structures',
                'AWS Cloud Practitioner',
                'Google Analytics Certified'
              ].map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;