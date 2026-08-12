import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects';
import Button from '../../../components/Button';
import ReadMeModal from '../../../components/ReadMeModal';
import { siteConfig } from '../../../data/config';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  let customStyle = {} as React.CSSProperties;
  let titleAnimation = "";
  let imageShadow = "";
  


  return (
    <div style={customStyle}>
      <div className="container" style={{ padding: '4rem 0', minHeight: '80vh' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ color: 'var(--accent-green)', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '0.9rem' }}>
            {project.category}
          </span>
          <h1 style={{ 
            fontSize: '3rem', 
            margin: '0.5rem 0', 
            textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
            animation: titleAnimation || 'none'
          }}>
            {project.name}
          </h1>
          <div style={{ display: 'flex', gap: '1rem', color: '#a0aab2', fontFamily: 'var(--font-pixel)' }}>
            <span>Version: {project.minecraftVersion}</span>
            <span>•</span>
            <span>Status: <span style={{ color: project.status === 'Concept' ? '#f39c12' : 'var(--accent-green)' }}>{project.status}</span></span>
          </div>
        </div>

        <div style={{ 
          width: '100%', 
          aspectRatio: '16/9', 
          backgroundColor: 'var(--surface)', 
          border: '2px solid var(--border)', 
          borderColor: 'var(--border)',
          marginBottom: '3rem', 
          overflow: 'hidden',
          boxShadow: imageShadow || 'none'
        }}>
          <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

      <div className="responsive-grid-2">
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-green)' }}>Overview</h2>
          <p style={{ color: '#d1d8d5', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            {project.description}
          </p>

          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-green)' }}>Features</h2>
          <ul style={{ color: '#d1d8d5', fontSize: '1.1rem', lineHeight: '2', marginLeft: '1.5rem', marginBottom: '2rem' }}>
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          {project.languages && project.languages.length > 0 && (
            <>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--mc-gold)' }}>Tech Stack</h2>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {project.languages.map((lang, idx) => (
                  <span key={idx} style={{ 
                    backgroundColor: '#222', 
                    color: 'var(--mc-yellow)', 
                    padding: '0.25rem 0.75rem', 
                    border: '1px solid #555',
                    fontSize: '1rem'
                  }}>
                    {lang}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        <div style={{ backgroundColor: 'var(--surface)', padding: '2rem', border: '2px solid var(--border)', height: 'fit-content' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Want something similar?</h3>
          <p style={{ color: '#a0aab2', marginBottom: '2rem', fontSize: '0.9rem' }}>
            Apni requirement batao — let's build something unique for your server.
          </p>
          <Button href={siteConfig.ticketUrl} variant="primary" className="w-full" style={{ width: '100%', textAlign: 'center' }}>
            Start a Project
          </Button>
          {project.demoUrl && (
            <div style={{ marginTop: '1rem' }}>
              <Button 
                href={project.demoUrl} 
                downloadName={project.demoUrl.startsWith('http') ? undefined : `${project.name}.zip`}
                style={{ width: '100%', textAlign: 'center' }}
              >
                {project.demoUrl.startsWith('http') ? 'WEBSITE' : 'DOWNLOAD PACK'}
              </Button>
              <ReadMeModal content={project.howToUse} />
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
