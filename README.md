# Collaborative Document Editor

A Google Docs-style editor where several people can edit the same document at the same time, see each other's cursors, and leave comments.

**Live demo:** https://document-editor-nextjs.vercel.app/

> **About this project:** I built this while following a course to learn Next.js, real-time collaboration and authentication. The structure follows that course.

## Features

- **Real-time collaboration:** multiple users edit one document together, with live presence avatars (Liveblocks and TipTap).
- **Comments and notifications:** comment threads on the document and an inbox for notifications.
- **Rich text editing:** headings, font family and size, line height, text colour, highlight, alignment, task lists, tables, links and resizable images.
- **Page margins:** a ruler with left and right margins that sync between users.
- **Document management:** create from 7 starter templates, rename, delete and search by title.
- **Authentication and access control:** sign-in with Clerk. A document is open to its owner, or to members of the same organization.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19 (RC), TypeScript |
| Editor | TipTap with Liveblocks collaboration |
| Real-time, presence, comments | Liveblocks |
| Database and backend functions | Convex |
| Authentication | Clerk |
| State | Zustand (holds the editor instance for the toolbar) |
| UI | Tailwind CSS, shadcn/ui (Radix UI) |
| Forms and validation | React Hook Form, Zod |

## How it works

1. **Clerk** handles sign-in. The Next.js middleware protects routes.
2. **Convex** stores document metadata: title, owner, organization and the Liveblocks room ID. It has a title search index and indexes on owner and organization.
3. **Liveblocks** holds the live document content, cursors, comments and margins. Each document is one room.
4. When a user opens a document, the `/api/liveblocks-auth` route checks the signed-in user against the Convex record. Only the owner or someone in the same organization is allowed in.

## Project structure

```
convex/                     Convex schema and document queries and mutations
src/app/(home)/             Home page: template gallery, document list, search
src/app/documents/[id]/     Editor page: toolbar, ruler, comments, inbox, avatars
src/app/api/liveblocks-auth Liveblocks authorization route
src/components/             Toolbar buttons, dialogs, shared UI (shadcn/ui in ui/)
src/extensions/             Custom TipTap extensions (font size, line height)
src/store/                  Zustand store for the editor instance
src/middleware.ts           Clerk route protection
```

## Getting started

**Prerequisites:** Node.js 18+, and free accounts on [Clerk](https://clerk.com), [Convex](https://convex.dev) and [Liveblocks](https://liveblocks.io).

1. Clone the repo and install dependencies:

   ```bash
   git clone https://github.com/rajeshCreate72/document-editor-nextjs.git
   cd document-editor-nextjs
   npm install
   ```

2. Create a `.env.local` file in the project root:

   ```
   NEXT_PUBLIC_CONVEX_URL=
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   LIVEBLOCKS_SECRET_KEY=
   ```

   Clerk may also need its secret key (for example `CLERK_SECRET_KEY`), depending on your Clerk setup. Never commit this file.

3. Connect Clerk to Convex by following `convex/auth.config.ts`. Convex needs to accept Clerk's sign-in tokens.

4. In one terminal, start Convex:

   ```bash
   npx convex dev
   ```

5. In another terminal, start the app:

   ```bash
   npm run dev
   ```

   Open http://localhost:3000.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Known limitations and next steps

- No automated tests yet. I'd start with tests for the document access check and the Convex functions.
- No CI workflow yet. I'd add a GitHub Actions job that runs lint, type-check and tests.
- The README setup steps cover the main flow. [CONFIRM THEM BY RUNNING THE PROJECT FROM A FRESH CLONE.]

## Acknowledgements

Built while following a tutorial course, using Liveblocks, TipTap, Convex, Clerk and shadcn/ui.
