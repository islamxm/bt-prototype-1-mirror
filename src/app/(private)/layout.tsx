import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import { AppFooter } from "@/widgets/appFooter";
import { AppHeader } from "@/widgets/appHeader";
import { MainLayout } from "@/widgets/mainLayout";

export default async function PrivateLayout({children}: PropsWithChildren) {
  const session = await getServerSession()
  if(!session) {
    redirect('/auth')
  }
  return (
    <MainLayout header={<AppHeader/>} footer={<AppFooter/>}>
      {children}
    </MainLayout>
  )
} 
