(() => {

  /*
   * =========================
   * STUDENTS
   * =========================
   */

  const STUDENTS = [

    {
      img: 'assets/images/student1.jpg',

      name: '滕嘉豪',

      role: '北京工业大学硕士、北京理工大学博士',

      research: [
        'Large Language Models',
        'Multimodal Alignment',
        'Medical AI Applications',
      ],

      desc: '研究方向为大语言模型微调与应用、多模态大模型融合与对齐。',

      link: 'pages/student/student1.html',
    },

    {
      img: 'assets/images/student2.jpg',

      name: '王瑄',

      role: '北京工业大学硕士研究生',

      research: [
        'NLP',
        'Multimodal Document QA',
        'Dataset Construction',
        'Efficient LLM Inference',
      ],

      desc: '研究方向为NLP、多模态文档问答、领域数据集构建、大模型微调训练与无训练轻量化推理。',

      link: 'pages/student/student2.html',
    },

    {
      img: 'assets/images/student3.jpg',

      name: '于怡',

      role: '北京工业大学硕士研究生',

      research: [
        'Medical Multimodal LLM',
        'Causal Reasoning',
        'LLM-based Medical Agents',
      ],

      desc: '研究方向为医学多模态大模型、因果推理与医疗智能体。',

      link: 'pages/student/student3.html',
    },

  ];


  /*
   * =========================
   * PUBLICATIONS
   * =========================
   */

  const PUBLICATIONS = [

    {
      year: '2025',
      title:
        'Enhancing Discriminative Ability in Multimodal LLMs: A Contrastive Learning Approach for CT Report Generation',
      venue: 'Information Fusion',
      github: 'https://github.com/',
    },

    {
      year: '2025',
      title:
        'Geometric-Augmented Self-Distillation for Graph-Based Recommendation',
      venue: 'ACM TOIS',
      github: 'https://github.com/',
    },

    {
      year: '2025',
      title:
        'Bi-Timing with Collaborative Information for Controllable LLM-based Sequential Recommendation',
      venue: 'ACL 2025',
      github: 'https://github.com/',
    },

    {
      year: '2025',
      title:
        'ClearView: A Quality-aware Cross-modal Alignment Framework for CT Report Generation',
      venue: 'ICMR 2025',
      github: 'https://github.com/',
    },

    {
      year: '2024',
      title:
        'Counterfactual Graph Convolutional Learning for Personalized Recommendation',
      venue: 'ACM TIST',
      github: 'https://github.com/',
    },

    {
      year: '2023',
      title:
        'One for All: A Unified Generative Framework for Image Emotion Classification',
      venue: 'IEEE TCSVT',
      github: 'https://github.com/',
    },

  ];


  /*
   * =========================
   * NEWS / TIMELINE
   * =========================
   */

  const TIMELINE_EVENTS = [

    {
      date: '2026',
      title: '实验室主页上线',
      desc: 'NLP & LLM Lab 正式发布。',
    },

    {
      date: '2025',
      title: 'ACL 2025 论文接收',
      desc: 'LLM-based Sequential Recommendation 工作被 ACL 录用。',
    },

    {
      date: '2025',
      title: 'Information Fusion 论文发表',
      desc: 'CT Report Generation 工作发表于 SCI 期刊。',
    },

    {
      date: '2024',
      title: '医疗大模型方向启动',
      desc: '开始布局 Medical LLM 与 Multimodal Diagnosis。',
    },

  ];


  /*
   * =========================
   * RESEARCH AREAS
   * =========================
   */

  const RESEARCH_AREAS = [

    {
      category: 'Large Language Models',

      items: [
        { name: 'Pretraining', icon: 'fas fa-brain' },
        { name: 'Instruction Tuning', icon: 'fas fa-sliders' },
        { name: 'Reasoning', icon: 'fas fa-lightbulb' },
        { name: 'LLM Agent', icon: 'fas fa-robot' },
      ],
    },

    {
      category: 'Medical AI',

      items: [
        { name: 'Medical LLM', icon: 'fas fa-heartbeat' },
        { name: 'CT Report Generation', icon: 'fas fa-notes-medical' },
        { name: 'Multimodal Diagnosis', icon: 'fas fa-x-ray' },
        { name: 'Clinical NLP', icon: 'fas fa-stethoscope' },
      ],
    },

    {
      category: 'Knowledge & Graph Learning',

      items: [
        { name: 'Knowledge Graph', icon: 'fas fa-project-diagram' },
        { name: 'Graph Neural Networks', icon: 'fas fa-share-alt' },
        { name: 'Recommendation Systems', icon: 'fas fa-star' },
        { name: 'Counterfactual Learning', icon: 'fas fa-random' },
      ],
    },

    {
      category: 'Multimodal Intelligence',

      items: [
        { name: 'Cross-modal Alignment', icon: 'fas fa-layer-group' },
        { name: 'Emotion Recognition', icon: 'fas fa-face-smile' },
        { name: 'Video Understanding', icon: 'fas fa-video' },
        { name: 'Vision-Language Models', icon: 'fas fa-image' },
      ],
    },

  ];


  /*
   * =========================
   * CONTACTS
   * =========================
   */

  const CONTACT_LINKS = [

    {
      icon: 'fab fa-github',
      label: 'GitHub',
      link: 'https://github.com/',
    },

    {
      icon: 'fas fa-envelope',
      label: 'Email',
      link: 'mailto:example@email.com',
    },

    {
      icon: 'fas fa-graduation-cap',
      label: 'Google Scholar',
      link: '#',
    },

  ];


  /*
   * =========================
   * (以下逻辑保持不变)
   * =========================
   */

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function clear(el) {
    if (!el) return;
    el.innerHTML = '';
  }

  function renderSpanTags(tags, className) {
    return tags.map(tag =>
      `<span class="${className}">${tag}</span>`
    ).join('');
  }

  function initThemeToggle() {
    const toggleBtn = qs('.theme-toggle');
    const htmlEl = document.documentElement;

    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {

      const currentTheme =
        htmlEl.getAttribute('data-theme');

      const newTheme =
        currentTheme === 'light' ? 'dark' : 'light';

      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

    });
  }

  function initStudents() {

    const grid = qs('.projects-grid');
    if (!grid) return;

    clear(grid);

    STUDENTS.forEach((student) => {

      const tagsHtml =
        renderSpanTags(student.research, 'project-tag');

      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `

        <div class="project-thumbnail-wrapper">
          <img src="${student.img}" alt="${student.name}" class="project-thumbnail">
        </div>

        <div class="project-info">

          <h3>${student.name}</h3>

          <div class="student-role">${student.role}</div>

          <p>${student.desc}</p>

          <div class="project-tags">${tagsHtml}</div>

          <a href="${student.link}" class="project-link">
            查看详情 →
          </a>

        </div>
      `;

      grid.appendChild(card);

    });

  }

  function initOpenSource() {

    const grid = qs('.opensource-grid');
    if (!grid) return;

    clear(grid);

    PUBLICATIONS.forEach((pub) => {

      const card = document.createElement('div');
      card.className = 'os-card';

      card.innerHTML = `

        <div class="os-header">
          <div class="os-title">${pub.title}</div>
          <span class="pub-year">${pub.year}</span>
        </div>

        <p class="os-desc">${pub.venue}</p>

        <div class="os-actions">
          <a href="${pub.github}" target="_blank" rel="noopener noreferrer" class="os-btn">
            <i class="fab fa-github"></i>
            GitHub
          </a>
        </div>

      `;

      grid.appendChild(card);

    });

  }

  function initTimeline() {

    const container = qs('.timeline-container');
    if (!container) return;

    clear(container);

    TIMELINE_EVENTS.forEach((event) => {

      const item = document.createElement('div');
      item.className = 'timeline-item';

      item.innerHTML = `

        <div class="timeline-dot"></div>

        <span class="timeline-date">${event.date}</span>

        <div class="timeline-content">
          <h3>${event.title}</h3>
          <p>${event.desc}</p>
        </div>

      `;

      container.appendChild(item);

    });

  }

  function initTechStack() {

    const container = qs('.skills-wrapper');
    if (!container) return;

    clear(container);

    RESEARCH_AREAS.forEach((group) => {

      const itemsHtml = group.items.map((s) => `
        <div class="skill-badge">
          <i class="${s.icon}"></i>
          ${s.name}
        </div>
      `).join('');

      const col = document.createElement('div');
      col.className = 'skill-category';

      col.innerHTML = `
        <h3>${group.category}</h3>
        <div class="skill-list">${itemsHtml}</div>
      `;

      container.appendChild(col);

    });

  }

  function initContactLinks() {

    const container = qs('.intro-contact-links');
    if (!container) return;

    clear(container);

    CONTACT_LINKS.forEach((c) => {

      const item = document.createElement('a');
      item.className = 'intro-contact-link';

      item.href = c.link;
      item.target = '_blank';
      item.rel = 'noopener noreferrer';
      item.title = c.label;

      item.innerHTML = `<i class="${c.icon}"></i>`;

      container.appendChild(item);

    });

  }

  document.addEventListener('DOMContentLoaded', () => {

    initThemeToggle();
    initStudents();
    initOpenSource();
    initTimeline();
    initTechStack();
    initContactLinks();

  });

})();