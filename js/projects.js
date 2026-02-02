// 공통 배경 색상
const commonBgColor = "bg-white";

// 상태별 색상 매핑
const statusColors = {
  Active: {
    bg: "bg-green-50",
    dot: "bg-green-500",
    text: "text-green-700",
    shadow: "shadow-[0_0_8px_rgba(34,197,94,0.4)]"
  },
  Blue: {
    bg: "bg-blue-50",
    dot: "bg-blue-500",
    text: "text-blue-700",
    shadow: "shadow-[0_0_8px_rgba(59,130,246,0.4)]"
  },
  Renewal: {
    bg: "bg-amber-50",
    dot: "bg-amber-500",
    text: "text-amber-700",
    shadow: "shadow-[0_0_8px_rgba(245,158,11,0.4)]"
  }
};

// 프로젝트 데이터를 JSON에서 가져오기
async function loadProjects() {
  try {
    const res = await fetch('https://raw.githubusercontent.com/Bonitabueno/Bonitabueno/refs/heads/main/projects.json');
    const projects = await res.json();

    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = ''; // 기존 내용 초기화

    projects.forEach(project => {
      const color = statusColors[project.status] || statusColors['Active'];

      // 아이콘 처리: URL이 있으면 <img>, 없으면 디폴트 span
      const iconHtml = project.icon
        ? `<img src="${project.icon}" alt="${project.title}" class="w-6 h-6 object-contain" />`
        : `<span class="material-symbols-outlined">terminal</span>`;

      const article = document.createElement('article');
      article.className = `${commonBgColor} rounded-2xl p-6 soft-shadow border border-transparent hover:border-terracotta/20 transition-all duration-300 group flex flex-col h-full relative overflow-hidden`;

      article.innerHTML = `
        <div class="absolute top-0 right-0 w-32 h-32 bg-terracotta/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

        <div class="flex justify-between items-start mb-6 relative z-10">
          <div class="w-12 h-12 rounded-xl bg-terracotta-fade flex items-center justify-center text-terracotta group-hover:scale-110 transition-transform duration-300">
            ${iconHtml}
          </div>

          <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full ${color.bg} border border-green-100">
            <div class="w-1.5 h-1.5 rounded-full ${color.dot} ${color.shadow}"></div>
            <span class="text-[10px] font-mono font-bold ${color.text} uppercase tracking-wide">
              ${project.status}
            </span>
          </div>
        </div>

        <h3 class="text-xl font-bold antialiased tracking-tight text-ocean-blue mb-4 font-mono group-hover:text-terracotta transition-colors">
          ${project.title}
        </h3>
        <p class="text-sm text-clay-subtext mb-8 leading-relaxed flex-grow">
          ${project.description}
        </p>

        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-xl border border-ocean-blue/10 text-ocean-blue font-mono text-xs font-bold hover:bg-ocean-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-ocean-blue/20">
          VISIT SITE
          <span class="material-symbols-outlined text-sm">arrow_outward</span>
        </a>
      `;

      grid.appendChild(article); // 직접 article만 추가
    });
  } catch (err) {
    console.error("프로젝트 로드 실패:", err);
  }
}

// DOMContentLoaded 후 실행
document.addEventListener('DOMContentLoaded', loadProjects);
