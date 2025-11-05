# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

## Deploying to Vercel

This project is configured to deploy with [`@sveltejs/adapter-vercel`](https://github.com/sveltejs/kit/tree/main/packages/adapter-vercel).

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. In the Vercel dashboard, create a new project and import the repository.
3. Use the default build command (`npm run build`) and output directory (`.vercel/output`).

> Vercel will automatically run `npm install`, `npm run build`, and serve the app using the Node.js 20 runtime specified in `svelte.config.js`.
