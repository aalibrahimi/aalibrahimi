// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.innerHTML = `
  <button id="theme-button" class="theme-toggle-btn">
    <span class="light-mode">🌞</span>
    <span class="dark-mode">🌙</span>
  </button>
`;

const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
});

// Check for saved theme preference
if (localStorage.getItem('dark-mode') === 'true') {
  body.classList.add('dark-mode');
}

// Interactive skills showcase
const skills = [
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
];

const skillsContainer = document.getElementById('skills-container');

skillsContainer.innerHTML = `
  <div class="skills-grid">
    ${skills.map(skill => `
      <div class="skill-card" data-skill="${skill.name}">
        <img src="${skill.icon}" alt="${skill.name}" />
        <span>${skill.name}</span>
      </div>
    `).join('')}
  </div>
`;

// Interactive projects showcase
const projects = [
  { name: 'Project Nebula', description: 'A futuristic UI kit', image: 'https://dummyimage.com/300x200/3498db/ffffff&text=Project+Nebula' },
  { name: 'EcoTrack', description: 'Sustainability monitoring app', image: 'https://dummyimage.com/300x200/2ecc71/ffffff&text=EcoTrack' },
  { name: 'MindSpace', description: 'Meditation and mindfulness platform', image: 'https://dummyimage.com/300x200/e74c3c/ffffff&text=MindSpace' },
];

const projectsContainer = document.getElementById('projects-container');

projectsContainer.innerHTML = `
  <div class="projects-grid">
    ${projects.map(project => `
      <div class="project-card">
        <img src="${project.image}" alt="${project.name}" />
        <h3>${project.name}</h3>
        <p>${project.description}</p>
      </div>
    `).join('')}
  </div>
`;

// Visitor map
const visitorMap = document.getElementById('visitor-map');

visitorMap.innerHTML = `
  <h2>Visitor Map</h2>
  <img src="https://visitor-map.vercel.app/map.png?key=YOUR_VISITOR_MAP_KEY" alt="Visitor Map" />
`;

