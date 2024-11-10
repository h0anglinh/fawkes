import { FC } from "react";
import { ParsedUrlQuery } from "querystring";
import { routing } from "@/i18n/routing";
import ContactForm from "@/components/forms/contactForm";
import ContactBox from "@/components/contacts/contactBox";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import MapComponent from "@/components/contacts/locationMap";
interface PageProps {
  params?: ParsedUrlQuery;
  searchParams?: ParsedUrlQuery;
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

type GenerateMetadataParams = {
  params: { locale: string };
};
export async function generateMetadata({ params }: GenerateMetadataParams): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "Contacts" });

  return {
    title: t("title"),
    openGraph: {
      title: t("title")
    }
  };
}

const AboutPage: FC<PageProps> = async ({ params }) => {
  const paramsVal = await params;
  const locale = paramsVal?.locale;
  const t = await getTranslations({ locale, namespace: "Contacts" });
  return (
    <div className='container mx-auto pt-[5rem]'>
      <h1 className='text-9xl py-10 mb-5'> {t("title")} </h1>
      <div className='flex flex-wrap justify-center items-center bg-gray-50'>
        <div className=' w-full md:w-1/4 px-0'>
          <ContactBox>
            <div className='text-center'>
              <h3 className='text-xl mb-3'> {t("phone")} </h3>
              <p> +420 774 230 </p>
            </div>
          </ContactBox>
        </div>

        <div className=' w-full md:w-1/4 px-0'>
          <ContactBox>
            <div>
              <h3 className=' text-center'> {t("email")} </h3>
            </div>
          </ContactBox>
        </div>
        <div className=' w-full md:w-1/4 px-0'>
          <ContactBox>
            <div>
              <h3 className='text-center'>Address</h3>
            </div>
          </ContactBox>
        </div>
        <div className=' w-full md:w-1/4 px-0'>
          <ContactBox>
            <div className='text-center '>
              <h3 className=' text-xl mb-3'> {t("address")} </h3>
              <p> Chodska 13, Praha </p>
            </div>
          </ContactBox>
        </div>

        <div className='w-full md:w-3/5 px-0'>
          <ContactForm />
        </div>
        <div className='w-full md:w-2/5 px-0'>{/* <MapComponent /> */}</div>
      </div>
    </div>
  );
};

export default AboutPage;
