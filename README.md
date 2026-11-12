# Kausik Ganapathy Hari: portfolio

Personal portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion. It exports to a static site.

## Run it

```bash
npm install
npm run dev        # http://localhost:3210 with the launch config, or :3000 by default
npm run build      # static site written to /out
```

## Edit the content

All text lives in [`src/content/site.ts`](src/content/site.ts): profile, projects, client work, recognition, experience, education and skills. Components only handle layout.

Media lives in `public/`:

| Folder | What's in it |
|---|---|
| `images/profile/` | Portrait (`kausik-cutout.webp` is the hero cut-out) |
| `images/recognition/` | Event and award photos |
| `images/work/<project>/` | Product screenshots, 16:10 |
| `media/` | Walkthrough videos (H.264, 1440×900) and their poster frames |

A project's `media` list can mix screenshots and videos. Give a video item both `src` (the poster image) and `video` (the MP4); it plays muted and looped while on screen.

The résumé served by the download buttons is `public/Kausik_Ganapathy_Hari_Resume.pdf`.

## Deploy

Hosted on Vercel. Set `NEXT_PUBLIC_SITE_URL` to the live address so link previews show the right image.
