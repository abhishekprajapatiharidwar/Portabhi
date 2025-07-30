import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import { projects } from '../data/portfolio'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

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
      transition: { duration: 0.6 }
    }
  }

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects

  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'Featured', value: 'featured' }
  ]

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-transparent to-dark-200/50">
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
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="glass-effect p-2 rounded-lg flex space-x-2">
              {filters.map((filterItem) => (
                <motion.button
                  key={filterItem.value}
                  onClick={() => setFilter(filterItem.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    filter === filterItem.value
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {filterItem.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="relative group"
              >
                <div className="glass-effect rounded-xl overflow-hidden card-hover h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ rotate: -45, scale: 0 }}
                        animate={{ rotate: -45, scale: 1 }}
                        className="absolute top-4 -left-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-1 text-xs font-bold transform"
                      >
                        <Star size={12} className="inline mr-1" />
                        FEATURED
                      </motion.div>
                    )}

                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center"
                    >
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:bg-blue-500/30"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                        <motion.a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:bg-purple-500/30"
                        >
                          <Github size={20} />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold text-white mb-3"
                      layoutId={`project-title-${project.id}`}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 btn-primary text-center text-sm py-2"
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 btn-secondary text-center text-sm py-2"
                      >
                        Source Code
                      </motion.a>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
                      padding: '2px',
                      borderRadius: '12px'
                    }}
                    animate={{
                      backgroundPosition: hoveredProject === index ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%'
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="w-full h-full bg-dark-300 rounded-xl" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/ABhishekprajapatiharidwar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Github size={20} />
              <span>View More on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects