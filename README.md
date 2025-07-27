# Portfolio-v2: Nuxt 3 Developer Portfolio

This is a personal portfolio website built with [Nuxt 3](https://nuxt.com/). It showcases your profile, projects (fetched dynamically from GitHub), and contact information with a working contact form.

## Features

- **Home, About, Projects, and Contact pages**
- **Dynamic project listing**: Fetches repositories and language data from GitHub using server API endpoints
- **Contact form**: Validates email and sends messages via [Web3Forms](https://web3forms.com/)
- **Reusable UI components**: Custom buttons, inputs, and navbar
- **Modern styling**: Uses [Tailwind CSS](https://tailwindcss.com/)
- **Icon support**: Uses [Iconify](https://iconify.design/) for language and UI icons


## Tech Stack & Tools

- [Nuxt 3](https://nuxt.com/) (Vue 3 framework)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- [vee-validate](https://vee-validate.logaretm.com/) and [yup](https://github.com/jquense/yup) (form validation)
- [Iconify](https://iconify.design/) (icon library)
- [Web3Forms](https://web3forms.com/) (contact form backend)
- [GitHub API](https://docs.github.com/en/rest) (fetching project data)

---

## Getting Started

Install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```


## Development

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```


## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```


Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```


---

For more details, see the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) and [deployment guide](https://nuxt.com/docs/getting-started/deployment).
