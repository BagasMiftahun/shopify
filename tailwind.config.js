/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      "colors": {
       "neutral": {
        "100": "#ffffff",
        "200": "#f9fafb",
        "300": "#f3f4f6",
        "400": "#e4e4e7",
        "500": "#cccccc",
        "600": "#71717a",
        "700": "#42474c",
        "800": "#1b1f21",
        "900": "#000000"
       },
       "primary": {
        "100": "#eefab3",
        "200": "#4ade80",
        "300": "#0f7457"
       },
       "secondary": {
        "100": "#effbf7",
        "200": "#d4f2ee",
        "300": "#84c6c5",
        "400": "#08445e",
        "500": "#2f3a3e"
       }
      },
      "fontSize": {
       "xs": "0.75rem",
       "sm": "0.875rem",
       "base": "1rem",
       "lg": "1.125rem",
       "xl": "1.25rem",
       "2xl": "1.375rem",
       "3xl": "1.5rem",
       "4xl": "1.625rem",
       "5xl": "1.875rem",
       "6xl": "2.5rem",
       "7xl": "2.875rem",
       "8xl": "3.5rem",
       "9xl": "4rem",
       "10xl": "6rem"
      },
      "fontFamily": {
       "shopify-sans": "Shopify Sans Web Bold Regular, sans-serif"
      },
      "boxShadow": {
       "100": "0px 1px 2px 0px rgba(0,0,0,0.05)",
       "200": "0px 4px 6px 0px rgba(0,0,0,0.1)",
       "300": "0px 8px 48px 0px rgba(238,238,238,1), 0px 4px 8px 0px rgba(66,71,76,0.06), 0px 0px 1px 0px rgba(66,71,76,0.48)",
       "400": "0px 8px 48px 0px rgba(238,238,238,1), 0px 4px 8px 0px rgba(66,71,78,0.06), 0px 0px 1px 0px rgba(66,61,76,0.48)"
      },
      "borderRadius": {
       "none": "0",
       "xs": "0.125rem",
       "sm": "0.21071429550647736rem",
       "default": "0.25rem",
       "lg": "0.3125rem",
       "xl": "0.31607145071029663rem",
       "2xl": "0.3687500059604645rem",
       "3xl": "0.5rem",
       "4xl": "0.625rem",
       "5xl": "0.6321429014205933rem",
       "6xl": "0.75rem",
       "7xl": "0.7901785969734192rem",
       "8xl": "0.875rem",
       "9xl": "1rem",
       "10xl": "1.125rem",
       "11xl": "1.179978847503662rem",
       "12xl": "1.1799790859222412rem",
       "13xl": "1.25rem",
       "14xl": "1.5rem",
       "15xl": "1.875rem",
       "16xl": "1.9236875772476196rem",
       "17xl": "2.1875rem",
       "full": "9999px"
      },
    }
  },
  plugins: [],
}

