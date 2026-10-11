# Shayalana Cafe & Restaurant RMS

Responsive GitHub Pages frontend backed by the Shayalana Supabase project.

## Current build
- Administrator email/password sign-in and active staff-membership check
- Restaurant-scoped overview, menu management, orders/bills inspection, table setup, staff listing, inventory and diagnostic reports
- Category/item price editing, availability toggles, ingredient and table setup
- Responsive desktop/mobile layout

## Not production-ready yet
Atomic order and bill creation, split payments, bill closure, cashier shift-close approval, staff ID/PIN authentication, kitchen and beverage station screens, recipe-based stock deduction, image uploads, complete Amharic/Afaan Oromo/Tigrinya translations, and automated backup/restore are not implemented. Do not use this early build to collect real payments or close live customer bills.

## GitHub Pages deployment
Open Settings → Pages. Under Build and deployment choose Deploy from a branch, select main and /(root), and Save. Wait for the Pages URL to appear.

The browser uses a Supabase publishable key. Never commit a service-role key, database password, or secret Edge Function key. Enforce access using Supabase RLS policies.
