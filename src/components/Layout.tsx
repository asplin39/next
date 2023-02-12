import { ReactNode } from "react"
import { Header } from "./Header"
import { SideMenu } from "./SideMenu"

type LayoutType = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutType) => {

  return (
    <div>
      <Header />
      <div className="flex">
        <SideMenu />
        <main className="prose flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}