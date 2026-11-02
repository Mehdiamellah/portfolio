/**
 * SOURCE UNIQUE du contenu bilingue du portfolio.
 * Contenu calibré sur le vrai CV d'Amellah Elmahdi (nov. 2026).
 * Ajoute un projet ici → il apparaît partout.
 * Format descriptions : Contexte → Rôle (ce que J'AI fait) → Résultat.
 */

export type Bi = { fr: string; en: string }

export const NAV = {
  links: [
    { href: '#about', label: { fr: '01 · Profil', en: '01 · Profile' } },
    { href: '#experience', label: { fr: '02 · Parcours', en: '02 · Journey' } },
    { href: '#projects', label: { fr: '03 · Travaux', en: '03 · Work' } },
    { href: '#skills', label: { fr: '04 · Compétences', en: '04 · Skills' } },
    { href: '#contact', label: { fr: '05 · Écrire', en: '05 · Write' } },
  ],
  edition: { fr: 'Édition 2027', en: '2027 Edition' },
}

export const HERO = {
  masthead: {
    left: { fr: 'Portfolio — N°01', en: 'Portfolio — N°01' },
    middle: { fr: 'Réseaux · Cloud · DevOps · Cybersécurité', en: 'Networks · Cloud · DevOps · Cybersecurity' },
    right: { fr: 'Casablanca, Maroc', en: 'Casablanca, Morocco' },
  },
  dek: {
    fr: 'Élève ingénieur en réseaux et télécommunications — 5ᵉ année à l’ENSA de Safi. Je m’appuie sur une base solide en réseaux pour déployer et automatiser des infrastructures :',
    en: 'Networks & telecommunications engineering student — 5th year at ENSA Safi. Building on a solid networking foundation to deploy and automate infrastructure:',
  },
  motto: '“ Networks are the foundation. Cloud is where they live today. ”',
  ctaPrimary: { fr: 'Voir les travaux ↓', en: 'See the work ↓' },
  ctaGhost: { fr: 'Me contacter →', en: 'Get in touch →' },
  ctaCv: { fr: 'Télécharger le CV (PDF)', en: 'Download CV (PDF)' },
  stamp: { fr: 'PFE Cloud / DevOps — dès février 2027', en: 'Final-year internship — from Feb 2027' },
  credit: { fr: 'Fig. 01', en: 'Fig. 01' },
  creditRight: { fr: 'ENSA Safi', en: 'ENSA Safi' },
  eyebrow: { fr: 'Recherche stage de fin d’études', en: 'Open to final-year internship' },
}

export const ABOUT = {
  label: { fr: 'N°01 — Profil', en: 'N°01 — Profile' },
  side: { fr: 'Qui je suis', en: 'Who I am' },
  heading: {
    fr: 'Des câbles et des paquets',
    en: 'From wires and packets',
  },
  headingItalic: {
    fr: 'vers les clouds et les clusters',
    en: 'to clouds and clusters',
  },
  para1: {
    fr: 'Élève ingénieur en 5ᵉ année de Génie Réseaux et Télécommunications à l’ENSA de Safi, au Maroc. Mon chemin vers le Cloud / DevOps n’est pas une reconversion — c’est une évolution logique. Je comprends les réseaux au niveau infrastructure, et j’applique cette connaissance à l’automatisation : AWS, Terraform, Kubernetes (K3s), Docker et Linux.',
    en: '5th-year Networks & Telecommunications engineering student at ENSA Safi, Morocco. My path to Cloud/DevOps is not a pivot — it is a logical evolution. I understand networks at the infrastructure level, and I apply that knowledge to automation: AWS, Terraform, Kubernetes (K3s), Docker and Linux.',
  },
  para2: {
    fr: 'Deux stages réalisés (DevOps/Cloud, virtualisation), une plateforme d’infrastructure déployée et opérationnelle, et une gouvernante : je construis des choses pour les comprendre. Je suis honnête sur ce que je ne sais pas encore, et je vais vite quand je décide d’apprendre quelque chose. Je recherche un stage de fin d’études (PFE) en Cloud / DevOps à partir de février 2027 — Nearshore, CFC ou grand groupe.',
    en: 'Two internships completed (DevOps/Cloud, virtualization), one infrastructure platform deployed and operational — and one governing rule: I build things to understand them. I am honest about what I do not know yet, and I move fast once I decide to learn something. Looking for a final-year internship (PFE) in Cloud/DevOps from February 2027 — Nearshore, CFC or large groups.',
  },
  languages: {
    fr: 'Langues — Français C1 · Anglais C1 · Rigueur · Autonomie · Esprit d’équipe',
    en: 'Languages — French C1 · English C1 · Rigor · Autonomy · Team spirit',
  },
}

export const STATS: { n: string; label: Bi }[] = [
  { n: '02', label: { fr: 'Stages réalisés — DevOps/Cloud & virtualisation', en: 'Internships completed — DevOps/Cloud & virtualization' } },
  { n: '10', label: { fr: 'Projets construits de bout en bout', en: 'Projects built end to end' } },
  { n: '05', label: { fr: 'Déploiements live — Docker, AWS, Oracle Cloud', en: 'Live deployments — Docker, AWS, Oracle Cloud' } },
  { n: '02/27', label: { fr: 'Disponible pour un PFE Cloud / DevOps', en: 'Available for a Cloud/DevOps final-year internship' } },
]

export const EXPERIENCE = {
  label: { fr: 'N°02 — Parcours', en: 'N°02 — Journey' },
  side: { fr: 'La chronologie', en: 'The timeline' },
  heading: {
    fr: 'Trajectoire, étape par étape',
    en: 'The trajectory, step by step',
  },
  headingItalic: {
    fr: 'sans raccourci',
    en: 'without shortcuts',
  },
  items: [
    {
      year: '2022',
      title: { fr: 'ENSA Safi — Cycle préparatoire', en: 'ENSA Safi — Preparatory cycle' },
      detail: {
        fr: 'Sept 2022 – Juill 2024. Fondamentaux scientifiques et techniques avant la spécialisation.',
        en: 'Sept 2022 – July 2024. Scientific and technical fundamentals before the major.',
      },
      tag: { fr: 'Formation', en: 'Education' },
    },
    {
      year: '2024',
      title: { fr: 'ENSA Safi — Cycle d’ingénieur', en: 'ENSA Safi — Engineering cycle' },
      detail: {
        fr: 'Sept 2024 – Juill 2027. Génie Réseaux et Télécommunications : TCP/IP, routage Cisco, Linux, C.',
        en: 'Sept 2024 – July 2027. Networks & Telecommunications: TCP/IP, Cisco routing, Linux, C.',
      },
      tag: { fr: 'Formation', en: 'Education' },
    },
    {
      year: '2025',
      title: { fr: 'Stage — Koutoubia Holding, Mohammedia', en: 'Internship — Koutoubia Holding, Mohammedia' },
      detail: {
        fr: 'Juill – Août 2025. Infrastructure IT & virtualisation : installation d’un serveur Proxmox (RAID 0/1, BIOS), déploiement de VMs, maintenance matérielle.',
        en: 'Jul – Aug 2025. IT infrastructure & virtualization: Proxmox server installation (RAID 0/1, BIOS), VM deployment, hardware maintenance.',
      },
      tag: { fr: 'Expérience pro', en: 'Industry' },
    },
    {
      year: '2025',
      title: { fr: 'Bureau du club Zeroday', en: 'Zeroday club board member' },
      detail: {
        fr: 'Sept 2025 – présent. Direction de workshops cloud & DevOps, organisation d’événements avec des professionnels du domaine.',
        en: 'Sept 2025 – present. Leading cloud & DevOps workshops, organizing events with industry professionals.',
      },
      tag: { fr: 'Engagement', en: 'Community' },
    },
    {
      year: '2026',
      title: { fr: 'Stage — MNH Technologie, Technopark Casablanca', en: 'Internship — MNH Technologie, Technopark Casablanca' },
      detail: {
        fr: 'Juin – Août 2026. DevOps / Cloud : mise en production de Kativa sur AWS EC2 (3 services conteneurisés, Docker Compose v2, reverse proxy Nginx), correction de bugs de build Docker.',
        en: 'Jun – Aug 2026. DevOps/Cloud: took Kativa to production on AWS EC2 (3 containerized services, Docker Compose v2, Nginx reverse proxy), fixed Docker build bugs.',
      },
      tag: { fr: 'Expérience pro', en: 'Industry' },
    },
    {
      year: '2027',
      title: { fr: 'Stage de fin d’études (PFE) — à pourvoir', en: 'Final-year internship (PFE) — to be filled' },
      detail: {
        fr: 'Dès février 2027. Cloud / DevOps : AWS, Terraform, Kubernetes, automatisation. Nearshore, CFC ou grand groupe.',
        en: 'From February 2027. Cloud/DevOps: AWS, Terraform, Kubernetes, automation. Nearshore, CFC or large groups.',
      },
      tag: { fr: 'L’objectif', en: 'The goal' },
    },
  ],
}

export const PROJECTS = {
  label: { fr: 'N°03 — Travaux', en: 'N°03 — Work' },
  side: { fr: 'Dix travaux, dix apprentissages', en: 'Ten builds, ten lessons' },
  heading: { fr: 'Ce que j’ai construit', en: 'What I have built' },
  headingItalic: { fr: 'posé un à un', en: 'laid down one by one' },
  note: { fr: 'Rapport sur demande', en: 'Report on request' },
  viewGithub: { fr: 'Voir sur GitHub', en: 'View on GitHub' },
  viewSite: { fr: 'Site live', en: 'Live site' },
  linkedin: { fr: 'Post LinkedIn', en: 'LinkedIn post' },
  items: [
    {
      title: 'Scrutis — Plateforme SaaS de scan de fichiers & URLs',
      description: {
        fr: 'Contexte : PFE sur la sécurité des fichiers et des liens. Rôle : conception d’une plateforme de scan (ClamAV, YARA, Google Safe Browsing, PhishTank) et comparaison de deux architectures — AWS (EC2 + K3s, Terraform IaC) et Proxmox VE + Tailscale + K3s. Résultat : la seconde est retenue, déployée et opérationnelle.',
        en: 'Context: final-year project on file & URL security. Role: designed a scanning platform (ClamAV, YARA, Google Safe Browsing, PhishTank) and compared two architectures — AWS (EC2 + K3s, Terraform IaC) and Proxmox VE + Tailscale + K3s. Result: the second was adopted, deployed and is operational.',
      },
      stack: ['Terraform', 'AWS', 'Proxmox VE', 'K3s', 'Tailscale'],
      noteKey: 'note' as const,
    },
    {
      title: 'Kativa — E-commerce déployé sur AWS (stage MNH)',
      description: {
        fr: 'Contexte : stage DevOps/Cloud chez MNH Technologie (Technopark Casablanca). Rôle : mise en production d’une stack React/Vite + Node.js/Express/Prisma + PostgreSQL sur AWS EC2 — 3 services conteneurisés Docker Compose v2 (frontend, backend, reverse proxy Nginx), diagnostics de builds Docker. Résultat : site e-commerce opérationnel, méthode de déploiement reproductible.',
        en: 'Context: DevOps/Cloud internship at MNH Technologie (Technopark Casablanca). Role: took a React/Vite + Node.js/Express/Prisma + PostgreSQL stack to production on AWS EC2 — 3 services with Docker Compose v2 (frontend, backend, Nginx reverse proxy), diagnostic of Docker builds. Result: a running e-commerce site, with a reproducible deployment method.',
      },
      stack: ['Docker', 'AWS EC2', 'Nginx', 'Node.js', 'PostgreSQL'],
      link: 'http://34.231.137.194/',
      linkKey: 'viewSite' as const,
    },
    {
      title: 'EthicalData — Plateforme de coaching sur Oracle Cloud',
      description: {
        fr: 'Contexte : un pipeline de build Docker cassé sur un monorepo NestJS + Next.js. Rôle : diagnostic de la chaîne, correction, déploiement complet sur une VM Ubuntu Oracle Cloud. Résultat : plateforme remise en ligne, reproductible depuis zéro.',
        en: 'Context: a broken Docker build pipeline on a NestJS + Next.js monorepo. Role: diagnosed the chain, fixed it, deployed to an Ubuntu Oracle Cloud VM. Result: the platform back online, reproducible from scratch.',
      },
      stack: ['NestJS', 'Next.js', 'Docker', 'Oracle Cloud'],
      link: 'https://ethicaldatasecurity.ma/',
      linkKey: 'viewSite' as const,
    },
    {
      title: 'MediChain — Vérification de documents médicaux (SHA-256 + RSA)',
      description: {
        fr: 'Contexte : la falsification de documents médicaux est un risque réel. Rôle : conception, orchestration et déploiement d’une app fullstack (code généré avec assistance IA) — hachage SHA-256 + signatures RSA, données sensibles hors chaîne, conteneurisation Docker. Résultat : CI/CD GitHub Actions (build + tests à chaque push), en ligne sur Vercel/Render.',
        en: 'Context: medical document tampering is a real risk. Role: designed, orchestrated and deployed a fullstack app (AI-assisted code) — SHA-256 hashing + RSA signatures, sensitive data kept off-chain, Dockerized. Result: GitHub Actions CI/CD (build + tests on every push), live on Vercel/Render.',
      },
      stack: ['React', 'TypeScript', 'Node.js', 'Docker', 'CI/CD'],
      link: 'https://medichain-pi.vercel.app',
      linkKey: 'viewSite' as const,
    },
    {
      title: 'SQLI — Plateforme de candidatures conteneurisée',
      description: {
        fr: 'Contexte : plateforme PHP/MySQL de gestion des candidatures de stage. Rôle : conteneurisation de bout en bout — Docker Compose (app, base de données, phpMyAdmin), publication de l’image sur Docker Hub. Résultat : déployée sur une VM Kali Linux, l’approche conteneurs validée en conditions réelles.',
        en: 'Context: a PHP/MySQL internship-application platform. Role: containerized it end to end — Docker Compose (app, database, phpMyAdmin), image published to Docker Hub. Result: deployed to a Kali Linux VM, the container approach validated in real conditions.',
      },
      stack: ['Docker', 'Docker Compose', 'PHP', 'MySQL'],
      link: 'https://github.com/Mehdiamellah/Internhub',
      linkKey: 'viewGithub' as const,
    },
    {
      title: 'Wazuh SOC Labs — Détection & Monitoring',
      description: {
        fr: 'Contexte : comprendre la détection SOC au-delà de la théorie. Rôle : trois scénarios d’attaque simulés et détectés avec Wazuh — brute-force SSH (Hydra), ransomware sur Windows et sur Ubuntu. Résultat : détection vérifiée via File Integrity Monitoring et analyse des règles déclenchées.',
        en: 'Context: understanding SOC detection beyond theory. Role: three attack scenarios simulated and detected with Wazuh — SSH brute-force (Hydra), ransomware on Windows and Ubuntu. Result: detections verified through File Integrity Monitoring and analysis of triggered rules.',
      },
      stack: ['Wazuh', 'SIEM', 'FIM', 'Kali Linux', 'Hydra'],
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7437666442247909377/',
      linkKey: 'linkedin' as const,
    },
    {
      title: 'Infrastructure réseau multi-sites (Packet Tracer)',
      description: {
        fr: 'Contexte : réseau d’entreprise à 5 sites. Rôle : simulation complète — VLSM, VLANs, routage OSPF, DHCP/DNS centralisés, NAT/PAT, administration SSH, ACL Zero Trust. Résultat : architecture tenue de bout en bout, justifiable ligne par ligne.',
        en: 'Context: a 5-site enterprise network. Role: full simulation — VLSM, VLANs, OSPF routing, centralized DHCP/DNS, NAT/PAT, SSH administration, Zero Trust ACLs. Result: an end-to-end architecture defensible line by line.',
      },
      stack: ['Cisco IOS', 'OSPF', 'VLSM', 'NAT/ACL'],
      noteKey: 'note' as const,
    },
    {
      title: 'Cloud Infrastructure with Terraform',
      description: {
        fr: 'Contexte : l’infrastructure as code est la porte d’entrée du Cloud sérieux. Rôle : conception et déploiements en AWS et Azure, configurations modulaires et réutilisables. Résultat : une base Terraform que je réutilise sur le PFE Scrutis.',
        en: 'Context: infrastructure as code is the gateway to serious cloud work. Role: designed and deployed in AWS and Azure, modular and reusable configurations. Result: a Terraform base reused on the Scrutis final-year project.',
      },
      stack: ['Terraform', 'AWS', 'Azure'],
      link: 'https://github.com/Mehdiamellah/IoT-project',
      linkKey: 'viewGithub' as const,
    },
    {
      title: 'Attack Detection Platform (ML)',
      description: {
        fr: 'Contexte : croiser le Machine Learning avec la détection réseau, dans la continuité de la certification YaneCode. Rôle : plateforme qui classe les types d’attaques à partir d’un modèle entraîné, frontend Streamlit. Résultat : démonstration fenêtrée de classification de trafic.',
        en: 'Context: crossing Machine Learning with network detection, continuing the YaneCode certification. Role: a platform classifying attack types from a trained model, Streamlit frontend. Result: a working demo of traffic classification.',
      },
      stack: ['Python', 'Streamlit', 'ML'],
      link: 'https://github.com/Mehdiamellah/Cybershield',
      linkKey: 'viewGithub' as const,
    },
    {
      title: 'FTTH Network Infrastructure (OptiSystem, Phi-OTDR)',
      description: {
        fr: 'Contexte : la fibre au niveau microscope — aussi honnête : un channel plus académique que cloud, mais la rigueur physique compte. Rôle : simulation d’un réseau FTTH complet, introduction d’une attaque de jamming, lecture des anomalies en Phi-OTDR. Résultat : un rapport d’analyse d’impact sur une infrastructure physique.',
        en: 'Context: fiber under a microscope — honestly a more academic track than cloud, but physical rigor counts. Role: simulated a full FTTH network, introduced a jamming attack, read anomalies through Phi-OTDR analysis. Result: a complete impact analysis report on physical infrastructure.',
      },
      stack: ['OptiSystem', 'Phi-OTDR'],
      link: 'https://github.com/Mehdiamellah/Projet_Phi_Otdr',
      linkKey: 'viewGithub' as const,
    },
  ],
}

export const SKILLS = {
  label: { fr: 'N°04 — Compétences', en: 'N°04 — Skills' },
  side: { fr: 'Inventaire des outils', en: 'Inventory of tools' },
  heading: { fr: 'Ce qui est', en: 'What is' },
  headingItalic: {
    fr: 'sur l’établi',
    en: 'on the workbench',
  },
  legend: {
    confident: { fr: '● à l’aise', en: '● confident' },
    learning: { fr: '○ en cours', en: '○ learning' },
  },
  groups: [
    {
      category: { fr: 'Cloud & Virtualisation', en: 'Cloud & Virtualization' },
      items: [
        { label: 'AWS (EC2, S3, IAM, VPC, RDS, SQS)', level: 'confident' as const },
        { label: 'Terraform', level: 'confident' as const },
        { label: 'Proxmox VE', level: 'confident' as const },
        { label: 'Oracle Cloud', level: 'confident' as const },
        { label: 'VirtualBox · migration de VM', level: 'confident' as const },
        { label: 'Azure', level: 'learning' as const },
      ],
    },
    {
      category: { fr: 'Conteneurs & Orchestration', en: 'Containers & Orchestration' },
      items: [
        { label: 'Docker', level: 'confident' as const },
        { label: 'Docker Compose', level: 'confident' as const },
        { label: 'Docker Hub', level: 'confident' as const },
        { label: 'Tailscale', level: 'confident' as const },
        { label: 'Kubernetes (K3s, Minikube)', level: 'confident' as const },
      ],
    },
    {
      category: { fr: 'Sécurité & Monitoring', en: 'Security & Monitoring' },
      items: [
        { label: 'Wazuh (SIEM, FIM)', level: 'confident' as const },
        { label: { fr: 'Simulation d’attaques (brute-force, ransomware)', en: 'Attack simulation (brute-force, ransomware)' }, level: 'confident' as const },
        { label: 'ClamAV / YARA', level: 'confident' as const },
        { label: 'Blockchain (SHA-256, RSA)', level: 'confident' as const },
      ],
    },
    {
      category: { fr: 'Réseaux', en: 'Networking' },
      items: [
        { label: 'Cisco (routage, VLAN, OSPF, VLSM)', level: 'confident' as const },
        { label: 'TCP/IP', level: 'confident' as const },
        { label: 'DHCP/DNS', level: 'confident' as const },
        { label: 'NAT/PAT', level: 'confident' as const },
        { label: 'ACL', level: 'confident' as const },
        { label: 'SSH', level: 'confident' as const },
      ],
    },
    {
      category: { fr: 'Systèmes', en: 'Systems' },
      items: [
        { label: { fr: 'Administration Linux (RHEL, Ubuntu)', en: 'Linux administration (RHEL, Ubuntu)' }, level: 'confident' as const },
        { label: 'Utilisateurs, permissions, services réseau', level: 'confident' as const },
      ],
    },
    {
      category: { fr: 'Scripting & Programmation', en: 'Scripting & Programming' },
      items: [
        { label: 'Python', level: 'confident' as const },
        { label: 'Bash', level: 'confident' as const },
        { label: 'SQL', level: 'confident' as const },
        { label: { fr: 'C (notions)', en: 'C (basics)' }, level: 'learning' as const },
        { label: 'MATLAB (notions)', level: 'learning' as const },
      ],
    },
    {
      category: { fr: 'Outils', en: 'Tooling' },
      items: [
        { label: 'Git', level: 'confident' as const },
        { label: 'GitHub Actions (CI/CD)', level: 'confident' as const },
        { label: 'Cisco Packet Tracer', level: 'confident' as const },
        { label: 'Wireshark', level: 'confident' as const },
      ],
    },
    {
      category: { fr: 'Certification', en: 'Certification' },
      items: [
        {
          label: {
            fr: 'Cloud & Cybersécurité — YaneCode Academy (40h) : administration Linux/réseaux, détection d’attaques, Wazuh, ML, n8n, blockchain, déploiement sécurisé',
            en: 'Cloud & Cybersecurity — YaneCode Academy (40h): Linux/network administration, attack detection, Wazuh, ML, n8n workflows, blockchain, secure deployment',
          },
          level: 'confident' as const,
          url: 'https://drive.google.com/drive/folders/1Yc1CJ3FjawMyTA_Tjgt9E_g4Epq1i_Gd',
        },
      ],
    },
  ],
}

export const CONTACT = {
  label: { fr: 'N°05 — Écrire', en: 'N°05 — Write' },
  side: { fr: 'Réponse sous 24h', en: 'Replies within 24h' },
  heading: { fr: 'La prochaine étape', en: 'The next step' },
  headingItalic: { fr: 'commence par un message.', en: 'begins with a message.' },
  para: {
    fr: 'Stage de fin d’études (PFE) en Cloud / DevOps à partir de février 2027 — ou un projet à déployer. Ma boîte mails est ouverte.',
    en: 'Final-year internship (PFE) in Cloud/DevOps from February 2027 — or a project to deploy. My inbox is open.',
  },
  byMail: { fr: 'Par mail', en: 'By email' },
  byPhone: { fr: 'Par téléphone', en: 'By phone' },
  download: { fr: 'Télécharger', en: 'Download' },
  cv: { fr: 'CV en PDF', en: 'CV as PDF' },
  email: 'amellahmehdiog@gmail.com',
  phone: '+212 600 917 857',
  phoneHref: 'tel:+212600917857',
}

export const FOOTER = {
  name: 'Amellah Elmahdi.',
  colophon: {
    fr: 'Composé à la main — texte & mise en page — Casablanca, Maroc',
    en: 'Set by hand — text & layout — Casablanca, Morocco',
  },
  edition: { fr: 'Édition 2027', en: '2027 Edition' },
}
