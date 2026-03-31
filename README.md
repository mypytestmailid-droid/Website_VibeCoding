# Team Alpha Team Website

React-based sports team website built with Vite and configured for deployment on Vercel.

## Tech Stack

- React 18
- Vite 5
- CSS (custom responsive design)
- Vercel (static deployment)

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Production Build

```bash
npm run build
```

The production files are output to the `dist` folder.

## Deploy To Vercel

1. Push this repository to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Use the default Vite settings:
	- Build Command: `npm run build`
	- Output Directory: `dist`
4. Deploy.

`vercel.json` includes a rewrite rule so direct navigation on client routes resolves to `index.html`.