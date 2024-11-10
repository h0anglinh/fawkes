import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = [
  { label: "English", code: "en" },
  { label: "Čeština", code: "cs" },
  { label: "Tiếng Việt", code: "vi" }
];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales.map(i => i.code),

  // Used when no locale matches
  defaultLocale: "cs",
  localeDetection: true,
  localePrefix: "as-needed"

  // Define the structure of your app's URL paths
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
