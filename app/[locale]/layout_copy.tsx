import "./globals.css";
import { NextIntlClientProvider, IntlProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import NavBar from "@/components/layout/NavBar";
import { Metadata } from "next";
import TheFooter from "@/components/layout/TheFooter";
export async function generateMetadata(): Promise<Metadata> {
  const titleName = "Phoenix Beauty";
  return {
    title: titleName,
    keywords: ["manicure", "pedicure", "eyelashes"],
    openGraph: {
      title: titleName,
      type: "website"
    }
  };
}

async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const lang = (await params).locale && "en";
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(lang as string)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const navItems = [
    { label: "home", href: "/" },
    { label: "contacts", href: "/contacts" },
    { label: "services", href: "/services" }
  ];

  return (
    <html>
      <body>
        <NextIntlClientProvider messages={messages}>
          <NavBar items={navItems} fixed />
          {children}
          <TheFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
export default LocaleLayout;
