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

## Running locally

```bash
cp .env.example .env.local   # point NEXT_PUBLIC_API_URL at the backend
npm install
npm run dev                  # http://localhost:3000
```

## Deployment

Deployed on [Vercel](https://vercel.com). Set `NEXT_PUBLIC_API_URL` to the backend's URL in the project's environment variables.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
