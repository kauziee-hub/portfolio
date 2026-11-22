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
  /** Who has the problem and why it matters. */
  problem: string;
  /** What I built, in plain words: the approach a reviewer should remember. */
  approach: string;
  /** Where it landed: results, recognition, deployment status. */
  outcome: string;
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
  // Kausik's own studio portrait.
  photo: "/images/profile/kausik-portrait.webp",
  photoFull: "/images/profile/kausik-portrait.webp",
  heroLine:
    "Third-year Computer Science student at VIT Chennai, graduating in 2028, with a concurrent BS in Data Science at IIT Madras. I build AI products end to end, from the data pipeline and model to the backend, the interface and the cloud deployment, focusing on AI that's explainable and safe to rely on.",
  summary:
    "Third-year Computer Science student at VIT Chennai (graduating 2028) and BS Data Science student at IIT Madras, building explainable AI products end to end across healthcare, fintech and industrial monitoring.",
};

export const about = {
  heading: "I build software that has to make real decisions.",
  lead:
    "I'm Kausik, a third-year computer science student at VIT Chennai. The problems I enjoy are the ones where a wrong answer costs something: a scam payment, a leaking pipeline, a missed symptom, a shop that runs out of stock.",
  body: [
    "I've freelanced since January 2025, building web and mobile apps for food-retail, real-estate and fitness businesses, and every client came from my own outreach. I also founded Locah, an AI operating system for local shops, and pitched it at a national startup challenge in Madurai.",
    "Alongside my degree I'm doing a BS in Data Science and Applications at IIT Madras, which is where most of the maths behind my models comes from.",
  ],
  facts: [
    ["Based in", "Chennai, India"],
    ["Studying", "B.Tech CSE, VIT Chennai · BS Data Science, IIT Madras"],
    ["Graduating", "2028"],
    ["Building", "Locah and OILINTELLIGENCE"],
  ] as [string, string][],
};

const gh = (repo: string) => `https://github.com/kauziee-hub/${repo}`;

export const projects: Project[] = [
  {
    id: "vitasense",
    index: "01",
    name: "VitaSense",
    tagline: "Personal health intelligence, live on the web and Android",
    hook: "Your body, explained by your life. When you feel unwell, it knows the likely reason and which doctor to see.",
    period: "Aug 2025 – Present",
    role: "Full-stack, AI and Android",
    context: "Website, Android app and API all live",
    accent: "#15803D",
    recognition: ["Jury appreciation · Avinya 2.0, SJCIT"],
    problem:
      "When people feel unwell they search their symptoms and get worst-case answers, because nothing knows how they've actually been living: their sleep, food, stress, the air outside or what's going around nearby. That information already exists, scattered across a watch, a phone, food apps and an inbox, but nothing connects it.",
    approach:
      "VitaSense connects it automatically. Once a user switches a source on, it keeps collecting on its own: sleep, heart rate, HRV and blood pressure from Health Connect (Samsung, Fitbit, Garmin and other wearables), live heart rate from a Bluetooth band, screen time and late-night phone use, Swiggy and Zomato orders, workload from the calendar, and air quality, heat and disease risk from the user's location. It turns all of this into scores for seven body systems, a 72-hour risk forecast and a care plan. When something feels wrong, the assistant explains the likely causes from the user's own last 30 days and names the right specialist. It never prescribes a medicine.",
    outcome:
      "Shipped as a public website and an Android app from one Expo codebase, backed by a FastAPI service on Vercel with Supabase storage and Gemini, and covered by more than 100 backend tests. It began at the Avinya 2.0 hackathon, where it earned the jury's appreciation, and has since grown into a full product.",
    built: [
      {
        lead: "Data that arrives on its own.",
        text: "Eight sources, each switched on with one tap: Health Connect (read-only), a Bluetooth band, phone usage, food- and pharmacy-delivery notifications, the calendar (counts only), Gmail orders and lab-report PDFs, location, and scanned records. Sync runs when the app opens, when it returns to the foreground, and every 30 minutes or so in the background. Switching a source off deletes what it collected.",
      },
      {
        lead: "Measured risk around you.",
        text: "From the user's location it pulls weather, seven air pollutants against WHO 24-hour limits, pollen, UV and heat index, and estimates mosquito-borne and water-borne disease risk after heavy rain, clearly labelled as estimates. It adds WHO outbreak notices for the country. Every risk shows the numbers behind it, what to watch for and which doctor or test to seek.",
      },
      {
        lead: "Answers grounded in your own history.",
        text: "A context engine gives the model only the parts of the user's history that matter for the question. A safety layer routes emergencies straight to 112 and blocks diagnoses and medicine names. Every answer lists the likely causes, what to do now and which specialist to see, and can become a one-page doctor visit report or a search for doctors nearby.",
      },
      {
        lead: "Records without typing.",
        text: "Photograph or upload a lab report, prescription or discharge summary and VitaSense reads the values, conditions, allergies and medicines into a health record a new doctor can use, with medicine reminders on the phone.",
      },
      {
        lead: "Private by design.",
        text: "Health Connect is read-only, calendar titles never leave the phone, only the area name of a location is stored, the Gmail token sits in the Android Keystore, Android backup is off, and row-level security protects the database tables.",
      },
    ],
    metrics: [
      { value: "Live", label: "website and Android app from one Expo codebase" },
      { value: "8 sources", label: "collected automatically once switched on" },
      { value: "70 factors", label: "that affect health, tracked in nine groups with their source" },
      { value: "100+ tests", label: "on the backend, including the safety layer" },
    ],
    footnote: "Screens use the app's built-in demo profile with sample history. Air quality, weather, nearby doctors and the assistant's answer are fetched live.",
    stack: ["Expo (React Native)", "TypeScript", "Kotlin native module", "Health Connect", "Python", "FastAPI", "Supabase (PostgreSQL)", "Gemini API", "Open-Meteo", "Vercel"],
    media: [
      { src: "/media/vitasense-site.webp", video: "/media/vitasense-site.mp4", caption: "The product website: the body map, the seven systems, how it works, the doctor report and the Android download" },
      { src: "/media/vitasense-dashboard.webp", video: "/media/vitasense-dashboard.mp4", caption: "The web app: a demo profile reads its last 30 days, then each body system explains what's affecting it" },
      { src: "/media/vitasense-android.webp", video: "/media/vitasense-android.mp4", caption: "The Android app (release APK): the body, connected data sources, the daily check-in and records" },
      { src: "/media/vitasense-auto.webp", video: "/media/vitasense-auto.mp4", caption: "Automatic collection: connected sources, what was picked up today, the 70-factor tracker and the auto-filled check-in" },
      { src: "/media/vitasense-ask.webp", video: "/media/vitasense-ask.mp4", caption: "A live question: the answer cites the user's own sleep, air quality and local reports, then names the doctor to see" },
      { src: "/images/work/vitasense/landing.webp", caption: "The public website" },
      { src: "/images/work/vitasense/dashboard.webp", caption: "Dashboard: the lungs under strain from today's measured air quality" },
      { src: "/images/work/vitasense/profile.webp", caption: "Connected data and what was picked up automatically today" },
      { src: "/images/work/vitasense/factors.webp", caption: "Every factor that affects health, how each is tracked, and measured risks nearby" },
      { src: "/images/work/vitasense/checkin.webp", caption: "A three-tap check-in; everything else is filled in automatically" },
      { src: "/images/work/vitasense/doctors.webp", caption: "Doctors near the user for the specialty the assistant suggested" },
      { src: "/images/work/vitasense/records.webp", caption: "Health records built from photographed reports and prescriptions" },
      { src: "/images/work/vitasense/android.webp", caption: "The Android app: home, check-in and connected data" },
    ],
    links: [
      { label: "Live website", href: "https://vitasense-ai-app.vercel.app", kind: "live" },
      { label: "Android app", href: "https://vitasense-ai-app.vercel.app/downloads/VitaSense.apk", kind: "live" },
      { label: "Source", href: gh("VitaSense-AI"), kind: "code" },
    ],
  },
  {
    id: "vigil",
    index: "02",
    name: "Vigil",
    tagline: "Pre-commitment payment risk and money-mule detection",
    hook: "Stops a scam payment at the last safe moment, before the money moves.",
    period: "Jun 2026 – Oct 2026",
    role: "Designed and built end to end",
    accent: "#0E9F9A",
    recognition: ["Consolation prize · Indian Bank IntelliTrace 2026", "Reviewed by Spirax Sarco"],
    problem:
      "In 'digital arrest', investment and job scams, the victim is talked into sending the money themselves, so the payment looks perfectly normal. It lands in mule accounts that pass it on within minutes. Most fraud systems score a transaction after it has settled, by which point the money is already gone.",
    approach:
      "Vigil works in the seconds between the customer pressing pay and the money leaving. It scores each payment in about 3 ms on five kinds of evidence and responds in proportion: a silent pass, a heads-up, a purpose check, or a hold on that one payment, never a frozen account. Behind it, eight independent detectors, including a Graph Attention Network over the transaction graph, must agree before an account is called a mule, and every model score comes with a SHAP explanation.",
    outcome:
      "Built for the Indian Bank IntelliTrace Hackathon, where it reached the Grand Finale and won a consolation prize judged by the bank's own team. It holds 0.98 ROC-AUC on attack families kept out of training. Spirax Sarco later reviewed it with our faculty and expressed interest in collaborating with the team.",
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
      { value: "0.98", label: "ROC-AUC on attack types never seen in training*" },
      { value: "~3 ms", label: "median time to score a payment, before it moves" },
      { value: "SHAP", label: "explanation attached to every model decision" },
      { value: "Finale", label: "Indian Bank IntelliTrace 2026, consolation prize" },
    ],
    footnote: "*Evaluated on held-out synthetic worlds, leaving one attack family out at a time. Not real-bank data.",
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
    index: "03",
    name: "OILINTELLIGENCE",
    tagline: "Physics-guided hydrocarbon loss attribution with an agentic investigator",
    hook: "Finds where crude oil goes missing in a tank farm, and proves why.",
    period: "Oct 2026 – Present",
    role: "Architect and sole engineer",
    accent: "#D9731A",
    problem:
      "A crude-oil terminal reconciles what came in against what went out, and the books rarely balance. The gap might be a real leak, but more often it's a drifting meter, a gauging error or a transfer nobody recorded. Telling them apart usually takes days of manual reconciliation, and a slow answer to a real leak is both costly and dangerous.",
    approach:
      "OILINTELLIGENCE puts physics first and machine learning second. Instrument data streams in over MQTT and OPC UA; mass balances that follow the pipe network show where oil went missing, with their uncertainty. XGBoost flags abnormal windows and failing instruments, and a calibrated Bayesian model weighs a physical loss against meter bias or an unbooked transfer. A LangGraph agent then suggests the cheapest field check that would settle the question. It can investigate, but it has no way to operate the plant.",
    outcome:
      "In a recorded run on the built-in simulator, a 9 mm hole that didn't show in the site totals was flagged at its pipe junction within 18 minutes. After three field checks the agent named the right pipe at 96% confidence. Every case is scored against faults the simulator seeded, so the system is graded against a known answer key.",
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
      { value: "18 min", label: "to flag a 9 mm leak hidden in the site totals*" },
      { value: "96%", label: "confidence on the true cause after three field checks*" },
      { value: "±2σ", label: "uncertainty carried through every mass balance" },
      { value: "Read-only", label: "the agent can investigate but never command a pump or valve" },
    ],
    footnote:
      "*From a recorded run: the leak in pipe PL-002 was caught at its junction (z = 5.7) while the site totals still looked normal. All results come from the simulator.",
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
    index: "04",
    name: "Locah",
    tagline: "An AI operating system for local businesses",
    hook: "A shop owner describes their business in a conversation. Locah builds the rest.",
    period: "2025 – Present",
    role: "Founder and engineer",
    accent: "#C2410C",
    recognition: ["Grand Finale · TSM-Technova 2026, Madurai"],
    problem:
      "Most local shops in India run on WhatsApp, a paper credit book and the owner's memory. Business software assumes an owner with spare time, a laptop and fluent English, so the shops that would gain the most from it are the least likely to use it.",
    approach:
      "Locah turns a conversation into a running business. The owner describes the shop in English, Tamil or Hindi. Locah generates the website, lists it on a local marketplace and sets up a workspace with only the tools that kind of shop needs, from counter billing and stock to a credit book and WhatsApp orders. AI staff take on the repetitive work within permissions the owner sets, and answer only from the shop's own records, so they can't invent a price.",
    outcome:
      "Running as a multi-tenant platform: three Next.js apps, a FastAPI API and a background worker, with row-level security keeping every shop's data separate. Our team, The Think Tank, took Locah through the Chennai zonal round to the National Grand Finale of TSM-Technova 2026 in Madurai and pitched it to the jury and incubation mentors.",
    built: [
      {
        lead: "Onboarding is a conversation.",
        text: "The owner talks about their business in English, Tamil or Hindi. Locah builds their website, lists them on a local Marketplace and sets up a Workspace with the tools that kind of business needs.",
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
      { value: "Finale", label: "TSM-Technova 2026, national AI innovation challenge" },
      { value: "3 languages", label: "onboarding in English, Tamil or Hindi" },
      { value: "Isolated", label: "row-level security keeps every shop's data separate" },
      { value: "Owner-gated", label: "AI staff act within set permissions, with a kill switch" },
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
    index: "05",
    name: "UniTask",
    tagline: "A student planner that syncs with Microsoft Teams, deployed on AWS",
    hook: "Pulls every assignment out of Teams and tells a student what to do next, and why.",
    period: "Oct 2026",
    role: "Cloud and backend lead · team of two",
    context: "Built for the Cloud Application Development course at VIT Chennai",
    accent: "#B45309",
    problem:
      "Students juggle deadlines across several Teams classes, copy them out by hand, and end up with a list that says nothing about what to start first. The course brief was to ship a real cloud application in which every AWS service does real work, not one that only exists on a slide.",
    approach:
      "UniTask pulls every assignment from Microsoft Teams every 30 minutes, ranks what's due by work left against time left, and tells the student what to do next and why. I led the cloud and backend side: one container on ECS Fargate behind a load balancer using TLS 1.3, a private encrypted PostgreSQL database on RDS, file uploads through short-lived S3 links, IAM roles instead of stored keys, and a CI pipeline that tests every build before it ships.",
    outcome:
      "Deployed and running on AWS in Mumbai, verified end to end on 29 October 2026, and live at the link above. It's designed to stay within free credits, with no NAT gateway and budget alarms at $5, $15 and $30.",
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
      { value: "Live", label: "on AWS ECS Fargate, RDS and S3 in ap-south-1" },
      { value: "TLS 1.3", label: "HTTPS policy at the load balancer; database reachable only inside the VPC" },
      { value: "CI-gated", label: "lint, tests on SQLite and Postgres, and a container smoke test on every push" },
      { value: "$0", label: "spent so far, with budget alarms at $5, $15 and $30" },
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
      "Obsidian keeps notes as Markdown files on your own disk, while Claude.ai and DeepSeek run in the browser. MCP lets an assistant use tools, but putting a local MCP server online usually means opening a port on your router, or a public URL that hands your whole vault to anyone who finds it.",
    approach:
      "A small OAuth 2.1 gateway sits in front of a local Obsidian MCP server. Claude.ai signs in with PKCE and gets a short-lived JWT. DeepSeek has no MCP support, so it goes through a local proxy that adds a static key. A Cloudflare Tunnel gives the gateway a public HTTPS address, so nothing else on the laptop can be reached and no port is ever opened.",
    outcome:
      "Open source under the MIT licence. One command brings up the whole stack and prints the two URLs to paste into Claude and the browser extension. An end-to-end test covers discovery, registration, PKCE, single-use codes and both sign-in paths, and passes 14 of 14 checks.",
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
      { value: "OAuth 2.1", label: "PKCE, dynamic client registration and 12-hour JWTs" },
      { value: "0 ports", label: "opened on the user's network" },
      { value: "14 / 14", label: "end-to-end security checks passing" },
      { value: "31 tools", label: "for Claude to search, read and edit the vault" },
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
    id: "finance-tracker",
    index: "07",
    name: "Finance Tracker",
    tagline: "Expense tracking that fills itself in from bank alert emails",
    hook: "Every card swipe and UPI payment shows up on its own, already categorised, without typing a thing.",
    period: "Aug 2026",
    role: "Designed and built solo",
    accent: "#22C55E",
    problem:
      "Expense apps only work if you enter every payment by hand, and most people give up within a week. Yet the bank already emails an alert for every debit, credit and balance change, so the data exists. It's just sitting unread in an inbox.",
    approach:
      "A background worker reads those alert emails every 30 minutes through read-only Gmail access, picks out the amount, merchant, balance and any failed payment, and records them automatically. The app itself is offline-first: everything is stored on the phone, works with no signal and syncs when the connection is back. It learns categories from your corrections, so the same shop is filed correctly next time.",
    outcome:
      "Runs as a self-hosted service: a FastAPI backend and the email worker run as two systemd services on a home machine, reached privately over Tailscale, with balance history rebuilt from past alerts.",
    built: [
      {
        lead: "From inbox to ledger.",
        text: "Google sign-in asks only for the gmail.readonly scope. The worker fetches new HDFC Bank alerts since its last run, parses debits, credits, balance updates and failed transactions, removes duplicates by their reference number, and backfills the balance history.",
      },
      {
        lead: "Offline-first on the phone.",
        text: "Transactions, accounts and balances live in IndexedDB, so the app opens instantly and records a cash spend with no signal. Changes made offline are queued and merged with the server on the next sync.",
      },
      {
        lead: "Categories that learn.",
        text: "A merchant trie powers autocomplete, and every correction is saved as a merchant-to-category rule that syncs between devices, so the same shop is filed correctly from then on.",
      },
      {
        lead: "Analytics that answer questions.",
        text: "Monthly incoming against outgoing, spending over 7, 30 or 90 days or a custom range, a breakdown by category, and split transactions for shared bills.",
      },
    ],
    metrics: [
      { value: "Automatic", label: "payments recorded from bank alerts, no manual entry" },
      { value: "30 min", label: "between inbox checks by the background worker" },
      { value: "Read-only", label: "Gmail access: it can read alerts, never send or delete" },
      { value: "Offline", label: "logging and browsing work with no network" },
    ],
    footnote: "The screens on this page use fictional demo data. No real bank information is shown.",
    stack: ["Python", "FastAPI", "Gmail API (OAuth)", "APScheduler", "PostgreSQL (Supabase)", "Next.js", "TypeScript", "IndexedDB", "Recharts", "Tailwind CSS", "systemd", "Tailscale"],
    media: [
      { src: "/media/finance-walkthrough.webp", video: "/media/finance-walkthrough.mp4", caption: "The month's transactions, balances by account and spending analytics (fictional demo data)" },
      { src: "/images/work/finance/showcase.webp", caption: "Transactions, balances and spending by category (fictional demo data)" },
    ],
    links: [{ label: "Source", href: gh("Finance-tracker"), kind: "code" }],
  },
  {
    id: "wift",
    index: "08",
    name: "Wift",
    tagline: "An offline-first gym tracker",
    hook: "Log a set in two taps, even with no signal in the basement gym.",
    period: "Aug 2026",
    role: "Designed and built solo",
    accent: "#16A34A",
    problem:
      "Most workout apps want an account and a connection before you can log a single set, and the numbers that matter get buried. In a basement gym with no signal, logging fails at exactly the wrong moment, and lifters still can't tell whether they're getting stronger.",
    approach:
      "Wift is offline-first. All data lives in the browser's IndexedDB, so it opens instantly and logs with no network at all. Starting a routine pre-fills every set from your last best, a live session tracks time and total volume, and analytics show whether each lift is actually progressing. Google sign-in is optional and only syncs a snapshot between devices.",
    outcome:
      "Live on Vercel as an installable web app. Anyone can start logging straight away, without creating an account.",
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
      { value: "Offline", label: "every screen works with no network; data stays on the device" },
      { value: "2 taps", label: "to log a set, pre-filled from your previous best" },
      { value: "No sign-up", label: "needed to start; cloud sync is optional" },
      { value: "PWA", label: "installs to a phone's home screen like an app" },
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
  {
    id: "hirora",
    index: "09",
    name: "Hirora",
    tagline: "A private AI assistant for calls, running entirely on a Windows PC",
    hook: "Live transcripts and answers in about half a second, from models running on your own PC. Nothing leaves it.",
    period: "Nov 2026",
    role: "Designed and built solo",
    context: "Windows 11 desktop app · v0.3.1 · open source",
    accent: "#E7849B",
    problem:
      "Assistants that transcribe a meeting or lecture and answer questions about it usually send every word to a cloud service, need an account and a subscription, and lag a few seconds behind the conversation. For calls that shouldn't leave the room, or on a patchy connection, that doesn't work.",
    approach:
      "Hirora runs the whole pipeline on the PC. A Rust helper captures the microphone and the computer's own audio as separate streams, whisper.cpp transcribes them live, and a Qwen model in a Hirora-managed Ollama runtime answers questions as they come up. Answers draw on your own documents, with the source shown, and read the shared screen when a question points at it. They stream into a translucent overlay that never takes focus. On first launch the app checks the hardware and installs the right engine with one click: larger models on an NVIDIA GPU, smaller ones on the processor.",
    outcome:
      "Released as v0.3.1 for Windows 11 with an installer and a website, and open source on GitHub. On an RTX 4060 laptop a 3-second spoken question is transcribed in 0.14–0.25 s, and the first word of the answer arrives in a median 0.45 s. With no GPU at all it still answers offline, 2–4 s after the speaker stops.",
    built: [
      {
        lead: "A local engine, set up in one click.",
        text: "The app reads the GPU with nvidia-smi and picks a tier: Whisper large-v3-turbo and Qwen 3.5 4B on an NVIDIA card, Whisper small and Qwen 3 1.7B on the processor. Every download (3.2–6.2 GB) is pinned by URL, size and SHA-256, resumes if interrupted, and reuses an Ollama the user already has.",
      },
      {
        lead: "Built for low latency.",
        text: "The answer starts generating before the question ends and is shown at the pause, while a second model slot checks whether the question is meant for you. Prompts are laid out for cache reuse, and a measurement harness times every step on real hardware.",
      },
      {
        lead: "Native audio in Rust.",
        text: "A WASAPI helper streams the microphone and speaker loopback as separate 16 kHz channels over a framed protocol, and survives device switches and sleep and resume.",
      },
      {
        lead: "Answers grounded in your documents.",
        text: "PDF, DOCX, Markdown, CSV, JSON and code are parsed into a SQLite full-text index. Every answer shows which passages it used, and facts that aren't in the material are flagged instead of invented.",
      },
      {
        lead: "Locked down by default.",
        text: "No audio is captured before consent, raw audio is never saved and history is opt-in. The renderer is sandboxed, every IPC call is allowlisted and validated with Zod, and the engine servers listen only on the local machine.",
      },
    ],
    metrics: [
      { value: "0.45 s", label: "median time to the first word of an answer, RTX 4060" },
      { value: "≤ 0.25 s", label: "to transcribe a 3-second spoken question" },
      { value: "Offline", label: "no account, keys, server or telemetry" },
      { value: "1 click", label: "engine setup with verified, resumable downloads" },
    ],
    footnote:
      "Recorded on a fresh profile with a fictional team-notes document; every answer comes live from the local model. Timings measured on an RTX 4060 laptop on AC power. Hirora is meant for use only where AI assistance and transcription are allowed, with everyone's consent.",
    stack: ["Electron", "React", "TypeScript", "Rust (WASAPI)", "whisper.cpp", "Ollama", "Qwen", "SQLite FTS5", "Zod", "Vitest", "Playwright"],
    media: [
      { src: "/media/hirora-overlay.webp", video: "/media/hirora-overlay.mp4", caption: "In a technical discussion: questions about the team's notes answered by the local model in under a second, with the sources shown" },
      { src: "/media/hirora-app.webp", video: "/media/hirora-app.mp4", caption: "The app: live engine status, the knowledge it can use, and an engine that runs entirely on the PC" },
      { src: "/images/work/hirora/overlay.webp", caption: "The overlay beside the shared notes, answering from them with source chips" },
      { src: "/images/work/hirora/home.webp", caption: "Home: speech recognition and the answer model both running on this PC" },
      { src: "/images/work/hirora/engine.webp", caption: "Engine settings: every component installed locally, picked for this PC's GPU" },
      { src: "/images/work/hirora/knowledge.webp", caption: "Knowledge: documents parsed and indexed on the PC, with a retrieval test" },
      { src: "/images/work/hirora/website.webp", caption: "The download website" },
    ],
    links: [
      { label: "Website", href: "https://hirora-one.vercel.app", kind: "live" },
      { label: "Source", href: gh("hirora"), kind: "code" },
    ],
  },
];

export type ClientWork = {
  name: string;
  client: string;
  kind: string;
  period?: string;
  /** The client's situation: what they needed and why. */
  brief: string;
  /** What I delivered. */
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
    brief:
      "A digital studio selling websites, apps, software and marketing needed a site that shows the quality of its own work and explains a broad offer clearly to first-time visitors.",
    text: "I built a cinematic, scroll-driven site that tells the offer as one continuous story: a generated push-in film opens it, nine chapters walk through what the studio does, and a stepper keeps visitors oriented. Every claim on the page is traced to the client's own brochure.",
    points: [
      "Solutions, approach, pricing and contact pages, written from the client's material",
      "Playwright and Vitest checks run before every release",
    ],
    stack: ["Next.js", "TypeScript", "Framer Motion", "Higgsfield", "Playwright"],
    media: { src: "/media/client-omniwebora.webp", video: "/media/client-omniwebora.mp4", caption: "Omniwebora home page" },
    link: { label: "omniwebora.vercel.app", href: "https://omniwebora.vercel.app" },
  },
  {
    name: "Shyama's Organic Foods",
    client: "Home-made thokku brand, Chennai",
    kind: "E-commerce",
    brief:
      "A family brand that slow-cooks organic thokku wanted to sell directly online, with payments and order tracking, to customers who are often more at home in Tamil than in English.",
    text: "I built an online store where customers browse the menu, pay with Razorpay and track their order, while the owner runs orders and the menu from one admin dashboard. The whole site switches between English and Tamil for the brand's customers.",
    points: [
      "Accounts, cart, checkout and order tracking",
      "Live open and closed status worked out from the shop's hours",
      "Admin dashboard for orders and the menu",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Razorpay", "Tailwind CSS"],
    media: { src: "/media/client-shyamas.webp", video: "/media/client-shyamas.mp4", caption: "Shyama's Organic Foods storefront" },
    link: { label: "shyamasorganicfoods.com", href: "https://www.shyamasorganicfoods.com" },
  },
  {
    name: "Menaka's Home Foods",
    client: "Home-food kitchen",
    kind: "Mobile app",
    brief:
      "A home kitchen that serves daily meal subscriptions needed one app that connects its customers, the kitchen and its delivery riders, so each day's orders are known in advance and every delivery can be followed.",
    text: "I built one Flutter app that runs the kitchen end to end. Customers order a meal or subscribe to a daily plan, a nightly job turns tomorrow's subscriptions into orders, the owner manages the menu and the day's operations, and riders pick up, deliver and share their live location.",
    points: [
      "Three roles in one app: customer, owner and rider",
      "OTP sign-in through a Supabase edge function",
      "Row-level security hardened across 20 database migrations",
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
    text: "I design, build and deploy web and mobile apps for food-retail, real-estate and fitness businesses, from requirements to post-launch support. I find every client myself through cold outreach and referrals.",
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

export const certifications = [
  {
    title: "Artificial Intelligence and Machine Learning with Python",
    issuer: "Livewire",
    detail:
      "Python, NumPy, Pandas and Matplotlib; supervised and unsupervised learning; neural networks (ANN, CNN, RNN) with TensorFlow and Keras; computer vision with OpenCV; NLP with NLTK; reinforcement learning.",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"],
    proof: "Projects and coursework",
  },
  {
    group: "Machine learning",
    items: [
      "Linear & logistic regression",
      "KNN",
      "Decision trees",
      "Random Forest",
      "SVM",
      "Naive Bayes",
      "XGBoost",
      "K-Means",
      "Q-Learning",
      "Feature engineering",
      "Model evaluation",
      "SHAP",
    ],
    proof: "Vigil, OILINTELLIGENCE, Livewire certification",
  },
  {
    group: "Deep learning",
    items: ["ANN", "CNN", "RNN / LSTM", "Graph attention networks", "TensorFlow", "Keras", "PyTorch", "OpenCV", "NLTK"],
    proof: "Vigil, Livewire certification",
  },
  {
    group: "Generative & agentic AI",
    items: ["Gemini API", "Prompt engineering", "RAG", "Agents with tool calling", "LangGraph", "Model Context Protocol (MCP)"],
    proof: "Locah, Vigil, OILINTELLIGENCE, VitaSense, Obsidian MCP",
  },
  {
    group: "Data science",
    items: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    proof: "Vigil, OILINTELLIGENCE, IIT Madras coursework",
  },
  {
    group: "Full-stack",
    items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "REST APIs", "WebSockets", "HTML", "CSS", "Tailwind CSS"],
    proof: "Every project on this page",
  },
  {
    group: "Databases & cloud",
    items: ["PostgreSQL", "Supabase", "AWS (ECS Fargate, RDS, S3, IAM, CloudWatch)", "Docker", "GitHub Actions (CI/CD)", "Git", "Linux", "Vercel"],
    proof: "UniTask, Locah, Finance Tracker, Wift",
  },
  {
    group: "Also shipped with",
    items: ["TimescaleDB", "MQTT", "OPC UA", "Gmail API", "OAuth 2.1", "Cloudflare Tunnel", "Three.js", "Flutter", "Dart", "Railway"],
    proof: "OILINTELLIGENCE, Finance Tracker, Obsidian MCP, Vigil, client work",
  },
];
