// All the words on the site live here. Edit this file to update the portfolio;
// the components only handle layout.

export type Media = {
  /** Image path, or the poster frame when `video` is set. */
  src: string;
  caption: string;
  /** Optional MP4 walkthrough. Plays muted and looped when on screen. */
  video?: string;
};

export type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  hook: string;
  period: string;
  role: string;
  context?: string;
  accent: string;
  recognition?: string[];
  problem: string;
  built: { lead: string; text: string }[];
  metrics: { value: string; label: string }[];
  footnote?: string;
  stack: string[];
  media: Media[];
  links?: { label: string; href: string; kind: "live" | "code" }[];
};

export const profile = {
  name: "Kausik Ganapathy Hari",
  shortName: "Kausik",
  role: "AI/ML Engineer & Full-stack Developer",
  location: "Chennai, India",
  email: "kausikganapathy.h@gmail.com",
  github: "https://github.com/kauziee-hub",
  githubHandle: "kauziee-hub",
  resume: "/Kausik_Ganapathy_Hari_Resume.pdf",
  // Studio portrait made with Higgsfield from Kausik's own photos (face kept as in kausik.webp).
  photo: "/images/profile/kausik-studio.webp",
  photoFull: "/images/profile/kausik.webp",
  heroLine: "Computer Science at VIT Chennai and Data Science at IIT Madras. Founder of Locah. I build the model, the backend and the interface.",
  summary:
    "Computer Science at VIT Chennai, Data Science at IIT Madras, founder of Locah. I build the models, the backend and the interface people actually use, from fraud checks that run before money moves to AI staff for small shops.",
};

export const heroStats = [
  { value: "2", suffix: "×", label: "Hackathon prizes" },
  { value: "7", suffix: "", label: "Systems shipped" },
  { value: "33", suffix: "", label: "Modules in Locah" },
];

export const recognisedAt = [
  "Indian Bank × VIT Chennai",
  "Vel Tech VISAI 2025",
  "Renault-Nissan",
  "Spirax Sarco",
  "TSM-Technova 2026",
  "Avinya 2.0",
];

const gh = (repo: string) => `https://github.com/kauziee-hub/${repo}`;

export const projects: Project[] = [
  {
    id: "vigil",
    index: "01",
    name: "Vigil",
    tagline: "Pre-commitment payment risk and money-mule detection",
    hook: "Stops a scam payment at the last safe moment, before the money moves.",
    period: "Jun 2026 – Oct 2026",
    role: "Designed and built end to end",
    accent: "#0E9F9A",
    recognition: ["Consolation prize · Indian Bank IntelliTrace 2026", "Reviewed by Spirax Sarco"],
    problem:
      "Scammers push people into sending money with fake 'digital arrest' calls, investment and job scams. The money lands in mule accounts that pass it on within minutes, and most fraud tools only look once it has already gone.",
    built: [
      {
        lead: "A decision before every payment.",
        text: "Each payment is scored on five kinds of evidence (external, network, journey, behaviour and context) and mapped to a five-tier response: a silent pass, a heads-up, a purpose check, a hold on that one payment, or a hold plus an alert to a trusted family member. No account is ever frozen.",
      },
      {
        lead: "Eight detectors that must agree.",
        text: "Rules, network rules, a Random Forest, a Graph Attention Network, behavioural drift, early warning, pattern memory and an external registry each judge accounts independently. A mule is flagged only when the families agree, and SHAP explains every model score.",
      },
      {
        lead: "Following the money.",
        text: "When a scam is confirmed, TaintTrace follows the stolen money through a double-entry ledger using the Lowest Intermediate Balance Rule, so the next payment to any account still holding it is held.",
      },
      {
        lead: "A read-only AI analyst.",
        text: "Vigilance, an LLM operations agent with 19 read-only tools, classifies each alert, writes up the case, walks the team through the bank's procedure and drafts the suspicious-transaction report for a human to file.",
      },
    ],
    metrics: [
      { value: "~3 ms", label: "median decision" },
      { value: "0.98", label: "ROC-AUC*" },
      { value: "8", label: "detector families" },
      { value: "5", label: "response tiers" },
    ],
    footnote: "*Held-out synthetic worlds (split by world, leave-one-attack-family-out), not real-bank data.",
    stack: ["Python", "FastAPI", "WebSockets", "scikit-learn", "PyTorch (GAT)", "SHAP", "React", "TypeScript", "Three.js", "Gemini API"],
    media: [
      { src: "/media/vigil-payment.webp", video: "/media/vigil-payment.mp4", caption: "A risky payment is paused on the customer's phone while the bank sees why" },
      { src: "/media/vigil-mule-ring.webp", video: "/media/vigil-mule-ring.mp4", caption: "A mule ring lights up in the live transaction network" },
      { src: "/images/work/vigil/payments.webp", caption: "Transaction guard: the customer's phone beside the bank's pre-commit assessment" },
      { src: "/images/work/vigil/network.webp", caption: "Live 3D transaction network with flagged mule accounts" },
      { src: "/images/work/vigil/overview.webp", caption: "Operations center during a live mule-ring attack" },
      { src: "/images/work/vigil/case-replay.webp", caption: "Case replay: risk over time and the counterfactual ladder" },
      { src: "/images/work/vigil/detection.webp", caption: "Detection runs: what each attack pattern triggered, and how fast" },
    ],
    links: [{ label: "Source", href: gh("Vigil"), kind: "code" }],
  },
  {
    id: "oilintelligence",
    index: "02",
    name: "OILINTELLIGENCE",
    tagline: "Physics-guided hydrocarbon loss attribution with an agentic investigator",
    hook: "Finds where crude oil goes missing in a tank farm, and proves why.",
    period: "Oct 2026 – Present",
    role: "Architect and sole engineer",
    accent: "#D9731A",
    problem:
      "Terminals lose real money to leaks, but most losses on paper are meter bias, gauging error or a transfer nobody booked. Telling a real loss from a bookkeeping one usually means days of manual reconciliation.",
    built: [
      {
        lead: "A virtual tank farm.",
        text: "A Python process simulator of a crude terminal (3 tanks, 4 pipelines, 2 pumps, 4 valves) with mass balance, Darcy–Weisbach hydraulics, pump curves and density correction, plus injectable faults and seeded ground truth.",
      },
      {
        lead: "Real industrial plumbing.",
        text: "Instrument telemetry streams over MQTT and OPC UA into TimescaleDB, where topology-aware mass balances carry their measurement uncertainty.",
      },
      {
        lead: "Physics first, ML second.",
        text: "XGBoost models flag abnormal windows and unhealthy instruments; a calibrated Bayesian model separates physical loss from meter bias and unrecorded movement, and says 'unknown' when nothing fits.",
      },
      {
        lead: "An agent that investigates and doesn't operate.",
        text: "A LangGraph agent gathers evidence and recommends the field check with the most information gain per unit of cost. The LLM only narrates numbers the models computed, an engineer approves the answer, and nothing in the platform can command a pump or valve.",
      },
    ],
    metrics: [
      { value: "18 min", label: "to flag a 9 mm leak" },
      { value: "96%", label: "on the true cause" },
      { value: "4", label: "models in the loop" },
      { value: "0", label: "write access to the plant" },
    ],
    footnote:
      "From a demo run: a 9 mm hole in pipe PL-002 stayed invisible in site totals but was caught at the pipe junction (z = 5.7). Three field checks later, the agent named PL-002 at 96%. All results come from the simulator.",
    stack: ["Python", "FastAPI", "TimescaleDB", "MQTT", "OPC UA", "XGBoost", "LangGraph", "Next.js", "React Three Fiber", "Docker"],
    media: [
      { src: "/media/oil-twin.webp", video: "/media/oil-twin.mp4", caption: "The live digital twin: tanks, pumps, valves and flow, day to night" },
      { src: "/media/oil-investigation.webp", video: "/media/oil-investigation.mp4", caption: "An investigation, from competing causes to the recommended field check" },
      { src: "/images/work/oilintelligence/digital-twin.webp", caption: "Digital twin: the live tank farm with tanks, pumps, valves and flow" },
      { src: "/images/work/oilintelligence/investigation.webp", caption: "Competing causes, estimated loss and the next check" },
      { src: "/images/work/oilintelligence/overview.webp", caption: "Operations overview: the facility mass balance inside its ±2σ band" },
      { src: "/images/work/oilintelligence/loss-analytics.webp", caption: "Loss analytics: reconciling physical against apparent loss" },
      { src: "/images/work/oilintelligence/scoreboard.webp", caption: "Scenario scoreboard: the detector against the simulator's answer key" },
    ],
    links: [{ label: "Source", href: gh("OILINTELLIGENCE"), kind: "code" }],
  },
  {
    id: "locah",
    index: "03",
    name: "Locah",
    tagline: "An AI operating system for local businesses",
    hook: "A shop owner describes their business in a conversation. Locah builds the rest.",
    period: "2025 – Present",
    role: "Founder and engineer",
    accent: "#C2410C",
    recognition: ["Grand Finale · TSM-Technova 2026, Madurai"],
    problem:
      "Local businesses in India run on WhatsApp, paper credit books and word of mouth. Most software assumes the owner has time, a laptop and fluent English.",
    built: [
      {
        lead: "Onboarding is a conversation.",
        text: "The owner talks about their business in English, Tamil or Tanglish. Locah builds their website, lists them on a local Marketplace and sets up a Workspace with the tools that kind of business needs.",
      },
      {
        lead: "33 modules, each switched on by the owner.",
        text: "Orders, payments, bookings, stock, delivery, memberships, invoices and GST, counter billing, a khata credit book, kitchen display, walk-in queue, loyalty, campaigns and WhatsApp messaging. Each module passes entitlement, activation, readiness and permission gates, and Postgres row-level security isolates every tenant.",
      },
      {
        lead: "AI staff with a leash.",
        text: "A WhatsApp receptionist, a collections assistant and a procurement assistant share one runtime: tiered tool permissions up to owner approval, per-agent allowlists, a kill switch, a no-write sandbox and every decision logged. Replies come from the business's own records, so the model can't invent a price.",
      },
      {
        lead: "Websites that critique themselves.",
        text: "Generation picks an art direction and motion language, then a critic (including a vision model reviewing rendered screenshots) revises the layout for up to three rounds. It runs as three Next.js apps, a FastAPI API and an outbox-driven worker on Railway.",
      },
    ],
    metrics: [
      { value: "33", label: "shipped modules" },
      { value: "3", label: "languages, incl. Tanglish" },
      { value: "3", label: "AI employees" },
      { value: "5", label: "deployed services" },
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL (Supabase)", "SQLAlchemy", "Gemini / DeepSeek", "Razorpay", "WhatsApp API", "Docker", "Railway"],
    media: [
      { src: "/media/locah-tour.webp", video: "/media/locah-tour.mp4", caption: "From a conversation to a live business: onboarding, the generated website, the Workspace and AI staff" },
      { src: "/images/work/locah/conversation.webp", caption: "Onboarding: the owner describes the business in their own words" },
      { src: "/images/work/locah/generated-site.webp", caption: "A website Locah generated for a Chennai butcher" },
      { src: "/images/work/locah/workspace.webp", caption: "The owner's Workspace: today, what needs attention, what to switch on next" },
      { src: "/images/work/locah/ai-staff.webp", caption: "AI employees: autonomy tiers, allowed tools and limits set by the owner" },
    ],
    // locah.store is currently returning Railway's "Not Found"; add the live link back once it is up.
    links: [{ label: "Source", href: gh("Locah"), kind: "code" }],
  },
  {
    id: "unitask",
    index: "04",
    name: "UniTask",
    tagline: "A student planner that syncs with Microsoft Teams, deployed on AWS",
    hook: "Pulls every assignment out of Teams and tells a student what to do next, and why.",
    period: "Oct 2026",
    role: "Cloud and backend lead · team of two",
    context: "Built for the Cloud Application Development course at VIT Chennai",
    accent: "#B45309",
    problem:
      "Students copy deadlines out of Teams by hand, then stare at a list that tells them nothing about what to start first. The course brief was to ship a real cloud application, where every service does real work.",
    built: [
      {
        lead: "Live on AWS, not just on a diagram.",
        text: "One FastAPI container serves the API and the React app on ECS Express Mode with Fargate in Mumbai, behind an internet-facing load balancer that terminates HTTPS with a TLS 1.3 policy. Data lives in an encrypted RDS PostgreSQL 16 instance that only accepts connections from inside the VPC, and uploads go to a private, encrypted S3 bucket reachable only through five-minute presigned links.",
      },
      {
        lead: "Secure and cheap by default.",
        text: "The task gets its rights from an IAM role instead of stored keys, logs and alarms go to CloudWatch, canary deploys roll back on alarm, and an AWS Budgets guardrail emails at $5, $15 and $30. No NAT gateway, so the whole demo runs on free credits.",
      },
      {
        lead: "A pipeline that proves the build.",
        text: "Every push runs GitHub Actions: frontend lint and build, backend tests against both SQLite and PostgreSQL 16, a Docker build, and a smoke test of the running container before the image is published. ECS deploys an immutable image tag.",
      },
      {
        lead: "Teams sync through Microsoft Graph.",
        text: "A student connects their college account once. Every 30 minutes UniTask pulls assignments from their Teams classes, flags new work, moved due dates and removed assignments, and drops anything already turned in. Refresh tokens are encrypted at rest.",
      },
      {
        lead: "Do this next, with a reason.",
        text: "Everything due is ranked by work left against time left, with a plain-English reason ('Due in 20h · about 3h of work · start within 2h'). A free-time planner fills the hours a student has, and teachers get Teams-style classes with submissions and grading.",
      },
    ],
    metrics: [
      { value: "8", label: "AWS services doing real work" },
      { value: "TLS 1.3", label: "HTTPS at the load balancer" },
      { value: "5 min", label: "presigned file links" },
      { value: "$0", label: "spend, on free credits" },
    ],
    stack: ["AWS ECS (Fargate)", "Application Load Balancer", "Amazon RDS", "Amazon S3", "IAM", "CloudWatch", "AWS Budgets", "Docker", "GitHub Actions", "FastAPI", "React", "Microsoft Graph", "Gemini"],
    media: [
      { src: "/media/unitask-walkthrough.webp", video: "/media/unitask-walkthrough.mp4", caption: "The student's day on the live AWS deployment: what to do next, deadlines, subjects and the command bar" },
      { src: "/images/work/unitask/aws-architecture.webp", caption: "The AWS architecture as deployed and verified on 29 Oct 2026" },
      { src: "/images/work/unitask/today.webp", caption: "Today: the one thing to do next, with the reason, and the deadline radar" },
      { src: "/images/work/unitask/deadlines.webp", caption: "Every deadline in one list, from Teams and from UniTask classes" },
      { src: "/images/work/unitask/planner.webp", caption: "The week planner fills free time with the highest-pressure work" },
      { src: "/images/work/unitask/exam-rescue.webp", caption: "Exam Rescue: a study plan that fits the hours left before the exam" },
      { src: "/images/work/unitask/tutor.webp", caption: "The AI tutor teaches from the student's own notes and checks understanding" },
    ],
    links: [
      { label: "Live on AWS", href: "https://un-77dd2c16f6e94ab593853d98dc3c3504.ecs.ap-south-1.on.aws", kind: "live" },
      { label: "Source", href: gh("UniTask"), kind: "code" },
    ],
  },
  {
    id: "vitasense",
    index: "05",
    name: "VitaSense",
    tagline: "A personal health intelligence platform",
    hook: "A health assistant that remembers you, so it stops asking the same fifteen questions.",
    period: "Aug 2025 – Present",
    role: "Team project · full-stack and AI",
    accent: "#15803D",
    recognition: ["Jury appreciation · Avinya 2.0, SJCIT"],
    problem:
      "Symptom checkers treat every conversation as the first one. They ignore sleep, stress, food, air quality and history, which is the context that actually explains how someone feels.",
    built: [
      {
        lead: "A long-term health memory.",
        text: "Onboarding captures life, food, medical and emotional context once. Daily fitness, environment, device-usage and calendar signals build on it in Supabase, so readings become trends over time instead of isolated numbers.",
      },
      {
        lead: "Context before conversation.",
        text: "A context engine retrieves and summarises only the relevant memories before the language model reasons, never a raw database dump, so the assistant asks only what it doesn't already know.",
      },
      {
        lead: "A wellness forecast.",
        text: "A deterministic model predicts readiness, energy and recovery from recent sleep, hydration, activity, HRV and air quality, and names the pattern behind the prediction.",
      },
      {
        lead: "Safety built in.",
        text: "Emergency-phrase detection, diagnosis-risk checks, escalation and disclaimers wrap every reply, and tests cover the critical paths.",
      },
    ],
    metrics: [
      { value: "13", label: "memory tables" },
      { value: "4", label: "daily signal streams" },
      { value: "100+", label: "backend tests" },
      { value: "SSE", label: "streamed AI replies" },
    ],
    stack: ["Next.js", "React", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "Gemini / Grok", "Tailwind CSS"],
    media: [
      { src: "/media/vitasense-walkthrough.webp", video: "/media/vitasense-walkthrough.mp4", caption: "The daily forecast, the physiology map and locality health intelligence" },
      { src: "/images/work/vitasense/dashboard.webp", caption: "The wellness forecast: a 48-hour prediction, readiness score and the engines behind it" },
      { src: "/images/work/vitasense/causal-forecast.webp", caption: "Why it's happening: a causal timeline from 30 days of signals, and what to expect in the next 24 to 72 hours" },
      { src: "/images/work/vitasense/physiology-map.webp", caption: "Physiology map: eight body systems scored against the user's own monthly baseline" },
      { src: "/images/work/vitasense/adaptive-plan.webp", caption: "Personal patterns, an adaptive plan for the day and a live local watch layer" },
      { src: "/images/work/vitasense/area-map.webp", caption: "Area health map: disease, symptom and hazard signals within 3 km" },
      { src: "/images/work/vitasense/daily-routine.webp", caption: "Daily routine: quick check-ins for food, mood, body and events that feed the forecast" },
      { src: "/images/work/vitasense/chat.webp", caption: "The health companion, with a medical safety layer that blocks diagnoses and catches emergencies (demo conversation)" },
      { src: "/images/work/vitasense/welcome.webp", caption: "Welcome screen" },
    ],
    links: [{ label: "Source", href: gh("VitaSense-AI"), kind: "code" }],
  },
  {
    id: "obsidian-mcp",
    index: "06",
    name: "Obsidian MCP Gateway",
    tagline: "Claude and DeepSeek, working inside a local Obsidian vault",
    hook: "The notes never leave the laptop, yet Claude.ai can search, read and write them, with no open ports.",
    period: "Oct 2026",
    role: "Built end to end · open-sourced with Gowtham Rayapureddi",
    context: "Open source under the MIT licence",
    accent: "#7C3AED",
    problem:
      "Obsidian keeps notes as Markdown files on your own disk, while Claude.ai and DeepSeek live in the browser. MCP lets an assistant use tools, but putting a local MCP server online normally means port forwarding, or a public URL that hands your whole vault to anyone who finds it.",
    built: [
      {
        lead: "An OAuth 2.1 server Claude can sign in to.",
        text: "A single Express service handles discovery, dynamic client registration, a password login page and a PKCE S256 code exchange that returns a signed 12-hour JWT. Codes are single-use and expire in 60 seconds, comparisons are timing-safe, and the login allows 10 tries every 10 minutes.",
      },
      {
        lead: "Two ways in, one URL.",
        text: "Claude connects with OAuth. DeepSeek has no MCP support, so it goes through the MCP SuperAssistant extension and a local proxy that adds a static API key. Every request to the MCP endpoints must carry one or the other; anything else gets a 401 that starts Claude's sign-in.",
      },
      {
        lead: "Nothing exposed but the gateway.",
        text: "A Cloudflare Tunnel gives the gateway a public https address while the Obsidian MCP server (an open-source server with 31 vault tools) and the proxy listen only on localhost. The proxy streams SSE unbuffered with no timeouts, so long tool calls don't drop.",
      },
      {
        lead: "One command to run it.",
        text: "start.sh checks the setup, then starts the MCP server on the vault, the tunnel, the gateway and the proxy in order, waits for each to report healthy, and prints the two URLs to paste into Claude and the extension. An end-to-end script tests the full sign-in flow against a mock server.",
      },
    ],
    metrics: [
      { value: "31", label: "vault tools exposed" },
      { value: "2", label: "auth paths, one URL" },
      { value: "0", label: "open ports" },
      { value: "14/14", label: "end-to-end checks pass" },
    ],
    footnote: "The recordings use a demo vault made for this page, run through the real gateway and MCP server.",
    stack: ["Node.js", "Express", "OAuth 2.1 + PKCE", "JWT (jose)", "MCP over SSE", "Docker Compose", "Cloudflare Tunnel", "Bash"],
    media: [
      { src: "/media/obsidian-gateway.webp", video: "/media/obsidian-gateway.mp4", caption: "A live run: a request with no token is refused, Claude signs in with OAuth 2.1, then searches, reads and writes notes" },
      { src: "/media/obsidian-signin.webp", video: "/media/obsidian-signin.mp4", caption: "The gateway's sign-in page: a wrong password is refused, the right one connects and 31 tools appear" },
      { src: "/images/work/obsidian-mcp/tests.webp", caption: "The end-to-end test: discovery, registration, PKCE, single-use codes and both auth paths, 14 of 14 passing" },
    ],
    links: [{ label: "Source", href: "https://github.com/Gowtham640/Obsidian-MCP", kind: "code" }],
  },
  {
    id: "wift",
    index: "07",
    name: "Wift",
    tagline: "An offline-first gym tracker",
    hook: "Log a set in two taps, even with no signal in the basement gym.",
    period: "Aug 2026",
    role: "Designed and built solo",
    accent: "#16A34A",
    problem:
      "Most workout apps need an account and a connection before you can log a single set, and they bury your progress under ads. Lifters want to log fast and see whether they are actually getting stronger.",
    built: [
      {
        lead: "Works without a network.",
        text: "Everything lives in the browser in IndexedDB (Dexie), so routines, sessions and history load instantly and keep working offline. Optional Google sign-in syncs a snapshot through Supabase when you want it on another device.",
      },
      {
        lead: "Progressive overload, built in.",
        text: "Starting a routine pre-fills each set from your previous best, a live session tracks time and total volume, and every exercise shows how much its volume moved since last time.",
      },
      {
        lead: "Analytics that answer real questions.",
        text: "Workout frequency, volume by muscle group, weight trend and per-exercise history, drawn with Chart.js. An admin page imports an exercise library from CSV in one go.",
      },
    ],
    metrics: [
      { value: "0", label: "accounts needed" },
      { value: "6", label: "screens" },
      { value: "CSV", label: "bulk exercise import" },
      { value: "PWA", label: "installable" },
    ],
    stack: ["Next.js", "TypeScript", "Dexie (IndexedDB)", "Chart.js", "Supabase Auth", "Tailwind CSS", "Vercel"],
    media: [
      { src: "/media/wift-walkthrough.webp", video: "/media/wift-walkthrough.mp4", caption: "Dashboard, routines, a live workout and analytics" },
    ],
    links: [
      { label: "Live app", href: "https://wift-tracker-ten.vercel.app", kind: "live" },
      { label: "Source", href: gh("Wift-Tracker"), kind: "code" },
    ],
  },
];

export type ClientWork = {
  name: string;
  client: string;
  kind: string;
  period?: string;
  text: string;
  points: string[];
  stack: string[];
  media: Media;
  link?: { label: string; href: string };
};

export const clientWork: ClientWork[] = [
  {
    name: "Omniwebora",
    client: "Digital solutions studio",
    kind: "Website",
    text: "A cinematic, scroll-driven site for a studio that sells websites, apps, software and marketing. The home page is one continuous story: a generated push-in film opens it, nine chapters walk through what they do, and a stepper keeps visitors oriented.",
    points: [
      "Every claim traced to the client's own brochure, nothing invented",
      "Solutions, approach, pricing and contact pages",
      "Playwright and Vitest checks before every release",
    ],
    stack: ["Next.js", "TypeScript", "Framer Motion", "Higgsfield", "Playwright"],
    media: { src: "/media/client-omniwebora.webp", video: "/media/client-omniwebora.mp4", caption: "Omniwebora home page" },
    link: { label: "omniwebora.vercel.app", href: "https://omniwebora.vercel.app" },
  },
  {
    name: "Shyama's Organic Foods",
    client: "Home-made thokku brand, Chennai",
    kind: "E-commerce",
    text: "An online store for a family brand that slow-cooks organic thokku. Customers browse the menu, pay with Razorpay and track their order; the owner runs everything from an admin dashboard, and the whole site switches between English and Tamil.",
    points: [
      "Live open and closed status from the shop's hours",
      "Accounts, cart, checkout and order tracking",
      "Admin dashboard for orders and the menu",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Razorpay", "Tailwind CSS"],
    media: { src: "/media/client-shyamas.webp", video: "/media/client-shyamas.mp4", caption: "Shyama's Organic Foods storefront" },
  },
  {
    name: "Menaka's Home Foods",
    client: "Home-food kitchen",
    kind: "Mobile app",
    text: "A Flutter app that runs a home kitchen end to end. Customers order meals or subscribe to a daily plan, a nightly job turns tomorrow's subscriptions into orders, the owner manages the menu and the day's operations, and riders pick up, deliver and share live location.",
    points: [
      "Three roles in one app: customer, owner and rider",
      "OTP sign-in through a Supabase edge function",
      "Row-level security hardened across 20 migrations",
    ],
    stack: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Google Maps", "fl_chart"],
    media: { src: "/media/client-menakas.webp", video: "/media/client-menakas.mp4", caption: "Menaka's Home Foods: sign-in, the customer home, the rider app and the owner's dashboard" },
  },
];

export type Recognition = {
  id: string;
  kicker: string;
  title: string;
  event: string;
  date: string;
  project: string;
  projectId?: string;
  /** External link (e.g. the repo) for a project that has no case study on this page. */
  projectUrl?: string;
  text: string;
  photos: Media[];
};

export const recognition: Recognition[] = [
  {
    id: "visai",
    kicker: "First prize",
    title: "VISAI 2025 · 15th International Project Competition",
    event: "Vel Tech R&D Institute, Chennai, with the Indian National Commission for Cooperation with UNESCO",
    date: "24 Feb 2025",
    project: "CityFix",
    projectUrl: gh("CityFix"),
    text: "We won first prize in the Hackathon category with CityFix, built for a problem statement set by Renault-Nissan. Citizens drop a pin to report a civic issue, and a routing engine finds the ward, the department and the best worker for it. It was our first hackathon win.",
    photos: [
      { src: "/images/recognition/visai-stage.webp", caption: "Receiving first prize on stage at VISAI 2025" },
      { src: "/images/recognition/visai-team.webp", caption: "The team with the trophy at VIT Chennai" },
      { src: "/images/recognition/visai-certificate.webp", caption: "Certificate of Merit, First Prize" },
    ],
  },
  {
    id: "intellitrace",
    kicker: "Consolation prize · Grand Finale",
    title: "Indian Bank IntelliTrace Hackathon 2026",
    event: "Indian Bank × VIT Chennai · Theme: cross-channel mule account detection",
    date: "20 Jan 2026",
    project: "Vigil",
    projectId: "vigil",
    text: "Vigil made the Grand Finale and won a consolation prize at the awards ceremony, judged by Indian Bank's own team, for a system that stops a scam payment before it moves rather than after.",
    photos: [
      { src: "/images/recognition/intellitrace-finale.webp", caption: "Grand Finale and Awards Ceremony, Indian Bank IntelliTrace Hackathon 2026" },
    ],
  },
  {
    id: "avinya",
    kicker: "Jury appreciation",
    title: "Avinya 2.0 Hackathon",
    event: "SJC Institute of Technology, Karnataka",
    date: "14–15 May 2026",
    project: "VitaSense",
    projectId: "vitasense",
    text: "A two-day build in which we took VitaSense from idea to a working demo of a health assistant with long-term memory, and earned the jury's appreciation for its approach to context-aware, preventive care.",
    photos: [
      { src: "/images/about/hackathon-night.webp", caption: "Mid-build at Avinya 2.0, SJC Institute of Technology" },
    ],
  },
  {
    id: "technova",
    kicker: "National Grand Finale",
    title: "TSM-Technova 2026 · National AI Innovation Challenge",
    event: "Thiagarajar School of Management, Madurai, with the TSOM Incubation Association",
    date: "30 Sep – 1 Oct 2026",
    project: "Locah",
    projectId: "locah",
    text: "Our team, The Think Tank, came through the Chennai zonal round and was shortlisted for the National Grand Finale in Madurai, where we pitched Locah to the jury and incubation mentors as a startup.",
    photos: [
      { src: "/images/recognition/technova-team.webp", caption: "The Think Tank at the Grand Finale, Thiagarajar School of Management" },
      { src: "/images/recognition/technova-certificate.webp", caption: "Grand Finale certificate, TSM-Technova 2026" },
      { src: "/images/recognition/technova-venue.webp", caption: "Thiagarajar School of Management, Madurai, 1 October 2026" },
    ],
  },
  {
    id: "spirax",
    kicker: "Industry review",
    title: "Spirax Sarco",
    event: "Spirax Sarco × VIT Chennai",
    date: "16 Oct 2026",
    project: "Vigil",
    projectId: "vigil",
    text: "Spirax Sarco's team reviewed Vigil with our faculty and expressed interest in collaborating with our team through VIT Chennai.",
    photos: [{ src: "/images/recognition/spirax-sarco.webp", caption: "With the Spirax Sarco team and VIT Chennai faculty" }],
  },
];

/** Rows from the official Grand Finale shortlist, shown as a clean extract. */
export const technovaShortlist = {
  title: "Final round · shortlisted teams",
  rows: [
    { team: "BrainBytes", college: "VIT Vellore", zone: "Chennai" },
    { team: "The Think Tank", college: "VIT Chennai", zone: "Chennai", leader: "Kausik Ganapathy Hari", highlight: true },
    { team: "EcoNova", college: "Knowledge Institute of Technology", zone: "Coimbatore" },
  ],
};

export const principles = [
  {
    title: "AI acts only through guarded tools",
    text: "In Locah, Vigil and OILINTELLIGENCE, models can read, propose or act within explicit permissions. Anything irreversible waits for a person.",
  },
  {
    title: "Every decision shows its evidence",
    text: "SHAP values, Bayesian posteriors, counterfactuals, provenance and audit trails. If a system can't explain a call, I don't ship the call.",
  },
  {
    title: "Honest about what's real",
    text: "Simulated inputs and synthetic validation are labelled as such, on screen and in the docs. A number means more when you know where it came from.",
  },
  {
    title: "Design is part of engineering",
    text: "The interface is built for the person under pressure: the fraud analyst, the plant engineer, the shop owner on a phone.",
  },
];

export const experience = [
  {
    title: "Founder & Engineer",
    org: "Locah",
    period: "2025 – Present",
    place: "Chennai",
    text: "Building a multi-tenant AI operating system for local businesses: product, architecture, AI agents and deployment. Pitched it at the TSM-Technova 2026 National Grand Finale.",
  },
  {
    title: "Freelance Full-Stack Developer",
    org: "Independent",
    period: "Jan 2025 – Present",
    place: "Remote / Chennai",
    text: "Web and mobile apps for food-retail, fitness and service businesses, from requirements to post-launch support. I win every client myself through cold outreach and referrals, with live projects as the portfolio.",
  },
  {
    title: "Technical Volunteer",
    org: "VIT Chennai",
    period: "2025 – Present",
    place: "Chennai",
    text: "Technical support for university events and student initiatives.",
  },
];

export const education = [
  {
    school: "Vellore Institute of Technology, Chennai",
    degree: "B.Tech, Computer Science and Engineering",
    period: "2024 – 2028",
    detail: "CGPA 8.50",
  },
  {
    school: "Indian Institute of Technology Madras",
    degree: "BS in Data Science and Applications (concurrent)",
    period: "2024 – Present",
    detail: "Diploma level",
  },
  {
    school: "PSBB Millennium School, OMR, Chennai",
    degree: "Higher Secondary · Secondary",
    period: "2022 · 2024",
    detail: "95% · 92%",
  },
];

export const skills = [
  {
    group: "AI agents & LLMs",
    items: ["Agentic AI", "LLM tool calling", "Model Context Protocol (MCP)", "LangGraph", "Gemini API", "Context retrieval"],
    proof: "Locah, Vigil, OILINTELLIGENCE, VitaSense, Obsidian MCP",
  },
  {
    group: "Machine learning",
    items: ["scikit-learn", "XGBoost", "PyTorch", "Graph neural networks", "SHAP", "NetworkX", "Pandas", "NumPy", "OpenCV"],
    proof: "Vigil, OILINTELLIGENCE",
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS (ECS, RDS, S3, IAM, CloudWatch)", "Docker", "GitHub Actions", "Cloudflare Tunnel", "Vercel", "Railway", "Supabase"],
    proof: "UniTask, Locah, Obsidian MCP, Wift",
  },
  {
    group: "Backend",
    items: ["Python", "FastAPI", "Flask", "Node.js", "Express", "REST APIs", "OAuth 2.1", "WebSockets", "PostgreSQL", "TimescaleDB", "MQTT", "OPC UA"],
    proof: "Locah, Vigil, OILINTELLIGENCE, UniTask, Obsidian MCP",
  },
  {
    group: "Frontend & mobile",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "React Three Fiber", "Flutter"],
    proof: "Every project on this page",
  },
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Dart", "C++", "Java"],
    proof: "Projects and coursework",
  },
];
