import type { Metadata } from 'next'
import { Suspense } from 'react'
import publicContent from '@/data/public-content.json'
import { TrackSwitch } from '@/components/TrackSwitch'
import { ProjectGallery } from '@/components/ProjectGallery'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { getLocale, getMessages } from '@/data/i18n'
import { localizeCompetency, localizeExperience, localizeSkillGroup, localizeWorkflow, localizedDate } from '@/data/content-i18n'
import { describeSkillGroup, getProjectUi, localizeProject } from '@/data/project-i18n'
import { Home as HomeIcon, UserRound, BriefcaseBusiness, FolderOpen, Mail } from 'lucide-react'

export const revalidate = 60
export const metadata: Metadata = { title: 'Portofolio | Sales & Administrasi', description: 'Portofolio Sales & Telemarketing dan Admin & Operasional.' }
type Track = 'sales' | 'admin' | 'all'
type Search = Promise<{ jalur?: string; lang?: string }>
const competencyDefaults = [
  { id: 'c1', group: 'Administrasi penjualan', title: 'Laporan & monitoring target', detail: 'Menyusun laporan penjualan, memantau target, dan merekap pencapaian.' },
  { id: 'c2', group: 'Kampanye dealer/distributor', title: 'Perhitungan pencapaian insentif', detail: 'Menghitung realisasi kampanye dealer dan menyiapkan pelaporan.' },
  { id: 'c3', group: 'Koordinasi lintas divisi', title: 'Finance & Accounting', detail: 'Menyiapkan dokumen pendukung dan koordinasi sesuai SOP.' },
  { id: 'c4', group: 'Data dan sistem', title: 'CRM · ERP · Accurate · Excel', detail: 'Mengelola data, input sistem, serta rekap dengan teliti.' },
  { id: 'c5', group: 'Stok dan operasional', title: 'Monitoring ketersediaan stok', detail: 'Membantu menjaga visibilitas stok untuk kelancaran penjualan.' },
  { id: 'c6', group: 'Latar belakang akuntansi', title: 'Brevet Pajak · Accurate · IPK 3.59', detail: 'Bekal akuntansi untuk pekerjaan yang berhubungan dengan angka.' },
]
const workflowDefaults = [
  { id: 'w1', title: 'Administrasi kampanye dealer', track: 'admin', steps: [{ label: 'Kampanye berjalan' }, { label: 'Hitung pencapaian' }, { label: 'Verifikasi data' }, { label: 'Koordinasi Finance / Accounting' }, { label: 'Realisasi insentif' }, { label: 'Pelaporan' }] },
  { id: 'w2', title: 'Pengelolaan lead', track: 'sales', steps: [{ label: 'Lead masuk' }, { label: 'Input CRM' }, { label: 'Follow-up' }, { label: 'Penawaran / closing' }, { label: 'Pembaruan laporan' }] },
]
function forTrack(items: any[], track: Track) { return track === 'all' ? items : items.filter((item) => !Array.isArray(item.track) || item.track.length === 0 || item.track.includes(track)) }
function mediaUrl(media: any): string | undefined { return media && typeof media === 'object' ? media.url : undefined }
function formatTrack(track: Track, locale: ReturnType<typeof getLocale>) { const text = getMessages(locale); return track === 'admin' ? text.admin : track === 'all' ? text.all : text.sales }

export default async function Home({ searchParams }: { searchParams: Search }) {
  const params = await searchParams
  const track: Track = params.jalur === 'admin' ? 'admin' : params.jalur === 'all' ? 'all' : 'sales'
  const locale = getLocale(params.lang)
  const text = getMessages(locale)
  const projectUi = getProjectUi(locale)
  const profile: any = publicContent.portfolio[0]
  const experiences: any[] = publicContent.experiences.map((item: any) => localizeExperience(item, locale))
  const competencies: any[] = publicContent.competencies.map((item: any) => localizeCompetency(item, locale))
  const workflows: any[] = publicContent.workflows.map((item: any) => localizeWorkflow(item, locale))
  const samples: any[] = publicContent.samples
  const skills: any[] = publicContent.skills.map((item: any) => ({ ...item, group: localizeSkillGroup(item.group, locale) }))
  const education: any[] = publicContent.education
  const certificates: any[] = publicContent.certificates
  const admin = track === 'admin'
  const name = profile?.name || 'Nama Anda'
  const photo = profile?.profilePhoto
  const cvHref = '/CV-Sintia-Marada-Hutagalung.pdf'
  const headlineByLocale = ({ en: 'Marketing & Sales | Telemarketing', id: profile?.headline || `${text.sales} | ${text.admin}`, zh: '市场营销与销售 | 电话营销', ko: '마케팅·영업 | 텔레마케팅', ja: 'マーケティング・営業 | テレマーケティング' } as Record<typeof locale, string>)[locale]
  const intro = locale === 'id'
    ? profile?.[admin ? 'introAdmin' : 'introSales']
    : admin
      ? ({ en: 'Marketing and Sales professional with over one year of experience in product promotion, CRM-based lead management, and ERP-enabled sales processes. Skilled in product presentations, customer needs analysis, and achieving sales targets. Experienced in dealer campaign coordination, sales reporting, and inventory monitoring.', zh: '拥有一年以上产品推广、CRM 销售线索管理及 ERP 销售流程优化经验的市场与销售专业人士。擅长产品介绍、客户需求分析和销售目标达成，并具备经销商活动协调、销售报告及库存监控经验。', ko: '제품 홍보, CRM 기반 잠재 고객 관리, ERP 영업 프로세스 최적화 분야에서 1년 이상의 경험을 가진 마케팅·영업 전문가입니다. 제품 소개, 고객 요구 분석, 영업 목표 달성에 능숙하며 대리점 캠페인 조율, 영업 보고 및 재고 모니터링 경험이 있습니다.', ja: '商品プロモーション、CRMを活用した見込み客管理、ERPによる営業プロセス最適化で1年以上の経験を持つマーケティング・営業担当者です。商品説明、顧客ニーズ分析、営業目標の達成に加え、販売店キャンペーンの調整、売上報告、在庫確認の経験があります。' } as Record<string, string>)[locale]
      : ({ en: 'Results-driven Marketing and Sales professional with over one year of experience in product promotion, CRM-based lead management, and sales process optimization through ERP systems. Skilled in product presentations, customer needs analysis, and achieving sales targets. Ready to contribute as a Product Marketing Representative by increasing brand awareness, optimizing technology-driven sales processes, and supporting sustainable business growth.', zh: '以成果为导向的市场与销售专业人士，拥有一年以上产品推广、CRM 销售线索管理及 ERP 销售流程优化经验。擅长产品介绍、客户需求分析和达成销售目标。希望担任产品营销代表，通过提升品牌知名度、优化技术驱动的销售流程并支持业务可持续增长，为团队作出贡献。', ko: '성과 중심의 마케팅·영업 전문가로 제품 홍보, CRM 기반 잠재 고객 관리, ERP 시스템을 통한 영업 프로세스 최적화 분야에서 1년 이상의 경험이 있습니다. 제품 소개, 고객 요구 분석, 영업 목표 달성에 능숙합니다. 브랜드 인지도 향상, 기술 기반 영업 프로세스 최적화, 지속 가능한 사업 성장을 지원하는 Product Marketing Representative로 기여하고자 합니다.', ja: '成果を重視するマーケティング・営業担当者として、商品プロモーション、CRMによる見込み客管理、ERPを活用した営業プロセスの最適化で1年以上の経験があります。商品説明、顧客ニーズ分析、営業目標の達成を得意としています。Product Marketing Representativeとしてブランド認知を高め、テクノロジーを活用した営業プロセスを最適化し、持続的な事業成長に貢献したいと考えています。' } as Record<string, string>)[locale]
  const trackExperiences = forTrack(experiences, track)
  const trackCompetencies = forTrack(competencies, track)
  const trackSkills = forTrack(skills, track)
  const trackSamples = samples.filter((sample) => sample.anonymized).map((sample) => localizeProject(sample, locale))
  const selectedWorkflows = workflows.filter((item) => track === 'all' || item.track === track || item.track === 'all')
  const displayWorkflows = selectedWorkflows.length ? selectedWorkflows : workflowDefaults.filter((item) => track === 'all' || item.track === track)
  const displayCompetencies = trackCompetencies.length ? trackCompetencies : admin ? competencyDefaults : [
    { id: 's1', group: 'Sales & telemarketing', title: 'Lead generation & follow-up', detail: 'Mengelola prospek dan menjaga tindak lanjut yang konsisten.' },
    { id: 's2', group: 'Customer relationship', title: 'Komunikasi pelanggan', detail: 'Memahami kebutuhan dan membangun relasi pelanggan.' },
    { id: 's3', group: 'Pencapaian target', title: 'Monitoring pipeline', detail: 'Memantau peluang dan memperbarui status proses penjualan.' },
    { id: 's4', group: 'Data & sistem', title: 'CRM dan pelaporan', detail: 'Mencatat aktivitas dan menyiapkan laporan penjualan.' },
  ]
  const defaultSkills: Record<string, string[]> = admin
    ? { 'Sistem & Data': ['ERP', 'Accurate', 'Excel'], 'Office': ['Word', 'PowerPoint', 'Google Workspace'], 'Komunikasi': ['WhatsApp Business', 'Email', 'Zoom', 'Google Meet', 'Teams'] }
    : { 'Sales & CRM': ['CRM', 'Lead management', 'Follow-up'], 'Office': ['Excel', 'PowerPoint', 'Google Workspace'], 'Komunikasi': ['WhatsApp Business', 'Email', 'Zoom', 'Google Meet', 'Teams'] }
  const groupedSkills: [string, any[]][] = trackSkills.length
    ? Object.entries(trackSkills.reduce((groups: Record<string, any[]>, item: any) => { (groups[item.group] ||= []).push(item); return groups }, {}))
    : Object.entries(defaultSkills).map(([group, names]) => [group, names.map((label) => ({ name: label }))])
  const achievementCards = trackExperiences.flatMap((experience) => (experience.achievements || []).map((achievement: any) => ({ ...achievement, role: experience.role })))
  const contactLinks = [
    profile?.whatsapp ? { label: 'WhatsApp', value: profile.whatsapp, href: `https://wa.me/${String(profile.whatsapp).replace(/\D/g, '')}`, icon: '◉' } : null,
    profile?.email ? { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: '✉' } : null,
    profile?.linkedin ? { label: 'LinkedIn', value: 'Lihat profil profesional', href: profile.linkedin, icon: 'in' } : null,
  ].filter(Boolean) as { label: string; value: string; href: string; icon: string }[]

  return <main className="portfolio-page">
    <header className="site-header"><a className="brand" href="#beranda">SMH<span>.</span></a><nav className="main-nav" aria-label="Primary navigation"><a href="#beranda"><HomeIcon aria-hidden="true"/><span>{text.home}</span></a><a href="#tentang"><UserRound aria-hidden="true"/><span>{text.about}</span></a><a href="#pengalaman"><BriefcaseBusiness aria-hidden="true"/><span>{text.experience}</span></a><a href="#portofolio"><FolderOpen aria-hidden="true"/><span>{text.portfolio}</span></a><a href="#kontak"><Mail aria-hidden="true"/><span>{text.contact}</span></a></nav><Suspense fallback={<span className="language-switch">文 English</span>}><LanguageSwitcher locale={locale}/></Suspense><a className="header-download" href={cvHref} download>{text.download} <span>↓</span></a></header>

    <section className="intro-layout section-anchor" id="beranda">
      <div className="hero-card" id="tentang"><div className="hero-copy"><span className="eyebrow-pill">{text.professional}</span><h1>{name}</h1><p className="hero-title">{headlineByLocale}</p><p className="hero-description">{intro}</p><div className="hero-career-picker"><p>{text.chooseTrack}</p><Suspense fallback={<div className="track-switch"/>}><TrackSwitch track={track} locale={locale}/></Suspense></div><div className="hero-ctas"><a className="button primary" href="#pengalaman">{text.seeExperience} <span>→</span></a><a className="button outline" href={cvHref} download>{text.download} <span>↓</span></a></div></div><div className="hero-portrait">{mediaUrl(photo) ? <img src={mediaUrl(photo)} alt={photo?.alt || `Photo of ${name}`} /> : <div className="portrait-placeholder"><span>{name.split(' ').map((part: string) => part[0]).slice(0, 2).join('').toUpperCase()}</span><small>SINTIA MARADA HUTAGALUNG</small></div>}<div className="portrait-badge">{track === 'all' ? `${text.sales.toUpperCase()} + ${text.admin.toUpperCase()}` : admin ? text.admin.toUpperCase() : text.sales.toUpperCase()}</div></div>
        <div className="hero-contact-strip">{contactLinks.length ? contactLinks.map((item) => <a href={item.href} key={item.label} target={item.label === 'LinkedIn' || item.label === 'WhatsApp' ? '_blank' : undefined} rel="noreferrer"><b>{item.icon}</b><span><small>{item.label}</small>{item.value}</span></a>) : <span className="contact-hint">{text.contactDescription}</span>}</div>
      </div>
      <aside className="career-aside"><div className="aside-heading"><span className="section-kicker">{text.focus}</span><h2>{text.oneProfile}<br/><em>{text.twoStrengths}</em></h2><p>{text.focusDescription}</p></div><a className={`career-option sales-option ${!admin ? 'chosen' : ''}`} href={`/?jalur=sales&lang=${locale}#beranda`}><span className="career-icon">☎</span><small>01</small><h3>{text.sales}</h3><p>{text.salesDescription}</p><b>{text.viewSales} <i>↗</i></b></a><a className={`career-option admin-option ${admin ? 'chosen' : ''}`} href={`/?jalur=admin&lang=${locale}#beranda`}><span className="career-icon">▤</span><small>02</small><h3>{text.admin}</h3><p>{text.adminDescription}</p><b>{text.viewAdmin} <i>↗</i></b></a></aside>
    </section>

    <section className="stats-row" aria-label={text.snapshot}><div className="stats-intro"><span className="section-kicker">{text.snapshot}</span><h2>{text.results}<br/><em>{text.meaningful}</em></h2></div>{achievementCards.length ? achievementCards.slice(0, 4).map((item: any, index: number) => <article className="stat-card" key={`${item.label}-${index}`}><span className="stat-icon">{['↗', '◷', '◎', '✓'][index]}</span><strong>{item.value}</strong><p>{item.label}</p><small>{item.role}</small></article>) : <><article className="stat-card"><span className="stat-icon">◎</span><strong>{text.relationships}</strong><p>{text.customerCommunication}</p><small>{text.sales}</small></article><article className="stat-card"><span className="stat-icon">↻</span><strong>{text.followUp}</strong><p>{text.structuredFollowUp}</p><small>{text.leadsCustomers}</small></article><article className="stat-card"><span className="stat-icon">▤</span><strong>{text.data}</strong><p>{text.reporting}</p><small>{text.salesAdministration}</small></article><article className="stat-card"><span className="stat-icon">✓</span><strong>{text.process}</strong><p>{text.crossCoordination}</p><small>{text.operationsSOP}</small></article></>}</section>

    <section className="content-section competencies-section section-anchor" id="kompetensi"><div className="section-heading"><div><span className="section-kicker">{admin ? text.adminSkills : text.salesSkills}</span><h2>{text.coreStrengths}<br/><em>{admin ? text.behindProcess : text.buildingRelationships}</em></h2></div><p>{admin ? text.adminSkillsDescription : text.salesSkillsDescription}</p></div><div className="competency-cards">{displayCompetencies.map((item: any, index: number) => <article className="competency-tile" key={item.id}><span className="tile-icon">{['◉', '▦', '✥', '♙', '▣', '✦'][index % 6]}</span><small>{item.group}</small><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></section>

    <section className="content-section experience-section section-anchor" id="pengalaman"><div className="section-heading"><div><span className="section-kicker">{text.careerJourney}</span><h2>{text.workHistory}</h2></div><p>{text.historyRelevant.replace('{track}', formatTrack(track, locale))}</p></div><div className="filter-pills"><a className={track === 'all' ? 'selected' : ''} href={`/?jalur=all&lang=${locale}#pengalaman`}>{text.all}</a><a className={track === 'sales' ? 'selected' : ''} href={`/?jalur=sales&lang=${locale}#pengalaman`}>{text.sales}</a><a className={track === 'admin' ? 'selected' : ''} href={`/?jalur=admin&lang=${locale}#pengalaman`}>{text.admin}</a></div><div className="timeline">{(trackExperiences.length ? trackExperiences : [{ id: 'placeholder', role: admin ? text.admin : text.sales, company: text.footer, startDate: '—', endDate: '', summary: text.historyRelevant.replace('{track}', formatTrack(track, locale)) }]).map((item: any, index: number) => <article className="timeline-item" key={item.id}><div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div><div className="timeline-content"><div className="timeline-meta"><span>{localizedDate(item.startDate, locale)}{item.endDate ? ` — ${localizedDate(item.endDate, locale)}` : ''}</span><span className="track-label">{(item.track || [track]).map((t: string) => t === 'admin' ? text.admin : text.sales).join(' · ')}</span></div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.summary}</p>{item.responsibilities?.length > 0 && <ul className="responsibility-list">{item.responsibilities.map((point: any) => <li key={point.id || point.detail}>{point.detail}</li>)}</ul>}{item.achievements?.length > 0 && <div className="achievement-list">{item.achievements.map((achievement: any) => <span key={achievement.id || achievement.label}><b>{achievement.value}</b> {achievement.label}</span>)}</div>}</div></article>)}</div></section>

    <section className="tools-section section-anchor" id="tools"><div className="content-section"><div className="section-heading"><div><span className="section-kicker">{text.tools}</span><h2>{text.toolsTitle}</h2></div><p>{projectUi.toolIntro}</p></div><div className="tool-groups">{groupedSkills.map(([group, items]) => <article className="tool-group" key={group}><h3>{group}</h3><p className="tool-group-description">{describeSkillGroup(group, locale)}</p><div className="tool-items">{items.map((item: any, index: number) => <span className="tool-item" key={item.id || item.name}><i>{['▦', '▣', '◉', '✉', '⌘'][index % 5]}</i>{item.name}</span>)}</div></article>)}</div></div></section>

    <section className="content-section workflow-section"><div className="section-heading"><div><span className="section-kicker">{text.workflow}</span><h2>{text.workflowTitle}</h2></div><p>{text.workflowDescription}</p></div><div className="workflow-tabs">{displayWorkflows.map((workflow: any) => <div className="workflow-panel" key={workflow.id}><div className="workflow-title"><span className="workflow-symbol">↗</span><div><small>{workflow.track === 'admin' ? text.admin.toUpperCase() : text.sales.toUpperCase()}</small><h3>{workflow.title}</h3></div></div><div className="workflow-track">{workflow.steps?.map((step: any, index: number) => <div className="workflow-step" key={step.id || step.label}><span>{String(index + 1).padStart(2, '0')}</span><b>{step.label}</b>{index < workflow.steps.length - 1 && <i>→</i>}</div>)}</div></div>)}</div></section>

    <section className="samples-section section-anchor" id="portofolio"><div className="content-section"><div className="section-heading"><div><span className="section-kicker">{text.sampleSection}</span><h2>{projectUi.title}</h2></div><p>{projectUi.intro}</p></div><ProjectGallery projects={trackSamples} locale={locale}/></div></section>

    <section className="content-section education-section" id="pendidikan"><div className="section-heading"><div><span className="section-kicker">{text.academics}</span><h2>{text.academicTitle}</h2></div><p>{text.educationDescription}</p></div><div className="credential-grid"><article className="education-card"><span className="credential-icon">▤</span><small>{text.educationLabel}</small>{education.map((item: any) => <div key={item.id}><h3>{locale === 'id' ? item.qualification : text.degree}</h3><b>{item.institution}</b><p>{localizedDate(item.startDate, locale)} — {localizedDate(item.endDate, locale)} · {locale === 'id' ? item.detail : text.gpa}</p></div>)}{education.length === 0 && <div><h3>{text.degree}</h3><b>STIE Indonesia Jakarta</b><p>2019 — 2023 · {text.gpa}</p></div>}</article><article className="certificates-card"><span className="credential-icon">✦</span><small>{text.certificateLabel}</small><div className="certificate-list">{(certificates.length ? certificates : [{id:'a1',title:'Accurate Accounting Software Training',issuer:'STEI',year:'2022'},{id:'a2',title:'Brevet Pajak',issuer:'STEI',year:'2022'},{id:'a3',title:'Pelatihan Kepemimpinan & Inovasi Mahasiswa STEI',issuer:'STEI',year:'2023'},{id:'a4',title:'Prepare The Future: Unlock Your Passion and Let’s Know Yourself',issuer:'STEI',year:'2023'}]).map((item: any) => <div className="certificate-item" key={item.id}><span>✓</span><p><b>{item.title}</b><small>{item.issuer} · {item.year}</small></p></div>)}</div></article></div></section>
<section className="contact-section section-anchor" id="kontak"><div className="contact-layout"><div className="contact-copy-block"><span className="section-kicker">{text.contactSection}</span><h2>{text.contactTitle}</h2><p>{text.contactDescription}</p><div className="contact-links">{contactLinks.map((item) => <a className="contact-link" href={item.href} key={item.label} target={item.label === 'LinkedIn' || item.label === 'WhatsApp' ? '_blank' : undefined} rel="noreferrer"><b>{item.icon}</b><span><small>{item.label}</small>{item.value}</span><i>↗</i></a>)}</div></div></div><footer className="site-footer"><a className="brand" href="#beranda">SMH<span>.</span></a><span>© 2026 {name} · {text.footer} · {formatTrack(track, locale)}</span></footer></section>
  </main>
}


