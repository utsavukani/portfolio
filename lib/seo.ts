import type { Metadata } from "next";
import { profile } from "@/content/profile";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://utsavukani.vercel.app";

export const siteConfig = {
  name: profile.name,
  title: `${profile.name} | Portfolio`,
  description: profile.subline,
  url: siteUrl,
};

export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: siteConfig.title,
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: profile.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
    },
    ...overrides,
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: profile.emails[0],
    url: siteConfig.url,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.institute,
    },
    sameAs: [
      profile.links.github,
      profile.links.linkedin,
      profile.links.codeforces.url,
      profile.links.leetcode.url,
    ],
  };
}
