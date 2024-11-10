import { useTranslations } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phoenix Beauty"
};

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main className='container mx-auto  '>
      <div className='flex min-h-screen justify-center items-center'>
        <h1 className='text-2xl md:text-9xl'> {t("title")} </h1>
      </div>
    </main>
  );
}
