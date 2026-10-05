# Abroad Study Consulting: Frontend

Admin dashboard for a study-abroad consultancy, built with Next.js and Tailwind CSS. It talks to a NestJS + PostgreSQL API: [Abroad_Study_Consulting_Nest](https://github.com/aftabrakinsad/Abroad_Study_Consulting_Nest).

Students (users) register and apply for study-abroad consultation. Staff accounts can't be registered; the master admin creates them and shares the credentials.

| Role | What they can do | Demo login |
|---|---|---|
| User (student) | Register, submit applications, track status and consultant notes | `user.demo@abroadstudy.com` |
| Master admin | Everything, including creating and deleting admins | `demo@abroadstudy.com` |
| Admin | Manage users, applications, managers and consultants | created by the master admin |
| Manager | Assign applications to consultants, view consultants, send emails | `manager.demo@abroadstudy.com` |
| Consultant | Update the status of assigned applications and leave notes for students | `consultant.demo@abroadstudy.com` |

All demo accounts use the password `Demo@1234`.

## How the pieces fit

```
Browser ──► Next.js frontend (this repo)  ──►  NestJS API  ──►  PostgreSQL
            localhost:3000 / Vercel             localhost:3001 / Vercel or Render
```

The frontend has no database of its own. Every page calls the API at `NEXT_PUBLIC_API_URL`, so **the API must be running first**, both locally and online.

## Run it locally

Works the same on macOS, Windows and Linux.

### Step 1: Set up and start the API

Follow the [backend's local setup guide](https://github.com/aftabrakinsad/Abroad_Study_Consulting_Nest#run-it-locally). It covers installing Node.js 20+, Git and PostgreSQL on each OS. Leave the API running on <http://localhost:3001> in its own terminal.

### Step 2: Download the frontend and install dependencies

In a **second terminal**:

```bash
git clone https://github.com/aftabrakinsad/Abroad_Study_Consulting_Next.git
cd Abroad_Study_Consulting_Next
npm install
```

### Step 3: Point it at the API

```bash
cp .env.example .env.local        # macOS / Linux
copy .env.example .env.local      # Windows (Command Prompt or PowerShell)
```

The default `NEXT_PUBLIC_API_URL=http://localhost:3001` is already correct for local use. Change it only if you run the API on a different port.

### Step 4: Start the site

```bash
npm run dev
```

Open <http://localhost:3000> and sign in with one of the demo accounts above. Pages update automatically as you edit the code.

### Other commands

```bash
npm run build   # production build (the same thing Vercel runs)
npm run start   # serve the production build on port 3000
npm run lint
```

### Troubleshooting

| Problem | Fix |
|---|---|
| Sign-in spins or shows a network error | The API isn't running, or `NEXT_PUBLIC_API_URL` is wrong. Check that <http://localhost:3001> responds (a 404 page is fine) |
| Browser console shows a **CORS** error | The API's `FRONTEND_URL` must be `http://localhost:3000` (the default in its `.env.example`) |
| Changed `.env.local` but nothing happened | Stop `npm run dev` (Ctrl+C) and start it again. `NEXT_PUBLIC_*` values are read at startup |
| `Port 3000 is in use` | Next.js picks the next free port and prints it. Use that URL, and add it to the API's `FRONTEND_URL` |

## Deploy it on Vercel

Deploy the **API first** ([backend deployment guide](https://github.com/aftabrakinsad/Abroad_Study_Consulting_Nest#deploy-it-online)), because the frontend needs its URL.

1. Push this repository to GitHub.
2. Go to <https://vercel.com/new> and import `Abroad_Study_Consulting_Next`. Vercel detects Next.js; keep the default build settings.
3. Under **Environment Variables**, add:

   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_API_URL` | the deployed API's URL, e.g. `https://abroad-study-api.vercel.app` (no trailing slash) |

4. Click **Deploy** and copy the site's URL (e.g. `https://abroad-study.vercel.app`).
5. In the **API's** settings, set `FRONTEND_URL` to that exact URL, then redeploy the API so it allows requests from the site.
6. Open the site and sign in with `demo@abroadstudy.com` / `Demo@1234`.

Things to know:

- `NEXT_PUBLIC_API_URL` is baked into the site when it's built. If you change it later, **redeploy** the frontend (**Deployments → ⋯ → Redeploy**).
- Preview deployments (one per branch or pull request) get their own URLs. For them to reach the API, add their URLs to the API's `FRONTEND_URL`, comma-separated.
- With a custom domain, add it to the API's `FRONTEND_URL` as well.
- You can also deploy from the terminal: `npm i -g vercel`, then `vercel` (preview) or `vercel --prod`.

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_API_URL` | URL of the NestJS API, no trailing slash. Defaults to `http://localhost:3001` |
