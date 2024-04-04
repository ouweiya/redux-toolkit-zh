import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { linkDocblocks, transpileCodeblocks } from "remark-typescript-tools";

const config: Config = {
  baseUrl: "/",
  favicon: "img/favicon/favicon.ico",
  tagline:
    "The official, opinionated, batteries-included toolset for efficient Redux development",
  title: "Redux Toolkit",
  url: "https://redux-toolkit.js.org",
  customFields: {
    repoUrl: "https://github.com/reduxjs/redux-toolkit",
  },
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onBrokenAnchors: "ignore",
  organizationName:'ouweiya',
  projectName:'redux-toolkit-zh',
  trailingSlash: false,

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "./docs",
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          include: [
            "{api,assets,introduction,migrations,rtk-query,tutorials,usage}/**/*.{md,mdx}",
          ],
          remarkPlugins: [
            [
              linkDocblocks,
              {
                extractorSettings: {
                  tsconfig: "./docs/tsconfig.json",
                  basedir: "./packages/toolkit/src",
                  rootFiles: [
                    "index.ts",
                    "query/index.ts",
                    "query/createApi.ts",
                    "query/react/index.ts",
                    "query/react/ApiProvider.tsx",
                  ],
                },
              },
            ],
          ],
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/redux-logo-landscape.png",
    navbar: {
      title: "Redux Toolkit",
      logo: {
        alt: "Redux Logo",
        src: "img/redux.svg",
      },
      items: [
        {
          to: "introduction/getting-started",
          label: "Getting Started",
          position: "right",
        },
        { to: "tutorials/overview", label: "Tutorials", position: "right" },
        { to: "usage/usage-guide", label: "Usage Guide", position: "right" },
        { to: "api/configureStore", label: "API", position: "right" },
        { to: "rtk-query/overview", label: "RTK Query", position: "right" },
        {
          href: "https://github.com/reduxjs/redux-toolkit",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Redux Logo",
        src: "img/redux_white.svg",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "introduction/getting-started",
            },
            {
              label: "Tutorials",
              to: "tutorials/overview",
            },
            {
              label: "Usage Guide",
              to: "usage/usage-guide",
            },
            {
              label: "API Reference",
              to: "api/configureStore",
            },
            { to: "rtk-query/overview", label: "RTK Query" },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "http://stackoverflow.com/questions/tagged/redux",
            },
            {
              label: "Discord",
              href: "https://discord.gg/0ZcbPKXt5bZ6au5t",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://www.github.com/reduxjs/redux-toolkit",
            },
            {
              html: `
                <a href="https://www.netlify.com">
                  <img
                    src="https://www.netlify.com/img/global/badges/netlify-light.svg"
                    alt="Deploys by Netlify"
                  />
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © 2015–${new Date().getFullYear()} Dan Abramov and the Redux documentation authors.`,
    },
    prism: {
      theme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;