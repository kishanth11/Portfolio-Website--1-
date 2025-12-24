import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Briefcase, GraduationCap, Target } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Briefcase, value: '1+', label: 'Years Experience' },
    { icon: Award, value: '5+', label: 'Projects Completed' },
    { icon: GraduationCap, value: '5+', label: 'Certifications' },
    { icon: Target, value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" ref={ref} className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-wider text-sm">Get to know me</span>
          <h2 className="text-4xl lg:text-6xl text-white mt-4 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 z-10"></div>
              <img 
                // src="https://images.unsplash.com/photo-1703358902025-8695e8fc520e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NjE2MjAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                src="src\images\IMG_0449.jpeg"
                alt="Workspace"
                className="w-full h-[500px] object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-4 border-cyan-500 rounded-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-purple-500 rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a <span className="text-cyan-400">Full Stack Developer</span> with 1+ year of hands-on experience building scalable web apps and smart digital solutions. What started as curiosity about how things work turned into a passion for creating smooth, meaningful user experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I work mostly with Python, cloud-based systems, and AI-powered integrations. I care about <span className="text-purple-400">clean, maintainable code</span> staying up to date with the latest tech, and building things that actually last.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, mentoring aspiring developers, 
              or exploring new technologies. I'm always excited about <span className="text-cyan-400">solving complex problems</span> and 
              turning ideas into reality.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React','Python', 'AWS', 'AI/ML','JAVA','SQL'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg text-cyan-400"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Icon className="text-white" size={24} />
                </div>
                <div className="text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}