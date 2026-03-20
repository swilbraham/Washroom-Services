# Washroom Solutions

Premium washroom & hygiene product website built with Next.js 15, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **React Hook Form + Zod** (form validation)

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── admin/        # Admin panel
│   ├── shop/         # Product catalogue
│   ├── solutions/    # Solutions page
│   ├── industries/   # Industries page
│   ├── about/        # About page
│   ├── faq/          # FAQ page
│   └── contact/      # Contact form
├── components/       # Reusable components
│   ├── layout/       # Header, Footer, FloatingButtons
│   ├── chatbot/      # AI FAQ Chatbot
│   └── ui/           # UI primitives
├── data/             # Seed data (JSON-like TS files)
├── lib/              # Utilities
└── types/            # TypeScript types
```

## Features

- Product catalogue with search, filters, and sort
- Product detail pages with specs and related products
- Solutions and Industries pages
- Contact form (FormSubmit.co integration)
- AI FAQ chatbot with local knowledge base
- Floating call button
- Admin panel with product, enquiry, and customer management
- Responsive mobile-first design
- SEO metadata and Open Graph tags

## Admin Panel

Visit `/admin` to access the admin dashboard. Current auth is demo-only — structured for real auth integration later.

## Contact Form

The contact form posts to FormSubmit.co. Update the email address in `src/app/contact/page.tsx` to use your own.

## Build

```bash
npm run build
npm start
```
