# VentureList

VentureList is a web platform that connects **startup founders raising capital** with **investors looking to back them**. Founders create a public pitch profile for their startup, set funding goals and perks, and manage the raise end-to-end; investors browse/search startups and top founders, follow companies and other investors, invest via an integrated checkout, and track everything in a personal portfolio (holdings, followers/following, watchlist, cash, tax documents, account settings).

This repository is the **frontend** (React SPA) that talks to a separate backend API over REST.

## Core features

- **Authentication** — email/password signup & login, cookie-based session with silent access-token refresh and auth-status rehydration on app load (`src/redux/slice/authSlice.js`).
- **Explore** — discover startups, top founders, and top investors.
- **Raise Money (founder side)** — startup registration and a multi-step pitch editor: Basics, Highlights, Team, Pitch content, Featured Investor, Contract, Perks, Funding Goals, Discoverability, and Extras (`src/components/RaiseMoney/PitchEditor/*`).
- **Startup pitch page** — public overview page for a startup at `/pitch/:id`, with a checkout flow to buy shares.
- **Payments** — Razorpay Checkout integration for buying shares in a startup (`src/utils/loadRazorpayScript.js`, `src/components/StartupContaint/OrderBar.jsx`).
- **Media uploads** — direct-to-Cloudinary unsigned uploads for pitch/profile images (`src/components/cloudinary.js`).
- **Investor portfolio** — followers/following, wishlist/watchlist, cash, tax documents, and a settings area covering login & security, investor information & limits, bank cards, public profile, and VIP status.
- **User profile** — public and editable profile pages per user.
- **Rich text editing** — Froala WYSIWYG editor for pitch content.

## Tech stack

**Core**
- [React 18](https://react.dev/) with functional components and hooks
- [React Router v6](https://reactrouter.com/) — nested routes, lazy-loaded route components via `React.lazy` + `Suspense` for code-splitting
- [Redux Toolkit](https://redux-toolkit.js.org/) + `react-redux` — global state, sliced by domain: `auth`, `user`, `startup`, `investor`, `pitchData` (`src/redux/store.js`)
- Created with [Create React App](https://create-react-app.dev/) (`react-scripts`)

**Styling / UI**
- [Tailwind CSS](https://tailwindcss.com/) (with `postcss` + `autoprefixer`)
- [Material Tailwind](https://www.material-tailwind.com/) (`@material-tailwind/react`)
- [Heroicons](https://heroicons.com/) and Font Awesome for icons
- [react-spring](https://www.react-spring.dev/) for animation

**Data & integrations**
- [Axios](https://axios-http.com/) for HTTP calls, with a request/response interceptor layer (`src/utils/api.js`) and a dedicated auth axios flow with `withCredentials` cookie sessions
- [Cloudinary](https://cloudinary.com/) for unsigned image uploads
- [Razorpay Checkout](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/) for share-purchase payments
- `react-froala-wysiwyg` for rich text pitch editing
- `react-tailwindcss-datepicker`, `dayjs`, `moment` for dates
- `use-react-countries` for country data (investor/founder location fields)

**Testing**
- `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, and CRA's built-in Jest runner
- Axios is mocked in tests via `src/__mocks__/axios.js`

**Deployment / CI**
- Hosted on **Azure Static Web Apps**
- GitHub Actions workflow (`.github/workflows/azure-static-web-apps-red-meadow-0b90e9c00.yml`) builds the app and deploys on every push/PR to `master`, injecting the `REACT_APP_*` secrets as build-time env vars
- `public/staticwebapp.config.json` configures SPA navigation fallback to `index.html` for client-side routing

## Project structure

```
src/
├── components/        # Reusable UI, grouped by feature area
│   ├── HeroPage/       # Landing page
│   ├── Explore/        # Explore/discovery widgets (top investors, etc.)
│   ├── Portfolio/      # Followers, wishlist, settings, bank cards, public profile...
│   ├── RaiseMoney/      # Pitch editor steps (Basics, Team, Contract, Perks, ...)
│   ├── StartupContaint/ # Startup pitch page + order/checkout bar
│   ├── UserProfile/
│   ├── carsousel/
│   ├── common/          # NavBar and shared layout pieces
│   ├── ui/              # Low-level UI primitives
│   └── images/
├── pages/              # Route-level page components
│   ├── Auth/, Explore/, Home/, RaiseMoney/, Portfolio/, UserProfile/, Error/
├── redux/
│   ├── slice/          # authSlice, userSlice, startupSlice, investorSlice, pitchDataSlice
│   └── store.js
├── constants/
│   └── constants.js     # API_ENDPOINTS, ROUTES, validation/storage/theme constants
├── utils/
│   ├── api.js            # axios instance + interceptors
│   ├── loadRazorpayScript.js
│   └── pitchDataTransforms.js
├── hooks/
├── layouts/
└── App.jsx              # Route tree, lazy-loaded route components, auth bootstrap
```

## Environment variables

Create a `.env` file in the project root:

```
REACT_APP_API_BASE_URL=            # Backend REST API base URL
REACT_APP_AUTH_BASE_URL=           # Auth service base URL
REACT_APP_CLOUDINARY_CLOUD_NAME=   # Cloudinary cloud name for unsigned uploads
REACT_APP_CLOUDINARY_UPLOAD_PRESET= # Cloudinary unsigned upload preset
```

These same keys are injected as GitHub Actions secrets during CI/CD builds.

## Getting started

```bash
npm install
npm start        # runs the app at http://localhost:3000
```

Other scripts:

```bash
npm test          # run tests (react-scripts / Jest, watch mode)
npm run build      # production build to /build
npm run eject       # eject CRA config (one-way)
```

## Routing overview

Routing is defined in [`src/App.jsx`](src/App.jsx) and uses nested `react-router-dom` v6 routes under a top-level `HomePage` layout:

- `/`, `/home` — landing page
- `/signup`, `/login` — auth
- `/explore` (`founder`, `topinvestor` sub-routes) — discovery
- `/profile/:user` — profile home, with investor registration
- Portfolio area — `portfolio`, `follower`/`following`, `watch`, `cash`, `docs`, and `settings` (with security, investor info/limits, bank cards, public profile, VIP sub-routes)
- `/pitch/:id` — public startup pitch overview
- `/register_startup` — founder raise-money flow, with `overview` and a nested `editpitch` wizard (`basics`, `highlights`, `team`, `pitch_editor`, `featured_investor`, `contract`, `perks`, `funding_goal`, `discoverability`, `extra`)
- `*` — 404 page
