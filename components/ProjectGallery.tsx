'use client'

import { useEffect, useMemo, useState } from 'react'
import { Expand, X } from 'lucide-react'
import { getMessages, type Locale } from '@/data/i18n'
import { getProjectUi } from '@/data/project-i18n'

type ProjectTrack = 'all' | 'sales' | 'admin'

export function ProjectGallery({ projects, locale }: { projects: any[]; locale: Locale }) {
  const [activeTrack, setActiveTrack] = useState<ProjectTrack>('all')
  const [preview, setPreview] = useState<{ src: string; alt: string; title: string } | null>(null)
  const text = getMessages(locale)
  const labels = getProjectUi(locale)
  const visibleProjects = useMemo(
    () => activeTrack === 'all' ? projects : projects.filter((project) => project.track?.includes(activeTrack)),
    [activeTrack, projects],
  )

  useEffect(() => {
    if (!preview) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreview(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [preview])

  return <>
    <div className="filter-pills project-filters" role="tablist" aria-label={text.chooseTrack}>
      {(['all', 'sales', 'admin'] as const).map((track) => {
        const label = track === 'all' ? text.all : track === 'sales' ? text.sales : text.admin
        const count = track === 'all' ? projects.length : projects.filter((project) => project.track?.includes(track)).length
        return <button key={track} type="button" role="tab" aria-controls="project-gallery" aria-selected={activeTrack === track} className={activeTrack === track ? 'selected' : ''} onClick={() => setActiveTrack(track)}>{label}<small className="filter-count">{count}</small></button>
      })}
    </div>
    <div className="sample-grid project-grid" id="project-gallery" role="tabpanel">
      {visibleProjects.length ? visibleProjects.map((project) => <article className="sample-card project-card" key={project.id}>
        <div className="sample-thumbnail">          {project.preview?.url ? <button type="button" className="project-image-trigger" aria-label={`${labels.viewImage}: ${project.title}`} onClick={() => setPreview({ src: project.preview.url, alt: project.preview.alt || project.title, title: project.title })}><img src={project.preview.url} alt="" /><span><Expand aria-hidden="true" />{labels.viewImage}</span></button> : <div className="sheet-preview"><span>{project.title}</span><i /><i /><i /><i /><i /></div>}</div>
        <div className="sample-info">
          <small>{project.company} · {project.role}</small>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-detail"><b>{labels.highlights}</b><ul>{project.highlights.map((line: string) => <li key={line}>{line}</li>)}</ul></div>
          <div className="project-detail"><b>{labels.tools}</b><div className="project-tags">{project.tools.map((tool: string) => <span key={tool}>{tool}</span>)}</div></div>
          <div className="project-detail"><b>{labels.skills}</b><div className="project-tags skill-tags">{project.skills.map((skill: string) => <span key={skill}>{skill}</span>)}</div></div>
        </div>
      </article>) : <div className="samples-empty"><b>{text.noSamples}</b><span>{text.noSamplesDescription}</span></div>}
    </div>
    {preview && <div className="image-viewer-backdrop" role="presentation" onClick={() => setPreview(null)}>
      <div className="image-viewer" role="dialog" aria-modal="true" aria-label={preview.title} onClick={(event) => event.stopPropagation()}>
        <button type="button" className="image-viewer-close" aria-label={labels.closeImage} onClick={() => setPreview(null)}><X aria-hidden="true" /></button>
        <img src={preview.src} alt={preview.alt} />
        <p>{preview.title}</p>
      </div>
    </div>}
  </>
}
