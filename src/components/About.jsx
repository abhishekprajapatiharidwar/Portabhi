import React from 'react'
import { motion } from 'framer-motion'
import { User, Code, Coffee, Gamepad2 } from 'lucide-react'
import { about } from '../data/portfolio'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  }

  const hobbies = [
    { name: 'Cooking', icon: Coffee },
    { name: 'Reading', icon: User },
    { name: 'Gaming', icon: Gamepad2 },
    { name: 'Coding', icon: Code }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-dark-200/50">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - About Image */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-80 h-80 glass-effect rounded-2xl overflow-hidden p-4"
                >
                  <img
                    src="/src/assets/about.svg"
                    alt="About illustration"
                    className="w-full h-full object-contain filter brightness-110"
                  />
                </motion.div>
                
                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 glass-effect rounded-full flex items-center justify-center"
                >
                  <Code size={24} className="text-blue-400" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 glass-effect rounded-full flex items-center justify-center"
                >
                  <User size={24} className="text-purple-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg prose-invert max-w-none">
                {about.description.split('\n\n').map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={itemVariants}
                    className="text-gray-300 leading-relaxed mb-4"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Hobbies */}
              <motion.div variants={itemVariants} className="mt-8">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">My Hobbies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="glass-effect p-4 rounded-lg flex items-center space-x-3 card-hover"
                    >
                      <hobby.icon size={20} className="text-blue-400" />
                      <span className="text-gray-300">{hobby.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Fun Facts */}
              <motion.div variants={itemVariants} className="mt-8">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Fun Facts</h3>
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-gray-300">Learning by doing enthusiast</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span className="text-gray-300">Self-motivated and hardworking</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-pink-400 rounded-full" />
                    <span className="text-gray-300">Always eager to learn new technologies</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About