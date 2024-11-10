/* 11_09_24    app/[locale]/services/page.tsx */
import { Metadata } from "next";
import { FC, ReactElement } from "react";
import { Link } from "@/i18n/routing";
interface ServicesProps {
  // Definuj další potřebné props, pokud jsou
}

export const metadata: Metadata = {
  title: "Services"
};

const Services: FC<ServicesProps> = (): ReactElement => {
  const services = ["manicure", "pedicure", "eyelashes"];

  return (
    <>
      <main className='container mx-auto pt-[5rem]'>
        <h1 className='text-9xl py-10 mb-5'> Services </h1>

        <div className='flex flex-wrap -mx-4'>
          {services.map((service, idx) => (
            <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-4' key={idx}>
              <Link
                href={`/services/${service}`}
                className='h-[14rem] relative shadow-lg group cursor-pointer overflow-hidden'
              >
                <div className='overflow-hidden'>
                  <img
                    src={`https://via.assets.so/album.png?id=${(idx + 3) * 2}&q=95&w=360&h=360&fit=fill`}
                    alt='Card image'
                    className='w-full h-full object-cover filter group-hover:grayscale-0 grayscale transition duration-1000 group-hover:scale-105'
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-tl from-black to-transparent'>
                  <div className='absolute right-4 bottom-4 text-white bg-primary px-3 py-1 bg-opacity-45 group-hover:bg-opacity-90 transition duration-300'>
                    <h3 className='text-3xl font-semibold'> {service}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Services;
