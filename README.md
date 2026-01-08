# zahnzentrum_demo
project demo

## Google Analytics (GA4) 🔧

- Set your measurement ID in `.env`:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- This project injects `gtag.js` in `src/app/layout.tsx` and tracks pageviews client-side (SPA) using `src/app/components/Analytics/GoogleAnalytics.tsx`.
- To verify: open the site and check the Network tab for requests to `https://www.google-analytics.com/g/collect` or use the Google Analytics Real-time dashboard to see pageviews.
