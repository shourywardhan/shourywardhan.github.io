import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "DevSecOps Portfolio",
  DESCRIPTION: "DevOps Engineer specializing in secure infrastructure and automation.",
  AUTHOR: "Shourywardhan Rathore",
}

// Work Page
export const WORK: Page = {
  TITLE: "Experience",
  DESCRIPTION: "My professional journey in DevOps and cloud security.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing about DevOps, cloud security, and infrastructure automation.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Featured infrastructure and security automation projects.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search through articles, projects and infrastructure solutions.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Experience",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "shourywardhan24@gmail.com",
    HREF: "mailto:shourywardhan24@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "shourywardhan",
    HREF: "https://github.com/shourywardhan",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Shourywardhan Rathore",
    HREF: "https://www.linkedin.com/in/shourywardhan-rathore/",
  },
  {
    NAME: "Dev.to",
    ICON: "devto",
    TEXT: "@shourywardhan",
    HREF: "https://dev.to/shourywardhan",
  },
]