# Shanu Advertising & Design Website

Static English corporate website for a signage and advertising manufacturing company in Saudi Arabia.

## Run Locally

1. Open the `factory-portfolio` folder in VS Code.
2. Install the VS Code extension **Live Server**.
3. Right-click `index.html`.
4. Choose **Open with Live Server**.

You can also open `index.html` directly in a browser, but Live Server is recommended for consistent local testing.

## Replace Images

Use the existing folders:

- Hero image: `assets/hero/hero.jpg`
- Optional hero video: `assets/videos/hero-video.mp4`
- Product images: `assets/products/`
- Owner image: `assets/owner-photo/owner.jpg`
- WhatsApp QR: `assets/whatsapp-qr/whatsapp-qr.png`
- Instagram QR: `assets/instagram-qr/instagram-qr.png`

Keep file names the same if you want the website to update without code changes.

## Change Company Info

- Edit visible text translations in `js/lang.js`.
- Edit phone, email, and WhatsApp number in `contact.html` and `js/script.js`.
- Update SEO URLs in `sitemap.xml`, `robots.txt`, and the JSON-LD schema in `index.html`.

## Connect Web3Forms

1. Create a free access key at Web3Forms.
2. Open `contact.html`.
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in the form attribute:

```html
data-access-key="YOUR_WEB3FORMS_ACCESS_KEY"
```

The form uses Web3Forms with loading, success, and error states. No backend is required.

## Deploy

### GitHub Pages

1. Push the `factory-portfolio` folder to a GitHub repository.
2. Go to repository **Settings > Pages**.
3. Select the branch and root folder.
4. Save and wait for the Pages URL.

### Netlify

1. Drag the `factory-portfolio` folder into Netlify Drop, or connect your GitHub repository.
2. Set the publish directory to `factory-portfolio` if the repo contains other files.
3. Deploy.

### Vercel

1. Import the project in Vercel.
2. Set the output or root directory to `factory-portfolio`.
3. Deploy as a static site.

### Shared Hosting / cPanel

1. Open File Manager in cPanel.
2. Upload all contents of `factory-portfolio` into `public_html`.
3. Make sure `index.html` is in the root of `public_html`.

## Notes

- English is the active UI language.
- The site sets `lang="en"` and `dir="ltr"` on every page.
- Bootstrap 5, AOS, and Bootstrap Icons are loaded from CDN.
