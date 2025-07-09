import React from 'react';
import { Project } from '../lib/data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div className="rounded-xl border border-github-border bg-github-darker/50 p-4 transition-colors hover:bg-github-darker">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-github-text">
            {project.title}
          </h3>
          <div className="flex space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-github-text hover:text-github-success transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-github-text hover:text-github-success transition-colors"
              >
                <FaExternalLinkAlt className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-github-text/80">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-github-darker px-3 py-1 text-xs text-github-success"
            >
              {tech}
            </span>
          ))}
        </div>
        <ul className="list-disc list-inside space-y-1 text-sm text-github-text/80">
          {project.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
