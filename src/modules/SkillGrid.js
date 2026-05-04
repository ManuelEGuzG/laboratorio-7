// ============================================================
// SkillGrid.js — Web Component <skill-grid>
// Grid 2D de skill-cells por fase
// Depende de: SkillCell (debe estar registrada antes)
// ============================================================

import "./SkillCell.js";

export class SkillGrid extends HTMLElement {
  constructor() {
    super();
    this._grid = [];
    this._topics = {};
    this._selectedId = null;
  }

  set grid(value) {
    this._grid = value || [];
    this.render();
  }
  get grid() {
    return this._grid;
  }

  set topics(value) {
    this._topics = value || {};
    this.render();
  }
  get topics() {
    return this._topics;
  }

  set selectedId(value) {
    this._selectedId = value;
    this._updateSelection();
  }
  get selectedId() {
    return this._selectedId;
  }

  _updateSelection() {
    if (!this.isConnected) return;
    this.querySelectorAll("skill-cell").forEach((cell) => {
      const id = cell.getAttribute("topic-id");
      if (id && id === this._selectedId) {
        cell.setAttribute("selected", "");
      } else {
        cell.removeAttribute("selected");
      }
    });
  }

  render() {
    if (!this._grid.length) {
      this.innerHTML = "";
      return;
    }

    const html = this._grid
      .map(
        (row) => `
      <div class="skill-row">
        ${row
          .map((topicId) => {
            if (!topicId) return `<skill-cell empty></skill-cell>`;
            const topic = this._topics[topicId];
            if (!topic) return `<skill-cell empty></skill-cell>`;
            const isSelected = topicId === this._selectedId ? "selected" : "";
            return `
            <skill-cell
              topic-id="${topicId}"
              icon="${topic.icon}"
              title="${topic.title}"
              difficulty="${topic.difficulty}"
              ${isSelected}
            ></skill-cell>
          `;
          })
          .join("")}
      </div>
    `
      )
      .join("");

    this.innerHTML = `<div class="skill-grid">${html}</div>`;
  }
}

customElements.define("skill-grid", SkillGrid);
