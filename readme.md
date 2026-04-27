# Rosato Classics

A minimal, dark-themed website for an independent sneaker brand.

## Structure

```
rosato-sneakers/
├── index.html          # Home page
├── collection.html     # Collection grid
├── product.html        # Product detail (dynamic via URL param)
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # Main JavaScript
└── images/             # Place your product images here
```

## Customization

### Replace Images
All images currently use Unsplash placeholders. Replace them by:
1. Add your images to the `images/` folder
2. Update the `src` attributes in HTML files:
   ```html
   <img src="images/your-sneaker.jpg" alt="Product Name">
   ```

### Update Product Data
In `product.html`, find the `products` object in the `<script>` tag and update:
- Name
- Price
- Description
- Image path
- Material
- Available sizes

### Update Contact Info
In `contact.html`, update:
- Email address
- Discord handle
- Phone number
- Hours

### Colors
In `css/styles.css`, update the CSS variables in `:root`:
```css
:root {
  --bg-primary: #0a0a0a;      /* Main background */
  --text-primary: #ffffff;     /* Main text */
  --accent: #ffffff;           /* Accent color */
  /* etc. */
}
```

## Running Locally

Simply open `index.html` in a browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node (if http-server is installed)
npx http-server
```

Then visit `http://localhost:8000`

## Pages

1. **Home** (`index.html`)
   - Hero with brand name and tagline
   - Featured products section
   - Quote section
   - About blurb

2. **Collection** (`collection.html`)
   - Grid of 6 products
   - Each links to product detail

3. **Product Detail** (`product.html?id=1`)
   - Dynamic content based on URL parameter
   - Large image, description, meta info
   - "Contact to Purchase" CTA (no cart)

4. **Contact** (`contact.html`)
   - Contact info (email, Discord, phone)
   - Contact form
   - Purchase process explanation

## Design Notes

- Dark theme: black, white, grey palette
- Minimalist layout with strong spacing
- Clean typography (Inter font)
- Mobile responsive
- No flashy animations or effects
- Subtle hover states only
