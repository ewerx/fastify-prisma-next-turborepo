# Turborepo starter

Turbo repo starter with Fastify backend, Prisma ORM, and Next.js frontend.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `backend`: a [Fastify](https://fastify.dev/) backend
- `web`: a [Next.js](https://nextjs.org/) app
- `db`: a [Prisma](https://www.prisma.io/) ORM
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```
