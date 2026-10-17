# Rehoboth Cafe website

Website for **Rehoboth Cafe**, an Ethiopian cafe at **2737 Danforth Ave, Toronto, ON M4C 1L8**.

It is a 6-page site in plain HTML, CSS and vanilla JavaScript, with no build step and no framework. Open `index.html` in a browser, or upload the folder to any static host.

> **Status: PREVIEW.** All pages are hidden from search engines until the owner confirms the menu, prices, photos and domain. See [Before launch](#before-launch).

---

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Hero, menu highlights, our story, rotating dish slideshow, visit summary |
| Menu | `menu.html` | All 19 items with prices, a small photo beside every dish, search and category filters |
| About | `about.html` | Our story, what we serve, a note on Ethiopian coffee, rating / hours / location facts |
| Gallery | `gallery.html` | 15 photos with Food / Coffee / The cafe filters and a full-size photo viewer |
| Visit & Contact | `visit.html` | Address, phone, opening hours (today highlighted), Google map, directions, storefront |
| Order Online | `order.html` | Call ahead for pickup, order online via the Google listing, dine in |

There is no Catering page, because nothing confirms the cafe offers catering. Add one only if the owner confirms it.

Every page shares the same header and footer:
- **Header:** Home, Menu, About, Gallery, Visit & Contact, plus an **Order Online** button. On phones these become a ☰ menu.
- **Footer:** all 6 links, the address, phone and hours.

## Other files

| File / folder | What it is |
|---|---|
| `styles.css` | All styles, shared by every page |
| `script.js` | Mobile menu, fade-ins, homepage slideshow, gallery viewer, today's hours |
| `menu.js` | Menu search and filters |
| `img/` | Site images in WebP, plus JPG fallbacks for selected visuals and retained image drafts |
| `sitemap.xml` | All 6 page URLs (domain placeholder) |
| `robots.txt` | Currently **blocks** all crawlers (preview mode) |
| `owner-review/menu-approval-checklist.html` | Checklist for the owner. **Do not upload.** |
| `f426d464-…png` | The original design mockup. **Do not upload.** |

---

## What has been built

### Design
- Follows the mockup: cream backgrounds, deep red headings and buttons, gold accents, Libre Caslon Text headings, Outfit body text, and a CSS-built logo.
- Refinements: faint gold leaf watermarks, gold lines beside section labels, generous spacing, gentle fade-ins and hover zooms.

### Homepage
1. **Hero:** one H1, "Ethiopian Cafe on Danforth Avenue, Toronto", with "Big flavours. Warm welcomes." as a styled slogan and the supplied Ethiopian platter image.
   - Includes the View Menu and Get Directions buttons and the Google rating line.
   - On phones and tablets the photo moves below the text.
2. **Ribbon:** Coffee • Breakfast • Ethiopian Favourites.
3. **Menu preview:** Cappuccino, Tibs Firfir, Ful, Shiro and Kitfo cards.
4. **Our Story:** a short story, linking to About.
5. **Dish slideshow:** Tibs Firfir, Kitfo, Special Kitfo, Tibs, Ful and Firfir.
   - Rotates every 5 seconds, pauses on hover or focus, and stops while the browser tab is hidden.
   - Has a Pause/Play button, arrows, dots, arrow-key control and phone swipe.
   - Doesn't auto-rotate for reduced-motion users.
   - Links to the Gallery.
6. **Visit Us:** address, phone, hours, Get Directions, View on Google Maps, and a link to Visit & Contact.

### Menu
- **19 items in 3 categories**, taken from the Google Maps listing on 16 Oct 2026:
  - **Breakfast:** Tibs Firfir $17.99, Ful $14.99, Chechebsa $15.99, Firfir $15.99, Genfo $17.99, Bula $16.99, Waffle $9.99
  - **Lunch & Dinner:** Shiro $16.99, Tibs $23.49, Misir Wot / Adess $16.99, Kitfo $24.99, Special Kitfo $27.99, Bula Kitfo $27.99, Rehoboth Special (Meal for 3) $59.99
  - **Drinks:** Ginger Ale $1.99, Coke $1.99, Perrier $2.99, Crush $1.99, Water $1.99
- **Real HTML text**, not an image.
- **Search** ignores accents, and there are **category filters**. Links such as `menu.html#breakfast` open with that filter on.
- **A small photo beside every dish**, in the style of the Habesha Kitchen menu:
  - 16 dishes have photos.
  - Bula and Crush show an icon tile.
- **Labels and notices:**
  - "Preview menu — awaiting owner confirmation"
  - "Prices in CAD. Prices and availability may change."
  - "Please tell our staff about any food allergies before ordering."
  - Hot drinks: a line asking customers to check with staff. No prices were invented.

### SEO
- **Page titles:**
  - Home: `Rehoboth Cafe | Ethiopian Food & Coffee in Toronto`
  - Menu: `Ethiopian Food & Coffee Menu | Rehoboth Cafe Toronto`
  - About: `About Rehoboth Cafe | Your Danforth Neighbourhood Cafe`
  - Gallery: `Photo Gallery | Rehoboth Cafe Toronto`
  - Visit: `Visit Rehoboth Cafe | 2737 Danforth Ave, Toronto`
  - Order: `Order Online | Rehoboth Cafe Toronto`
- **Every page** has its own meta description, one H1, a canonical link, and Open Graph and Twitter tags.
- **Business details for Google:** `CafeOrCoffeeShop` JSON-LD on the homepage with name, address, phone, hours, map coordinates, map link and menu link.
- **`sitemap.xml`** lists all 6 pages.

### Accessibility and speed
- **Contrast:** the small gold text is `#85570c`, at least 5.3:1 on every cream.
- **Keyboard:**
  - skip link and visible focus outlines
  - keyboard-operable menu, filters, slideshow and gallery viewer (arrow keys browse, Escape closes)
  - 44px touch targets
- **`prefers-reduced-motion`:** turns off smooth scrolling, fade-ins, zooms and slideshow auto-rotation.
- **Images:**
  - every image has descriptive alt text and a set width and height, so nothing jumps while loading
  - responsive `srcset` sizes for larger photos
  - lazy loading below the hero
  - responsive sizes for the added storefront, Ethiopian platter and Kitfo images
- **Map:** the map on Visit & Contact loads lazily.
- **Layout:** the five homepage preview cards use five columns on wide screens, two on tablets (with the fifth card centred), and one on phones.

---

## Where the information came from

| Detail | Source | Status |
|---|---|---|
| Address, postal code | Provided by you | Confirmed |
| Phone (416) 686-1104 | Google Maps listing | Owner to confirm |
| Hours: Mon–Sat 9 a.m.–8 p.m., Sun 10 a.m.–7 p.m. | Google Maps listing | Owner to confirm |
| Dine-in, takeout, "Order online" | Google Maps listing | Owner to confirm the ordering service |
| Rating 4.9 from 45 reviews | Google Maps, 16 Oct 2026 | Changes over time. Update or remove it. |
| Menu items and prices | Google Maps menu tab | Owner to confirm (checklist) |
| "Short walk east of Main Street subway station" | Google Maps map view | Visible on the map |

Content changed on purpose until the owner confirms it:
- **Gluten-free:** all wording removed.
- **Tibs Firfir:** described without naming the meat.
- **Tax:** no statement about whether prices include tax.
- **Order page:** says "Call ahead to place your order for pickup", which the owner needs to confirm.
- **About page:** says nothing about the founding story, so nothing is invented.
- **Customer-photo dishes:** dishes that appear only in customer photos on Google are left off the menu.

`<!-- EDIT: … -->` comments in the HTML mark every spot the owner needs to confirm or fill in.

---

## Images and licences

### Recent image and layout changes

| Asset | Where it appears | Files and treatment |
|---|---|---|
| User-provided Ethiopian platter | Homepage hero and Gallery | `ethiopian-platter-injera.jpg`, `ethiopian-platter-injera.webp` (1400×787) and `ethiopian-platter-injera-800.webp` (800×450); the hero preloads a responsive WebP, with JPG fallback. The gallery crop favours the food on the right. |
| User-provided Rehoboth Cafe storefront | Home Visit Us, Visit & Contact, Gallery, and the Open Graph image on all six pages | `rehoboth-cafe-storefront.jpg`, `rehoboth-cafe-storefront.webp` (1600×684) and `rehoboth-cafe-storefront-800.webp` (800×342). The homepage business JSON-LD also points to the new JPG. |
| Selected generated Shekla Shiro image (option 1, bright woven tray) | Fourth homepage menu-preview card | `shekla-shiro-bright-woven-tray.jpg` and `shekla-shiro-bright-woven-tray.webp` (800×480); the source PNG is retained in `img/`. This is an illustration, not a photograph of a Rehoboth Cafe dish. |
| Kitfo photo by Vipon8 from Wikimedia Commons | Fifth homepage menu-preview card, homepage dish slideshow, Gallery, and Kitfo menu thumbnail | `kitfo-ayib-platter-1200.webp` (1200×675), `kitfo-ayib-platter-640.webp` (640×360) and `kitfo-ayib-platter-thumb.webp` (240×240). Cropped/resized from the [CC0 original](https://commons.wikimedia.org/wiki/File:Kitfo_(%E1%8A%AD%E1%89%B5%E1%8D%8E).jpg); credits and alt text were updated on the affected pages. |

The five-card menu preview now shows Cappuccino, Tibs Firfir, Ful, Shiro and Kitfo. Its CSS grid uses five columns on wide screens, two on tablets with the last card centred, and one on phones. The Kitfo photo also replaces the older Kitfo image in the slideshow, Gallery and menu; the Special Kitfo and Bula Kitfo photos are separate assets.

The `img/` folder also retains unused generated explorations (`ethiopian-coffee-and-platter-generated`, `shiro-preview`, `shekla-shiro-preview` and `shekla-shiro-generated`) and the older Kitfo, hero and storefront assets. These are not referenced by the current pages. Remove unused drafts when preparing a deployment package, after deciding which source files to keep.

**Checks completed for these updates:** visually inspected the chosen Kitfo crop and menu thumbnail; verified the new image dimensions and that all new image references point to existing files; checked that the homepage preview contains five cards; ran `git diff --check`. No browser layout or deployment check was run for the latest five-card update.

**Placeholders cut from the design mockup.** Replace these with the cafe's own photos:
- Cappuccino, Tibs Firfir and Ful cards
- Coffee pour
- `slide-tibs-firfir-*` and `tibs-firfir-injera-thumb`
- Firfir (slideshow, Gallery, menu): `firfir-rehoboth-*`, illustration supplied by the site owner

**Openly licensed photos**, shown for illustration and credited on each page:

| Used for | Title / author | Licence |
|---|---|---|
| Kitfo | ["Kitfo (ክትፎ)"](https://commons.wikimedia.org/wiki/File:Kitfo_(%E1%8A%AD%E1%89%B5%E1%8D%8E).jpg), Vipon8; cropped and resized | CC0 1.0 |
| Special Kitfo | "Kitfo, gomen and aybe", Arsupeee | CC BY-SA 4.0 |
| Tibs | "Siga Tibs", Khajitdadddy | CC BY-SA 4.0 |
| Chechebsa | "Chipchipsa Ethiopian dish 2014", Neftalem | CC BY-SA 4.0 |
| Bula Kitfo (kitfo bowl) | "Ethiopia traditional food", Yjohny | CC BY-SA 4.0 |
| Rehoboth Special (kitfo spread) | "Ethiopia most popular food", Yjohny | CC BY-SA 4.0 |
| Perrier | "PERRIER (10)", Dinkun Chen | CC BY-SA 4.0 |
| Genfo | "Ga'at food", Stefan Alfons Tzeggai | CC BY-SA 3.0 |
| Waffle | "Belgian waffle with fruitsalad and cream", Prashanthns | CC BY-SA 3.0 |
| Shiro on Menu and Gallery | "Taita and shiro", Temesgen Woldezion (ed. Merhawie W) | CC BY-SA 2.5 |
| Ginger Ale | "Ginger ale", Hisakazu Watanabe | CC BY-SA 2.0 |
| Ful | "Ful Mudammas", Tarboosh | CC0 |
| Ful (homepage slideshow) | ["qwaider al nabulsi foul medames"](https://commons.wikimedia.org/wiki/File:Qwaider_al_nabulsi_foul_medames_(11389639565).jpg), Krista; cropped (`ful-bowl-*`) | CC BY 2.0 |
| Misir Wot | "Misir Wot and Gomen Besiga", Andy Li | CC0 |
| Coke | "Coca-Cola glass bottle (Germany)", Ralf Roletschek | Public domain |
| Water | "Glass of water outside", Kurt Kaiser | CC0 |

All listed photos are from Wikimedia Commons. Each was cropped and resized.

**Deliberately not used:**
- Customer photos from Google Maps and Restaurant Guru. The copyright belongs to the customers, and Restaurant Guru's copies are watermarked.
- Photos from other projects on this computer.
- Photos showing identifiable people.

**Tried and removed:**
- **A video section:** first coffee clips, then cooking clips, all from Mixkit. It was replaced by the dish slideshow at your request.
- **Ethiopian food videos from Pexels:** found, but not downloaded, because downloading needed your go-ahead first.

---

## Before launch

1. **Domain.** The site is live on GitHub Pages at https://biniyameth.github.io/rehoboth-cafe/, and that address is used in all 6 HTML pages, `sitemap.xml` and `robots.txt`. To move to a custom domain, replace it everywhere. The Google listing links to **rehobothcafe.com** (currently offline). Confirm whether that's the right one.
2. **Turn off preview mode:**
   - Delete `<meta name="robots" content="noindex, nofollow">` from all 6 pages.
   - In `robots.txt`, change `Disallow: /` to `Allow: /`.
   - Remove the "Preview menu" label in `menu.html`.
3. **Owner confirmation.** Send the owner the checklist (`owner-review/menu-approval-checklist.html`, or its shared link). It covers:
   - all 19 prices
   - hot drinks and their prices
   - whether prices include tax
   - which meat goes in Tibs Firfir
   - gluten-free options
   - vegetarian labels
   - spelling (Perrier, Misir Wot / Adess)
   - hours and phone
   - permission to show the Google rating
   - the domain
   - the online ordering service
   - whether they take pickup orders by phone
   - their story (optional)
   - email or social media accounts (optional)
4. **Order link.** In `order.html`, replace the Google-listing button with the cafe's direct ordering link once it's known.
5. **Real photos.** Confirm the supplied storefront and platter visuals represent the cafe; get current owner photos in landscape and daylight where needed:
   - the storefront and interior (the Gallery says the interior is "coming soon")
   - the cappuccino and other coffee
   - every dish, especially the generated Shiro preview, Kitfo, Tibs Firfir, Bula and Crush
6. **Check and submit.**
   - Test the JSON-LD at <https://search.google.com/test/rich-results>.
   - Submit `sitemap.xml` in Google Search Console.
   - Make sure the address, phone and hours match the Google Business Profile.
7. **Don't upload** `owner-review/` or the mockup PNG.

---

## How to edit common things

- **Navigation:** the header and footer are repeated in all 6 pages. Change a link in every page.
- **Prices or dishes:** edit the `<li class="menu-item …">` blocks in `menu.html`. Search and filters update automatically.
- **Dish photo on the menu:**
  - Save a square 240×240 WebP in `img/`.
  - Point that dish's `<img class="item-thumb" …>` at it. For Bula or Crush, replace their `<span class="item-thumb item-thumb-icon">…</span>`.
- **Hours or phone:** keep these identical in every place they appear:
  - `visit.html` (address block, phone block and hours table)
  - the Visit Us section of `index.html`
  - the footer on all 6 pages
  - the "Visit us" box on `menu.html`
  - the About page facts
  - the JSON-LD in `index.html`
- **Gallery:** each photo is an `<li class="g-item" data-cat="food|coffee|cafe">` in `gallery.html`. Credit any new photo that isn't the cafe's own.
- **Homepage menu preview:** each card is an `<li class="card">` inside `.cards` in `index.html`. Update the image, alt text, name and description together. The responsive grid is in `styles.css`.
- **Slideshow:** each slide is an `<li class="slide">` in `index.html`, with 1200px and 640px WebP images (16:9) and a matching dot button.
- **Colours:** the tokens at the top of `styles.css` (`--red`, `--gold`, `--cream`, …).
