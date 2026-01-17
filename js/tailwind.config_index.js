tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "terminal-bg": "#f3f0e8",
        "terminal-surface": "#ffffff",
        "terminal-accent": "#005f73",
        "terminal-secondary": "#ae2012",
        "terminal-dim": "#475569",
        "terminal-text": "#1e293b",
        "clay-accent": "#bc5633",
        "glass-border": "rgba(0, 0, 0, 0.06)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      backgroundImage: {
        noise:
          "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.4%22/%3E%3C/svg%3E')",
        scanlines:
          "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0) 50%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.03))",
      },
      animation: {
        typewriter: "typewriter 2.5s steps(20) 0.5s forwards",
        blink: "blink 1s step-end infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        scan: "scanline 8s linear infinite",
      },
      keyframes: {
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
      },
    },
  },
};
