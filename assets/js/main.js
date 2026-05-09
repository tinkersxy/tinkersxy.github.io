(() => {

  /*
   * =========================================================
   * LANGUAGE
   * =========================================================
   */

  let currentLang =
    localStorage.getItem('lang') || 'en';

  const LANG_TEXT = {

    en: {

      nav: {
        home: 'Home',
        news: 'News',
        publications: 'Publications',
        group: 'Group',
        grants: 'Grants & Awards',
      },

      hero: {
        title: 'BetaNLP Lab',
        subtitle:
          'Large Language Models · Medical AI · Knowledge Graphs · Multimodal Intelligence · Causal Reasoning',
      },

      section: {
        pi: 'Principal Investigator',
        news: 'News',
        pubs: 'Selected Publications',
        group: 'Group Members',
        grants: 'Grants & Awards',
        research_grants: 'Research Grants',
        awards: 'Awards',
        services: 'Professional Services',
      },

      group: {
        phd: 'Ph.D. Students',
        ms: 'MS Students',
        visiting: 'Visiting Students',
        alumni: 'Alumni',
      },

      footer:
        '© 2026 BetaNLP Lab. All Rights Reserved.',
    },

    zh: {

      nav: {
        home: '首页',
        news: '新闻',
        publications: '论文',
        group: '成员',
        grants: '项目与奖励',
      },

      hero: {
        title: 'BetaNLP Lab',
        subtitle:
          '大语言模型 · 医疗人工智能 · 知识图谱 · 多模态智能 · 因果推理',
      },

      section: {
        pi: '负责人',
        news: '新闻动态',
        pubs: '代表性论文',
        group: '实验室成员',
        grants: '科研项目与奖励',
        research_grants: '科研项目',
        awards: '获奖情况',
        services: '学术服务',
      },

      group: {
        phd: '博士生',
        ms: '硕士生',
        visiting: '访问学生',
        alumni: '毕业生',
      },

      footer:
        '© 2026 BetaNLP Lab 版权所有',
    }

  };

  /*
   * =========================================================
   * PI
   * =========================================================
   */

  const PI_INFO = {

    en: {

      name: 'Ge Shi',

      title:
        'Associate Professor / Special Research Fellow · Ph.D. Supervisor · Beijing Institute of Technology',

      desc: [

        `Dr. Ge Shi received his Ph.D. degree from the School of Computer Science,
        Beijing Institute of Technology in 2020. His research mainly focuses on
        Large Language Models, Knowledge Graphs, Multimodal Intelligence,
        Medical AI.`,

        `He has published more than 60 papers in top-tier conferences and journals,
        including ACL, EMNLP, TKDE, Information Fusion, ACM TOIS, and IEEE TCSVT.`,

        `He has led or participated in multiple national-level projects,
        including the National Natural Science Foundation of China,
        National Key R&D Programs, and interdisciplinary medical AI projects.`,

        `He has served as Area Chair or Senior Program Committee member
        for major conferences such as ACL, COLING, CCKS, and ICAUS.`,

      ],

    },

    zh: {

      name: '石戈',

      title:
        '北京理工大学 副教授 / 特别研究员 · 博士生导师',

      desc: [

        `石戈，博士，北京理工大学副教授/特别研究员，博士生导师。
        2020年毕业于北京理工大学计算机学院智能处理与内容安全工信部重点实验室，
        获得计算机科学与技术博士学位。`,

        `主要从事大模型预训练、知识图谱、多模态智能、
        医疗人工智能等方向研究工作。`,

        `在 ACL、EMNLP、TKDE、Information Fusion、
        ACM TOIS、IEEE TCSVT 等国际顶级期刊会议发表论文60余篇。`,

        `主持或参与国家重点研发计划子课题、
        国家自然科学基金重点项目、面上项目、
        青年项目等多项科研任务。`,

        `多次担任 ACL（CCF A 类）、COLING（CCF B 类）、
        CCKS 等国际会议领域主席与程序委员会成员。`,

      ],

    }

  };

  /*
   * =========================================================
   * PUBLICATIONS
   * =========================================================
   */

  const PUBLICATIONS = [

    {
      authors:
        'Qingyong Su, Chong Feng, Ge Shi*, Bo Wang, Yan Zhuang',

      title_en:
        'Enhancing Discriminative Ability in Multimodal LLMs: A Contrastive Learning Approach for CT Report Generation',

      title_zh:
        '增强多模态大模型判别能力的 CT 报告生成对比学习方法',

      venue:
        'Information Fusion, 2025 (SCI Q1)',
    },

    {
      authors:
        'Meng Jian, Tuo Wang, Zhuoyang Xia, Ge Shi*, Richang Hong, Lifang Wu',

      title_en:
        'Geometric-Augmented Self-Distillation for Graph-Based Recommendation',

      title_zh:
        '基于图推荐的几何增强自蒸馏方法',

      venue:
        'ACM TOIS, 2025 (CCF A)',

    },

    {
      authors:
        'Xinyu Zhang, Limei Hu*, Luhao Zhang, Wentao Cheng, Yashen Wang, Ge Shi*',

      title_en:
        'Bi-Timing with Collaborative Information for Controllable LLM-based Sequential Recommendation',

      title_zh:
        '面向可控序列推荐的协同双时间建模方法',

      venue:
        'ACL 2025 (CCF A)',

    },

    {
      authors:
        'Qingyong Su, Chong Feng, Bo Wang, Ge Shi*, Yan Zhuang',

      title_en:
        'ClearView: A Quality-aware Cross-modal Alignment Framework for CT Report Generation',

      title_zh:
        '面向 CT 报告生成的质量感知跨模态对齐框架',

      venue:
        'ICMR 2025 (CCF B)',

    },

    {
      authors:
        'Meng Jian, Yulong Bai, Xusong Fu, Jingjing Guo, Ge Shi*, Lifang Wu',

      title_en:
        'Counterfactual Graph Convolutional Learning for Personalized Recommendation',

      title_zh:
        '面向个性化推荐的反事实图卷积学习',

      venue:
        'ACM TIST, 2024',

    },

    {
      authors:
        'Xuefen Li, Bo Wang, Ge Shi*, Chong Feng, Jiahao Teng',

      title_en:
        'Mitigating the Discrepancy Between Video and Text Temporal Sequences',

      title_zh:
        '缓解视频与文本时间序列差异的视频定位方法',

      venue:
        'COLING 2024',

    },

  ];

  /*
   * =========================================================
   * GROUP
   * =========================================================
   */

  const GROUPS = {

    phd: [

      {
        name_en: 'Jiahao Teng',
        name_zh: '滕嘉豪',

        role_en:
          'Ph.D. Student',

        role_zh:
          '博士生',

        desc_en:
          'Research on Large Language Models, Multimodal Alignment, and Medical AI.',

        desc_zh:
          '研究方向包括大语言模型、多模态对齐与医疗人工智能。',
      }

    ],

    ms: [

      {
        name_en: 'Yu Yi',
        name_zh: '于怡',

        role_en:
          'M.S. Student',

        role_zh:
          '硕士研究生',

        desc_en:
          'Research on Medical Multimodal LLMs, Causal Reasoning, and Medical Agents.',

        desc_zh:
          '研究方向包括医学多模态大模型、因果推理与医疗智能体。',
      },

      {
        name_en: 
          'wamgxuan',

        name_zh: 
          '王瑄',

        role_en:
          'M.S. Student',

        role_zh:
          '硕士研究生',

        desc_en:
          'Research on NLP, Multimodal QA, Dataset Construction, and Efficient LLM Inference.',

        desc_zh:
          '研究方向包括 NLP、多模态问答、数据集构建与高效推理。',
      }

    ],

    visiting: [

      {
        name: 'Visiting Student',

        role_en:
          'Visiting Student',

        role_zh:
          '访问学生',

        desc_en:
          'Research collaboration on multimodal reasoning and medical AI.',

        desc_zh:
          '参与多模态推理与医疗人工智能方向合作研究。',
      }

    ],

    alumni: [

      {
        name_en: 'Xuefen Li',
        name_zh: '李雪芬',

        role_en:
          'Patent Examination Cooperation Center of Hubei',

        role_zh:
          '国家知识产权局专利局专利审查协作湖北中心',
      },

      {
        name_en: 'Yang Jie',
        name_zh: '杨杰',

        role_en:
          'Tsinghua University, School of Automation',

        role_zh:
          '保研至清华大学自动化学院',
      }

    ]

  };

  /*
   * =========================================================
   * NEWS
   * =========================================================
   */

  const TIMELINE = [

    {
      date: '2026',

      title_en:
        'Lab Website Released',

      title_zh:
        '实验室主页上线',

      desc_en:
        'Official release of the Causal Medical Intelligence Lab website.',

      desc_zh:
        '因果医疗智能实验室官方网站正式发布。',
    },

    {
      date: '2025',

      title_en:
        'ACL 2025 Paper Accepted',

      title_zh:
        'ACL 2025 论文录用',

      desc_en:
        'Sequential recommendation research accepted by ACL 2025.',

      desc_zh:
        '序列推荐方向工作被 ACL 2025 录用。',
    },

    {
      date: '2025',

      title_en:
        'Information Fusion Publication',

      title_zh:
        'Information Fusion 论文发表',

      desc_en:
        'CT Report Generation work published in Information Fusion.',

      desc_zh:
        'CT 报告生成工作发表于 Information Fusion。',
    },

  ];

  /*
   * =========================================================
   * GRANTS
   * =========================================================
   */

  const GRANTS = {

    en: [

      'National Natural Science Foundation of China Youth Project.',

      'Beijing Natural Science Foundation Joint Project.',

      'Medical Large Language Model Data Construction Project.',

      'Knowledge-driven Multimodal Semantic Understanding Project.',

    ],

    zh: [

      '国家自然科学基金青年基金项目。',

      '北京市自然科学基金联合基金项目。',

      '医疗领域大模型数据构建项目。',

      '知识驱动复杂场景多模态语义理解项目。',

    ]

  };

  /*
   * =========================================================
   * AWARDS
   * =========================================================
   */

  const AWARDS = {

    en: [

      'IMLIP2025 Best Paper Award.',

      'CCL2025 ICD Coding Competition Champion.',

      'CCKS2023 Outstanding Resource Paper Award.',

      'NLPCC2022 Competition Champion.',

    ],

    zh: [

      'IMLIP2025 最佳论文奖。',

      'CCL2025 ICD 编码评测冠军。',

      'CCKS2023 优秀资源论文奖。',

      'NLPCC2022 评测冠军。',

    ]

  };

  /*
   * =========================================================
   * SERVICES
   * =========================================================
   */

  const SERVICES = {

    en: [

      'Area Chair for ACL, COLING, CCKS and ICAUS.',

      'Committee Member of NLPCC and CCF Multimedia Committee.',

    ],

    zh: [

      '担任 ACL、COLING、CCKS、ICAUS 等会议领域主席。',

      '担任中国计算机学会多媒体专委会委员等。',

    ]

  };

  /*
   * =========================================================
   * HELPERS
   * =========================================================
   */

  function qs(selector) {
    return document.querySelector(selector);
  }

  function clear(el) {
    if (el) el.innerHTML = '';
  }

  /*
   * =========================================================
   * THEME
   * =========================================================
   */

  function initThemeToggle() {

    const toggleBtn = qs('.theme-toggle');

    toggleBtn?.addEventListener('click', () => {

      const htmlEl = document.documentElement;

      const current =
        htmlEl.getAttribute('data-theme');

      const next =
        current === 'light'
          ? 'dark'
          : 'light';

      htmlEl.setAttribute('data-theme', next);

      localStorage.setItem('theme', next);

    });

  }

  /*
   * =========================================================
   * LANGUAGE TOGGLE
   * =========================================================
   */

  function initLanguageToggle() {

    const btn =
      qs('.lang-toggle');

    if (!btn) return;

    btn.textContent =
      currentLang === 'en'
        ? '中文'
        : 'English';

    btn.addEventListener('click', () => {

      currentLang =
        currentLang === 'en'
          ? 'zh'
          : 'en';

      localStorage.setItem(
        'lang',
        currentLang
      );

      location.reload();

    });

  }

  /*
   * =========================================================
   * STATIC TEXT
   * =========================================================
   */

  function initStaticText() {

    const t =
      LANG_TEXT[currentLang];

    /*
     * nav
     */

    const navLinks =
      document.querySelectorAll('.nav-links a');

    navLinks[0].textContent = t.nav.home;
    navLinks[1].textContent = t.nav.news;
    navLinks[2].textContent = t.nav.publications;
    navLinks[3].textContent = t.nav.group;
    navLinks[4].textContent = t.nav.grants;

    /*
     * hero
     */

    qs('.hero-content h1').textContent =
      t.hero.title;

    qs('.hero-content p').textContent =
      t.hero.subtitle;

    /*
     * section titles
     */

    const titles =
      document.querySelectorAll('h2');

    titles[0].textContent = t.section.pi;
    titles[1].textContent = t.section.news;
    titles[2].textContent = t.section.pubs;
    titles[3].textContent = t.section.group;
    titles[4].textContent = t.section.grants;

    /*
     * grants titles
     */

    const h3s =
      document.querySelectorAll('#grants h3');

    h3s[0].textContent =
      t.section.research_grants;

    h3s[1].textContent =
      t.section.awards;

    h3s[2].textContent =
      t.section.services;

    /*
     * footer
     */

    qs('footer').textContent =
      t.footer;

  }

  /*
   * =========================================================
   * PI
   * =========================================================
   */

  function initPI() {

    const pi =
      PI_INFO[currentLang];

    const container =
      document.querySelector('.pi-right');

    if (!container) return;

    container.innerHTML = `

      <h2>${pi.name}</h2>

      <div class="pi-title">
        ${pi.title}
      </div>

      ${pi.desc.map(d => `
        <p>${d}</p>
      `).join('')}

      <div class="project-tags">

        <span class="project-tag">
          Large Language Models
        </span>

        <span class="project-tag">
          Medical AI
        </span>

        <span class="project-tag">
          Knowledge Graphs
        </span>

        <span class="project-tag">
          Multimodal Intelligence
        </span>

        <span class="project-tag">
          Causal Reasoning
        </span>

      </div>

    `;

  }

  /*
   * =========================================================
   * PUBLICATIONS
   * =========================================================
   */

  function initPublications() {

    const container =
      qs('.publication-list');

    if (!container) return;

    clear(container);

    PUBLICATIONS.forEach(pub => {

      const title =
        currentLang === 'en'
          ? pub.title_en
          : pub.title_zh;

      const item =
        document.createElement('div');

      item.className =
        'pub-item';

      item.innerHTML = `

        <div class="pub-title">
          ${pub.authors}.
          "${title}."
        </div>

        <div class="pub-venue">
          ${pub.venue}
        </div>

      `;

      container.appendChild(item);

    });

  }

  /*
   * =========================================================
   * GROUP
   * =========================================================
   */

  function initGroups() {

    const t =
      LANG_TEXT[currentLang];

    const container =
      qs('#group-container');

    clear(container);

    const mapping = [

      [t.group.phd, GROUPS.phd],

      [t.group.ms, GROUPS.ms],

      [t.group.visiting, GROUPS.visiting],

      [t.group.alumni, GROUPS.alumni],

    ];

    mapping.forEach(([title, members]) => {

      const block =
        document.createElement('div');

      block.className =
        'group-category';

      block.innerHTML = `

        <h3>${title}</h3>

        <div class="member-grid">

          ${members.map(m => `

            <div class="member-card">

              <div class="member-name">
                ${
                  currentLang === 'en'
                    ? (m.name_en || m.name)
                    : (m.name_zh || m.name)
                }
              </div>

              <div class="member-role">
                ${
                  currentLang === 'en'
                    ? m.role_en
                    : m.role_zh
                }
              </div>

              <div class="member-desc">
                ${
                  currentLang === 'en'
                    ? (m.desc_en || '')
                    : (m.desc_zh || '')
                }
              </div>

            </div>

          `).join('')}

        </div>

      `;

      container.appendChild(block);

    });

  }

  /*
   * =========================================================
   * NEWS
   * =========================================================
   */

  function initTimeline() {

    const container =
      qs('.timeline-container');

    clear(container);

    TIMELINE.forEach(event => {

      const item =
        document.createElement('div');

      item.className =
        'timeline-item';

      item.innerHTML = `

        <div class="timeline-dot"></div>

        <span class="timeline-date">
          ${event.date}
        </span>

        <div class="timeline-content">

          <h3>
            ${
              currentLang === 'en'
                ? event.title_en
                : event.title_zh
            }
          </h3>

          <p>
            ${
              currentLang === 'en'
                ? event.desc_en
                : event.desc_zh
            }
          </p>

        </div>

      `;

      container.appendChild(item);

    });

  }

  /*
   * =========================================================
   * LIST RENDER
   * =========================================================
   */

  function renderSimpleList(id, arr) {

    const ul =
      qs(id);

    clear(ul);

    arr.forEach(item => {

      const li =
        document.createElement('li');

      li.textContent = item;

      ul.appendChild(li);

    });

  }

  /*
   * =========================================================
   * INIT
   * =========================================================
   */

  document.addEventListener('DOMContentLoaded', () => {

    initThemeToggle();

    initLanguageToggle();

    initStaticText();

    initPI();

    initPublications();

    initGroups();

    initTimeline();

    renderSimpleList(
      '#grant-list',
      GRANTS[currentLang]
    );

    renderSimpleList(
      '#award-list',
      AWARDS[currentLang]
    );

    renderSimpleList(
      '#service-list',
      SERVICES[currentLang]
    );

  });

})();