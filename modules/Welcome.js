// ============================================================
// Welcome.js — Renderiza la pantalla de inicio (sin tema seleccionado)
// ============================================================

/**
 * Calcula estadísticas globales del curso a partir de sus fases.
 * @param {Object} course
 * @returns {{phases:number, topics:number, highlights:number, chapters:number}}
 */
export const computeStats = (course) => {
  let topics = 0;
  let highlights = 0;
  let chapters = 0;

  course.phases.forEach((phase) => {
    phase.topics.forEach((t) => {
      topics++;
      highlights += t.highlights.length;
      chapters += t.chapters?.length || 0;
    });
  });

  return {
    phases: course.phases.length,
    topics,
    highlights,
    chapters,
  };
};

/**
 * Renderiza la pantalla de bienvenida en el contenedor `main`.
 * @param {HTMLElement} container - elemento .main
 * @param {Object} course - objeto curso
 */
export const renderWelcome = (container, course) => {
  const stats = computeStats(course);

  container.innerHTML = `
    <div class="welcome">
      <div class="eyebrow">▸ ${course.title}</div>
      <h1>De maceta vacía<br>a <span class="accent">jardín lleno de vida</span>.</h1>
      <p class="subtitle">
        Una guía paso a paso para empezar a cultivar plantas en casa, aunque nunca hayas tocado una. Selecciona un tema en el árbol de habilidades para empezar.
      </p>

      <div class="stats">
        <div class="stat">
          <div class="stat-value">${stats.phases}</div>
          <div class="stat-label">Fases</div>
        </div>
        <div class="stat">
          <div class="stat-value">${stats.topics}</div>
          <div class="stat-label">Temas</div>
        </div>
        <div class="stat">
          <div class="stat-value">${stats.highlights}</div>
          <div class="stat-label">Highlights</div>
        </div>
        <div class="stat">
          <div class="stat-value">${stats.chapters}</div>
          <div class="stat-label">Capítulos</div>
        </div>
      </div>

      <div class="hint">
        <span>◀</span>
        <span>Haz clic en cualquier <kbd>cuadradito</kbd> del menú lateral para abrir el tema.</span>
      </div>
    </div>
  `;
};
