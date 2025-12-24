import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      category: 'Programming',
      skills: [
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'SQL', level: 85, icon: '🗄️' },
        { name: 'Web Development', level: 85, icon: '🌐' },
      ]
    },
    {
      category: 'Design & Tools',
      skills: [
        { name: 'UI/UX Design', level: 95, icon: '✨' },
        { name: 'Git', level: 95, icon: '📦' },
        { name: 'Agile/Scrum', level: 95, icon: '🎯' },
      ]
    },
    {
      category: 'AI & ML',
      skills: [
        { name: 'AI/ML Integration', level: 75, icon: '🤖' },
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(skill => ({ ...skill, category: cat.category }))
  );

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : skillCategories.find(cat => cat.category.toLowerCase() === activeCategory)?.skills || [];

  return (
    <section id="skills" ref={ref} className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-wider text-sm">What I'm good at</span>
          <h2 className="text-4xl lg:text-6xl text-white mt-4 mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Skills</span>
          </h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {['all', 'programming', 'design & tools', 'ai & ml'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg capitalize transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800 text-gray-400 hover:text-white border border-cyan-500/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {(activeCategory === 'all' ? skillCategories : skillCategories.filter(cat => cat.category.toLowerCase() === activeCategory)).map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + catIndex * 0.1 }}
            >
              <h3 className="text-2xl text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + skillIndex * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-2xl text-white text-center mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'JAVA', 'SQL', 'AI/ML'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-5 py-3 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-lg text-gray-300 hover:text-cyan-400 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}