# Rehoboth Cafe website

Website for **Rehoboth Cafe**, an Ethiopian cafe at **2737 Danforth Ave, Toronto, ON M4C 1L8**.

It is a 6-page site in plain HTML, CSS and vanilla JavaScript, with no build step and no framework. It is hosted on GitHub Pages at **https://rehobothcafe.com/** (repo `BiniyamETH/rehoboth-cafe`, branch `main`). Every push to `main` deploys automatically.

### Unused image cleanup — 27 October 2026

- Deleted 36 image files that no page referenced any more: the beef-with-injera video still and the older Ful, Bula Kitfo and Rehoboth Special placeholders (`beef-injera-video-cafe.*`, `ful-rehoboth-*`, `bula-kitfo-bowl-*`, `rehoboth-special-sharing-*`). They remain in Git history.

### Photo removal — 27 October 2026

- Removed the beef-in-red-sauce photograph from the menu and gallery at the owner's request, along with its unused image assets, kitchen photo section and styles. The gallery now has 20 photos. Tira Sega remains a regular menu item at CAD $22.00.

### Tira Sega menu update — 27 October 2026

- Tira Sega is a regular Lunch & Dinner item, with the owner-supplied name and photo, a CAD price of $22.00, responsive thumbnails, search aliases, a direct item link and matching menu structured data. The matching gallery caption is also Tira Sega. Its previous generic kitchen photo card is removed.
- The current Rehoboth Cafe Uber Eats listing was checked directly; Tira Sega was not listed there. At the user's request to use another restaurant as the price reference, the price matches the comparable raw-beef dish Kurt at nearby Kera Restaurant, 2741 Danforth Ave: [Uber Eats menu](https://www.ubereats.com/ca/store/kera-restaurant/omJp0l5LRh6uOCWiyzCzZg), CAD $22.00, checked directly on 27 October 2026. This is a competitor reference, not a verified Rehoboth Uber Eats price.

### Cafe photo update — 27 October 2026

- The new owner-supplied photographs replace the Ful, Bula Kitfo and Rehoboth Special placeholders wherever those dishes appear on the homepage, menu and gallery. Bula now has its own menu photo instead of an icon. Responsive WebP assets include JPEG fallbacks and small menu thumbnails.
- The gallery correctly labels Bula Kitfo and adds Bula, Rehoboth Special and two beef photographs. It now contains 21 photos.
- The menu includes a “More from our kitchen” photo section using the supplied red-sauce beef image and a still captured at 19.5 seconds from the supplied WhatsApp video. These use descriptive captions, because the media alone does not establish the cafe's exact menu names, recipes or prices. They are not assigned to Tibs or added as priced menu items.
- All 23 existing menu items and prices are preserved. Photo credits and alternative text distinguish the new cafe photos from remaining illustrations.
- New assets use `ful-cafe-*`, `bula-cafe-*`, `bula-kitfo-cafe-*`, `rehoboth-special-cafe-*` and `beef-injera-video-cafe.*` (both beef images were later deleted; see above). The older placeholder assets were later deleted too and remain in Git history. Earlier asset notes below describe the previous illustrations.
- Local checks verify image references, decodable image files, unique HTML IDs, valid structured data, unchanged prices and the four photo/menu mappings. Working images, original video frames and verification scripts are in ignored `owner-review/`.

To preview locally, run `npx serve` in this folder and open the address it prints. A local server is needed because pages link to clean addresses such as `/menu` instead of `menu.html`.

> **Status: LIVE.** Launched on rehobothcafe.com with HTTPS and open to search engines. Some owner confirmations are still open; see [Still to do](#still-to-do).

---

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Hero, menu highlights, our story, rotating dish slideshow, visit summary |
| Menu | `menu.html` | All 24 items with prices, a small photo beside every dish, search and category filters. This is the page the table QR codes open. |
| About | `about.html` | Our story, what we serve, a note on Ethiopian coffee, rating / hours / location facts |
| Gallery | `gallery.html` | 20 photos with Food / Coffee / The cafe filters and a full-size photo viewer. Each photo is also a plain link to its large JPEG, so it still opens on browsers without the viewer. |
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
| `script.js` | Mobile menu, fade-ins, homepage slideshow, gallery viewer, today's hours, the homepage open/closed badge, and tidying old `.html` addresses to the short form |
| `menu.js` | Menu search and filters |
| `img/` | Site images in WebP and JPG; every file is used by a page |
| `fonts/` | Self-hosted copies of the Google Fonts files (Bowlby One, Libre Caslon Text, Outfit: Latin letters only; SIL Open Font License). `noto-sans-ethiopic-subset.woff2` holds only the Amharic letters used on the site, so new Amharic words show in the phone's own Ethiopic font until it is regenerated. |
| `sitemap.xml` | All 6 page URLs |
| `robots.txt` | Allows all crawlers and points to the sitemap |
| `favicon.ico`, `favicon.svg`, `apple-touch-icon.png` | The gold "R" site icon. They are real files, not inline, so Google Search can show the icon next to the site. |
| `CNAME` | The custom domain (`rehobothcafe.com`) for GitHub Pages. Don't delete it. |

---

## What has been built

### Design
- Uses a site-wide coffee, cream and muted gold palette: dark navigation and footers, espresso-brown headings, gold buttons and accents, Libre Caslon Text headings, Outfit body text, and a CSS-built logo.
- Shared colour tokens live at the top of `styles.css`. The legacy `--red` token now holds the espresso-brown accent; its RGB companion is updated to match. The favicon and browser theme colour use the same palette on all six pages.
- Faint gold leaf watermarks, gold lines beside section labels, generous spacing, gentle fade-ins and hover zooms remain part of the design.

### Homepage
1. **Hero:** one H1, "Ethiopian Restaurant & Cafe on Danforth Avenue, Toronto", with "From Ethiopia. With Love." as the styled slogan and the supplied cafe interior image (`img/rehoboth-home-interior-1536.webp`).
   - Includes the View Menu and Get Directions buttons and the Google rating line.
   - The photo fills the background on desktop and phone. A lighter desktop overlay shows its warm colours while keeping text readable; the phone overlay darkens behind the copy.
2. **Highlights:** guest rating, seven-day hours, vegetarian options and dine-in/takeout information on a dark feature strip.
3. **Menu preview:** Cappuccino, Tibs Firfir, Ful, Shiro and Kitfo cards on a cream section; each card links to the matching menu item and price.
4. **Rehoboth Special and Our Story:** a featured dish and a short story linking to About.
5. **Dish slideshow:** Tibs Firfir, Kitfo, Special Kitfo, Tibs, Ful and Firfir.
   - Each dish link opens its matching item and price on the menu.
   - Rotates every 5 seconds, pauses on hover or focus, and stops while the browser tab is hidden.
   - Has a Pause/Play button, arrows, dots, arrow-key control and phone swipe.
   - Doesn't auto-rotate for reduced-motion users.
   - Links to the Gallery.
6. **More about the cafe:** a guide to Ethiopian food, coffee ceremony, guest reviews, ways to order and FAQs.
7. **Visit Us:** address, phone, hours, Get Directions, View on Google Maps, and a link to Visit & Contact.

### Menu
- **24 items in 3 categories**, from the Google Maps listing on 16 Oct 2026, hot drinks added later, and the owner-requested Tira Sega addition using the competitor price reference documented above:
  - **Breakfast:** Tibs Firfir $17.99, Ful $14.99, Chechebsa $15.99, Firfir $15.99, Genfo $17.99, Bula $16.99, Waffle $9.99
  - **Lunch & Dinner:** Shiro $16.99, Tibs $23.49, Misir Wot / Adess $16.99, Kitfo $24.99, Special Kitfo $27.99, Bula Kitfo $27.99, Tira Sega $22.00, Rehoboth Special (Meal for 3) $59.99
  - **Drinks:** Cappuccino $3.99, Macchiato $3.49, Tea $2.49, Organic Ginger Tea $5.99, Ginger Ale $1.99, Coke $1.99, Perrier $2.99, Crush $1.99, Water $1.99
- **Real HTML text**, not an image.
- **Search** ignores accents and also matches section and sub-heading names, so "cold drinks" or "hot drinks" find every drink in that group; a sub-heading hides when none of its drinks match. There are **category filters**, and links such as `menu#breakfast` open with that filter on, while `menu#item-shiro` jumps to one dish.
- **A small photo beside every dish**, in the style of the Habesha Kitchen menu:
  - All 24 items have photos, including the cafe's own Bula photograph.
- **Labels and notices:**
  - "Prices in CAD. Prices and availability may change."
  - "Please tell our staff about any food allergies before ordering."
  - Drinks: "Ask our team about other coffee drinks served in the cafe."

### Menu on phones (QR code visitors)
Most people reach the menu by scanning the table QR code, so on screens up to 680px wide:
- The dark banner at the top is shorter, and on screens 400px wide or less the title is slightly smaller. On the smallest phones (340px or less, e.g. 320×568) the intro sentence is hidden; the address is still in the "Visit us" box and footer.
- Each section's wide photo (Breakfast, Lunch & Dinner, Drinks) appears **after** that section's dishes instead of above them.
- The "Showing N items" line only takes space once search or a filter is in use.

The result: at least one dish name and price is on the first screen of every phone size tested (320×568 to 430×932); before, most sizes showed none. Desktop and tablet layouts are unchanged. These rules sit in the `@media (max-width: 680px)`, `(max-width: 400px)` and `(max-width: 340px)` blocks right after the `.cat-banner` rules in `styles.css`.

### SEO
- **Page titles:**
  - Home: `Rehoboth Cafe | Ethiopian Restaurant & Coffee on Danforth, Toronto`
  - Menu: `Ethiopian Menu & Prices | Rehoboth Cafe, Danforth Toronto`
  - About: `About Rehoboth Cafe | Ethiopian Cafe on Danforth, Toronto`
  - Gallery: `Ethiopian Food Photos | Rehoboth Cafe, Danforth Toronto`
  - Visit: `Hours & Directions | Rehoboth Cafe, 2737 Danforth Ave`
  - Order: `Ethiopian Food for Pickup | Rehoboth Cafe, Danforth Toronto`
- **Every page** has its own meta description, one H1, a canonical link, and Open Graph and Twitter tags.
- **Business details for Google:** `CafeOrCoffeeShop` JSON-LD on the homepage with name, address, phone, hours, map coordinates, map link and menu link.
- **`sitemap.xml`** lists all 6 pages.

### Accessibility and speed
- **Contrast:** the current dark text on cream is 15.23:1, muted text on cream is 5.03:1, header links on the dark background are 15.48:1, and dark text on gold buttons is 8.60:1. Decorative gold and image overlays are treated separately from body text.
- **Keyboard:**
  - skip link and visible focus outlines
  - keyboard-operable menu, filters, slideshow and gallery viewer (arrow keys browse, Escape closes)
  - 44px touch targets
- **`prefers-reduced-motion`:** turns off smooth scrolling, fade-ins, zooms and slideshow auto-rotation.
- **Images:**
  - every image has descriptive alt text and a set width and height, so nothing jumps while loading
  - responsive `srcset` sizes for many larger photos; the homepage WebP is preloaded with responsive sizes
  - lazy loading below the hero
  - responsive sizes for the storefront, Gallery platter and Kitfo images
- **Map:** the map on Visit & Contact loads lazily.
- **Fonts:** self-hosted in `fonts/` with `font-display: swap`, so text shows straight away in the phone's own font and switches when the site fonts arrive. There are no requests to Google Fonts.
- **Phone-sized photos on the menu:** each dish thumbnail has 120, 160 and 240px versions (`*-thumb-120.webp`, `*-thumb-160.webp`, `*-thumb.webp`) and phones pick the smallest one that is still sharp; the Breakfast and Lunch & Dinner photos have phone versions cut to the wide strip shape (`*-phone-{720,1080}.webp`); the top banner has a phone crop (`ethiopian-platter-injera-mobile.webp`, 640×400). On a typical Android phone the menu's first-screen images dropped from 261 KB to 152 KB, and the whole scrolled menu from 503 KB to 262 KB.
- **Older phones:** every photo has a JPEG copy next to its WebP. Pages use `<picture>` with `<source type="image/webp">` first and a JPEG `<img>`, so iOS 13 and earlier (no WebP) still show photos while modern browsers keep downloading WebP only. Standalone images are wrapped in `<picture class="webp-fallback">`, which uses `display: contents` so the layout is unchanged. `script.js` works on iPhones before iOS 14 (older media-query listener, and no nav highlight or fade-ins without `IntersectionObserver`), the gallery opens photos as normal links where `<dialog>` is missing (Safari before 15.4), and the homepage "Open now" badge re-checks every minute. Overlay CSS avoids `inset` so the menu banner stays readable before iOS 14.5. The menu stays fully readable with JavaScript turned off.
- **Speed (Lighthouse, simulated phone, before and after the Oct 2026 speed work):**

  | Page | Phone | Score | First text | Data |
  |---|---|---|---|---|
  | Menu | Mid-range (4G, 4x slower CPU) | 79 → 96 | 2.87 → 1.67 s | 748 → 574 KB |
  | Menu | Budget (slow 3G, 6x slower CPU) | 61 → 71 | 5.82 → 3.62 s | 748 → 574 KB |
  | Home | Mid-range | 82 → 90 | 2.81 → 1.68 s | 793 → 801 KB |
  | Home | Budget | 60 → 68 | 5.84 → 3.62 s | 793 → 801 KB |

  Measured on a local server, not on real phones; re-check the live site with PageSpeed Insights.
- **Layout:** the five homepage preview cards use three columns on wide screens (with the final two centred), two on tablets (with the fifth centred), and one on phones.

---

## Where the information came from

| Detail | Source | Status |
|---|---|---|
| Address, postal code | Provided by you | Confirmed |
| Phone (416) 686-1104 | Google Maps listing | Owner to confirm |
| Hours: Mon–Sat 9 a.m.–8 p.m., Sun 10 a.m.–7 p.m. | Google Maps listing | Owner to confirm |
| Dine-in, takeout, "Order online" | Google Maps listing | Owner to confirm the ordering service |
| Rating 4.9 from 46 reviews | Google Maps, 16 Oct 2026 | Changes over time. Update or remove it. |
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
| User-supplied Ethiopian coffee and food table image | Homepage Our Story | `rehoboth-home-story-table-{800,1536}.webp` (1536×1024 source); responsive sizes in the split section. Treat it as illustrative until the owner confirms it shows the cafe. |
| User-supplied Ethiopian coffee service image | About page, Our Story | `rehoboth-about-coffee-service-{800,1536}.webp` (1672×941 source); responsive sizes and a 4:3 crop in the split layout. Treat it as illustrative until the owner confirms it shows the cafe. |
| User-supplied cafe interior image | Homepage hero | `rehoboth-home-interior-{700,1100,1536}.webp` (1536×1024 original); preloaded on the homepage and displayed behind the copy with separate desktop and phone overlays. Treat it as an illustrative image until the owner confirms it shows the cafe. |
| User-provided Ethiopian platter | Gallery and the Menu page banner | `ethiopian-platter-injera.webp` (1400×787) and `ethiopian-platter-injera-800.webp` (800×450); the gallery crop favours the food on the right. Phones get `ethiopian-platter-injera-mobile.webp` (640×582, centre crop) behind the menu banner's dark overlay. |
| Menu section photos | Breakfast and Lunch & Dinner on the Menu page | `firfir-rehoboth-{640,800,1200}.webp` and `slide-tibs-{640,800,1200}.webp`; the 800px versions were added for phones. |
| User-provided Rehoboth Cafe storefront | Home Visit Us, Visit & Contact, Gallery, and the Open Graph image on all six pages | `rehoboth-cafe-storefront.jpg`, `rehoboth-cafe-storefront.webp` (1600×684) and `rehoboth-cafe-storefront-800.webp` (800×342). The homepage business JSON-LD also points to the new JPG. |
| Selected generated Shekla Shiro image (option 1, bright woven tray) | Fourth homepage menu-preview card | `shekla-shiro-bright-woven-tray.jpg` and `shekla-shiro-bright-woven-tray.webp` (800×480). This is an illustration, not a photograph of a Rehoboth Cafe dish. |
| Kitfo photo by Vipon8 from Wikimedia Commons | Fifth homepage menu-preview card, homepage dish slideshow, Gallery, and Kitfo menu thumbnail | `kitfo-ayib-platter-1200.webp` (1200×675), `kitfo-ayib-platter-640.webp` (640×360) and `kitfo-ayib-platter-thumb.webp` (240×240). Cropped/resized from the [CC0 original](https://commons.wikimedia.org/wiki/File:Kitfo_(%E1%8A%AD%E1%89%B5%E1%8D%8E).jpg); credits and alt text were updated on the affected pages. |

The five-card menu preview shows Cappuccino, Tibs Firfir, Ful, Shiro and Kitfo. Its CSS grid uses three columns on wide screens with the last two centred, two on tablets with the last card centred, and one on phones. The Kitfo photo also replaces the older Kitfo image in the slideshow, Gallery and menu; the Special Kitfo and Bula Kitfo photos are separate assets.

Unused drafts and source files have been removed from `img/`; earlier versions remain in the git history.

**Checks completed for the current hero and palette:** checked image dimensions and homepage paths, verified that all six pages load the shared stylesheet and use the updated browser theme colour, checked representative text and button contrast, and ran `git diff --check`.

**Placeholders cut from the design mockup.** Replace these with the cafe's own photos:
- Cappuccino and Tibs Firfir cards
- Coffee pour on Gallery (the homepage and About page use supplied illustrative images)
- `slide-tibs-firfir-*` and `tibs-firfir-injera-thumb`
- Firfir (slideshow, Gallery, menu): `firfir-rehoboth-*`, illustration supplied by the site owner
- Cafe interior (homepage FAQ and Gallery): `rehoboth-cafe-interior*`, image supplied by the site owner

**Openly licensed photos**, shown for illustration and credited on each page:

| Used for | Title / author | Licence |
|---|---|---|
| Kitfo | ["Kitfo (ክትፎ)"](https://commons.wikimedia.org/wiki/File:Kitfo_(%E1%8A%AD%E1%89%B5%E1%8D%8E).jpg), Vipon8; cropped and resized | CC0 1.0 |
| Special Kitfo | "Kitfo, gomen and aybe", Arsupeee | CC BY-SA 4.0 |
| Tibs | "Siga Tibs", Khajitdadddy | CC BY-SA 4.0 |
| Chechebsa | "Chipchipsa Ethiopian dish 2014", Neftalem | CC BY-SA 4.0 |
| Bula Kitfo (kitfo bowl) | "Ethiopia traditional food", Yjohny | CC BY-SA 4.0 |
| Gallery (kitfo spread) | "Ethiopia most popular food", Yjohny | CC BY-SA 4.0 |
| Perrier | "PERRIER (10)", Dinkun Chen | CC BY-SA 4.0 |
| Genfo | "Ga'at food", Stefan Alfons Tzeggai | CC BY-SA 3.0 |
| Waffle | "Belgian waffle with fruitsalad and cream", Prashanthns | CC BY-SA 3.0 |
| Shiro on Menu and Gallery | "Taita and shiro", Temesgen Woldezion (ed. Merhawie W) | CC BY-SA 2.5 |
| Ginger Ale | "Ginger ale", Hisakazu Watanabe | CC BY-SA 2.0 |
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

## Still to do

Done: custom domain with HTTPS, search engines allowed (`robots.txt` and no `noindex` tags), clean URLs, and a printable menu QR code.

Done in Google Search Console (Oct 21, 2026):
- The domain property `rehobothcafe.com` is verified.
- `sitemap.xml` was submitted and read successfully, with 6 pages found.
- Indexing was requested for the homepage, Menu, About and Visit.
- The JSON-LD passed the Rich Results Test: a valid Local business item and a valid Organization item.
- The site icon is now served as real files, so Google can replace the old crest it had cached. That can take a few weeks.

1. **Google Business Profile.** As of Oct 21, 2026, the public Google Maps listing matches the site. It links to `https://rehobothcafe.com` and has the same address, phone, hours (Mon–Sat 9–8, Sun 10–7), rating (4.9, 46 reviews) and map pin. Its only category is "Cafe".
   - **Check who manages it (small risk).** The listing shows no "Claim this business" link, so someone has already claimed it. That may not be the owner; it could be the old developer. Whoever manages it can change the hours, phone and website shown on Google. The owner should sign in to their own Google account at <https://business.google.com> and search for the cafe:
     - If it opens for editing, the owner already manages it.
     - If it says "managed by someone else", click **Request access** and choose Owner. If there's no reply within about 7 days, Google usually lets the owner claim it directly.
   - **Once the owner has access:** remove anyone under **People and access** who shouldn't be there, add the category "Ethiopian restaurant", and keep the address, phone and hours identical to the site.
2. **Owner confirmation.** Ask the owner to confirm:
   - all 23 prices, and whether they include tax
   - which meat goes in Tibs Firfir
   - gluten-free options and vegetarian labels
   - spelling (Perrier, Misir Wot / Adess)
   - hours and phone
   - permission to show the Google rating
   - the online ordering service, and whether they take pickup orders by phone
   - their story, email or social media accounts (optional)
3. **Order link.** In `order.html`, replace the Google-listing button with the cafe's direct ordering link once it's known.
4. **Real photos.** The homepage interior image may be illustrative, and several dish images are generated illustrations. Get current owner photos in landscape and daylight where needed:
   - the storefront and interior (the Gallery says the interior is "coming soon")
   - the cappuccino and other coffee
   - every dish, especially the generated Shiro preview, Rehoboth Special, Kitfo, Tibs Firfir and Bula
5. **Watch indexing.** Every few days, search `site:rehobothcafe.com` on Google, or open **Indexing → Pages** in Search Console. All 6 pages should appear within about two weeks. After editing the JSON-LD, test it again at <https://search.google.com/test/rich-results>.

### Menu QR code
The printed table cards and sign open **https://rehobothcafe.com/menu**. The code only holds that address, so menu edits never need new codes. They stop working only if the menu page moves to a different address or the domain lapses (keep Namecheap auto-renew on). The print file is kept outside this folder.

---

## How to edit common things

- **Navigation:** the header and footer are repeated in all 6 pages. Change a link in every page.
- **Prices or dishes:** edit the `<li class="menu-item …">` blocks in `menu.html`. Search and filters update automatically.
- **Dish photo on the menu:**
  - Save a square 240×240 WebP in `img/`, plus 120 and 160px versions (`name-thumb-120.webp`, `name-thumb-160.webp`) and a JPEG copy of each (`.jpg`) for older iPhones.
  - Copy an existing dish's `<picture class="webp-fallback">…</picture>` and change the file names and alt text. For Bula, replace its `<span class="item-thumb item-thumb-icon">…</span>`.
- **Hours or phone:** keep these identical in every place they appear:
  - `visit.html` (address block, phone block and hours table)
  - the Visit Us section of `index.html`
  - the footer on all 6 pages
  - the "Visit us" box on `menu.html`
  - the About page facts
  - the JSON-LD in `index.html`
- **Gallery:** each photo is an `<li class="g-item" data-cat="food|coffee|cafe">` in `gallery.html`. Credit any new photo that isn't the cafe's own.
- **Homepage menu preview:** each card is an `<li class="card">` inside `.cards` in `index.html`. Update the image, alt text, name and description together. The responsive grid is in `styles.css`.
- **Slideshow:** each slide is a `<div class="slide" role="group">` inside `<div class="slides">` in `index.html` (not a list, so the group role stays valid for screen readers), with 1200px and 640px WebP images (16:9) and a matching dot button.
- **Amharic names:** the Amharic font in `fonts/noto-sans-ethiopic-subset.woff2` only contains the letters used today. After adding new Amharic words, regenerate it from Google Fonts with `family=Noto+Sans+Ethiopic:wght@500;600&text=` followed by every Amharic letter on the site, and update its `unicode-range` at the top of `styles.css`. Until then, new letters show in the phone's own Ethiopic font.
- **Adding any photo:** save it as WebP and also as JPEG with the same name, then use the `<picture>` pattern already on the page (WebP `<source>` first, JPEG `<img>`). Older iPhones only show the JPEG.
- **Menu layout on phones:** see "Menu on phones" above; keep a dish name and price on the first phone screen when changing the menu banner or filters.
- **Colours:** edit the shared tokens at the top of `styles.css` (`--red` is the current espresso-brown accent, alongside `--gold`, `--cream`, and their RGB companions). If the header palette changes, redraw the three icon files (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`) and update `<meta name="theme-color">` in all six HTML pages too.
