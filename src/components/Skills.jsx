import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-dark-200/50 to-transparent">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I've worked with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 10 
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative group"
              >
                <div className="glass-effect p-6 rounded-xl text-center card-hover h-full flex flex-col items-center justify-center">
                  {/* Skill Icon */}
                  <div className="w-16 h-16 mb-4 relative">
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain filter brightness-110"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg"
                      animate={{
                        scale: hoveredSkill === index ? 1.2 : 0,
                        opacity: hoveredSkill === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Skill Name */}
                  <motion.h3
                    className="text-white font-semibold text-sm md:text-base mb-2"
                    layoutId={`skill-name-${index}`}
                  >
                    {skill.name}
                  </motion.h3>

                  {/* Skill Level Indicator */}
                  <div className="w-full bg-gray-700 rounded-full h-1 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ delay: index * 0.1, duration: 1 }}
                    />
                  </div>

                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredSkill === index ? 1 : 0,
                      y: hoveredSkill === index ? 0 : 10
                    }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 glass-effect rounded-lg text-xs text-white max-w-48 z-10"
                    style={{ pointerEvents: 'none' }}
                  >
                    {skill.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/20" />
                  </motion.div>

                  {/* Floating Particles */}
                  {hoveredSkill === index && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400 rounded-full"
                          initial={{ 
                            x: 0, 
                            y: 0, 
                            opacity: 0,
                            scale: 0 
                          }}
                          animate={{
                            x: (Math.random() - 0.5) * 100,
                            y: (Math.random() - 0.5) * 100,
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Note */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-base">
              And many more! I'm always learning and exploring new technologies 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills