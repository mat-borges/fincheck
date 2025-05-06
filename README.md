# 💰 FinCheck – Personal Finance Tracker

FinCheck is a full-stack project designed to help users manage their personal finances with features like custom tags, recurring entries, email notifications, and visual reports.

## 📦 Project Structure (Monorepo)

```
fincheck/
├── apps/
│   ├── backend/     # NestJS API
│   └── frontend/    # Next.js app (planned for Sprint 2)
├── packages/        # Shared libraries (planned)
├── docker-compose.yml
├── pnpm-workspace.yaml
├── README.md
```

## 🚀 Tech Stack

-   [NestJS](https://nestjs.com/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [Prisma ORM](https://www.prisma.io/)
-   [Docker](https://www.docker.com/)
-   [pnpm](https://pnpm.io/)
-   [Next.js](https://nextjs.org/) (Sprint 2)

---

## 🛠️ Requirements

-   Node.js 18+
-   [pnpm](https://pnpm.io/installation)
-   Docker + Docker Compose
-   Git

---

## ⚙️ Running the Project Locally with Docker

```bash
# 1. Clone the repository
git clone https://github.com/mat-borges/fincheck.git
cd fincheck

# 2. Build the containers
docker compose build

# 3. Start services
docker compose up -d

# 4. Generate Prisma client
docker compose exec backend pnpm generate

# 5. Run database migrations
docker compose exec backend pnpm migrate
```

By default:

-   Backend runs on port `3001`
-   PostgreSQL runs on port `5432`

---

## 📂 Key Folders

-   `apps/backend`: NestJS API
-   `prisma/schema.prisma`: Database schema
-   `packages/`: Shared code (utils, types, etc.)
-   `docker-compose.yml`: Container orchestration

---

## 🧪 Useful Commands

```bash
# Local backend dev
pnpm --filter ./apps/backend dev

# Build and start backend
pnpm --filter ./apps/backend build
pnpm --filter ./apps/backend start

# Prisma via Docker
docker compose exec backend pnpm generate
docker compose exec backend pnpm migrate
```

---

## 🗺️ Project Roadmap

-   [x] Initial backend setup with NestJS
-   [x] PostgreSQL + Prisma integration
-   [ ] Next.js frontend (Sprint 2)
-   [ ] Custom finance tags
-   [ ] JWT Authentication system
-   [ ] Email notifications
-   [ ] Export data (CSV, PDF)
-   [ ] Filters and financial charts
-   [ ] Final production deployment

---

## 🧑‍💻 Author

[Mateus Borges](https://github.com/mat-borges) – Full Stack Developer – Campinas/SP – Brazil
