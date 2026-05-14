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
          'Trustworthy LLM Reasoning and Real-World Applications',
        keywords: [
          'Trustworthy LLMs',
          'Medical AI',
          'Multimodal Reasoning',
          'Knowledge & Causality',
          'Clinical NLP',
          'AI Agents',
          'Real-world Applications',
        ],
      },

      section: {
        pi: 'Principal Investigator',
        research: 'Research Vision',
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
          '可信大模型推理与应用',
        keywords: [
          '可信大模型',
          '医疗人工智能',
          '多模态推理',
          '知识与因果',
          '临床自然语言处理',
          '智能体应用',
          '真实场景应用',
        ],
      },

      section: {
        pi: '负责人',
        research: '研究愿景',
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
        Beijing Institute of Technology in 2020. His research focuses on
        trustworthy LLM reasoning and real-world applications, with emphasis on
        knowledge- and causality-enhanced intelligence, multimodal understanding,
        and medical AI.`,

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

        `主要从事可信大模型推理与应用研究，重点关注知识与因果增强智能、
        多模态理解、医疗人工智能等方向。`,

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
        'Yan Zhuang, Bo Wang, Chengliang Yin, Junyan Zhang, Fanqing Meng, Jianfei Zhao, Qingyong Su, Xuan Zhao, Xiuxing Li, Ping Hu, Shiyuan Liu, Rilige Wu, Yun Hua, Wei Dong, Bing Wei, Lei Zheng, João Conde, Ge Shi*, Chong Feng*, Kunlun He*',

      title_en:
        'Clinical Large Language Model Centered on Electronic Medical Records',

      title_zh:
        '面向电子病历的临床大语言模型',

      venue:
        'npj Digital Medicine, 2026 (Nature Portfolio)',
    },

    {
      authors:
        'Mengxiao Zhu, Haixu Chen, Jiu Sha, Jie Liu, Ge Shi*',

      title_en:
        'Beyond Atomic Characters: Glyph-Aware Sub-character Alignment for Low-Resource Multilingual OCR',

      title_zh:
        '超越原子字符：面向低资源多语种 OCR 的字形感知子字符对齐方法',

      venue:
        'ACL 2026 Main (CCF A)',
    },

    {
      authors:
        'Changsen Yuan, Yanghao Zhou, Chong Feng, Ge Shi*',

      title_en:
        'Simulating Crisis Cognition: A Computational Framework for Hypothesis Generation in Crisis Communication',

      title_zh:
        '模拟危机认知：面向危机传播假设生成的计算框架',

      venue:
        'Findings of ACL 2026',
    },

    {
      authors:
        'Tuo Wang, Meng Jian, Ge Shi*, Lifang Wu, Yashen Wang',

      title_en:
        'MSR-Rec: Multi-Step Reasoning-Enhanced LLM for Sequential Recommendation',

      title_zh:
        'MSR-Rec：面向序列推荐的多步推理增强大语言模型',

      venue:
        'AAAI 2026 (CCF A)',

      url:
        'https://ojs.aaai.org/index.php/AAAI/article/view/38620',
    },

    {
      authors:
        'Meng Jian, Ruoxi Li, Tuo Wang, Ge Shi*, Lifang Wu',

      title_en:
        'Large Multimodal Model-based Intent Prompting Learning for Multimedia Recommendation',

      title_zh:
        '面向多媒体推荐的大型多模态模型意图提示学习方法',

      venue:
        'Information Fusion, 2026 (SCI Q1)',

      url:
        'https://www.sciencedirect.com/science/article/pii/S1566253525009431',
    },

    {
      authors:
        'Qingyong Su, Chong Feng, Ge Shi*, Bo Wang, Yan Zhuang',

      title_en:
        'Enhancing Discriminative Ability in Multimodal LLMs: A Contrastive Learning Approach for CT Report Generation',

      title_zh:
        '增强多模态大模型判别能力的 CT 报告生成对比学习方法',

      venue:
        'Information Fusion, 2025 (SCI Q1)',

      url:
        'https://www.sciencedirect.com/science/article/pii/S1566253525003136',
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

      url:
        'https://doi.org/10.1145/3729223',

    },

    {
      authors:
        'Xinyu Zhang, Limei Hu*, Luhao Zhang, Wentao Cheng, Yashen Wang, Ge Shi*',

      title_en:
        'Bi-Tuning with Collaborative Information for Controllable LLM-based Sequential Recommendation',

      title_zh:
        '面向可控大语言模型序列推荐的协同信息双向调优方法',

      venue:
        'ACL 2025 (CCF A)',

      url:
        'https://aclanthology.org/2025.acl-long.949/',

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

      url:
        'https://doi.org/10.1145/3731715.3733287',

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

      url:
        'https://doi.org/10.1145/3655632',

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

      url:
        'https://aclanthology.org/2025.coling-main.655/',

    },

  ];

  /*
   * =========================================================
   * RESEARCH VISION
   * =========================================================
   */

  const RESEARCH_VISION = {

    en: {

      intro:
        'BetaNLP Lab studies trustworthy LLM reasoning and its real-world applications. We aim to build AI systems that can reason reliably, align information across modalities, and support high-stakes decisions in domains such as healthcare, communication, and intelligent recommendation.',

      areas: [

        {
          title:
            'Trustworthy LLM Reasoning',

          desc:
            'Knowledge-enhanced, causality-aware, interpretable, and reliable reasoning methods for large language models.',
        },

        {
          title:
            'Medical and Multimodal Intelligence',

          desc:
            'Clinical language models, electronic medical records, medical report generation, multimodal alignment, and healthcare AI.',
        },

        {
          title:
            'Real-World AI Applications',

          desc:
            'LLM-powered recommendation, crisis communication analysis, low-resource OCR, and agentic systems for complex scenarios.',
        },

      ],

    },

    zh: {

      intro:
        'BetaNLP Lab 聚焦可信大模型推理与应用，面向医疗健康、传播计算、智能推荐等真实场景，研究可解释、可泛化、可靠的大模型推理方法与智能系统。',

      areas: [

        {
          title:
            '可信大模型推理',

          desc:
            '研究知识增强、因果感知、可解释与可靠的大语言模型推理方法，提升模型在复杂任务中的可信决策能力。',
        },

        {
          title:
            '医疗与多模态智能',

          desc:
            '面向电子病历、临床语言模型、医学报告生成与多模态对齐，构建服务医疗健康场景的智能技术。',
        },

        {
          title:
            '真实场景智能应用',

          desc:
            '探索大模型驱动的推荐系统、危机传播分析、低资源 OCR 与复杂场景智能体应用。',
        },

      ],

    },

  };

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
      date: 'May 2026',

      title_en:
        'npj Digital Medicine Paper Accepted',

      title_zh:
        'npj Digital Medicine 论文录用',

      desc_en:
        'The paper "Clinical Large Language Model Centered on Electronic Medical Records" was accepted by npj Digital Medicine, a Nature Portfolio journal.',

      desc_zh:
        '论文“Clinical Large Language Model Centered on Electronic Medical Records”被 Nature 子刊 npj Digital Medicine 录用。',
    },

    {
      date: 'Apr 2026',

      title_en:
        'Two Papers Accepted by ACL 2026',

      title_zh:
        '两篇论文被 ACL 2026 录用',

      desc_en:
        'Two papers were accepted by ACL 2026: "Beyond Atomic Characters" in the main conference, and "Simulating Crisis Cognition" in Findings of ACL.',

      desc_zh:
        '两篇论文被 ACL 2026 录用：“Beyond Atomic Characters”入选 ACL 主会，“Simulating Crisis Cognition”入选 ACL Findings。',
    },

    {
      date: 'Mar 2026',

      title_en:
        'Information Fusion Paper Published',

      title_zh:
        'Information Fusion 论文发表',

      desc_en:
        'The paper "Large Multimodal Model-based Intent Prompting Learning for Multimedia Recommendation" was published in Information Fusion.',

      desc_zh:
        '论文“Large Multimodal Model-based Intent Prompting Learning for Multimedia Recommendation”发表于 Information Fusion。',
    },

    {
      date: 'Mar 2026',

      title_en:
        'MSR-Rec Accepted by AAAI 2026',

      title_zh:
        'MSR-Rec 被 AAAI 2026 录用',

      desc_en:
        'The paper "MSR-Rec: Multi-Step Reasoning-Enhanced LLM for Sequential Recommendation" was accepted by AAAI 2026.',

      desc_zh:
        '论文“MSR-Rec: Multi-Step Reasoning-Enhanced LLM for Sequential Recommendation”被 AAAI 2026 录用。',
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

    document
      .querySelectorAll('.floating-keywords span')
      .forEach((span, index) => {
        span.textContent =
          t.hero.keywords[index] || '';
      });

    /*
     * section titles
     */

    const titles =
      document.querySelectorAll('h2');

    titles[0].textContent = t.section.pi;
    titles[1].textContent = t.section.research;
    titles[2].textContent = t.section.news;
    titles[3].textContent = t.section.pubs;
    titles[4].textContent = t.section.group;
    titles[5].textContent = t.section.grants;

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
          ${
            currentLang === 'en'
              ? 'Trustworthy LLMs'
              : '可信大模型'
          }
        </span>

        <span class="project-tag">
          ${
            currentLang === 'en'
              ? 'LLM Reasoning'
              : '大模型推理'
          }
        </span>

        <span class="project-tag">
          ${
            currentLang === 'en'
              ? 'Knowledge & Causality'
              : '知识与因果'
          }
        </span>

        <span class="project-tag">
          ${
            currentLang === 'en'
              ? 'Medical AI'
              : '医疗人工智能'
          }
        </span>

        <span class="project-tag">
          ${
            currentLang === 'en'
              ? 'Multimodal Intelligence'
              : '多模态智能'
          }
        </span>

      </div>

    `;

  }

  /*
   * =========================================================
   * RESEARCH VISION
   * =========================================================
   */

  function initResearchVision() {

    const data =
      RESEARCH_VISION[currentLang];

    const intro =
      qs('.research-intro');

    const grid =
      qs('.research-grid');

    if (!intro || !grid) return;

    intro.innerHTML = `
      <p>${data.intro}</p>
    `;

    clear(grid);

    data.areas.forEach((area, index) => {

      const item =
        document.createElement('div');

      item.className =
        'research-card';

      item.innerHTML = `

        <div class="research-index">
          0${index + 1}
        </div>

        <h3>${area.title}</h3>

        <p>${area.desc}</p>

      `;

      grid.appendChild(item);

    });

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

    PUBLICATIONS.forEach((pub, index) => {

      const title =
        currentLang === 'en'
          ? pub.title_en
          : pub.title_zh;

      const titleText =
        `"${title}."`;

      const titleHtml =
        pub.url
          ? `<a class="pub-title-link" href="${pub.url}" target="_blank" rel="noopener noreferrer">${titleText}</a>`
          : titleText;

      const linkHtml =
        pub.url
          ? `<a class="pub-link" href="${pub.url}" target="_blank" rel="noopener noreferrer">${
              currentLang === 'en'
                ? 'Paper'
                : '论文'
            }</a>`
          : '';

      const item =
        document.createElement('div');

      item.className =
        'pub-item';

      item.innerHTML = `

        <div class="pub-index">
          [${index + 1}]
        </div>

        <div class="pub-content">

          <div class="pub-title">
            ${pub.authors}.
            ${titleHtml}
          </div>

          <div class="pub-meta">
            <span class="pub-venue">
              ${pub.venue}
            </span>

            ${linkHtml}
          </div>

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

    initResearchVision();

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
