# anir.me

[![CI](https://github.com/anir/anir.github.io/workflows/CI/badge.svg)](https://github.com/anir/anir.github.io/actions?query=workflow%3ACI+branch%3Amaster)

My personal [website](https://anir.me) with a list of my projects that help people learn and blog posts about life, web-development, and machine-learning.

![anir.me](https://anir.me/static-assets/images/site-meta-image-01.png)

## Development

The website is built on [next js](https://www.nextjs.com/).

### Running the project locally

To run the project locally in development mode on [http://localhost:8000](http://localhost:8000):

```bash
npm run develop
```

View GraphiQL, an in-browser IDE, to explore your site's data and schema on [http://localhost:8000/___graphql](https://localhost:8000/___graphql)

To build the production version of the project:

```bash
npm run build
```

Serve the production build for testing on [http://localhost:9000](http://localhost:9000):

```bash
npm run serve
```

To do ESLint and Type checking:

```bash
npm run lint
npm run type
```

### Working with icons

Use [react-icons.github.io](https://react-icons.github.io/react-icons) to search for available icons.

### Styling components

Use [tailwindcss.com](https://tailwindcss.com) to search for available CSS classes.

### Custom Domain Support

To serve the [anir.github.io](https://anir.github.io) web-site on a custom domain [anir.me](https://anir.me) make sure that the `public` branch has `CNAME` file in the root folder. For more details read [this](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site).
