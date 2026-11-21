window.SITE_DATA = {
  site: {
    name: '3l3v3n',
    handle: '@matrix-7337',
    pfp: 'assets/img/pfp.jpeg',
    pfpAlt: 'Portrait of 3l3v3n',
    brandImage: 'assets/img/pfp.jpeg',
    brandImageAlt: '',
    sectionIcons: {
      about: 'pirate',
      ctfs: 'flag',
      projects: 'chest',
      certs: 'scroll'
    },
    title: 'Digital Forensics Nerd',
    tagline: 'Eat-Work-Smoke-sleep.',
    location: 'Mushroom',
    status: 'Open to new quests and collaborations',
    stats: [
      { label: 'Quests Completed', icon: 'flag', countOf: 'ctfs' },
      { label: 'Challenges Solved', icon: 'skull', countOf: 'challenges' },
      { label: 'Tools Forged', icon: 'flask', countOf: 'tools' },
      { label: 'Certs Sealed', icon: 'scroll', countOf: 'certs' }
    ],
    skills: ['Linux', 'Cryptography', 'Forensics', 'Python', 'Bash', 'C', 'Sluethkit', 'Wireshark', 'kali' , 'Chips'],
    socials: [
      { label: 'GitHub', url: 'https://github.com/matrix-7337', icon: 'key' },
      { label: 'Writeups', url: 'https://matrix-7337.github.io/blogs', icon: 'book' },
      { label: 'Twitter / X', url: 'https://x.com/matrix7337', icon: 'banner' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/raunak-raj-2aab01421', icon: 'scroll' }
    ]
  },

  about: {
    heading: 'The tale so far',
    paragraphs: [
      'Greetings! I am a Digital Forensics entusiast and a perpetual student digital arts. I spend my days building applications, pulling apart disk images, and binaries, with left time I try learning new things',
      'This site is my treasure map. Every CTF, project, and certificate below links to something real, and every writeup is an attempt to leave a trail for the next traveler who gets stuck on the same challenge.',
      'When I am not staring at a terminal, I am probably building sites like this, managing my discord server, or planning the next best way to make my laptop catch fire.'
    ],
    facts: [
      { label: 'Currently', value: 'Learning, breaking, documenting', icon: 'compass' },
      { label: 'Favorite Category', value: 'Digital Forensics', icon: 'sword' },
      { label: 'Fuel of Choice', value: 'Coffee and old maps', icon: 'potion' },
      { label: 'Motto', value: 'Coffee/Work/Sleep', icon: 'shield' }
    ]
  },

  ctfs: [
    {
      id: 'cyber-apocalypse-2026',
      title: 'Cyber Apocalypse 2026',
      kind: 'CTF',
      date: '2026-03-22',
      dateLabel: 'March 2026',
      organizer: 'HackTheBox',
      category: 'Mixed',
      placement: '1st Place',
      score: '2450',
      rank: '1 / 3,120',
      icon: 'shield',
      accent: 'red',
      summary: 'A week-long siege of web, crypto, reversing and pwn challenges. Our crew sailed through the final night to take first place.',
      details: [
        'Played with a team of four.',
        'Solved every web challenge and two of the reversing chain.',
        'Wrote detailed notes for each flag we captured.'
      ],
      links: {
        event: 'https://www.hackthebox.com/',
        writeups: 'https://github.com/YOUR_USERNAME/WRITEUPS_REPO/tree/main/2026/cyber-apocalypse',
        certificate: ''
      },
      challenges: [
        {
          name: 'Scroll of forgotten keys',
          category: 'Web',
          points: 300,
          difficulty: 'Medium',
          summary: 'A broken session check let us rewrite the royal ledger and read the flag from an admin-only endpoint.',
          icon: 'key',
          link: 'https://github.com/YOUR_USERNAME/WRITEUPS_REPO/blob/main/2026/cyber-apocalypse/scroll-of-forgotten-keys.md'
        },
        {
          name: 'Cursed cipher',
          category: 'Crypto',
          points: 450,
          difficulty: 'Hard',
          summary: 'Recovering a reused nonce from a stream cipher with a little lattice magic.',
          icon: 'gem',
          link: 'https://github.com/YOUR_USERNAME/WRITEUPS_REPO/blob/main/2026/cyber-apocalypse/cursed-cipher.md'
        },
        {
          name: 'Haunted vessel',
          category: 'Reverse',
          points: 500,
          difficulty: 'Hard',
          summary: 'Unpacking a self-modifying binary and reversing the flag check routine.',
          icon: 'skull',
          link: 'https://github.com/YOUR_USERNAME/WRITEUPS_REPO/blob/main/2026/cyber-apocalypse/haunted-vessel.md'
        },
        {
          name: 'Treasure map',
          category: 'Forensics',
          points: 200,
          difficulty: 'Easy',
          summary: 'Hidden data inside the metadata of a pirate ship painting.',
          icon: 'map',
          link: 'https://github.com/YOUR_USERNAME/WRITEUPS_REPO/blob/main/2026/cyber-apocalypse/treasure-map.md'
        }
      ]
    },
    {
      id: 'picoctf-2025',
      title: 'picoCTF 2025',
      kind: 'CTF',
      date: '2025-10-18',
      dateLabel: 'October 2025',
      organizer: 'Carnegie Mellon University',
      category: 'Beginner Friendly',
      placement: 'Top 8%',
      score: '8,400',
      rank: '412 / 12,600',
      icon: 'helm',
      accent: 'blue',
      summary: 'A massive beginner-friendly contest. I used it as a training ground and cleared a long list of web and forensics challenges.',
      details: [
        'Solo run over the full two-week window.',
        'Focused on web, forensics and intro cryptography.',
        'Notes kept short and reusable as a personal cheatsheet.'
      ],
      links: {
        event: 'https://picoctf.org/',
        writeups: 'https://github.com/YOUR_USERNAME/WRITEUPS_REPO/tree/main/2025/picoctf',
        certificate: ''
      },
      challenges: [
        {
          name: 'Key exchange mishap',
          category: 'Crypto',
          points: 150,
          difficulty: 'Easy',
          summary: 'A tiny Diffie-Hellman parameter made the shared secret trivial to recover.',
          icon: 'key',
          link: 'https://github.com/YOUR_USERNAME/WRITEUPS_REPO/blob/main/2025/picoctf/key-exchange-mishap.md'
        },
        {
          name: 'Hidden in plain sight',
          category: 'Forensics',
          points: 200,
          difficulty: 'Easy',
          summary: 'A PNG with an appended zip archive and a very patient hex editor.',
          icon: 'map',
          link: 'https://github.com/YOUR_USERNAME/WRITEUPS_REPO/blob/main/2025/picoctf/hidden-in-plain-sight.md'
        },
        {
          name: 'Cookie jar',
          category: 'Web',
          points: 300,
          difficulty: 'Medium',
          summary: 'Forging a signed cookie after discovering the secret in a public JS file.',
          icon: 'coin',
          link: 'https://github.com/YOUR_USERNAME/WRITEUPS_REPO/blob/main/2025/picoctf/cookie-jar.md'
        }
      ]
    },
    {
      id: 'local-hackmeet-2025',
      title: 'Local Hack Meet — Volume VII',
      kind: 'Event',
      date: '2025-02-08',
      dateLabel: 'February 2025',
      organizer: 'Community Hack Club',
      category: 'Workshop & Lightning CTF',
      placement: 'Speaker',
      score: '',
      rank: '',
      icon: 'banner',
      accent: 'gold',
      summary: 'Gave a short talk on writing CTF writeups that people actually read, followed by a small lightning CTF for the attendees.',
      details: [
        'Talk: "Mapping Your Own Treasure: Writeups That Teach".',
        'Designed six beginner challenges for the lightning round.',
        'Slides and challenge sources are in the repository.'
      ],
      links: {
        event: '',
        writeups: 'https://github.com/YOUR_USERNAME/WRITEUPS_REPO/tree/main/2025/local-hackmeet',
        certificate: ''
      },
      challenges: [
        {
          name: 'Writeup workshop slides',
          category: 'Talk',
          points: 0,
          difficulty: '',
          summary: 'The slides from the talk, including the writeup template I use.',
          icon: 'scroll',
          link: 'https://github.com/YOUR_USERNAME/WRITEUPS_REPO/blob/main/2025/local-hackmeet/slides.md'
        }
      ]
    }
  ],

  projects: [
    {
      name: 'Treasure Map',
      kind: 'Tool',
      year: '2026',
      status: 'In progress',
      icon: 'map',
      summary: 'A tiny CLI that turns messy recon output into a clean, sortable map of targets.',
      description: 'Parses subfinder, amass and nuclei output, removes duplicates, groups by domain and produces a markdown report. Built to keep large-scope engagements readable.',
      tags: ['Python', 'CLI', 'Recon'],
      links: {
        demo: '',
        repo: 'https://github.com/YOUR_USERNAME/treasure-map',
        article: ''
      }
    },
    {
      name: 'Cipher Chest',
      kind: 'Tool',
      year: '2025',
      status: 'Stable',
      icon: 'chest',
      summary: 'A browser-based playground for classical and modern ciphers with step-by-step explanations.',
      description: 'Includes Caesar, Vigenere, XOR, Rail Fence and a small RSA inspector. Every operation shows its working so beginners can follow along.',
      tags: ['JavaScript', 'Crypto', 'Education'],
      links: {
        demo: 'https://YOUR_USERNAME.github.io/cipher-chest/',
        repo: 'https://github.com/YOUR_USERNAME/cipher-chest',
        article: ''
      }
    },
    {
      name: 'Shipwright',
      kind: 'Tool',
      year: '2025',
      status: 'Stable',
      icon: 'ship',
      summary: 'A single-file CTF writeup template with a table of contents, difficulty tags and proof screenshots.',
      description: 'Start a new writeup with one command. Keeps every challenge consistent across a whole event and exports clean markdown for GitHub.',
      tags: ['Markdown', 'Python', 'CTF'],
      links: {
        demo: '',
        repo: 'https://github.com/YOUR_USERNAME/shipwright',
        article: ''
      }
    },
    {
      name: 'Fort Watch',
      kind: 'Project',
      year: '2024',
      status: 'Archived',
      icon: 'fort',
      summary: 'A lightweight log watcher that flags suspicious authentication patterns on small servers.',
      description: 'Reads auth logs, groups events by IP and raises an alert after repeated failures or impossible travel. Designed for low-resource boxes.',
      tags: ['Bash', 'Linux', 'Blue Team'],
      links: {
        demo: '',
        repo: 'https://github.com/YOUR_USERNAME/fort-watch',
        article: ''
      }
    },
    {
      name: 'Pixel Codex',
      kind: 'Project',
      year: '2024',
      status: 'Stable',
      icon: 'book',
      summary: 'A searchable notebook of commands, payloads and reminders gathered during CTFs.',
      description: 'Organized by category with copy-ready snippets and links back to the challenge that inspired each note.',
      tags: ['Markdown', 'Docs', 'Notes'],
      links: {
        demo: '',
        repo: 'https://github.com/YOUR_USERNAME/pixel-codex',
        article: ''
      }
    }
  ],

  tools: [
    { name: 'Burp Suite', summary: 'Web proxy and request tinkering.', icon: 'key', tag: 'Web', link: 'https://portswigger.net/burp' },
    { name: 'Ghidra', summary: 'Decompiling suspicious binaries.', icon: 'skull', tag: 'Reverse', link: 'https://ghidra-sre.org/' },
    { name: 'Wireshark', summary: 'Reading the packets of the realm.', icon: 'compass', tag: 'Network', link: 'https://www.wireshark.org/' },
    { name: 'ffuf', summary: 'Finding hidden directories and hosts.', icon: 'map', tag: 'Web', link: 'https://github.com/ffuf/ffuf' },
    { name: 'CyberChef', summary: 'The Swiss army knife of encodings.', icon: 'flask', tag: 'Crypto', link: 'https://gchq.github.io/CyberChef/' },
    { name: 'PowerShell', summary: 'Windows-side exploration.', icon: 'sword', tag: 'System', link: 'https://learn.microsoft.com/en-us/powershell/' }
  ],

  certs: [
    {
      name: 'HackTheBox Certified Bug Bounty Hunter',
      issuer: 'HackTheBox',
      date: '2026-01',
      credentialId: 'HTB-CBBH-XXXXXX',
      summary: 'Practical web application bug hunting and reporting.',
      icon: 'shield',
      tag: 'Offensive',
      link: 'https://www.hackthebox.com/certifications'
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: '2025-09',
      credentialId: 'COMPTIA-XXXXXX',
      summary: 'Core security concepts, threats, and best practices.',
      icon: 'scroll',
      tag: 'Foundational',
      link: 'https://www.comptia.org/certifications/security'
    },
    {
      name: 'TryHackMe Intro to Cyber Security',
      issuer: 'TryHackMe',
      date: '2024-11',
      credentialId: 'THM-INTRO-XXXX',
      summary: 'The first map on the journey: networking, Linux and web basics.',
      icon: 'compass',
      tag: 'Foundational',
      link: 'https://tryhackme.com/'
    }, 
  ]
};
