// ============================================================
// SkillCell.js — Web Component <skill-cell>
// Cubo individual del grid (estilo Street Fighter)
// ============================================================

export class SkillCell extends HTMLElement {
  static get observedAttributes() {
    return ["icon", "title", "difficulty", "selected", "empty", "topic-id"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    if (!this.hasAttribute("empty")) {
      this.addEventListener("click", this._onClick);
    }
  }

  disconnectedCallback() {
    this.removeEventListener("click", this._onClick);
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  _onClick = () => {
    const topicId = this.getAttribute("topic-id");
    if (!topicId) return;
    // Evento custom: sale del shadow DOM con composed:true
    this.dispatchEvent(
      new CustomEvent("skill-select", {
        detail: { topicId },
        bubbles: true,
        composed: true,
      })
    );
  };

  render() {
    const isEmpty = this.hasAttribute("empty");
    const isSelected = this.hasAttribute("selected");
    const icon = this.getAttribute("icon") || "";
    const title = this.getAttribute("title") || "";
    const difficulty = parseInt(this.getAttribute("difficulty") || "1", 10);

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          aspect-ratio: 1 / 1;
          position: relative;
          ${isEmpty ? "pointer-events: none;" : "cursor: pointer;"}
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
        .cell::before { top: -1px; left: -1px; }
        .cell::after { bottom: -1px; right: -1px; }

        :host(:not([empty])) .cell:hover {
          background: var(--bg-elev-2, #1c1f2b);
          border-color: var(--indigo, #6366f1);
        }
        :host(:not([empty])) .cell:hover::before {
          border-top-color: var(--pink, #ff1493);
          border-left-color: var(--pink, #ff1493);
        }
        :host(:not([empty])) .cell:hover::after {
          border-bottom-color: var(--pink, #ff1493);
          border-right-color: var(--pink, #ff1493);
        }

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
        :host(:not([empty])) .cell:hover .glow { opacity: 0.6; }
        :host([selected]) .glow { opacity: 1; }

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
        :host(:not([empty])) .cell:hover .title { color: var(--text-primary, #f1f2f7); }
        :host([selected]) .title { color: var(--text-primary, #f1f2f7); }

        .difficulty {
          position: absolute;
          top: 4px;
          right: 4px;
          display: flex;
          gap: 1.5px;
          z-index: 3;
        }
        .diff-dot { width: 3px; height: 3px; background: rgba(255,255,255,0.15); }
        .diff-dot.active.d1 { background: #4ade80; }
        .diff-dot.active.d2 { background: #fbbf24; }
        .diff-dot.active.d3 { background: #ef4444; }
        :host([selected]) .diff-dot.active.d1 { background: #4ade80; box-shadow: 0 0 4px #4ade80; }
        :host([selected]) .diff-dot.active.d2 { background: #fbbf24; box-shadow: 0 0 4px #fbbf24; }
        :host([selected]) .diff-dot.active.d3 { background: #ef4444; box-shadow: 0 0 4px #ef4444; }

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

        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
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
      </style>

      ${
        isEmpty
          ? `<div class="cell"></div>`
          : `
        <div class="cell" role="button" tabindex="0" aria-label="${title}">
          <div class="glow"></div>
          ${isSelected ? '<div class="pulse"></div><div class="scanline"></div>' : ""}
          <div class="difficulty">
            ${[1, 2, 3]
              .map(
                (i) => `
              <div class="diff-dot ${i <= difficulty ? `active d${difficulty}` : ""}"></div>
            `
              )
              .join("")}
          </div>
          <div class="icon">${icon}</div>
          <div class="title">${title}</div>
        </div>
      `
      }
    `;
  }
}

// Registramos el custom element al importar el módulo
customElements.define("skill-cell", SkillCell);
