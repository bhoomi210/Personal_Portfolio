import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-12 md:py-16 lg:py-20 bg-dark-100"
    >
      <div className="container mx-auto px-2">
        
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          My <span className="text-purple">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-xl mx-auto mb-10 md:mb-14">
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-xl p-4 md:p-5 lg:p-6
              hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-3">
                <skill.icon className="w-9 h-9 md:w-10 md:h-10 text-purple mr-4" />
                <h3 className="text-lg md:text-xl font-semibold">
                  {skill.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm md:text-base mb-4">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark-400 rounded-full text-xs md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  )
}

export default Skills
