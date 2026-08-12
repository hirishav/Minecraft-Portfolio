import React from 'react';
import Link from 'next/link';
import { Project } from '../data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.id}`} className={styles.card} data-id={project.id}>
      <div className={styles.imageWrapper}>
        <img src={project.image} alt={project.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.category}>{project.category}</div>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.description}>{project.shortDescription}</p>
        <div className={styles.footer}>
          <span className={styles.version}>{project.minecraftVersion}</span>
          <span className={styles.viewDetails}>
            View Details ➔
          </span>
        </div>
      </div>
    </Link>
  );
}
