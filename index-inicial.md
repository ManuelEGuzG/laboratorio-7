

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jardín en Casa — Plataforma de cursos</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
/* === Maestría Culinaria — Plataforma de cursos === */
/* Dark mode con accents indigo y deeppink */

:root {
  /* Paleta base */
  --bg-deep: #0a0a0f;
  --bg-base: #0f1117;
  --bg-elev: #161922;
  --bg-elev-2: #1c1f2b;
  --bg-elev-3: #232735;

  /* Bordes */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-soft: rgba(255, 255, 255, 0.10);
  --border-strong: rgba(255, 255, 255, 0.18);

  /* Texto */
  --text-primary: #f1f2f7;
  --text-secondary: #a8acbf;
  --text-muted: #6b6f80;
  --text-faint: #4a4d5c;

  /* Accents — indigo + deeppink */
  --indigo: #6366f1;
  --indigo-bright: #818cf8;
  --indigo-deep: #4338ca;
  --indigo-glow: rgba(99, 102, 241, 0.4);

  --pink: #ff1493;
  --pink-bright: #ff5cb1;
  --pink-deep: #c2185b;
  --pink-glow: rgba(255, 20, 147, 0.4);

  /* Gradiente firma */
  --gradient-accent: linear-gradient(135deg, var(--indigo) 0%, var(--pink) 100%);
  --gradient-accent-soft: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(255, 20, 147, 0.15) 100%);

  /* Difficulty */
  --diff-1: #4ade80;
  --diff-2: #fbbf24;
  --diff-3: #ef4444;

  /* Tipografía */
  --font-display: 'Space Grotesk', 'Inter', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Espaciado */
  --sidebar-width: 380px;
  --header-height: 64px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  overflow: hidden;
}

body {
  font-family: var(--font-body);
  background: var(--bg-deep);
  color: var(--text-primary);
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Background ambient con grain */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 40% at 0% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse 50% 50% at 100% 100%, rgba(255, 20, 147, 0.08) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 2px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.6;
}

/* === Layout principal === */
.app {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  height: 100vh;
  width: 100vw;
}

/* === Sidebar === */
.sidebar {
  background: var(--bg-base);
  border-right: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.sidebar-header {
  padding: 18px 20px 16px;
  border-bottom: 1px solid var(--border-subtle);
  position: relative;
}

.sidebar-header::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 20px;
  right: 20px;
  height: 1px;
  background: var(--gradient-accent);
  opacity: 0.5;
}

.sidebar-header .brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}

.sidebar-header .logo {
  width: 32px;
  height: 32px;
  background: var(--gradient-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%);
}

.sidebar-header h1 {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text-primary);
}

.sidebar-header .tagline {
  font-size: 11px;
  color: var(--text-muted);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0 24px;
}

.sidebar-content::-webkit-scrollbar {
  width: 6px;
}

.sidebar-content::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-content::-webkit-scrollbar-thumb {
  background: var(--border-soft);
}

.sidebar-content::-webkit-scrollbar-thumb:hover {
  background: var(--border-strong);
}

/* === Phase block === */
.phase {
  margin-top: 14px;
}

.phase-header {
  padding: 0 20px 8px;
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.phase-number {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--pink);
  letter-spacing: 0.1em;
}

.phase-title {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.phase-line {
  flex: 1;
  height: 1px;
  background: var(--border-subtle);
}

.phase-description {
  padding: 0 20px 10px;
  font-size: 11px;
  color: var(--text-muted);
  font-style: italic;
}

/* === Skill grid (Street Fighter style) === */
.skill-grid {
  padding: 4px 14px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.skill-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
}

/* === Main content area === */
.main {
  position: relative;
  overflow-y: auto;
  background: var(--bg-deep);
}

.main::-webkit-scrollbar {
  width: 8px;
}

.main::-webkit-scrollbar-track {
  background: var(--bg-deep);
}

.main::-webkit-scrollbar-thumb {
  background: var(--border-soft);
}

.main::-webkit-scrollbar-thumb:hover {
  background: var(--border-strong);
}

/* Welcome state */
.welcome {
  padding: 60px 80px;
  max-width: 900px;
}

.welcome .eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--pink);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.welcome h1 {
  font-family: var(--font-display);
  font-size: 64px;
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
  background: linear-gradient(180deg, var(--text-primary) 0%, var(--text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.welcome h1 .accent {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.welcome .subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 48px;
  max-width: 600px;
  line-height: 1.6;
}

.welcome .stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: 48px;
}

.welcome .stat {
  padding: 24px 20px 24px 0;
  border-right: 1px solid var(--border-subtle);
}

.welcome .stat:last-child {
  border-right: none;
  padding-left: 20px;
  padding-right: 0;
}

.welcome .stat:not(:first-child) {
  padding-left: 20px;
}

.welcome .stat-value {
  font-family: var(--font-display);
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 8px;
}

.welcome .stat-label {
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-family: var(--font-mono);
}

.welcome .hint {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: var(--bg-elev);
  border: 1px solid var(--border-soft);
  font-size: 13px;
  color: var(--text-secondary);
  position: relative;
}

.welcome .hint::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--gradient-accent);
}

.welcome .hint kbd {
  display: inline-block;
  padding: 3px 8px;
  background: var(--bg-elev-3);
  border: 1px solid var(--border-strong);
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-primary);
}

/* === Topic detail layout === */
.topic-detail {
  padding: 32px 48px 80px;
  max-width: 1100px;
}

.topic-breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.topic-breadcrumb .sep {
  color: var(--text-faint);
}

.topic-breadcrumb .current {
  color: var(--pink);
}

.topic-header {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 32px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--border-subtle);
}

.topic-icon-large {
  width: 72px;
  height: 72px;
  background: var(--bg-elev);
  border: 1px solid var(--border-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  flex-shrink: 0;
  position: relative;
}

.topic-icon-large::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-accent);
  opacity: 0.1;
  pointer-events: none;
}

.topic-info h2 {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.topic-info .description {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.6;
  max-width: 700px;
  margin-bottom: 14px;
}

.topic-meta {
  display: flex;
  gap: 16px;
  font-size: 12px;
  font-family: var(--font-mono);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.topic-meta .meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.topic-meta .difficulty-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.topic-meta .diff-dot {
  width: 6px;
  height: 6px;
  background: var(--text-faint);
}

.topic-meta .diff-dot.active.d1 { background: var(--diff-1); }
.topic-meta .diff-dot.active.d2 { background: var(--diff-2); }
.topic-meta .diff-dot.active.d3 { background: var(--diff-3); }

/* Video container */
.video-section {
  margin-bottom: 40px;
}

.section-title {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--pink);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--border-soft) 0%, transparent 100%);
}

.video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--bg-elev);
  border: 1px solid var(--border-soft);
  overflow: hidden;
}

.video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.video-title {
  margin-top: 12px;
  font-size: 13px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
}

/* Tabs for highlights / chapters */
.tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: 20px;
}

.tab {
  padding: 12px 20px;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
}

.tab:hover {
  color: var(--text-secondary);
}

.tab.active {
  color: var(--text-primary);
}

.tab.active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: var(--gradient-accent);
}

.tab .count {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-faint);
  margin-left: 6px;
}

.tab.active .count {
  color: var(--pink);
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

/* Highlights list */
.highlights-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: var(--border-subtle);
  border: 1px solid var(--border-subtle);
}

.highlight-row {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 14px 18px;
  background: var(--bg-base);
  cursor: pointer;
  transition: background 0.2s;
  position: relative;
}

.highlight-row::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  background: var(--gradient-accent);
  transition: width 0.2s;
}

.highlight-row:hover {
  background: var(--bg-elev);
}

.highlight-row:hover::before {
  width: 3px;
}

.highlight-row .timestamp {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--indigo-bright);
  font-weight: 500;
}

.highlight-row .h-title {
  font-size: 14px;
  color: var(--text-primary);
  font-weight: 500;
}

.highlight-row .h-action {
  font-size: 11px;
  font-family: var(--font-mono);
  color: var(--text-faint);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: color 0.2s;
}

.highlight-row:hover .h-action {
  color: var(--pink);
}

/* Chapters grid */
.chapters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.chapter-card {
  background: var(--bg-elev);
  border: 1px solid var(--border-soft);
  padding: 18px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
}

.chapter-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}

.chapter-card:hover {
  background: var(--bg-elev-2);
  border-color: var(--border-strong);
}

.chapter-card:hover::before {
  transform: scaleX(1);
}

.chapter-card .chapter-num {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--pink);
  letter-spacing: 0.12em;
  margin-bottom: 8px;
}

.chapter-card .chapter-title {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
  letter-spacing: -0.01em;
}

.chapter-card .chapter-duration {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.chapter-card .play-icon {
  position: absolute;
  bottom: 18px;
  right: 18px;
  font-size: 18px;
  color: var(--text-faint);
  transition: color 0.2s;
}

.chapter-card:hover .play-icon {
  color: var(--pink);
}

.no-chapters {
  padding: 32px;
  text-align: center;
  color: var(--text-muted);
  font-size: 13px;
  font-style: italic;
  background: var(--bg-base);
  border: 1px dashed var(--border-soft);
}

/* === Responsive === */
@media (max-width: 900px) {
  .app {
    grid-template-columns: 1fr;
  }
  .sidebar {
    display: none;
  }
  .welcome {
    padding: 40px 24px;
  }
  .welcome h1 { font-size: 40px; }
  .topic-detail { padding: 24px; }
}

  </style>
</head>
<body>
  <div class="app">
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="brand">
          <div class="logo">🌱</div>
          <h1>Jardín en Casa</h1>
        </div>
        <div class="tagline">SKILL TREE · 5 FASES</div>
      </div>
      <div class="sidebar-content"></div>
    </aside>
    <main class="main"></main>
  </div>

  <script>
// ====================================================================
// DATA — Estructura del curso
// ====================================================================
// Datos del curso de Jardinería para Principiantes
// Estructura: Curso > Fases > Temas > {video, highlights, capítulos opcionales}

const courseData = {
  id: 'jardin-en-casa',
  title: 'Jardín en Casa',
  subtitle: 'De maceta vacía a jardín lleno de vida',
  phases: [
    {
      id: 'primeros-pasos',
      title: 'Primeros Pasos',
      description: 'Lo básico para empezar sin morir en el intento',
      topics: [
        {
          id: 'herramientas',
          title: 'Herramientas',
          icon: '🛠️',
          difficulty: 1,
          duration: '2h 30m',
          description: 'Las 7 herramientas básicas que necesitas y las que NO necesitas comprar.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Herramientas básicas de jardinería' },
          highlights: [
            { time: '00:05:00', title: 'Pala de mano: la imprescindible', seconds: 300 },
            { time: '00:18:30', title: 'Tijeras de podar', seconds: 1110 },
            { time: '00:45:00', title: 'Regadera vs manguera', seconds: 2700 },
            { time: '01:20:00', title: 'Guantes correctos', seconds: 4800 },
            { time: '02:00:00', title: 'Lo que NO compres', seconds: 7200 }
          ],
          chapters: [
            { id: 'c1', title: 'Kit de inicio bajo $30', duration: '08:20', youtubeId: 'G0_aDHZpXEs' },
            { id: 'c2', title: 'Cómo cuidar tus tijeras', duration: '05:40', youtubeId: 'G0_aDHZpXEs' }
          ]
        },
        {
          id: 'tierra',
          title: 'Tierra',
          icon: '🟫',
          difficulty: 1,
          duration: '3h 15m',
          description: 'Sustrato, drenaje y nutrientes: la base de todo lo verde.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Todo sobre la tierra' },
          highlights: [
            { time: '00:10:00', title: 'Tipos de sustrato', seconds: 600 },
            { time: '00:50:00', title: 'Mezcla universal', seconds: 3000 },
            { time: '01:40:00', title: 'Drenaje correcto', seconds: 6000 },
            { time: '02:30:00', title: 'Cuándo cambiar la tierra', seconds: 9000 }
          ]
        },
        {
          id: 'macetas',
          title: 'Macetas',
          icon: '🪴',
          difficulty: 1,
          duration: '2h 00m',
          description: 'Tamaños, materiales y por qué tu maceta puede estar matando tu planta.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Elegir la maceta correcta' },
          highlights: [
            { time: '00:08:00', title: 'Barro vs plástico', seconds: 480 },
            { time: '00:35:00', title: 'Tamaño según planta', seconds: 2100 },
            { time: '01:20:00', title: 'Agujeros de drenaje', seconds: 4800 }
          ]
        }
      ]
    },
    {
      id: 'cuidados-diarios',
      title: 'Cuidados Diarios',
      description: 'La rutina que mantiene vivas a tus plantas',
      topics: [
        {
          id: 'riego',
          title: 'Riego',
          icon: '💧',
          difficulty: 1,
          duration: '4h 00m',
          description: 'El error #1 de los principiantes. Aprende a regar sin ahogar.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Cómo regar correctamente' },
          highlights: [
            { time: '00:12:00', title: 'Test del dedo', seconds: 720 },
            { time: '01:00:00', title: 'Mañana o tarde', seconds: 3600 },
            { time: '02:15:00', title: 'Riego profundo', seconds: 8100 },
            { time: '03:00:00', title: 'Señales de exceso', seconds: 10800 },
            { time: '03:40:00', title: 'Vacaciones: trucos', seconds: 13200 }
          ],
          chapters: [
            { id: 'c1', title: 'Cuánta agua necesita cada planta', duration: '11:30', youtubeId: 'G0_aDHZpXEs' },
            { id: 'c2', title: 'Sistema de riego casero', duration: '09:15', youtubeId: 'G0_aDHZpXEs' }
          ]
        },
        {
          id: 'luz',
          title: 'Luz Solar',
          icon: '☀️',
          difficulty: 2,
          duration: '3h 20m',
          description: 'Sol directo, indirecto, sombra. Encuentra el lugar perfecto.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'La luz que necesitan tus plantas' },
          highlights: [
            { time: '00:15:00', title: 'Mapa de luz en casa', seconds: 900 },
            { time: '01:05:00', title: 'Plantas de sombra', seconds: 3900 },
            { time: '02:00:00', title: 'Luz artificial', seconds: 7200 },
            { time: '02:45:00', title: 'Rotar plantas', seconds: 9900 }
          ]
        },
        {
          id: 'abono',
          title: 'Abono',
          icon: '🌾',
          difficulty: 2,
          duration: '3h 40m',
          description: 'Alimenta tus plantas sin matarlas con exceso de nutrientes.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Abonos y fertilizantes' },
          highlights: [
            { time: '00:18:00', title: 'NPK explicado', seconds: 1080 },
            { time: '01:10:00', title: 'Abono casero', seconds: 4200 },
            { time: '02:20:00', title: 'Frecuencia correcta', seconds: 8400 }
          ],
          chapters: [
            { id: 'c1', title: 'Compost en 3 pasos', duration: '07:50', youtubeId: 'G0_aDHZpXEs' }
          ]
        }
      ]
    },
    {
      id: 'tipos-plantas',
      title: 'Tipos de Plantas',
      description: 'Conoce a tus aliadas verdes',
      topics: [
        {
          id: 'suculentas',
          title: 'Suculentas',
          icon: '🌵',
          difficulty: 1,
          duration: '2h 50m',
          description: 'Las plantas más fáciles del mundo. Casi imposibles de matar.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Suculentas y cactus' },
          highlights: [
            { time: '00:10:00', title: 'Variedades populares', seconds: 600 },
            { time: '00:55:00', title: 'Riego de suculentas', seconds: 3300 },
            { time: '01:45:00', title: 'Reproducir por hojas', seconds: 6300 }
          ]
        },
        {
          id: 'aromaticas',
          title: 'Aromáticas',
          icon: '🌿',
          difficulty: 2,
          duration: '4h 10m',
          description: 'Albahaca, romero, menta. Que tu cocina huela a jardín.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Hierbas aromáticas en casa' },
          highlights: [
            { time: '00:15:00', title: 'Albahaca paso a paso', seconds: 900 },
            { time: '01:00:00', title: 'Romero y tomillo', seconds: 3600 },
            { time: '02:00:00', title: 'Menta: cuidado!', seconds: 7200 },
            { time: '03:15:00', title: 'Cosechar sin matarlas', seconds: 11700 }
          ],
          chapters: [
            { id: 'c1', title: 'Huerto de aromáticas en ventana', duration: '12:40', youtubeId: 'G0_aDHZpXEs' }
          ]
        },
        {
          id: 'flores',
          title: 'Flores',
          icon: '🌸',
          difficulty: 2,
          duration: '4h 30m',
          description: 'Petunias, rosales, girasoles. Color para tu balcón.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Plantas con flor' },
          highlights: [
            { time: '00:20:00', title: 'Calendario de floración', seconds: 1200 },
            { time: '01:30:00', title: 'Rosales para principiantes', seconds: 5400 },
            { time: '03:00:00', title: 'Estimular más flores', seconds: 10800 }
          ]
        },
        {
          id: 'interior',
          title: 'De Interior',
          icon: '🌱',
          difficulty: 1,
          duration: '3h 30m',
          description: 'Pothos, monsteras, sansevierias. La jungla en tu sala.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Plantas de interior' },
          highlights: [
            { time: '00:12:00', title: 'Pothos: la indestructible', seconds: 720 },
            { time: '01:00:00', title: 'Monstera deliciosa', seconds: 3600 },
            { time: '02:15:00', title: 'Sansevieria', seconds: 8100 },
            { time: '03:00:00', title: 'Cuándo trasplantar', seconds: 10800 }
          ],
          chapters: [
            { id: 'c1', title: 'Top 5 indestructibles', duration: '10:20', youtubeId: 'G0_aDHZpXEs' }
          ]
        }
      ]
    },
    {
      id: 'huerto',
      title: 'Huerto en Casa',
      description: 'Come lo que cultivas',
      topics: [
        {
          id: 'tomates',
          title: 'Tomates',
          icon: '🍅',
          difficulty: 2,
          duration: '5h 00m',
          description: 'La estrella del huerto urbano. Cherrys, pera, kumato.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Tomates en maceta' },
          highlights: [
            { time: '00:20:00', title: 'Sembrar desde semilla', seconds: 1200 },
            { time: '01:30:00', title: 'Tutorado correcto', seconds: 5400 },
            { time: '03:00:00', title: 'Polinización casera', seconds: 10800 },
            { time: '04:15:00', title: 'Cosecha y conservación', seconds: 15300 }
          ],
          chapters: [
            { id: 'c1', title: 'Tomate cherry en balcón', duration: '14:30', youtubeId: 'G0_aDHZpXEs' }
          ]
        },
        {
          id: 'lechugas',
          title: 'Lechugas',
          icon: '🥬',
          difficulty: 1,
          duration: '3h 00m',
          description: 'Crecen rápido y siempre tendrás ensalada fresca.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Lechugas y verdes de hoja' },
          highlights: [
            { time: '00:10:00', title: 'Variedades fáciles', seconds: 600 },
            { time: '00:50:00', title: 'Siembra escalonada', seconds: 3000 },
            { time: '01:45:00', title: 'Cosecha por hojas', seconds: 6300 }
          ]
        },
        {
          id: 'fresas',
          title: 'Fresas',
          icon: '🍓',
          difficulty: 2,
          duration: '3h 50m',
          description: 'Dulces, perfumadas y perfectas para colgar en el balcón.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Fresas en macetas colgantes' },
          highlights: [
            { time: '00:15:00', title: 'Plantar estolones', seconds: 900 },
            { time: '01:20:00', title: 'Macetas colgantes', seconds: 4800 },
            { time: '02:30:00', title: 'Proteger de pájaros', seconds: 9000 }
          ]
        }
      ]
    },
    {
      id: 'problemas',
      title: 'Problemas Comunes',
      description: 'Cuando algo va mal y cómo arreglarlo',
      topics: [
        {
          id: 'plagas',
          title: 'Plagas',
          icon: '🐛',
          difficulty: 2,
          duration: '4h 20m',
          description: 'Identificar y combatir bichos sin químicos agresivos.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Plagas y soluciones' },
          highlights: [
            { time: '00:15:00', title: 'Pulgones: enemigo #1', seconds: 900 },
            { time: '01:10:00', title: 'Cochinillas', seconds: 4200 },
            { time: '02:20:00', title: 'Araña roja', seconds: 8400 },
            { time: '03:30:00', title: 'Jabón potásico', seconds: 12600 }
          ],
          chapters: [
            { id: 'c1', title: 'Insecticida natural', duration: '09:30', youtubeId: 'G0_aDHZpXEs' },
            { id: 'c2', title: 'Aliados del jardín', duration: '07:15', youtubeId: 'G0_aDHZpXEs' }
          ]
        },
        {
          id: 'enfermedades',
          title: 'Enfermedades',
          icon: '🍂',
          difficulty: 3,
          duration: '3h 50m',
          description: 'Hongos, mildiu y otros problemas. Síntomas y curas.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Enfermedades de plantas' },
          highlights: [
            { time: '00:20:00', title: 'Hojas amarillas', seconds: 1200 },
            { time: '01:15:00', title: 'Mildiu y oídio', seconds: 4500 },
            { time: '02:30:00', title: 'Pudrición de raíz', seconds: 9000 }
          ]
        },
        {
          id: 'rescate',
          title: 'Rescate SOS',
          icon: '🚑',
          difficulty: 3,
          duration: '3h 10m',
          description: 'Tu planta se está muriendo: protocolo de emergencia.',
          video: { youtubeId: 'G0_aDHZpXEs', title: 'Salvar plantas moribundas' },
          highlights: [
            { time: '00:12:00', title: 'Diagnóstico rápido', seconds: 720 },
            { time: '01:00:00', title: 'Trasplante de emergencia', seconds: 3600 },
            { time: '02:15:00', title: 'Recuperación lenta', seconds: 8100 }
          ],
          chapters: [
            { id: 'c1', title: 'Cuando ya no hay vuelta atrás', duration: '06:40', youtubeId: 'G0_aDHZpXEs' }
          ]
        }
      ]
    }
  ]
};

// Mapa de posiciones del grid estilo Street Fighter (4 columnas por fila)
// Cada fase tiene su propio grid 2D donde se posicionan los temas
const phaseGrids = {
  'primeros-pasos': [
    ['herramientas', 'tierra', 'macetas', null]
  ],
  'cuidados-diarios': [
    ['riego', 'luz', 'abono', null]
  ],
  'tipos-plantas': [
    ['suculentas', 'aromaticas', 'flores',   null],
    [null,         'interior',   null,       null]
  ],
  'huerto': [
    ['tomates', 'lechugas', 'fresas', null]
  ],
  'problemas': [
    ['plagas', 'enfermedades', 'rescate', null]
  ]
};


// ====================================================================
// COMPONENT — <skill-cell>
// ====================================================================
// <skill-cell> — Cubo individual del grid estilo Street Fighter
// Atributos: topic-id, icon, title, difficulty, selected, empty

class SkillCell extends HTMLElement {
  static get observedAttributes() {
    return ['icon', 'title', 'difficulty', 'selected', 'empty', 'topic-id'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    if (!this.hasAttribute('empty')) {
      this.addEventListener('click', this._onClick);
      this.addEventListener('mouseenter', this._onHover);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick);
    this.removeEventListener('mouseenter', this._onHover);
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  _onClick = () => {
    const topicId = this.getAttribute('topic-id');
    if (!topicId) return;
    this.dispatchEvent(new CustomEvent('skill-select', {
      detail: { topicId },
      bubbles: true,
      composed: true
    }));
  };

  _onHover = () => {
    if (this.hasAttribute('empty')) return;
    this.dispatchEvent(new CustomEvent('skill-hover', {
      detail: { topicId: this.getAttribute('topic-id') },
      bubbles: true,
      composed: true
    }));
  };

  render() {
    const isEmpty = this.hasAttribute('empty');
    const isSelected = this.hasAttribute('selected');
    const icon = this.getAttribute('icon') || '';
    const title = this.getAttribute('title') || '';
    const difficulty = parseInt(this.getAttribute('difficulty') || '1', 10);

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          aspect-ratio: 1 / 1;
          position: relative;
          ${isEmpty ? 'pointer-events: none;' : 'cursor: pointer;'}
        }

        .cell {
          position: relative;
          width: 100%;
          height: 100%;
          background: var(--bg-elev, #161922);
          border: 1px solid var(--border-soft, rgba(255,255,255,0.10));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 6px 4px;
          transition: all 0.18s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        :host([empty]) .cell {
          background: transparent;
          border: 1px dashed rgba(255,255,255,0.04);
          opacity: 0.3;
        }

        /* Corner brackets — estilo arcade */
        .cell::before,
        .cell::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          border: 1.5px solid transparent;
          transition: border-color 0.18s;
          pointer-events: none;
        }

        .cell::before {
          top: -1px;
          left: -1px;
          border-top-color: transparent;
          border-left-color: transparent;
        }

        .cell::after {
          bottom: -1px;
          right: -1px;
          border-bottom-color: transparent;
          border-right-color: transparent;
        }

        /* Hover state */
        :host(:not([empty])) .cell:hover {
          background: var(--bg-elev-2, #1c1f2b);
          border-color: var(--indigo, #6366f1);
          transform: translateZ(0);
        }

        :host(:not([empty])) .cell:hover::before {
          border-top-color: var(--pink, #ff1493);
          border-left-color: var(--pink, #ff1493);
        }

        :host(:not([empty])) .cell:hover::after {
          border-bottom-color: var(--pink, #ff1493);
          border-right-color: var(--pink, #ff1493);
        }

        /* Selected state */
        :host([selected]) .cell {
          background: var(--bg-elev-3, #232735);
          border-color: var(--pink, #ff1493);
          box-shadow:
            inset 0 0 0 1px var(--pink, #ff1493),
            0 0 0 1px var(--pink-glow, rgba(255,20,147,0.4)),
            0 4px 20px var(--pink-glow, rgba(255,20,147,0.4));
        }

        :host([selected]) .cell::before,
        :host([selected]) .cell::after {
          border-color: transparent !important;
        }

        :host([selected]) .cell .glow {
          opacity: 1;
        }

        /* Glow background */
        .glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg,
            rgba(99, 102, 241, 0.15) 0%,
            rgba(255, 20, 147, 0.15) 100%);
          opacity: 0;
          transition: opacity 0.18s;
          pointer-events: none;
        }

        :host(:not([empty])) .cell:hover .glow {
          opacity: 0.6;
        }

        /* Icon */
        .icon {
          font-size: 22px;
          line-height: 1;
          filter: grayscale(0.2);
          transition: filter 0.18s, transform 0.18s;
          z-index: 2;
          position: relative;
        }

        :host(:not([empty])) .cell:hover .icon {
          filter: grayscale(0);
          transform: scale(1.1);
        }

        :host([selected]) .icon {
          filter: grayscale(0) drop-shadow(0 0 8px var(--pink-glow, rgba(255,20,147,0.4)));
          transform: scale(1.05);
        }

        /* Title */
        .title {
          font-family: var(--font-display, 'Space Grotesk', sans-serif);
          font-size: 9px;
          font-weight: 600;
          color: var(--text-muted, #6b6f80);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          text-align: center;
          line-height: 1.1;
          z-index: 2;
          position: relative;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 0 2px;
          transition: color 0.18s;
        }

        :host(:not([empty])) .cell:hover .title {
          color: var(--text-primary, #f1f2f7);
        }

        :host([selected]) .title {
          color: var(--text-primary, #f1f2f7);
        }

        /* Difficulty dots */
        .difficulty {
          position: absolute;
          top: 4px;
          right: 4px;
          display: flex;
          gap: 1.5px;
          z-index: 3;
        }

        .diff-dot {
          width: 3px;
          height: 3px;
          background: rgba(255,255,255,0.15);
        }

        .diff-dot.active.d1 { background: #4ade80; }
        .diff-dot.active.d2 { background: #fbbf24; }
        .diff-dot.active.d3 { background: #ef4444; }

        :host([selected]) .diff-dot {
          background: rgba(255,255,255,0.2);
        }

        :host([selected]) .diff-dot.active.d1 { background: #4ade80; box-shadow: 0 0 4px #4ade80; }
        :host([selected]) .diff-dot.active.d2 { background: #fbbf24; box-shadow: 0 0 4px #fbbf24; }
        :host([selected]) .diff-dot.active.d3 { background: #ef4444; box-shadow: 0 0 4px #ef4444; }

        /* Selection indicator pulse */
        @keyframes selectedPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        :host([selected]) .pulse {
          position: absolute;
          inset: 0;
          border: 1px solid var(--pink, #ff1493);
          opacity: 0.4;
          pointer-events: none;
          animation: selectedPulse 1.6s ease-in-out infinite;
        }

        /* Scan line effect on selected */
        :host([selected]) .scanline {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            var(--pink, #ff1493) 50%,
            transparent 100%);
          opacity: 0.6;
          animation: scan 2.4s linear infinite;
          pointer-events: none;
        }

        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      </style>

      ${isEmpty ? `
        <div class="cell"></div>
      ` : `
        <div class="cell" role="button" tabindex="0" aria-label="${title}">
          <div class="glow"></div>
          ${isSelected ? '<div class="pulse"></div><div class="scanline"></div>' : ''}
          <div class="difficulty">
            ${[1,2,3].map(i => `
              <div class="diff-dot ${i <= difficulty ? `active d${difficulty}` : ''}"></div>
            `).join('')}
          </div>
          <div class="icon">${icon}</div>
          <div class="title">${title}</div>
        </div>
      `}
    `;
  }
}

customElements.define('skill-cell', SkillCell);


// ====================================================================
// COMPONENT — <skill-grid>
// ====================================================================
// <skill-grid> — Grid de skills tipo Street Fighter para una fase
// Recibe un array 2D vía propiedad `grid` y un mapa de topics vía `topics`

class SkillGrid extends HTMLElement {
  constructor() {
    super();
    this._grid = [];
    this._topics = {};
    this._selectedId = null;
  }

  set grid(value) { this._grid = value || []; this.render(); }
  get grid() { return this._grid; }

  set topics(value) { this._topics = value || {}; this.render(); }
  get topics() { return this._topics; }

  set selectedId(value) {
    this._selectedId = value;
    this._updateSelection();
  }
  get selectedId() { return this._selectedId; }

  _updateSelection() {
    if (!this.isConnected) return;
    this.querySelectorAll('skill-cell').forEach(cell => {
      const id = cell.getAttribute('topic-id');
      if (id && id === this._selectedId) {
        cell.setAttribute('selected', '');
      } else {
        cell.removeAttribute('selected');
      }
    });
  }

  render() {
    if (!this._grid.length) {
      this.innerHTML = '';
      return;
    }

    const html = this._grid.map(row => `
      <div class="skill-row">
        ${row.map(topicId => {
          if (!topicId) {
            return `<skill-cell empty></skill-cell>`;
          }
          const topic = this._topics[topicId];
          if (!topic) return `<skill-cell empty></skill-cell>`;
          const isSelected = topicId === this._selectedId ? 'selected' : '';
          return `
            <skill-cell
              topic-id="${topicId}"
              icon="${topic.icon}"
              title="${topic.title}"
              difficulty="${topic.difficulty}"
              ${isSelected}
            ></skill-cell>
          `;
        }).join('')}
      </div>
    `).join('');

    this.innerHTML = `<div class="skill-grid">${html}</div>`;
  }
}

customElements.define('skill-grid', SkillGrid);


// ====================================================================
// COMPONENT — <video-player>
// ====================================================================
// <video-player> — Player de YouTube con soporte para saltar a timestamps
// Atributos: youtube-id, start (segundos)

class VideoPlayer extends HTMLElement {
  static get observedAttributes() {
    return ['youtube-id', 'start'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (this.shadowRoot && this.isConnected) this.render();
  }

  /**
   * Salta a un segundo específico recargando el iframe con el parámetro start.
   * Método público para uso externo.
   */
  seekTo(seconds) {
    this.setAttribute('start', String(seconds));
  }

  render() {
    const youtubeId = this.getAttribute('youtube-id');
    const start = this.getAttribute('start');

    if (!youtubeId) {
      this.shadowRoot.innerHTML = `<style>:host{display:block;}</style><div>Sin video</div>`;
      return;
    }

    // URL con autoplay si hay un start (significa que el usuario hizo clic en un highlight)
    const params = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
      ...(start ? { start: start, autoplay: '1' } : {})
    });

    const src = `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #000;
        }

        .frame-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border: 1px solid var(--border-soft, rgba(255,255,255,0.10));
        }

        .frame-wrap::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg,
            var(--indigo, #6366f1) 0%,
            var(--pink, #ff1493) 100%);
          z-index: 2;
          pointer-events: none;
        }

        iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
      </style>
      <div class="frame-wrap">
        <iframe
          src="${src}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    `;
  }
}

customElements.define('video-player', VideoPlayer);


// ====================================================================
// COMPONENT — <topic-detail>
// ====================================================================
// <topic-detail> — Vista principal del tema seleccionado
// Muestra: header, video, tabs (highlights / capítulos)

class TopicDetail extends HTMLElement {
  constructor() {
    super();
    this._topic = null;
    this._phase = null;
    this._courseTitle = 'Jardín en Casa';
    this._activeTab = 'highlights';
  }

  set topic(value) {
    this._topic = value;
    this._activeTab = 'highlights';
    this.render();
  }

  set phase(value) {
    this._phase = value;
  }

  set courseTitle(value) {
    this._courseTitle = value;
  }

  connectedCallback() {
    this.render();
  }

  _formatDifficulty(level) {
    return [1, 2, 3].map(i => `
      <span class="diff-dot ${i <= level ? `active d${level}` : ''}"></span>
    `).join('');
  }

  _difficultyLabel(level) {
    return ['Fácil', 'Intermedio', 'Avanzado'][level - 1] || 'Fácil';
  }

  _onTabClick(tab) {
    this._activeTab = tab;
    this.render();
  }

  _onHighlightClick(seconds) {
    const player = this.querySelector('video-player');
    if (player) {
      player.seekTo(seconds);
      player.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  _onChapterClick(chapter) {
    const player = this.querySelector('video-player');
    if (player) {
      player.setAttribute('youtube-id', chapter.youtubeId);
      player.removeAttribute('start');
      player.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  render() {
    if (!this._topic) {
      this.innerHTML = '';
      return;
    }

    const t = this._topic;
    const phaseTitle = this._phase?.title || '';
    const hasChapters = t.chapters && t.chapters.length > 0;
    const activeTab = this._activeTab;

    this.innerHTML = `
      <div class="topic-detail">
        <div class="topic-breadcrumb">
          <span>${this._courseTitle}</span>
          <span class="sep">/</span>
          <span>${phaseTitle}</span>
          <span class="sep">/</span>
          <span class="current">${t.title}</span>
        </div>

        <div class="topic-header">
          <div class="topic-icon-large">${t.icon}</div>
          <div class="topic-info">
            <h2>${t.title}</h2>
            <p class="description">${t.description}</p>
            <div class="topic-meta">
              <span class="meta-item">
                <span>⏱</span> ${t.duration}
              </span>
              <span class="meta-item difficulty-pill">
                ${this._formatDifficulty(t.difficulty)}
                <span style="margin-left:4px;">${this._difficultyLabel(t.difficulty)}</span>
              </span>
              <span class="meta-item">
                <span>★</span> ${t.highlights.length} highlights
              </span>
              ${hasChapters ? `
                <span class="meta-item">
                  <span>▶</span> ${t.chapters.length} capítulos
                </span>
              ` : ''}
            </div>
          </div>
        </div>

        <div class="video-section">
          <div class="section-title">Clase completa</div>
          <video-player youtube-id="${t.video.youtubeId}"></video-player>
          <div class="video-title">${t.video.title}</div>
        </div>

        <div class="tabs-section">
          <div class="tabs">
            <button class="tab ${activeTab === 'highlights' ? 'active' : ''}" data-tab="highlights">
              Highlights <span class="count">${t.highlights.length}</span>
            </button>
            <button class="tab ${activeTab === 'chapters' ? 'active' : ''}" data-tab="chapters">
              Capítulos <span class="count">${hasChapters ? t.chapters.length : 0}</span>
            </button>
          </div>

          <div class="tab-content ${activeTab === 'highlights' ? 'active' : ''}">
            <div class="highlights-list">
              ${t.highlights.map((h) => `
                <div class="highlight-row" data-seconds="${h.seconds}">
                  <span class="timestamp">${h.time}</span>
                  <span class="h-title">${h.title}</span>
                  <span class="h-action">Saltar →</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="tab-content ${activeTab === 'chapters' ? 'active' : ''}">
            ${hasChapters ? `
              <div class="chapters-grid">
                ${t.chapters.map((c, idx) => `
                  <div class="chapter-card" data-chapter-idx="${idx}">
                    <div class="chapter-num">CAP ${String(idx + 1).padStart(2, '0')}</div>
                    <div class="chapter-title">${c.title}</div>
                    <div class="chapter-duration">⏱ ${c.duration}</div>
                    <div class="play-icon">▶</div>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div class="no-chapters">
                Este tema no tiene capítulos editados todavía. Usa los <strong style="color: var(--pink)">highlights</strong> para navegar por los momentos clave de la clase completa.
              </div>
            `}
          </div>
        </div>
      </div>
    `;

    // Listeners
    this.querySelectorAll('.tab').forEach(btn => {
      btn.addEventListener('click', () => {
        this._onTabClick(btn.dataset.tab);
      });
    });

    this.querySelectorAll('.highlight-row').forEach(row => {
      row.addEventListener('click', () => {
        const seconds = parseInt(row.dataset.seconds, 10);
        this._onHighlightClick(seconds);
      });
    });

    this.querySelectorAll('.chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.dataset.chapterIdx, 10);
        this._onChapterClick(t.chapters[idx]);
      });
    });
  }
}

customElements.define('topic-detail', TopicDetail);


// ====================================================================
// APP — Orquestador principal
// ====================================================================
// App principal — Jardín en Casa






class App {
  constructor() {
    this.selectedTopicId = null;
    this.topicsMap = this._buildTopicsMap();
    this.phasesMap = this._buildPhasesMap();
  }

  _buildTopicsMap() {
    const map = {};
    courseData.phases.forEach(phase => {
      phase.topics.forEach(topic => {
        map[topic.id] = topic;
      });
    });
    return map;
  }

  _buildPhasesMap() {
    const map = {};
    courseData.phases.forEach(phase => {
      phase.topics.forEach(topic => {
        map[topic.id] = phase;
      });
    });
    return map;
  }

  init() {
    this.renderSidebar();
    this.renderWelcome();
    this.attachGlobalListeners();
  }

  renderSidebar() {
    const sidebarContent = document.querySelector('.sidebar-content');
    sidebarContent.innerHTML = '';

    courseData.phases.forEach((phase, idx) => {
      const phaseEl = document.createElement('div');
      phaseEl.className = 'phase';
      phaseEl.innerHTML = `
        <div class="phase-header">
          <span class="phase-number">FASE ${String(idx + 1).padStart(2, '0')}</span>
          <span class="phase-title">${phase.title}</span>
          <span class="phase-line"></span>
        </div>
        <div class="phase-description">${phase.description}</div>
      `;

      const grid = document.createElement('skill-grid');
      const phaseTopics = {};
      phase.topics.forEach(t => phaseTopics[t.id] = t);
      grid.topics = phaseTopics;
      grid.grid = phaseGrids[phase.id] || [];
      grid.setAttribute('data-phase-id', phase.id);

      phaseEl.appendChild(grid);
      sidebarContent.appendChild(phaseEl);
    });
  }

  renderWelcome() {
    const main = document.querySelector('.main');
    const totalTopics = Object.keys(this.topicsMap).length;
    const totalHighlights = Object.values(this.topicsMap)
      .reduce((acc, t) => acc + t.highlights.length, 0);
    const totalChapters = Object.values(this.topicsMap)
      .reduce((acc, t) => acc + (t.chapters?.length || 0), 0);
    const totalPhases = courseData.phases.length;

    main.innerHTML = `
      <div class="welcome">
        <div class="eyebrow">▸ ${courseData.title}</div>
        <h1>De maceta vacía<br>a <span class="accent">jardín lleno de vida</span>.</h1>
        <p class="subtitle">
          Una guía paso a paso para empezar a cultivar plantas en casa, aunque nunca hayas tocado una. Selecciona un tema en el árbol de habilidades para empezar.
        </p>

        <div class="stats">
          <div class="stat">
            <div class="stat-value">${totalPhases}</div>
            <div class="stat-label">Fases</div>
          </div>
          <div class="stat">
            <div class="stat-value">${totalTopics}</div>
            <div class="stat-label">Temas</div>
          </div>
          <div class="stat">
            <div class="stat-value">${totalHighlights}</div>
            <div class="stat-label">Highlights</div>
          </div>
          <div class="stat">
            <div class="stat-value">${totalChapters}</div>
            <div class="stat-label">Capítulos</div>
          </div>
        </div>

        <div class="hint">
          <span>◀</span>
          <span>Haz clic en cualquier <kbd>cuadradito</kbd> del menú lateral para abrir el tema.</span>
        </div>
      </div>
    `;
  }

  renderTopic(topicId) {
    const topic = this.topicsMap[topicId];
    const phase = this.phasesMap[topicId];
    if (!topic) return;

    const main = document.querySelector('.main');
    main.innerHTML = '';

    const detail = document.createElement('topic-detail');
    detail.courseTitle = courseData.title;
    detail.phase = phase;
    detail.topic = topic;
    main.appendChild(detail);

    main.scrollTop = 0;
  }

  selectTopic(topicId) {
    if (!this.topicsMap[topicId]) return;
    this.selectedTopicId = topicId;

    document.querySelectorAll('skill-grid').forEach(grid => {
      grid.selectedId = topicId;
    });

    this.renderTopic(topicId);
  }

  attachGlobalListeners() {
    document.addEventListener('skill-select', (e) => {
      this.selectTopic(e.detail.topicId);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.selectedTopicId) {
        this.selectedTopicId = null;
        document.querySelectorAll('skill-grid').forEach(grid => {
          grid.selectedId = null;
        });
        this.renderWelcome();
      }
    });
  }
}

const app = new App();
app.init();
  </script>
</body>
</html>*/