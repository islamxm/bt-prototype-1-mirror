import "../../_app/styles/main.scss";
import { notFound } from "next/navigation";
import {NextIntlClientProvider} from "next-intl"
import { locales } from "@/shared/i18n";

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{locale: string}>
}>) {
  const {locale} = await params
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
