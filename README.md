# NextJS and HeroUI Dashboard Template Starter

You can deploy directly to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Siumauricio/nextui-dashboard-template)

**V1 Version (Stitches):** [https://v1-nextui-dashboard-template.vercel.app/](https://v1-nextui-dashboard-template.vercel.app/)  
**V1 Code:** [https://github.com/Siumauricio/nextui-dashboard-template/tree/v1](https://github.com/Siumauricio/nextui-dashboard-template/tree/v1)

This is a template for NextJS and **HeroUI**.

- **NextJS:** [https://nextjs.org/](https://nextjs.org/)
- **HeroUI:** [https://heroui.com/](https://heroui.com/) (or check out the [HeroUI GitHub repository](https://github.com/heroui-inc/heroui) for more details)

You can see the demo here: [https://nextui-dashboard-template.vercel.app/](https://nextui-dashboard-template.vercel.app/)  
To improve this template, please create a pull request or open an issue on our [Issues](https://github.com/Siumauricio/nextui-dashboard-template/issues) or [Pull Requests](https://github.com/Siumauricio/nextui-dashboard-template/pulls) pages.

### Dark Mode
![Dashboard Dark Mode](./public/dark.png)

### Light Mode
![Dashboard Light Mode](./public/light.png)

- Dark Mode Support
- Fully Responsive
- Home Page with Charts
- Accounts Page
- More pages coming soon...

```
├── components
│   ├── accounts            # Accounts components
│   ├── charts              # Charts components
│   ├── breadcrumb          # Component for breadcrumbs
│   ├── home                # Home page components
│   ├── layout              # Layout components
│   ├── navbar              # Navbar components
│   ├── sidebar             # Sidebar components
│   ├── table               # Table components
│   ├── styles              # Reusable style components
│   ├── icons               # Icon components
│   ├── hooks               # Custom hooks
├── app                     # Application routes and documentation
│   ├── accounts            # Accounts route
│       ├── page.tsx        # Accounts page
│   ├── page.tsx            # Entry point for the app
│   ├── layout.tsx          # Global layout for all pages
│   ├── providers.tsx       # Theme provider setup
│   ├── more...             # Additional pages coming soon
└──
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.