import "../../_app/styles/main.scss";
import { notFound } from "next/navigation";
import {NextIntlClientProvider} from "next-intl"
import { locales } from "@/shared/i18n";

export default function LocaleLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode,
  params: {locale: string}
}>) {

  if(!locales.includes(locale)) {
    notFound()
  }

  const messages = {}

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
