import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="projects"
      className="py-12 md:py-16 lg:py-20 bg-dark-200"
    >
      <div className="container mx-auto px-4 md:px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          My <span className="text-purple">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-xl mx-auto mb-10 md:mb-14">
          A selection of my recent work
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <a
            href="#"
            className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3
            border border-purple rounded-lg font-medium text-sm md:text-base
            hover:bg-purple/20 transition duration-300"
          >
            <span>View more projects</span>
            <FaArrowRight className="ml-2" />
          </a>
        </div>

      </div>
    </motion.section>
  )
}

export default Projects
