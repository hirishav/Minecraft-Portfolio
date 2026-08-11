"use client";
import React, { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';

export default function Work() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Plugin", "Resource Pack", "Texture Pack", "Custom System", "Other"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="container" style={{ padding: '6rem 0', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textShadow: '2px 2px 0px rgba(0,0,0,0.5)', textAlign: 'center' }}>My Work</h1>
      <p style={{ textAlign: 'center', color: '#a0aab2', marginBottom: '3rem', fontSize: '1.1rem' }}>
        A collection of my custom Minecraft projects.
      </p>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              background: filter === cat ? 'var(--accent-green)' : 'var(--surface)',
              color: filter === cat ? '#fff' : 'var(--foreground)',
              border: '2px solid',
              borderColor: filter === cat ? 'var(--accent-green)' : 'var(--border)',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-pixel)',
              fontSize: '1.1rem',
              transition: 'all 0.2s ease',
              textTransform: 'uppercase'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#a0aab2', gridColumn: '1 / -1', padding: '4rem 0' }}>
            No projects found in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
