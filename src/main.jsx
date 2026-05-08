import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import adcLogo from './assets/img/adc.png';
import buzzfeedImage from './assets/img/buzzfeed.png';
import dartmouthLogo from './assets/img/dartmouth.png';
import ddhiLogo from './assets/img/ddhi.png';
import dashHudsonLogo from './assets/img/dh.png';
import gitbetterHelp from './assets/img/gitbetter-help.png';
import gitbetterHome from './assets/img/gitbetter-home.png';
import headshot from './assets/img/headshot.jpg';
import nestLogo from './assets/img/nest.png';
import panmagLogo from './assets/img/panmag.png';
import pinterestLogo from './assets/img/pinterest.png';
import volansiLogo from './assets/img/volansi.png';
import wilsonsLogo from './assets/img/wilsons.png';

const routes = {
  home: 'home',
  projects: 'projects',
  resume: 'resume',
  algorithms: 'algorithms',
  independentStudy: 'independent-study',
  coursework: 'coursework',
};

const getInitialRoute = () => {
  const path = window.location.pathname.replace(/^\/+/, '').toLowerCase();
  if (!path) return routes.home;
  if (path === 'algorithms') return routes.algorithms;
  if (path === 'independent-study') return routes.independentStudy;
  if (path === 'coursework') return routes.coursework;
  if (path === 'projects') return routes.projects;
  if (path === 'resume') return routes.resume;
  return routes.home;
};

const navigateTo = (route) => {
  const path = route === routes.home ? '/' : `/${route}`;
  window.history.pushState({}, '', path);
};

function App() {
  const [activeRoute, setActiveRoute] = useState(getInitialRoute);

  useEffect(() => {
    const onPopState = () => setActiveRoute(getInitialRoute());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const goTo = (route) => {
    navigateTo(route);
    setActiveRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navigation activeRoute={activeRoute} goTo={goTo} />
      {activeRoute === routes.projects && <Projects />}
      {activeRoute === routes.resume && <Resume />}
      {activeRoute === routes.algorithms && <Algorithms />}
      {activeRoute === routes.independentStudy && <IndependentStudy />}
      {activeRoute === routes.coursework && <Coursework />}
      {activeRoute === routes.home && <Home />}
    </div>
  );
}

function Navigation({ activeRoute, goTo }) {
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const collegeRoutes = [routes.algorithms, routes.independentStudy, routes.coursework];
  const isCollegeActive = collegeRoutes.includes(activeRoute);

  const goToRoute = (route) => {
    setCollegeOpen(false);
    setMenuOpen(false);
    goTo(route);
  };

  const navButton = (route, label) => (
    <button
      className={`nav-link ${activeRoute === route ? 'active' : ''}`}
      type="button"
      onClick={() => goToRoute(route)}
    >
      {label}
    </button>
  );

  return (
    <nav className="navbar">
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => {
          setMenuOpen((open) => !open);
          setCollegeOpen(false);
        }}
      >
        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" />
      </button>
      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <div className="nav-primary">
          {navButton(routes.home, 'Home')}
          {navButton(routes.projects, 'Projects')}
          {navButton(routes.resume, 'Resume')}
          <div
            className="dropdown"
          >
            <button
              className={`nav-link dropdown-trigger ${isCollegeActive ? 'active' : ''}`}
              type="button"
              aria-expanded={collegeOpen}
              onClick={() => setCollegeOpen((open) => !open)}
            >
              College
              <i className="fas fa-chevron-down" aria-hidden="true" />
            </button>
            {collegeOpen && (
              <div className="dropdown-menu">
                <button type="button" onClick={() => goToRoute(routes.algorithms)}>Algorithms</button>
                <button type="button" onClick={() => goToRoute(routes.independentStudy)}>Independent Study</button>
                <button type="button" onClick={() => goToRoute(routes.coursework)}>Coursework</button>
              </div>
            )}
          </div>
        </div>
        <div className="nav-social">
          <a href="https://www.linkedin.com/in/elizabeth-wilson-7a766718a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://github.com/ediewilson" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  const paragraphs = [
    'Hi! My name is Elizabeth, but everyone calls me Edie (pronounced E-Dee), and I graduated from Dartmouth College in 2022, where I majored in computer science and minored in environmental science.',
    'In March of 2019, I learned how to program. I was a likely engineering major at Dartmouth College, following closely in the footsteps of my father, who had gone through college to become an industrial engineer. However, in my first year as an engineer, nothing really excited me. I definitely do not remember the first thing that I learned in introductory physics, but I very clearly remember my first programming class. Print and if/else statements. As clear as day, I remember that first time feeling of watching my terminal print out the numbers one through ten, followed by the odd numbers in the same range. Something that I now know is so simple absolutely electrified me with excitement.',
    'Long story short, I decided that even if I had to be the only sophomore computer science major who did not really know how to code yet, I would be alright. What I lacked in previous knowledge, I quickly made up for with my newly discovered passion for programming. Turns out I made the right decision; I have had some of the coolest internships in the world, spent three-plus years building revenue-driving full-stack and AI systems at Pinterest, and had the chance to work on a bunch of other awesome projects.',
    'At Pinterest, I got to work on growth engineering, experimentation, data analysis, and AI sales productivity tools, which is a very corporate-sounding way of saying I spent a lot of time trying to turn messy problems into useful products. I love that part of engineering: the moment when an idea stops being a slide, a query, or a slightly chaotic whiteboard conversation and becomes something real that people can use.',
    'When I\'m not coding, I love to read and write book reviews, DJ, craft with friends, and hang out with my two cats, Knight and Flora. Most of all, I love to make things happen, create things that excite me, and watch my passions and dreams become reality in my local development environment.',
  ];

  return (
    <main className="home">
      <div className="home-hero" aria-label="Sunset header image" />
      <section className="content-section narrow">
        <h1>Personal Profile Statement</h1>
        <div className="leaf-list">
          {paragraphs.map((paragraph, index) => (
            <React.Fragment key={paragraph.slice(0, 32)}>
              <p>{paragraph}</p>
              {index < paragraphs.length - 1 && <i className="fas fa-leaf spacer" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}

const experiences = [
  {
    id: 'pinterest',
    jobTitle: 'Fullstack / AI Software Engineer',
    company: 'Pinterest',
    duration: 'August 2022 - April 2026',
    location: 'San Francisco, CA',
    logo: pinterestLogo,
    website: 'https://pinterest.com/',
    summary: 'Full-stack engineer across growth engineering and AI sales productivity work.',
    skills: ['Growth engineering', 'Experimentation', 'Agentic AI systems', 'Data analysis', 'Cross-team product ownership'],
    languages: ['React', 'Python', 'SQL', 'LLM workflows'],
    accomplishments: [
      'Designed, built, and launched full-stack projects through A/B experiments and data analysis.',
      'Delivered $100M+ in incremental annual revenue impact.',
      'Built modular LLM workflows surfacing advertiser performance and industry trends from internal databases.',
      'Designed and deployed agentic AI systems combining performance metrics, best practices, and industry trends.',
      'Owned cross-team AI response formatting work that unlocked rich interactive UI and customizable data visualizations.',
      'Served as Culture Champion for the monetization org in the San Francisco office.',
    ],
  },
  {
    id: 'ddhi',
    jobTitle: 'Research Assistant',
    company: 'Dartmouth Digital History Initiative',
    duration: 'December 2019 - June 2022',
    location: 'New Hampshire',
    logo: ddhiLogo,
    website: 'https://ddhi.dartmouth.edu/',
    summary: 'Developed software and data structures for oral history research in the digital humanities.',
    skills: ['Digital humanities', 'TEI', 'Named Entity Linking', 'Data visualization', 'Oral histories'],
    languages: ['Python', 'Flask', 'TEI/HTML tagging', 'Web Components'],
    accomplishments: [
      'Developed a Text Encoding Initiative schema to structure oral history transcripts for machine learning applications.',
      'Built an interactive timeline visualization tool for encoded oral histories.',
      'Presented work as part of the 2021 Oral History Association Annual Meeting.',
      'Received five terms of funding for this research.',
    ],
  },
  {
    id: 'volansi',
    jobTitle: 'Software Development Intern',
    company: 'Volansi',
    duration: 'June 2021 - October 2021',
    location: 'New Hampshire',
    logo: volansiLogo,
    website: 'https://volansi.com/',
    summary: 'Developed platform features for remote aircraft management software.',
    skills: ['Front-end design', 'Full-stack development', 'MAVLink protocols', 'Flight planning maps', 'Agile development'],
    languages: ['Svelte', 'Electron', 'JavaScript / TypeScript', 'Flask'],
    accomplishments: [
      'Contributed to the initial aircraft management platform release.',
      'Used MAVLink to implement flight duration timers.',
      'Added airport data, map layers, and weather trackers to drone flight planning maps.',
    ],
  },
  {
    id: 'dash-hudson',
    jobTitle: 'Software Development Intern',
    company: 'Dash Hudson',
    duration: 'October 2020 - December 2020',
    location: 'Canada',
    logo: dashHudsonLogo,
    website: 'https://dashhudson.com/',
    summary: 'Worked across front-end and back-end features for a social media management platform.',
    skills: ['Front-end design', 'SCSS', 'Full-stack development', 'Databases', 'Component testing', 'Agile development'],
    languages: ['Vue', 'Flask', 'JavaScript', 'SQL'],
    accomplishments: [
      'Implemented a user permissioning layer and activity timeouts.',
      'Improved creative scheduling functionality.',
      'Created a new calendar component and wrote component tests.',
    ],
  },
  {
    id: 'alarm',
    jobTitle: 'Software Development Intern',
    company: 'Alarm.com',
    duration: 'June 2020 - September 2020',
    location: 'Remote',
    logo: adcLogo,
    website: 'https://www.alarm.com/',
    summary: 'Built home automation software for smart thermostat and air conditioning products.',
    skills: ['End-to-end hardware testing', 'Unit testing', 'Legacy code'],
    languages: ['C#', 'SQL', 'ASPX'],
    accomplishments: [
      'Launched a smart air conditioning feature for thermostats.',
      'Modified permissions and web compatibility for thermostat controls.',
      'Added email and text notification support.',
    ],
  },
  {
    id: 'pan',
    jobTitle: 'Web Development Assistant',
    company: 'PAN Magazine',
    duration: 'September 2020 - March 2021',
    location: 'Remote',
    logo: panmagLogo,
    website: 'https://pan-mag.com/',
    summary: 'Maintained and improved the PAN Magazine website.',
    skills: ['Project management', 'WordPress', 'Website analytics', 'Website management'],
    languages: ['JavaScript'],
    accomplishments: ['Obtained and configured an SSL certificate.', 'Changed WordPress themes.', 'Reduced site bounce rate.'],
  },
  {
    id: 'ta',
    jobTitle: 'Teaching Assistant and Peer Tutor',
    company: 'Dartmouth College',
    duration: '2018 - 2022',
    location: 'New Hampshire',
    logo: dartmouthLogo,
    website: 'https://web.cs.dartmouth.edu/',
    summary: 'Supported students in computer science and multivariable calculus coursework.',
    skills: ['Tutoring', 'Debugging', 'Code reviews', 'Office hours'],
    languages: ['Python', 'Java'],
    accomplishments: [
      'TA for introductory computer science and object-oriented programming.',
      'Tutored multivariable calculus, introductory computer science, and object-oriented programming.',
      'Helped multiple students improve their standing in technical classes.',
    ],
  },
  {
    id: 'wilsons',
    jobTitle: 'Customer Data Analyst',
    company: 'Wilsons Security',
    duration: '2015 - 2019',
    location: 'Canada',
    logo: wilsonsLogo,
    website: 'https://www.wilsonssecurity.ca/',
    summary: 'Moved paper customer records into computer-based systems and supported database cleanup.',
    skills: ['Excel', 'Sedona Office', 'Customer service', 'Data migration'],
    languages: ['SQL'],
    accomplishments: ['Migrated two company acquisitions into the database.', 'Organized and digitized customer filing workflows.'],
  },
  {
    id: 'nest',
    jobTitle: 'Barista',
    company: 'The Nest Kitchen',
    duration: 'September 2021 - June 2022',
    location: 'New Hampshire',
    logo: nestLogo,
    website: 'https://thenestkitchen.com/',
    summary: 'Customer-facing cafe role strengthening communication, detail orientation, and teamwork.',
    skills: ['Customer service', 'Attention to detail', 'Teamwork', 'Communication'],
    languages: [],
    accomplishments: ['Debugged Toast point-of-service issues.', 'Managed high-volume service with a constantly changing menu.'],
  },
];

const awards = [
  'Distinction in CS Senior Design',
  'Neukom Scholar (2021)',
  'Four-time recipient, Dartmouth Sophomore and Junior Scholars Grant',
  'John Abyss Family Business Association Scholar',
  'CANASA Scholar',
  'Recipient of the John Abyss Family Business Association Scholarship for $3000',
  'NCAA Division I Track & Field athlete',
  'Top of Graduating Class medal recipient (high school)',
  'Awards for excellence in History, Math, and Physics (high school)',
];

const otherExperiences = [
  'Director of Chapter Events at Alpha Phi Sorority (Iota Kappa Chapter)',
  'Sports columnist for The Dartmouth',
  'Division 1 track athlete',
  'Graduate of the Management and Leadership Development Program at Dartmouth College',
  'Former member of the Dartmouth Entrepreneurship LLC',
  'Freshman Trips Program Orientation Leader',
];

function Resume() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="resume">
      <section className="resume-intro">
        <img className="profile-pic" src={headshot} alt="Elizabeth Wilson headshot" />
        <div>
          <p className="eyebrow">Elizabeth Wilson</p>
          <h1>Fullstack / AI Software Engineer</h1>
          <p>
            Full-stack engineer with 3+ years of experience building revenue-driving systems at Pinterest,
            delivering $100M+ incremental annual impact, and 1+ year building modular LLM workflows and
            agentic systems to drive sales productivity.
          </p>
          <div className="contact-row">
            <span><i className="fas fa-map-marker-alt" /> San Francisco, CA</span>
            <a href="mailto:ediewilson13@gmail.com"><i className="fas fa-envelope" /> ediewilson13@gmail.com</a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Skills</h2>
        <p className="lede">
          Programming languages, full-stack frameworks, growth engineering methodologies, A/B testing, data analysis,
          end-to-end product ownership, modular AI workflows, and agentic AI systems.
        </p>
      </section>

      <section className="content-section">
        <h2>Experience</h2>
        <div className="card-grid">
          {experiences.map((item) => (
            <button className="experience-card" type="button" key={item.id} onClick={() => setSelected(item)}>
              <img src={item.logo} alt={`${item.company} logo`} />
              <span className="card-title">{item.jobTitle}</span>
              <span className="card-company">{item.company}</span>
              <span className="card-duration">{item.duration}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="resume-split">
        <div>
          <h2>Education</h2>
          <p><strong>Dartmouth College</strong>, BA Computer Science major, Environmental Science minor</p>
          <p>September 2018 - June 2022. TA and tutor for multivariable calculus, introductory computer science, and object-oriented programming.</p>
        </div>
        <div>
          <h2>Awards & Honors</h2>
          <ul className="compact-list">{awards.map((award) => <li key={award}>{award}</li>)}</ul>
        </div>
        <div>
          <h2>Other Experiences</h2>
          <ul className="compact-list">{otherExperiences.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      {selected && <ExperienceModal item={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}

function ExperienceModal({ item, onClose }) {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section className="modal" role="dialog" aria-modal="true" aria-label={`${item.company} details`} onClick={(event) => event.stopPropagation()}>
        <aside>
          <img src={item.logo} alt={`${item.company} logo`} />
          <h3>{item.company}</h3>
          <p>{item.location}</p>
          <a href={item.website} target="_blank" rel="noreferrer">Company site</a>
        </aside>
        <div className="modal-content">
          <button className="close-button" type="button" onClick={onClose} aria-label="Close details">
            <i className="fas fa-window-close" />
          </button>
          <h2>{item.jobTitle}</h2>
          <p className="card-duration">{item.duration}</p>
          <p>{item.summary}</p>
          <div className="modal-columns">
            <DetailList title="Skills" items={item.skills} />
            <DetailList title="Accomplishments" items={item.accomplishments} />
            <DetailList title="Languages" items={item.languages} />
          </div>
        </div>
      </section>
    </div>
  );
}

function DetailList({ title, items }) {
  if (!items?.length) return null;
  return (
    <div>
      <h4>{title}</h4>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

function Projects() {
  return (
    <main className="content-section projects">
      <h1>Projects I&apos;ve Been Working On</h1>
      <p>If you want to check out the code behind the magic, take a look at <a href="https://github.com/ediewilson">my GitHub</a>.</p>
      <ProjectSection title="This Site">
        <p>This site is a work in progress, and now it is a React site. I keep it updated with projects, writing, and resume details as they evolve.</p>
      </ProjectSection>
      <ProjectSection title="GitBetter">
        <p>For my senior design and implementation project at Dartmouth College, I created a GitHub assistant tool called GitBetter. Users can hook up a repository and test git commands to visualize the effect each command would have on project status.</p>
        <div className="media-grid">
          <figure><img src="https://media.giphy.com/media/fyd0m632KwJ3QBUQQR/giphy.gif" alt="GitBetter landing page" /><figcaption>Landing page</figcaption></figure>
          <figure><img src={gitbetterHome} alt="GitBetter home page" /><figcaption>Home page</figcaption></figure>
          <figure><img src={gitbetterHelp} alt="GitBetter command help" /><figcaption>Command help</figcaption></figure>
        </div>
        <TagList items={['Vue', 'Electron desktop app', 'Bash CLI']} />
      </ProjectSection>
      <ProjectSection title="DDHI Visualizations">
        <p>I worked for the Dartmouth Digital History Initiative from 2019 to 2022, with work ranging from tagging entities in interviews to designing a timeline tool for oral history data.</p>
        <div className="media-grid two">
          <figure><img src="https://media.giphy.com/media/jyNneVmy065FxxgPQQ/giphy.gif" alt="Narrative versus chronological timeline" /><figcaption>Narrative vs. Chronological</figcaption></figure>
          <figure><img src="https://media.giphy.com/media/7bZ2pVIImWtxwTe8qh/giphy.gif" alt="Chronological timeline" /><figcaption>Chronological</figcaption></figure>
        </div>
        <TagList items={['Web Components', 'AnyChart timelines', 'Digital humanities data']} />
      </ProjectSection>
      <ProjectSection title="Tempo">
        <p>Tempo is an iOS app that I created with a group in my first web development class. It used the Spotify API and profile inputs to create workout playlists.</p>
        <div className="media-grid">
          <figure><img src="https://media.giphy.com/media/Id6vt52G35Rkr2Oq62/giphy.gif" alt="Tempo new profile" /><figcaption>New profile</figcaption></figure>
          <figure><img src="https://media.giphy.com/media/h4IrY661rYPyfTGcgc/giphy.gif" alt="Tempo example playlist" /><figcaption>Example playlist</figcaption></figure>
          <figure><img src="https://media.giphy.com/media/RMk2vnXfgJVXUqxlxU/giphy.gif" alt="Tempo playlist flow" /><figcaption>Playlist flow</figcaption></figure>
        </div>
        <TagList items={['React Native', 'Spotify API', 'Mongoose backend']} />
      </ProjectSection>
      <ProjectSection title="Buzzfeed Quiz">
        <img className="wide-image" src={buzzfeedImage} alt="Buzzfeed quiz screenshot" />
        <p>One of my first full-stack-ish development projects: an Ivy League personality quiz built with jQuery, HTML, and CSS. <a href="https://ediewilson.github.io/CS-52-Lab-2/">Take the quiz</a>.</p>
      </ProjectSection>
    </main>
  );
}

function ProjectSection({ title, children }) {
  return (
    <section className="project-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function TagList({ items }) {
  return <ul className="tag-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function Algorithms() {
  const canvasRef = useRef(null);
  const [nodeCount, setNodeCount] = useState(6);
  const [graph, setGraph] = useState(null);

  const drawVertex = (ctx, vertex, visited) => {
    ctx.beginPath();
    ctx.arc(vertex.x, vertex.y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = visited ? '#0b4f9f' : '#d74b4b';
    ctx.fill();
  };

  const drawEdge = (ctx, a, b, cost, visited) => {
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = visited ? '#0b4f9f' : 'rgba(215, 75, 75, 0.45)';
    ctx.lineWidth = visited ? 3 : 1;
    ctx.stroke();
    ctx.font = '12px Arial';
    ctx.fillStyle = '#202124';
    ctx.fillText(cost.toFixed(1), (a.x + b.x) / 2, (a.y + b.y) / 2);
  };

  const renderGraph = (nextGraph, mstParents = null) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    nextGraph.edges.forEach((edge) => {
      const selected = mstParents && mstParents[edge.tail] === edge.head;
      drawEdge(ctx, nextGraph.nodes[edge.head], nextGraph.nodes[edge.tail], edge.cost, selected);
    });
    nextGraph.nodes.forEach((node, index) => drawVertex(ctx, node, Boolean(mstParents && index in mstParents)));
    if (mstParents) {
      const cost = nextGraph.edges.reduce((sum, edge) => sum + (mstParents[edge.tail] === edge.head ? edge.cost : 0), 0);
      ctx.font = '16px Arial';
      ctx.fillStyle = '#202124';
      ctx.fillText(`Cost of MST is ${cost.toFixed(2)}`, 20, 24);
    }
  };

  const createGraph = () => {
    const count = Math.max(2, Math.min(Number(nodeCount) || 2, 24));
    const width = 800;
    const height = 600;
    const nodes = Array.from({ length: count }, (_, id) => ({
      id,
      x: 30 + Math.random() * (width - 60),
      y: 40 + Math.random() * (height - 80),
    }));
    const edges = [];
    nodes.forEach((node, i) => {
      nodes.forEach((other, j) => {
        if (i < j) {
          edges.push({
            head: i,
            tail: j,
            cost: Math.hypot(node.x - other.x, node.y - other.y),
          });
        }
      });
    });
    const nextGraph = { nodes, edges };
    setGraph(nextGraph);
    renderGraph(nextGraph);
  };

  const runPrims = () => {
    if (!graph) return;
    const selected = new Set([0]);
    const parents = {};
    while (selected.size < graph.nodes.length) {
      let best = null;
      graph.edges.forEach((edge) => {
        const crosses = selected.has(edge.head) !== selected.has(edge.tail);
        if (crosses && (!best || edge.cost < best.cost)) best = edge;
      });
      if (!best) break;
      const newNode = selected.has(best.head) ? best.tail : best.head;
      const parent = selected.has(best.head) ? best.head : best.tail;
      parents[newNode] = parent;
      selected.add(newNode);
    }
    renderGraph(graph, parents);
  };

  useEffect(() => {
    createGraph();
  }, []);

  return (
    <main className="content-section algorithms">
      <h1>Algorithms</h1>
      <h2>My engagement in COSC31 - Algorithm Design with Professor Chakrabarti, 21S</h2>
      <p>As I would imagine is the case with many students who take an algorithm design class, I was apprehensive going into the start of the term. I engaged by discussing ungraded problem sets, reading the textbook, drawing algorithm execution, watching lectures, attending office hours, and building this interactive Prim&apos;s MST visualization.</p>
      <div className="algorithm-controls">
        <label htmlFor="node-count">Vertices</label>
        <input id="node-count" type="number" min="2" max="24" value={nodeCount} onChange={(event) => setNodeCount(event.target.value)} />
        <button type="button" onClick={createGraph}>Make the Graph</button>
        <button type="button" onClick={runPrims}>Run Prim&apos;s</button>
      </div>
      <canvas ref={canvasRef} height="600" width="800">Your browser does not support the canvas element.</canvas>
    </main>
  );
}

const independentStudyJournal = [
  {
    title: 'Week 1',
    subtitle: 'Framing Digital Humanities and Oral History',
    text: [
      'This independent study began with the core question of how digital tools can support oral history research without flattening the ambiguity, memory, and bias that make oral histories valuable.',
      'I focused on the Dartmouth Digital History Initiative data model and the challenge of making encoded interviews explorable for researchers who want to understand timelines, people, places, and events across transcripts.',
    ],
    sources: [
      'Course syllabus and introductory digital humanities readings',
      'Dartmouth Digital History Initiative oral history materials',
    ],
  },
  {
    title: 'Week 2',
    subtitle: 'Encoding, Structure, and Interpretation',
    text: [
      'This week centered on how TEI markup structures oral history transcripts and how that structure can help or limit later analysis.',
      'A major design tension was deciding how much interpretation belongs in the data itself versus in the visualization layer. Oral histories need enough structure to be searchable, but not so much that the tool pretends the transcript is more certain than it is.',
    ],
    sources: [
      'TEI guidelines and DDHI schema work',
      'Readings on archival bias and digital representation',
    ],
  },
  {
    title: 'Week 3',
    subtitle: 'Timeline Design and Historical Context',
    text: [
      'I explored ways to show dates from interviews as more than a simple chronological list. Oral histories often move between memory, context, and narrative, so the visualization needed room for both chronological and narrative reading.',
      'The prototype direction focused on helping users move between a broad overview and the specific transcript evidence behind each date.',
    ],
    sources: [
      'Timeline visualization examples',
      'DDHI interview data and date annotations',
    ],
  },
  {
    title: 'Week 4',
    subtitle: 'Bias, Access, and Usability',
    text: [
      'This week pushed the project toward accessibility: not just visual accessibility, but research accessibility. A useful digital humanities tool should make the underlying archive easier to approach without hiding its limitations.',
      'I worked through interaction patterns that would let users compare narrative order and chronological order while keeping links back to the original oral history material visible.',
    ],
    sources: [
      'Readings on access in digital humanities',
      'Usability notes from timeline prototype work',
    ],
  },
  {
    title: 'Week 5',
    subtitle: 'Week 5 Reflection',
    text: [
      'The design work this week became more concrete. I moved from conceptual sketches into interactive design drafts for the timeline tool, testing how a researcher might move from a high-level view into the details of a specific interview moment.',
      'The goal of these drafts was to make the tool feel exploratory without making the interface feel detached from the oral histories it represents.',
    ],
    sources: [
      'Prototype review notes',
      'Adobe XD design drafts',
    ],
    embeds: [
      'https://xd.adobe.com/embed/30101f62-8e43-46af-b9d8-7d24d64131b8-6543/',
      'https://xd.adobe.com/embed/22b3119e-b0df-47c5-b2ed-6d127ea94368-77e0/',
    ],
  },
];

function IndependentStudy() {
  return (
    <main className="content-section narrow">
      <h1>Independent Study</h1>
      <h2>History 097 - Summer 2021 - Dartmouth College</h2>
      <p><em>As the world around us becomes increasingly digital, the importance of studying digital humanities grows.</em></p>
      <p>In place of a class this summer, I designed an independent study within the history department at Dartmouth in order to explore digital humanities and oral histories in depth, as well as design <a href="https://ddhi-timelines.surge.sh/">my own digital humanities tool</a> for the Dartmouth Digital History Initiative.</p>
      <p>One of the deliverables of this class was a weekly reflection journal. The syllabus can be found <a href="https://docs.google.com/spreadsheets/d/1eOdC9fuAaRXj6EvKjR2AT12H0LiLUVzo14eYDXcTws8/edit?usp=sharing">here</a>.</p>
      <div className="journal-list">
        {independentStudyJournal.map((article) => (
          <JournalArticle article={article} key={article.subtitle} />
        ))}
      </div>
    </main>
  );
}

function JournalArticle({ article }) {
  return (
    <article>
      <h3>{article.title}</h3>
      <h4>{article.subtitle}</h4>
      {article.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <h5>Readings of the week:</h5>
      <ul>
        {article.sources.map((source) => <li key={source}>{source}</li>)}
      </ul>
      {article.embeds && (
        <div className="design-embeds">
          <h5>Design drafts</h5>
          {article.embeds.map((src) => (
            <iframe
              title={`Design draft for ${article.subtitle}`}
              src={src}
              key={src}
              allowFullScreen
            />
          ))}
        </div>
      )}
    </article>
  );
}

const courses = [
  { code: 'COSC 10', title: 'Intro to Object Oriented Programming', professor: 'Professor Tim Pierson', topics: ['Java', 'Object-oriented programming', 'Data structures'] },
  { code: 'COSC 30', title: 'Discrete Math in Computer Science', professor: 'Professor Sebastian Joosten', topics: ['Proofs', 'Logic', 'Algorithm foundations'] },
  { code: 'COSC 31', title: 'Algorithm Design', professor: 'Professor Amit Chakrabarti', topics: ['Greedy algorithms', 'Dynamic programming', 'Graph algorithms'] },
  { code: 'COSC 50', title: 'Intro to Software Design and Implementation', professor: 'Dartmouth Computer Science', topics: ['Team development', 'Software architecture', 'Product building'] },
  { code: 'COSC 52', title: 'Full-Stack Web Development', professor: 'Professor Tim Treu', topics: ['React', 'APIs', 'Databases'] },
  { code: 'COSC 60', title: 'Computer Networks', professor: 'Professor Sebastian Joosten', topics: ['Networking protocols', 'Distributed systems', 'Internet architecture'] },
  { code: 'COSC 89', title: 'Cognitive Computing with Watson', professor: 'Professor Charles Palmer', topics: ['AI systems', 'IBM Watson', 'Applied NLP'] },
];

function Coursework() {
  return (
    <main className="content-section">
      <h1>College Coursework</h1>
      <p className="lede">A consolidated home for college work that used to live across separate navigation items.</p>
      <div className="course-grid">
        {courses.map((course) => (
          <article className="course-card" key={course.code}>
            <span>{course.code}</span>
            <h2>{course.title}</h2>
            <p>{course.professor}</p>
            <TagList items={course.topics} />
          </article>
        ))}
      </div>
    </main>
  );
}

createRoot(document.getElementById('app')).render(<App />);
