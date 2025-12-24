import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      company: 'IQVIA',
      position: 'DATA ENGINEER',
      period: '2024 - Present',
      description: 'Building data pipelines and supporting tech products to turn insights into action with Advanced Tech',
      achievements: [
        'Building rock-solid data pipelines for enterprise-level systems',
        'Automating tests with Selenium and keeping CI/CD pipelines smooth',
        'Collaborating with cross-functional teams on product development'
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-wider text-sm">Career Journey</span>
          <h2 className="text-4xl lg:text-6xl text-white mt-4 mb-6">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`mb-16 md:mb-24 flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-slate-900 z-10 items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-1/2"></div>

              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="md:w-1/2 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                </div>
                
                <h3 className="text-2xl text-white mb-1">{exp.position}</h3>
                <p className="text-lg text-purple-400 mb-4">{exp.company}</p>
                
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}