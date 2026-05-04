// ============================================================
// Sidebar.js — Renderiza el árbol de habilidades en el sidebar
// Función pura: recibe datos y un contenedor, devuelve el DOM construido
// Depende de: SkillGrid
// ============================================================

import "./SkillGrid.js";

/**
 * Construye el contenido del sidebar con todas las fases y sus grids.
 * @param {HTMLElement} container - elemento .sidebar-content
 * @param {Object} course - objeto curso con phases[]
 * @param {Object} phaseGrids - mapa phaseId -> grid 2D
 */
export const renderSidebar = (container, course, phaseGrids) => {
  container.innerHTML = "";

  course.phases.forEach((phase, idx) => {
    const phaseEl = document.createElement("div");
    phaseEl.className = "phase";
    phaseEl.innerHTML = `
      <div class="phase-header">
        <span class="phase-number">FASE ${String(idx + 1).padStart(2, "0")}</span>
        <span class="phase-title">${phase.title}</span>
        <span class="phase-line"></span>
      </div>
      <div class="phase-description">${phase.description}</div>
    `;

    const grid = document.createElement("skill-grid");

    // Construimos el mapa de topics solo de esta fase
    const phaseTopics = {};
    phase.topics.forEach((t) => (phaseTopics[t.id] = t));

    grid.topics = phaseTopics;
    grid.grid = phaseGrids[phase.id] || [];
    grid.setAttribute("data-phase-id", phase.id);

    phaseEl.appendChild(grid);
    container.appendChild(phaseEl);
  });
};

/**
 * Actualiza el estado de selección en todos los grids del sidebar.
 * @param {string|null} topicId
 */
export const updateSidebarSelection = (topicId) => {
  document.querySelectorAll("skill-grid").forEach((grid) => {
    grid.selectedId = topicId;
  });
};
