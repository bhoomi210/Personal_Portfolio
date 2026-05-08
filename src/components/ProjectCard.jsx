import React from 'react'

const ProjectCard = ({ title, description, image, tech,demo, code }) => {
  return (
    <div className="bg-dark-300 rounded-xl overflow-hidden
      hover:-translate-y-2 transition duration-300 cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-44 sm:h-48 md:h-52 lg:h-56 object-cover"
      />

      <div className="p-4 md:p-5 lg:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm md:text-base mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-400 rounded-full
              text-xs md:text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-3 py-2 md:px-4 md:py-2.5
            bg-purple rounded-lg font-medium text-sm md:text-base
            hover:bg-purple-700 transition duration-300"
          >
            View Demo
          </a>

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-3 py-2 md:px-4 md:py-2.5
            border border-purple rounded-lg font-medium text-sm md:text-base
            hover:bg-purple/20 transition duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
