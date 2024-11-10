"use client";
import { FC } from "react";
import { Link, useRouter, usePathname, locales } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
interface componentProps extends React.PropsWithChildren {
  fixed?: boolean;
  items: { label: string; href: string }[];
}

const NavBar: FC<componentProps> = ({ fixed, items }) => {
  const navBarClassName = `bg-white bg-opacity-70 backdrop-blur-md w-full z-50 ${
    fixed ? "fixed top-0 left-0" : ""
  }`;
  const pathName = usePathname();
  const router = useRouter();
  const switchLocale = (locale: string) => {
    router.replace(pathName, { locale: locale });
  };

  const t = useTranslations("NavBar");

  const locale = useLocale();

  return (
    <nav className={navBarClassName}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex-shrink-0'>
            <Link href='/' className='text-xl font-semibold text-gray-800'>
              PH
            </Link>
          </div>
          <div className='flex space-x-4'>
            {items.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className='text-gray-800 hover:text-gray-600 p-2.5'
              >
                {t(item.label)}
              </Link>
            ))}
            <select
              onChange={e => switchLocale(e.target.value)}
              className='text-gray-900 text-sm '
              defaultValue={locale || "cs"}
            >
              {locales.map(locale => (
                <option key={locale.code} value={locale.code}>
                  {locale.code}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
