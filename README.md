# zahnzentrum_demo
project demo

## Google Analytics (GA4) 🔧

- Set your measurement ID in `.env`:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- This project injects `gtag.js` in `src/app/layout.tsx` and tracks pageviews client-side (SPA) using `src/app/components/Analytics/GoogleAnalytics.tsx`.
- To verify: open the site and check the Network tab for requests to `https://www.google-analytics.com/g/collect` or use the Google Analytics Real-time dashboard to see pageviews.

## Cookie Consent 🛡️

- A cookie consent banner appears until the user accepts/rejects cookies.
- Analytics scripts (GA) are only loaded **after** the user accepts analytics cookies.
- Consent is stored in localStorage under the key `cookie_consent` with shape `{ analytics: boolean }`.
- To test: load the site in an incognito window, observe the banner, accept cookies, then check the Network tab or GA Realtime to see pageviews.
