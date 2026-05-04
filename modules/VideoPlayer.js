// ============================================================
// VideoPlayer.js — Web Component <video-player>
// Iframe de YouTube con soporte para saltar a un timestamp
// ============================================================

export class VideoPlayer extends HTMLElement {
  static get observedAttributes() {
    return ["youtube-id", "start"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (this.shadowRoot && this.isConnected) this.render();
  }

  /**
   * API pública: salta a un segundo específico.
   * Recarga el iframe con el parámetro `start`.
   */
  seekTo(seconds) {
    this.setAttribute("start", String(seconds));
  }

  render() {
    const youtubeId = this.getAttribute("youtube-id");
    const start = this.getAttribute("start");

    if (!youtubeId) {
      this.shadowRoot.innerHTML = `<style>:host{display:block;}</style><div>Sin video</div>`;
      return;
    }

    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      ...(start ? { start, autoplay: "1" } : {}),
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

customElements.define("video-player", VideoPlayer);
