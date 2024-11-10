/* 11_09_24    app/[locale]/services/[category]/page.tsx */
import { FC, ReactElement } from "react";

interface PageProps {
  // Definuj další potřebné props, pokud jsou
  params: {
    category: string;
  };
}

const Page: FC<PageProps> = async ({ params }): Promise<ReactElement> => {
  const paramsValue = await params;
  return (
    <>
      <main className='container mx-auto pt-[5rem]'>
        <h1 className='text-9xl py-10 mb-5'> {paramsValue.category} </h1>
      </main>
    </>
  );
};

export default Page;
