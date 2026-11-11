# Fitzobit website

The public landing page for Fitzobit (healthy meal delivery, Thanjavur). It is **separate from the Fitzobit
delivery app** (fitzobit.onrender.com). There is no server and no database. Orders go to Fitzobit's WhatsApp.

## What's on the page
1. **3D meal bowl** (Three.js, drawn in code, no model file). As you scroll, the bowl turns, the ingredients lift out
   with labels (Protein, Fibre, Good carbs, Greens), it switches between Veg and With egg (buttons), then it looks down
   into the bowl and fades into the page. With a mouse, the bowl tilts towards the pointer.
2. Hero section, How it works, **Menu** (Monthly / Weekly / Trial tabs, Veg / With egg choice, quantity, Add to cart).
3. **Cart and order form** (name, mobile, address, pincode, Monday–Saturday start date, delivery time, optional Google
   Maps location and note). **Order on WhatsApp** opens WhatsApp with the whole order typed in English, and the customer
   presses Send. Fitzobit confirms and sends a UPI link or QR.
4. Delivery area pincode check, Instagram strip, FAQ, footer with contact details and the FSSAI number.
5. **English / தமிழ்** switch (top right). The choice is remembered on that device.
6. Mouse only: a **fork cursor** with a trailing ring that shows "Add", "Order", "Scroll" or "Chat", and a
   **veggie burst** (leaves, carrot coins, tomatoes, peas) when a button is clicked. Phones keep normal touch.

## Files
| File | What it is |
|---|---|
| `index.html` | The page, plus the 3D bowl script (kept inline so double-clicking `index.html` also works) |
| `assets/js/config.js` | **Everything you may need to change**: WhatsApp number, phone, email, address, FSSAI, pincodes, delivery times, prices, meal names and descriptions, Instagram photos |
| `assets/js/i18n.js` | All the page text in English and Tamil |
| `assets/js/site.js` | Menu, cart, order form, pincode check, language switch |
| `assets/js/cursor.js`, `assets/css/cursor.css` | Fork cursor and veggie burst |
| `assets/css/site.css`, `assets/css/reveal3d.css` | Styles |
| `assets/img/` | Logo with a clear background (made from the app's `logo.png`), split into picture and word, plus a light word version for the dark footer |
| `netlify.toml` | Netlify settings (short caches, so updates show within an hour) |

## Still to fill in (marked `PLACEHOLDER` in `assets/js/config.js`)
- `whatsapp`: the order number, as `91` + 10 digits (until it is set, the order form shows a small orange note)
- `phone`, `email`, `address`, `fssai`
- `deliveryTimes`: the time choices in the order form
- `pincodes`: currently 613001–613010. Please check this list for Thanjavur city.
- Meal `desc` texts: drafts, to be checked against the WhatsApp catalogue
- `instagramPhotos`: up to 6 photo paths (put the files in `assets/img/`)
- Have someone check the Tamil text in `assets/js/i18n.js`
- Macros (protein, carbs, fibre) per meal will come later

Prices were copied from the app's Money page price list on 2026-11-10. If you change a price in the app, also change it
here, because the website does not read the app.

## Preview on this computer
Double-click `index.html`, or in Claude's browser pane use the launch entry `fitzobit-website`
(`http://localhost:8766`). Reload with **Ctrl+F5** after changes.

## Put it online (GitHub + Netlify, free)
**1. Create the GitHub repository** (GitHub Desktop is easiest):
1. Open GitHub Desktop → **File → Add local repository…** → choose `E:\ClaudeWorkspace\FitzobitWebsite`.
2. It says "This directory does not appear to be a Git repository" → click **create a repository** → Name
   `Fitzobit-Website` → **Create repository**.
3. Write a summary (e.g. "Fitzobit website") → **Commit to main** → **Publish repository** (untick "Keep this code
   private" only if you want it public. Private works with Netlify too) → **Publish repository**.

**2. Connect Netlify:**
1. Go to app.netlify.com → **Add new site → Import an existing project → Deploy with GitHub** → allow access to the
   `Fitzobit-Website` repository.
2. Pick `Fitzobit-Website`. Branch `main`, **Build command: leave empty**, **Publish directory: `.`** → **Deploy**.
3. **Site configuration → Change site name** → `fitzobit` → the site is at **https://fitzobit.netlify.app**
   (if that name is taken, choose another).
4. From now on, every push to `main` updates the site within about a minute.

**3. Later, your own domain** (fitzobit.in / fitzobit.com): Netlify → **Domain management → Add a domain**, then copy
the DNS records Netlify shows into your domain registrar.
