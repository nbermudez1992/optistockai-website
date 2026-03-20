/**
 * OptiStockAI App Configuration
 * 
 * Central configuration for linking the landing page website
 * to the OptiStockAI web application.
 * 
 * Update APP_URL when the app is deployed to production.
 */

// The deployed URL of the OptiStockAI web application
export const APP_URL = "https://optistock-ai-mu.vercel.app";

// Direct links for Login / Signup CTAs
export const APP_LOGIN_URL = `${APP_URL}/?login=true`;
export const APP_SIGNUP_URL = `${APP_URL}/?login=true`;

// Marketing site base URL (for SEO canonical URLs, sitemaps, etc.)
export const SITE_URL = "https://optistockai.site";
