# Shayalana customer tablet apps

Seven separately installable Android/PWA customer apps. Each app uses the existing Shayalana customer-table sign-in, live Supabase menu, and existing cashier order submission workflow. No menu, order, bill, stock, staff, or customer records are duplicated.

## Install links

Open each link in Chrome on the tablet, then use **⋮ → Install app** (or **Add to Home screen**, depending on Chrome version):

- Breakfast / ቁርስ — https://dawit1377-code.github.io/shaylana-rms/breakfast-app.html
- Lunch / ምሳ — https://dawit1377-code.github.io/shaylana-rms/lunch-app.html
- Dinner / እራት — https://dawit1377-code.github.io/shaylana-rms/dinner-app.html
- Juices / ጭማቂዎች — https://dawit1377-code.github.io/shaylana-rms/juices-app.html
- Hot Drinks / ትኩስ መጠጥ — https://dawit1377-code.github.io/shaylana-rms/hot-drinks-app.html
- Soft Drinks / ለስላሳ መጠጦች — https://dawit1377-code.github.io/shaylana-rms/soft-drinks-app.html
- Cake / ኬክ — https://dawit1377-code.github.io/shaylana-rms/cake-app.html

## Menu assignment

- Breakfast: Breakfast and Extras.
- Lunch and Dinner: Sandwiches, Pasta, Traditional Foods, Pizza, Burgers & Sides, Chicken, Salads, and Extras.
- Juices: Juices and Shakes, Smoothies & Mojitos.
- Hot Drinks: Hot Drinks.
- Soft Drinks: Soft Drinks.
- Cake: Cake. The category currently has no available items; it will display an empty-menu message until the owner adds and activates cake items in Menu management.

Lunch and Dinner intentionally show the same current main-food categories. All displayed menu data (availability, prices, descriptions, ingredients, and images) is loaded live from the existing menu.

## Tablet setup

1. Open each install link in Chrome and install it.
2. Sign in using the tablet's existing Customer-Table account when prompted. The seven apps share the same secure sign-in session on that tablet, so staff should not sign each app into a different table account on the same device.
3. Use the installed app icons. Customers touch the welcome screen, browse the app's assigned categories, review item details, choose quantity and optional notes, and submit.
4. Orders continue to Cashier → Incoming waiter & customer orders. Cashier approval and waiter assignment, then existing kitchen/bar preparation workflows, remain unchanged.

These are installable web apps (PWAs), not Play Store APKs. Internet access is required for live menus and order submission.
