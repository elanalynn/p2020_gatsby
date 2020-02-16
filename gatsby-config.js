module.exports = {
  siteMetadata: {
    title: `Elana Kopelevich - Essays | Stories | Art | Code`,
    name: ``,
    siteUrl: `https://elanalynn.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/elanalynn`
      },
      {
        name: `github`,
        url: `https://github.com/elanalynn`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/elanalynn`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/elanalynn/`
      }
    ]
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elana Kopelevich`,
        short_name: `ElanaK`,
        start_url: `/`,
        background_color: `coral`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
