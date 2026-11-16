/* I18N */
const i18n = {
  ru: {
    window_title: 'Kilo: портфолио',
    posts_count: '9 записей',
    btn_message: '✉ Написать',
    btn_follow: '+ Подписаться',
    tab_profile: 'profile', tab_skills: 'interests', tab_blog: 'notices', tab_contacts: 'contacts',
    meta_pronouns: 'he/him', meta_nationality: 'russian', meta_role: 'student · developer',
    profile_desc: 'Здравствуйте ♡ Я Марат Хайруллин, также известен как Kilo или KilofSweet. Мне 19 лет и я увлекаюсь изучением всего, начиная 3D, заканчивая БД. Люблю монтировать и веду свой ютуб канал, буду рад если подпишитесь. А ещё шейдеры это круто, Vulkan и OpenGL <3',
    likes_title: 'Likes', likes_list: 'веб-дизайн, музыка, шейдеры, видеоигры, ночной кодинг, аниме-эстетика',
    dislikes_title: 'Dislikes', dislikes_list: 'баги, понедельники, медленный интернет',
    now_playing: '♪ Сейчас играет: WR3CK3D - Ритуал ♪',
    skill_1_title: 'Frontend', skill_1_desc: 'UI/UX дизайн, Figma, Photoshop',
    skill_2_title: 'Backend', skill_2_desc: 'Python, Java, C, Vulkan, OpenGL, БД (SQL Power Architect, pgAdmin)',
    skill_3_title: 'Design', skill_3_desc: 'Визуальная композиция, UI/UX концепции, работа с графикой',
    skill_4_title: 'Motion', skill_4_desc: 'After Effects, Premiere Pro, DaVinci Resolve, Blender',
    blog_1_title: 'Как ходить',
    contact_email: 'Email'
  },
  en: {
    window_title: 'Kilo: portfolio',
    posts_count: '9 posts',
    btn_message: '✉ Message',
    btn_follow: '+ Follow',
    tab_profile: 'profile', tab_skills: 'interests', tab_blog: 'notices', tab_contacts: 'contacts',
    meta_pronouns: 'he/him', meta_nationality: 'russian', meta_role: 'student · developer',
    profile_desc: 'Hello ♡ I\'m Marat Khayrullin, also known as Kilo or KilofSweet. I\'m 19 years old and I\'m passionate about learning everything, from 3D to databases. I love video editing and run my own YouTube channel, I\'d be glad if you subscribe. Also, shaders are cool, Vulkan and OpenGL <3',
    likes_title: 'Likes', likes_list: 'webdesign, music, shaders, video games, night coding, anime aesthetics',
    dislikes_title: 'Dislikes', dislikes_list: 'bugs, monday mornings, slow internet',
    now_playing: '♪ Now playing: WR3CK3D - Ритуал ♪',
    skill_1_title: 'Frontend', skill_1_desc: 'UI/UX design, Figma, Photoshop',
    skill_2_title: 'Backend', skill_2_desc: 'Python, Java, C, Vulkan, OpenGL, databases (SQL Power Architect, pgAdmin)',
    skill_3_title: 'Design', skill_3_desc: 'Visual composition, UI/UX concepts, graphics work',
    skill_4_title: 'Motion', skill_4_desc: 'After Effects, Premiere Pro, DaVinci Resolve, Blender',
    blog_1_title: 'How to walk',
    contact_email: 'Email'
  },
  cn: {
    window_title: 'Kilo: 作品集',
    posts_count: '9 条帖子',
    btn_message: '✉ 发消息',
    btn_follow: '+ 关注',
    tab_profile: 'profile', tab_skills: 'interests', tab_blog: 'notices', tab_contacts: 'contacts',
    meta_pronouns: 'he/him', meta_nationality: 'russian', meta_role: '学生 · 开发者',
    profile_desc: '你好 ♡ 我是马拉特·海鲁林，也被称为 Kilo 或 KilofSweet。我 19 岁，热衷于学习从 3D 到数据库的一切。我喜欢视频剪辑并运营着自己的 YouTube 频道，如果您能订阅我将不胜感激。另外，着色器很酷，Vulkan 和 OpenGL <3',
    likes_title: '喜欢', likes_list: '网页设计、音乐、着色器、电子游戏、深夜编程、动漫美学',
    dislikes_title: '不喜欢', dislikes_list: 'bug、周一早晨、慢网速',
    now_playing: '♪ 正在播放: WR3CK3D - Ритуал ♪',
    skill_1_title: '前端', skill_1_desc: 'UI/UX设计，Figma，Photoshop',
    skill_2_title: '后端', skill_2_desc: 'Python, Java, C, Vulkan, OpenGL, 数据库 (SQL Power Architect, pgAdmin)',
    skill_3_title: '设计', skill_3_desc: '视觉构图，UI/UX概念，图形处理',
    skill_4_title: '动态', skill_4_desc: 'After Effects, Premiere Pro, DaVinci Resolve, Blender',
    blog_1_title: '如何行走',
    contact_email: '邮箱'
  }
};

const blogData = {
  blog1: {
    title: { ru: 'Как ходить', en: 'How to walk', cn: '如何行走' },
    desc: { 
      ru: 'idk.', 
      en: 'idk.',
      cn: 'idk。'
    },
    portfolio: []
  },
};

const skillData = {
  frontend: {
    title: { ru: 'Frontend разработка', en: 'Frontend Development', cn: '前端开发' },
    desc: {
      ru: 'UI/UX дизайн, Figma, Photoshop. Создание удобных и эстетичных пользовательских путей.',
      en: 'UI/UX design, Figma, Photoshop. Creating intuitive and aesthetically pleasing user journeys.',
      cn: 'UI/UX设计，Figma，Photoshop。打造直观且美观的用户体验。'
    },
    portfolio: [
      { ru: 'Прототипы интерфейсов в Figma', en: 'UI/UX prototypes in Figma', cn: 'Figma界面原型' },
      { ru: 'Дизайн-системы и макеты', en: 'Design systems and layouts', cn: '设计系统与布局' },
      { ru: 'Визуальная оптимизация проектов', en: 'Visual project optimization', cn: '项目视觉优化' }
    ]
  },
  backend: {
    title: { ru: 'Backend разработка', en: 'Backend Development', cn: '后端开发' },
    desc: {
      ru: 'Python, Java, C, Vulkan, OpenGL. Проектирование и построение баз данных с использованием SQL Power Architect и pgAdmin.',
      en: 'Python, Java, C, Vulkan, OpenGL. Designing and building databases using SQL Power Architect and pgAdmin.',
      cn: 'Python, Java, C, Vulkan, OpenGL。使用 SQL Power Architect 和 pgAdmin 设计和构建数据库。'
    },
    portfolio: [
      { ru: 'Архитектура БД в SQL Power Architect', en: 'DB architecture in SQL Power Architect', cn: 'SQL Power Architect 数据库架构' },
      { ru: 'Графические приложения на C/Vulkan', en: 'Graphics apps in C/Vulkan', cn: 'C/Vulkan 图形应用' },
      { ru: 'Серверная логика на Python/Java', en: 'Server logic in Python/Java', cn: 'Python/Java 服务器逻辑' }
    ]
  },
  design: {
    title: { ru: 'Дизайн', en: 'Design', cn: '设计' },
    desc: {
      ru: 'Визуальная композиция, UI/UX концепции, работа с графикой и цветом в Photoshop. Внимание к деталям и эстетике.',
      en: 'Visual composition, UI/UX concepts, graphics and color work in Photoshop. Attention to detail and aesthetics.',
      cn: '视觉构图，UI/UX概念，在Photoshop中进行图形和色彩处理。注重细节与美学。'
    },
    portfolio: [
      { ru: 'Концепт-арт и иллюстрации', en: 'Concept art and illustrations', cn: '概念艺术与插画' },
      { ru: 'Обработка и ретушь в Photoshop', en: 'Photoshop editing and retouching', cn: 'Photoshop 编辑与修饰' },
      { ru: 'Разработка визуального стиля', en: 'Visual style development', cn: '视觉风格开发' }
    ]
  },
  motion: {
    title: { ru: 'Motion Design', en: 'Motion Design', cn: '动态设计' },
    desc: {
      ru: 'After Effects, Premiere Pro, DaVinci Resolve, 3D-моделирование и анимация в Blender. Создание динамичного визуального контента.',
      en: 'After Effects, Premiere Pro, DaVinci Resolve, 3D modeling and animation in Blender. Creating dynamic visual content.',
      cn: 'After Effects, Premiere Pro, DaVinci Resolve, Blender 3D建模与动画。打造动态视觉内容。'
    },
    portfolio: [
      { ru: 'Монтаж и цветокоррекция в DaVinci', en: 'Editing and color grading in DaVinci', cn: 'DaVinci 剪辑与调色' },
      { ru: '3D-моделирование и рендер в Blender', en: '3D modeling and rendering in Blender', cn: 'Blender 3D建模与渲染' },
      { ru: 'Motion-дизайн в After Effects', en: 'Motion design in After Effects', cn: 'After Effects 动态设计' }
    ]
  }
};

let currentLang = 'ru';
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });
  document.querySelectorAll('.lang-switcher-inline button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}
document.querySelectorAll('.lang-switcher-inline button').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

/* TABS */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

function spawnSnowflake(x, y) {
  const el = document.createElement('div');
  el.textContent = Math.random() > 0.5 ? '❄' : '✦';
  el.style.left = (x - 6) + 'px';
  el.style.top = (y - 6) + 'px';
  document.body.appendChild(el);
  
  requestAnimationFrame(() => {
    el.style.transform = `translateY(${Math.random() * 40 + 20}px) translateX(${(Math.random() - 0.5) * 30}px) rotate(${Math.random() * 180}deg)`;
    el.style.opacity = '0';
  });
  
  setTimeout(() => el.remove(), 800);
}


/* MODAL LOGIC (Skills + Blog) */
document.querySelectorAll('[data-type]').forEach(el => {
  el.addEventListener('click', () => {
    const type = el.dataset.type;
    const key = el.dataset.key;
    const data = type === 'skill' ? skillData[key] : blogData[key];
    
    if (!data) return;
    
    document.getElementById('modal-title').textContent = data.title[currentLang];
    document.getElementById('modal-desc').textContent = data.desc[currentLang];
    
    const list = document.getElementById('modal-portfolio');
    if (data.portfolio && data.portfolio.length > 0) {
      list.innerHTML = data.portfolio.map(p => 
        `<div class="portfolio-item"><span>${p[currentLang]}</span><span>→</span></div>`
      ).join('');
      list.style.display = 'flex';
    } else {
      list.style.display = 'none';
    }
    
    document.getElementById('modal').classList.add('active');
  });
});

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}
document.getElementById('modal').addEventListener('click', e => {
  if (e.target.id === 'modal') closeModal();
});

/* WEBGL: SNOW/SOFT PARTICLES */
const canvas = document.getElementById('webgl-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 8;

const snowCount = 400;
const snowGeo = new THREE.BufferGeometry();
const snowPos = new Float32Array(snowCount * 3);
const snowSizes = new Float32Array(snowCount);

for (let i = 0; i < snowCount; i++) {
  snowPos[i * 3] = (Math.random() - 0.5) * 20;
  snowPos[i * 3 + 1] = (Math.random() - 0.5) * 20;
  snowPos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
  snowSizes[i] = Math.random() * 0.08 + 0.03;
}

snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
snowGeo.setAttribute('size', new THREE.BufferAttribute(snowSizes, 1));

const snowMat = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(0xffffff) }
  },
  vertexShader: `
    attribute float size;
    varying float vAlpha;
    uniform float uTime;
    void main() {
      vec3 pos = position;
      pos.y -= mod(uTime * 0.3 + position.x * 0.1, 20.0) - 10.0;
      pos.x += sin(uTime * 0.5 + position.y) * 0.3;
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * 300.0 / -mvPosition.z;
      gl_Position = projectionMatrix * mvPosition;
      vAlpha = smoothstep(-10.0, 10.0, pos.y) * 0.6;
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    varying float vAlpha;
    void main() {
      float d = length(gl_PointCoord - 0.5);
      if (d > 0.5) discard;
      float alpha = smoothstep(0.5, 0.1, d) * vAlpha;
      gl_FragColor = vec4(uColor, alpha);
    }
  `,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending
});

const snow = new THREE.Points(snowGeo, snowMat);
scene.add(snow);

const bokehCount = 30;
const bokehGeo = new THREE.BufferGeometry();
const bokehPos = new Float32Array(bokehCount * 3);
const bokehSizes = new Float32Array(bokehCount);

for (let i = 0; i < bokehCount; i++) {
  bokehPos[i * 3] = (Math.random() - 0.5) * 15;
  bokehPos[i * 3 + 1] = (Math.random() - 0.5) * 15;
  bokehPos[i * 3 + 2] = (Math.random() - 0.5) * 5 - 3;
  bokehSizes[i] = Math.random() * 0.3 + 0.1;
}

bokehGeo.setAttribute('position', new THREE.BufferAttribute(bokehPos, 3));
bokehGeo.setAttribute('size', new THREE.BufferAttribute(bokehSizes, 1));

const bokehMat = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color(0xa8c8e8) },
    uColor2: { value: new THREE.Color(0xffffff) }
  },
  vertexShader: `
    attribute float size;
    varying float vAlpha;
    varying vec2 vPos;
    uniform float uTime;
    void main() {
      vec3 pos = position;
      pos.y += sin(uTime * 0.2 + position.x) * 0.5;
      pos.x += cos(uTime * 0.15 + position.y) * 0.3;
      vPos = pos.xy;
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * 400.0 / -mvPosition.z;
      gl_Position = projectionMatrix * mvPosition;
      vAlpha = 0.15;
    }
  `,
  fragmentShader: `
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying float vAlpha;
    varying vec2 vPos;
    void main() {
      float d = length(gl_PointCoord - 0.5);
      if (d > 0.5) discard;
      float alpha = smoothstep(0.5, 0.0, d) * vAlpha;
      vec3 col = mix(uColor1, uColor2, sin(vPos.x * 2.0) * 0.5 + 0.5);
      gl_FragColor = vec4(col, alpha);
    }
  `,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending
});

const bokeh = new THREE.Points(bokehGeo, bokehMat);
scene.add(bokeh);

let targetMX = 0, targetMY = 0;
document.addEventListener('mousemove', e => {
  targetMX = (e.clientX / window.innerWidth - 0.5) * 2;
  targetMY = (e.clientY / window.innerHeight - 0.5) * 2;
});

const clock = new THREE.Clock();
function animate() {
  const t = clock.getElapsedTime();
  snowMat.uniforms.uTime.value = t;
  bokehMat.uniforms.uTime.value = t;

  camera.position.x += (targetMX * 0.5 - camera.position.x) * 0.03;
  camera.position.y += (-targetMY * 0.5 - camera.position.y) * 0.03;
  camera.lookAt(scene.position);

  snow.rotation.y = t * 0.02;
  bokeh.rotation.y = -t * 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/*Курсор*/
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorDot.style.opacity = '1';
  cursorRing.style.opacity = '1';

  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

function animateRing() {

  const ease = 0.5;
  
  ringX += (mouseX - ringX) * ease;
  ringY += (mouseY - ringY) * ease;
  
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  
  requestAnimationFrame(animateRing);
}
animateRing();

document.addEventListener('mouseleave', () => {
  cursorDot.style.opacity = '0';
  cursorRing.style.opacity = '0';
});

const hoverElements = document.querySelectorAll(
  'a, button, .skill-card, .blog-item, .portfolio-item, .social-icon, .tab, .modal-close, .like-box, .contact-item'
);

hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorRing.classList.add('hovered');
    cursorDot.classList.add('hovered');
  });
  el.addEventListener('mouseleave', () => {
    cursorRing.classList.remove('hovered');
    cursorDot.classList.remove('hovered');
  });
});