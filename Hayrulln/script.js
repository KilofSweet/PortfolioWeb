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
    likes_title: 'Likes', likes_list: 'мармелад, видеоигры, сериалы, музыка, зимняя эстетика',
    dislikes_title: 'Dislikes', dislikes_list: 'стоять полчаса на остановке в мороз, просыпаться очень рано, тревожность',
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
    likes_title: 'Likes', likes_list: 'gummy candy, video games, TV shows, music, winter aesthetics',
    dislikes_title: 'Dislikes', dislikes_list: 'standing at a bus stop in the cold for half an hour, waking up very early, anxious',
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
    likes_title: 'Likes', likes_list: '软糖、电子游戏、电视剧、音乐、冬日美学',
    dislikes_title: 'Dislikes', dislikes_list: '在寒风中站在公交车站半小时、早起、焦虑',
    now_playing: '♪ 正在播放: WR3CK3D - Ритуал ♪',
    skill_1_title: '前端', skill_1_desc: 'UI/UX设计，Figma，Photoshop',
    skill_2_title: '后端', skill_2_desc: 'Python, Java, C, Vulkan, OpenGL, 数据库 (SQL Power Architect, pgAdmin)',
    skill_3_title: '设计', skill_3_desc: '视觉构图，UI/UX概念，图形处理',
    skill_4_title: '动态', skill_4_desc: 'After Effects, Premiere Pro, DaVinci Resolve, Blender',
    blog_1_title: '如何行走',
    contact_email: '邮箱'
  }
};

/* =========================================================
   CONTENT MANAGER
   Здесь редактируются все работы в Interests и статьи Notices.
   Пути к файлам указывай относительно index.html.
   ========================================================= */

const skillData = {
  frontend: {
    title: { ru: 'Frontend разработка', en: 'Frontend Development', cn: '前端开发' },
    desc: {
      ru: 'UI/UX дизайн, Figma, Photoshop. Создание удобных и эстетичных пользовательских путей.',
      en: 'UI/UX design, Figma, Photoshop. Select a work sample to view it.',
      cn: 'UI/UX设计、Figma、Photoshop。选择一个作品查看。'
    },
    portfolio: [
      {
        title: { ru: 'Прототипы интерфейсов в Figma', en: 'UI prototypes in Figma', cn: 'Figma 界面原型' },
        description: { ru: 'Примеры прототипов и пользовательских интерфейсов.', en: 'Examples of prototypes and user interfaces.', cn: '原型和用户界面示例。' },
        video_mp4: '', // Например: 'media/figma-demo.mp4'
        image_jpg: '', // Например: 'images/figma-prototype.jpg'
        link_da: ''   // Например: 'https://drive.google.com/file/d/ВАШ_ID/view'
      },
      {
        title: { ru: 'Дизайн-системы и макеты', en: 'Design systems and layouts', cn: '设计系统与布局' },
        description: { ru: 'Примеры макетов и компонентов.', en: 'Examples of layouts and components.', cn: '布局和组件示例。' },
        video_mp4: '', image_jpg: '', link_da: ''
      },
      {
        title: { ru: 'Визуальная оптимизация проектов', en: 'Visual project optimization', cn: '项目视觉优化' },
        description: { ru: 'Примеры доработки визуальной части проектов.', en: 'Examples of visual improvements to projects.', cn: '项目视觉优化示例。' },
        video_mp4: '', image_jpg: '', link_da: ''
      }
    ]
  },
  backend: {
    title: { ru: 'Backend разработка', en: 'Backend Development', cn: '后端开发' },
    desc: {
      ru: 'Python, Java, C, Vulkan, OpenGL. Проектирование и построение баз данных с использованием SQL Power Architect и pgAdmin.',
      en: 'Python, Java, C, Vulkan, OpenGL and databases. Select a work sample to view it.',
      cn: 'Python、Java、C、Vulkan、OpenGL 和数据库。选择一个作品查看。'
    },
    portfolio: [
      {
        title: { ru: 'Архитектура БД в SQL Power Architect', en: 'Database architecture in SQL Power Architect', cn: 'SQL Power Architect 数据库架构' },
        description: { ru: 'Схемы и модели баз данных.', en: 'Database schemas and models.', cn: '数据库 схем和模型。' },
        video_mp4: '', image_jpg: '', link_da: ''
      },
      {
        title: { ru: 'Графические приложения на C/Vulkan', en: 'Graphics applications in C/Vulkan', cn: 'C/Vulkan 图形应用' },
        description: { ru: 'Демонстрации графических приложений.', en: 'Graphics application demonstrations.', cn: '图形应用演示。' },
        video_mp4: '', image_jpg: '', link_da: ''
      },
      {
        title: { ru: 'Серверная логика на Python/Java', en: 'Backend logic in Python/Java', cn: 'Python/Java 服务端逻辑' },
        description: { ru: 'Примеры серверной логики и кода.', en: 'Examples of backend logic and code.', cn: '服务端逻辑和代码示例。' },
        video_mp4: '', image_jpg: '', link_da: ''
      }
    ]
  },
  design: {
    title: { ru: 'Дизайн', en: 'Design', cn: '设计' },
    desc: {
      ru: 'Визуальная композиция, UI/UX концепции, работа с графикой и цветом в Photoshop. Внимание к деталям и эстетике.',
      en: 'Visual composition, UI/UX concepts, graphics and color. Select a work sample to view it.',
      cn: '视觉构图、UI/UX 概念、图形和色彩。选择一个作品查看。'
    },
    portfolio: [
      {
        title: { ru: 'Концепт-арт и иллюстрации', en: 'Concept art and illustrations', cn: '概念艺术与插画' },
        description: { ru: 'Подборка концептов и иллюстраций.', en: 'A collection of concepts and illustrations.', cn: '概念和插画合集。' },
        video_mp4: '', image_jpg: '', link_da: ''
      },
      {
        title: { ru: 'Обработка и ретушь в Photoshop', en: 'Photoshop editing and retouching', cn: 'Photoshop 编辑与修饰' },
        description: { ru: 'Примеры обработки изображений.', en: 'Image editing examples.', cn: '图像处理示例。' },
        video_mp4: '', image_jpg: '', link_da: ''
      },
      {
        title: { ru: 'Разработка визуального стиля', en: 'Visual identity development', cn: '视觉风格设计' },
        description: { ru: 'Примеры визуальных концепций.', en: 'Examples of visual concepts.', cn: '视觉概念示例。' },
        video_mp4: '', image_jpg: '', link_da: ''
      }
    ]
  },
  motion: {
    title: { ru: 'Motion Design', en: 'Motion Design', cn: '动态设计' },
    desc: {
      ru: 'After Effects, Premiere Pro, DaVinci Resolve, 3D-моделирование и анимация в Blender. Создание динамичного визуального контента.',
      en: 'After Effects, Premiere Pro, DaVinci Resolve and Blender. Select a work sample to view it.',
      cn: 'After Effects、Premiere Pro、DaVinci Resolve 和 Blender。选择一个作品查看。'
    },
    portfolio: [
      {
        title: { ru: 'Монтаж и цветокоррекция в DaVinci', en: 'Editing and color grading in DaVinci', cn: 'DaVinci 剪辑与调色' },
        description: { ru: 'Примеры видеомонтажа и цветокоррекции.', en: 'Video editing and color grading examples.', cn: '视频剪辑和调色示例。' },
        video_mp4: '', image_jpg: '', link_da: ''
      },
      {
        title: { ru: '3D-моделирование и рендер в Blender', en: '3D modeling and rendering in Blender', cn: 'Blender 3D 建模与渲染' },
        description: { ru: 'Примеры 3D-моделей и рендеров.', en: '3D model and render examples.', cn: '3D 模型和渲染示例。' },
        video_mp4: '', image_jpg: '', link_da: ''
      },
      {
        title: { ru: 'Motion-дизайн в After Effects', en: 'Motion design in After Effects', cn: 'After Effects 动态设计' },
        description: { ru: 'Примеры анимации и motion-графики.', en: 'Animation and motion graphics examples.', cn: '动画和动态图形示例。' },
        video_mp4: '', image_jpg: '', link_da: ''
      }
    ]
  }
};

/* =========================================================
   NOTICES / BLOG
   Новая статья = новый объект в blogData.
   body — массив абзацев. image_jpg — путь к обложке/изображению.
   ========================================================= */
const blogData = {
  blog1: {
    date: '2026.10.15',
    tag: 'LIFE',
    title: { ru: 'Как ходить', en: 'How to walk', cn: '如何行走' },
    desc: {
      ru: 'Небольшая заметка.',
      en: 'A short note.',
      cn: '一篇简短的笔记。'
    },
    body: {
      ru: [
        'Здесь начинается текст твоей статьи. Можешь заменить этот абзац своим текстом.',
        'Чтобы добавить следующий абзац, добавь ещё одну строку в этот массив.'
      ],
      en: [
        'Your article starts here. Replace this paragraph with your own text.',
        'To add another paragraph, add another string to this array.'
      ],
      cn: [
        '文章从这里开始。你可以将这段文字替换为自己的内容。',
        '要添加新段落，请在此数组中添加另一条字符串。'
      ]
    },
    image_jpg: '' // Например: 'images/blog-walk.jpg'
  }
};

let currentLang = 'ru';
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPortfolio = document.getElementById('modal-portfolio');
const modalMedia = document.getElementById('modal-media');

function localized(value) {
  if (typeof value === 'string') return value;
  return value?.[currentLang] || value?.ru || '';
}

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll('.lang-switcher-inline button').forEach(button => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });
  renderBlogList();
}

document.querySelectorAll('.lang-switcher-inline button').forEach(button => {
  button.addEventListener('click', () => setLang(button.dataset.lang));
});

/* TABS */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(item => item.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab)?.classList.add('active');
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

function clearModalContent() {
  modalDesc.textContent = '';
  modalPortfolio.replaceChildren();
  modalMedia.replaceChildren();
  modalMedia.classList.remove('active');
  modalPortfolio.style.display = 'flex';
}

function openModal() {
  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

function openSkill(key) {
  const data = skillData[key];
  if (!data) return;
  clearModalContent();
  modalTitle.textContent = localized(data.title);
  modalDesc.textContent = localized(data.desc);

  data.portfolio.forEach((work, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'portfolio-item';
    const label = document.createElement('span');
    label.textContent = localized(work.title);
    const arrow = document.createElement('span');
    arrow.textContent = '→';
    button.append(label, arrow);
    button.addEventListener('click', () => openWork(key, index));
    modalPortfolio.appendChild(button);
  });
  openModal();
}

function openWork(categoryKey, workIndex) {
  const work = skillData[categoryKey]?.portfolio?.[workIndex];
  if (!work) return;
  modalTitle.textContent = localized(work.title);
  modalDesc.textContent = localized(work.description);
  modalPortfolio.style.display = 'none';
  modalMedia.replaceChildren();
  modalMedia.classList.add('active');

  const back = document.createElement('button');
  back.type = 'button';
  back.className = 'media-back';
  back.textContent = currentLang === 'ru' ? '← Назад к списку работ' : currentLang === 'en' ? '← Back to works' : '← 返回作品列表';
  back.addEventListener('click', () => openSkill(categoryKey));
  modalMedia.appendChild(back);

  let hasMedia = false;
  if ((work.image_jpg || '').trim()) {
    const image = document.createElement('img');
    image.className = 'work-image';
    image.src = work.image_jpg;
    image.alt = localized(work.title);
    image.loading = 'lazy';
    image.addEventListener('error', () => image.replaceWith(makeMediaNotice('Не удалось загрузить изображение: ' + work.image_jpg)));
    modalMedia.appendChild(image);
    hasMedia = true;
  }
  if ((work.video_mp4 || '').trim()) {
    const video = document.createElement('video');
    video.className = 'work-video';
    video.src = work.video_mp4;
    video.controls = true;
    video.preload = 'metadata';
    modalMedia.appendChild(video);
    hasMedia = true;
  }
  if ((work.link_da || '').trim()) {
    const link = document.createElement('a');
    link.className = 'drive-link';
    link.href = work.link_da;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = currentLang === 'ru' ? 'Открыть работу на Google Drive ↗' : currentLang === 'en' ? 'Open work on Google Drive ↗' : '在 Google Drive 中打开 ↗';
    modalMedia.appendChild(link);
    hasMedia = true;
  }
  if (!hasMedia) {
    const notice = makeMediaNotice(currentLang === 'ru'
      ? 'Материалы пока не добавлены. Укажи путь в video_mp4, image_jpg или ссылку в link_da в script.js.'
      : currentLang === 'en'
        ? 'No files added yet. Set video_mp4, image_jpg or link_da in script.js.'
        : '尚未添加文件。请在 script.js 中设置 video_mp4、image_jpg 或 link_da。');
    modalMedia.appendChild(notice);
  }
}

function makeMediaNotice(message) {
  const notice = document.createElement('div');
  notice.className = 'media-notice';
  notice.textContent = message;
  return notice;
}

function renderBlogList() {
  const list = document.getElementById('blog-list');
  if (!list) return;
  list.replaceChildren();
  const countLabel = document.querySelector('[data-i18n="posts_count"]');
  if (countLabel) {
    const count = Object.keys(blogData).length;
    countLabel.textContent = currentLang === 'ru' ? `${count} записей` : currentLang === 'en' ? `${count} posts` : `${count} 条帖子`;
  }
  Object.entries(blogData).forEach(([key, post]) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'blog-item';
    item.dataset.key = key;

    const date = document.createElement('span');
    date.className = 'date';
    date.textContent = post.date || '';
    const title = document.createElement('h4');
    title.textContent = localized(post.title);
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = post.tag || 'NOTE';
    item.append(date, title, tag);
    item.addEventListener('click', () => openBlogPost(key));
    list.appendChild(item);
  });
}

function openBlogPost(key) {
  const post = blogData[key];
  if (!post) return;
  clearModalContent();
  modalTitle.textContent = localized(post.title);
  modalDesc.textContent = localized(post.desc);
  modalPortfolio.style.display = 'none';
  modalMedia.classList.add('active');

  if ((post.image_jpg || '').trim()) {
    const image = document.createElement('img');
    image.className = 'blog-image';
    image.src = post.image_jpg;
    image.alt = localized(post.title);
    image.loading = 'lazy';
    image.addEventListener('error', () => image.replaceWith(makeMediaNotice('Не удалось загрузить изображение: ' + post.image_jpg)));
    modalMedia.appendChild(image);
  }

  const paragraphs = post.body?.[currentLang] || post.body?.ru || [];
  paragraphs.forEach(text => {
    const paragraph = document.createElement('p');
    paragraph.className = 'article-paragraph';
    paragraph.textContent = text;
    modalMedia.appendChild(paragraph);
  });
  openModal();
}

/* Открытие категорий Interests */
document.querySelectorAll('.skill-card[data-key]').forEach(card => {
  card.addEventListener('click', () => openSkill(card.dataset.key));
});

/* Modal controls */
function closeModal() {
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
  modalMedia.querySelectorAll('video').forEach(video => video.pause());
}
window.closeModal = closeModal;
document.querySelector('.modal-close')?.addEventListener('click', closeModal);
modal.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});

renderBlogList();

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
