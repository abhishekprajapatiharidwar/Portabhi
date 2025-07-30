import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 10
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="particles-bg">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity
          }}
          animate={{
            y: [window.innerHeight + 100, -100],
            x: [
              `${particle.x}%`,
              `${particle.x + (Math.random() - 0.5) * 20}%`,
              `${particle.x}%`
            ],
            rotate: [0, 360],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

export default ParticleBackground