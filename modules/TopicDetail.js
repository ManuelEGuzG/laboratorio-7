// ============================================================
// TopicDetail.js — Web Component <topic-detail>
// Vista principal del tema seleccionado (header, video, tabs)
// Depende de: VideoPlayer
// ============================================================

import "./VideoPlayer.js";

export class TopicDetail extends HTMLElement {
  constructor() {
    super();
    this._topic = null;
    this._phase = null;
    this._courseTitle = "Jardín en Casa";
    this._activeTab = "highlights";
  }

  set topic(value) {
    this._topic = value;
    this._activeTab = "highlights";
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
    return [1, 2, 3]
      .map(
        (i) => `
      <span class="diff-dot ${i <= level ? `active d${level}` : ""}"></span>
    `
      )
      .join("");
  }

  _difficultyLabel(level) {
    return ["Fácil", "Intermedio", "Avanzado"][level - 1] || "Fácil";
  }

  _onTabClick(tab) {
    this._activeTab = tab;
    this.render();
  }

  _onHighlightClick(seconds) {
    const player = this.querySelector("video-player");
    if (player) {
      player.seekTo(seconds);
      player.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  _onChapterClick(chapter) {
    const player = this.querySelector("video-player");
    if (player) {
      player.setAttribute("youtube-id", chapter.youtubeId);
      player.removeAttribute("start");
      player.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  render() {
    if (!this._topic) {
      this.innerHTML = "";
      return;
    }

    const t = this._topic;
    const phaseTitle = this._phase?.title || "";
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
              <span class="meta-item"><span>⏱</span> ${t.duration}</span>
              <span class="meta-item difficulty-pill">
                ${this._formatDifficulty(t.difficulty)}
                <span style="margin-left:4px;">${this._difficultyLabel(t.difficulty)}</span>
              </span>
              <span class="meta-item"><span>★</span> ${t.highlights.length} highlights</span>
              ${hasChapters ? `<span class="meta-item"><span>▶</span> ${t.chapters.length} capítulos</span>` : ""}
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
            <button class="tab ${activeTab === "highlights" ? "active" : ""}" data-tab="highlights">
              Highlights <span class="count">${t.highlights.length}</span>
            </button>
            <button class="tab ${activeTab === "chapters" ? "active" : ""}" data-tab="chapters">
              Capítulos <span class="count">${hasChapters ? t.chapters.length : 0}</span>
            </button>
          </div>

          <div class="tab-content ${activeTab === "highlights" ? "active" : ""}">
            <div class="highlights-list">
              ${t.highlights
                .map(
                  (h) => `
                <div class="highlight-row" data-seconds="${h.seconds}">
                  <span class="timestamp">${h.time}</span>
                  <span class="h-title">${h.title}</span>
                  <span class="h-action">Saltar →</span>
                </div>
              `
                )
                .join("")}
            </div>
          </div>

          <div class="tab-content ${activeTab === "chapters" ? "active" : ""}">
            ${
              hasChapters
                ? `
              <div class="chapters-grid">
                ${t.chapters
                  .map(
                    (c, idx) => `
                  <div class="chapter-card" data-chapter-idx="${idx}">
                    <div class="chapter-num">CAP ${String(idx + 1).padStart(2, "0")}</div>
                    <div class="chapter-title">${c.title}</div>
                    <div class="chapter-duration">⏱ ${c.duration}</div>
                    <div class="play-icon">▶</div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            `
                : `
              <div class="no-chapters">
                Este tema no tiene capítulos editados todavía. Usa los <strong style="color: var(--pink)">highlights</strong> para navegar por los momentos clave de la clase completa.
              </div>
            `
            }
          </div>
        </div>
      </div>
    `;

    // Listeners (re-asignados en cada render porque innerHTML los borra)
    this.querySelectorAll(".tab").forEach((btn) => {
      btn.addEventListener("click", () => this._onTabClick(btn.dataset.tab));
    });

    this.querySelectorAll(".highlight-row").forEach((row) => {
      row.addEventListener("click", () => {
        const seconds = parseInt(row.dataset.seconds, 10);
        this._onHighlightClick(seconds);
      });
    });

    this.querySelectorAll(".chapter-card").forEach((card) => {
      card.addEventListener("click", () => {
        const idx = parseInt(card.dataset.chapterIdx, 10);
        this._onChapterClick(t.chapters[idx]);
      });
    });
  }
}

customElements.define("topic-detail", TopicDetail);
