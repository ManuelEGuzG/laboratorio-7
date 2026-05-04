// ============================================================
// courseUtils.js — Funciones puras para trabajar con los datos del curso
// ============================================================

/**
 * Construye un mapa { topicId -> topic } a partir del curso.
 * @param {Object} course
 * @returns {Object}
 */
export const buildTopicsMap = (course) => {
  const map = {};
  course.phases.forEach((phase) => {
    phase.topics.forEach((topic) => {
      map[topic.id] = topic;
    });
  });
  return map;
};

/**
 * Construye un mapa { topicId -> phase } para saber a qué fase pertenece cada tema.
 * @param {Object} course
 * @returns {Object}
 */
export const buildPhasesMap = (course) => {
  const map = {};
  course.phases.forEach((phase) => {
    phase.topics.forEach((topic) => {
      map[topic.id] = phase;
    });
  });
  return map;
};
