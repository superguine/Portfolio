const profile = {
  name: 'Shawon Roy',
  handle: 'superguine',
  title: 'Software Engineer',
  email: 'shawon.roy.tech@gmail.com',
  github: 'https://github.com/superguine',
  linkedin: 'https://www.linkedin.com/in/shawon-roy-78184923a',
  pitch:
    'I build across backend, frontend, and ML — and keep electronics on the bench for the problems that want hardware.',
  bio: `Software engineer working across backend, frontend, and ML. I like systems that span code and devices: desktop tools, ESP32 hardware, and model pipelines that actually get deployed.

Most recently active in Python, JavaScript, and HTML. TensorFlow and OpenCV showed up in my B.Tech final-year work; Arduino stays in the mix as a hobby and a way to reset.

This bio is a placeholder — swap it when you have the version you want.`,
};

const areas = [
  { id: 'backend', label: 'backend', hint: 'logic, services, scripts', tools: ['Python', 'Java', 'C', 'Linux'] },
  { id: 'frontend', label: 'frontend', hint: 'interfaces, apps, the bit people touch', tools: ['JavaScript', 'HTML', 'Android'] },
  { id: 'ml', label: 'ml', hint: 'train, evaluate, deploy', tools: ['TensorFlow', 'OpenCV'] },
];

const tools = [
  { id: 'python', name: 'Python', note: 'most recent' },
  { id: 'js', name: 'JavaScript', note: 'most recent' },
  { id: 'html', name: 'HTML', note: 'most recent' },
  { id: 'java', name: 'Java' },
  { id: 'c', name: 'C' },
  { id: 'android', name: 'Android' },
  { id: 'linux', name: 'Linux' },
  { id: 'opencv', name: 'OpenCV', note: 'final year' },
  { id: 'tf', name: 'TensorFlow', note: 'final year' },
  { id: 'arduino', name: 'Arduino', note: 'hobby' },
];

const interests = [
  { id: 'code', label: 'Code', detail: 'the default mode' },
  { id: 'apps', label: 'Apps', detail: 'utilities people actually run' },
  { id: 'network', label: 'Network', detail: 'how machines talk' },
  { id: 'os', label: 'OS', detail: 'what sits under the app' },
  { id: 'electronics', label: 'Electronics & robotics', detail: 'hobby · mind refreshment' },
  { id: 'music', label: 'Music', detail: 'always on in the background' },
];

const projects = [
  {
    slug: 'smart-dustbin',
    code: '01',
    title: 'Smart Dustbin',
    tagline: 'World-reachable bin with a shredder and live fill level.',
    stack: ['ESP32', 'Arduino', 'Blynk IoT', 'custom hardware'],
    domains: ['hardware', 'iot'],
    summary: 'Android and web controlled smart dustbin with an inbuilt shredder, realtime waste-level monitoring, and worldwide access for live monitoring and operation.',
    body: `A connected waste station rather than a novelty lid. The bin can be monitored and operated from anywhere: fill level is live, the shredder is in the unit, and control runs over Android and the web.

Built around ESP32 and Arduino, Blynk IoT for remote access, and custom hardware for the mechanical side. No public repo listed yet.`,
  },
  {
    slug: 'mango-leaf',
    code: '02',
    title: 'Mango leaf detection',
    tagline: 'Train, evaluate, deploy — then a five-class disease model.',
    stack: ['TensorFlow', 'OpenCV', 'Python', 'custom dataset'],
    domains: ['ml'],
    repo: 'https://github.com/superguine/Object_Detection_Project',
    summary: 'An object-detection system for training, evaluating, and deploying models on custom or prepared datasets. A mango-leaf model detects disease across five custom classes.',
    body: `B.Tech final-year project (2025). The repo is the overall system: dataset in, trained detector out, including evaluation and a deploy path.

On our own mango-leaf set the deployed model classifies disease via five custom classes. TensorFlow for the model work; OpenCV in the surrounding pipeline.`,
  },
  {
    slug: 'micronova32',
    code: '03',
    title: 'MicroNova32',
    tagline: 'Handheld, programmable ESP32 lab in your pocket.',
    stack: ['ESP32', 'OLED', 'IR Tx/Rx', 'custom touch pad'],
    domains: ['hardware', 'firmware'],
    repo: 'https://github.com/superguine/MicroNova32',
    summary: 'A handheld custom programmable device based on ESP32: OLED, buttons, speaker, IR transmit/receive, and a custom touch pad.',
    body: `Built as a small platform for creative and experimental projects — not a one-off demo board. Screen, buttons, speaker, IR Tx/Rx, and a custom touch pad live on one handheld ESP32 device.

More modules and project ideas live in the GitHub repo.`,
  },
  {
    slug: 'apps-for-windows',
    code: '04',
    title: 'Apps for Windows',
    tagline: 'Independent Python utilities for the desktop.',
    stack: ['Python', 'Windows'],
    domains: ['desktop'],
    repo: 'https://github.com/superguine/Apps_For_Windows',
    summary: 'A collection of independently developed Python desktop apps, including ResizerPro (batch image resizing) and TheRenamer (batch file renaming).',
    body: `Small tools with a sharp job: batch-resize images, batch-rename files, and grow the set as needed. Each app is independent; the repo is the collection.`,
  },
];

const codeLanes = [
  'def infer(path, model): img = cv2.imread(path); return model.predict(preprocess(img))',
  'const level = await client.get("bin/level"); if (level > THRESHOLD) notify(level)',
  'void loop() { irTx.send(cmd); drawOled(state); delay(16); }',
  'session.mount("backend"); session.mount("frontend"); session.mount("ml")',
  'dataset = load_custom("mangoleaf"); model.fit(train, epochs=N); export_saved(model)',
  'blynk.virtualWrite(V1, ultrasonic.cm()); if (cmd == SHRED) motor.pulse()',
];
