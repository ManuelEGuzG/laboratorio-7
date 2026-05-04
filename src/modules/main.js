// ============================================================
// main.js — Punto de entrada de la aplicación
// Orquesta los módulos: carga datos, renderiza UI, conecta eventos
// ============================================================

// === Importaciones nombradas (módulos ESM) ===
import { renderSidebar, updateSidebarSelection } from "./Sidebar.js";
import { renderWelcome } from "./Welcome.js";
import { buildTopicsMap, buildPhasesMap } from "./courseUtils.js";

// Los webcomponents se registran al importarlos (side effect)
import "./TopicDetail.js";

// === Carga de datos con fetch (más compatible que JSON modules) ===
// Ruta relativa desde view/index.html (el HTML que se carga)
// hasta el datos.json en la raíz del proyecto.
const datos = await fetch("./datos.json").then((res) => {
  if (!res.ok) throw new Error(`No se pudo cargar datos.json: ${res.status}`);
  return res.json();
});

const { course, phaseGrids } = datos;

// === Estado global del módulo (singleton natural) ===
const state = {
  selectedTopicId: null,
  topicsMap: buildTopicsMap(course),
  phasesMap: buildPhasesMap(course),
};

// === Referencias al DOM ===
const sidebarContent = document.querySelector(".sidebar-content");
const main = document.querySelector(".main");

// === Funciones de renderizado ===

/** Renderiza el detalle de un tema en el área principal. */
const renderTopic = (topicId) => {
  const topic = state.topicsMap[topicId];
  const phase = state.phasesMap[topicId];
  if (!topic) return;

  main.innerHTML = "";

  const detail = document.createElement("topic-detail");
  detail.courseTitle = course.title;
  detail.phase = phase;
  detail.topic = topic;
  main.appendChild(detail);

  main.scrollTop = 0;
};

/** Selecciona un tema: actualiza estado + sidebar + main. */
const selectTopic = (topicId) => {
  if (!state.topicsMap[topicId]) return;
  state.selectedTopicId = topicId;
  updateSidebarSelection(topicId);
  renderTopic(topicId);
};

/** Vuelve a la pantalla de bienvenida. */
const goHome = () => {
  state.selectedTopicId = null;
  updateSidebarSelection(null);
  renderWelcome(main, course);
};

// === Inicialización ===

// 1. Pintamos el sidebar con todas las fases
renderSidebar(sidebarContent, course, phaseGrids);

// 2. Pintamos la pantalla de bienvenida
renderWelcome(main, course);

// 3. Listeners globales

// El custom event "skill-select" sube desde los <skill-cell> con composed:true
document.addEventListener("skill-select", (e) => {
  selectTopic(e.detail.topicId);
});

// ESC vuelve al inicio
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && state.selectedTopicId) {
    goHome();
  }
});