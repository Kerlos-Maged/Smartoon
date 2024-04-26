import { ReactNode } from "react";
import SideBar from "../../../../components/SideBar";

const HomeLayout = (
  { children } : { children : ReactNode }
) => {
  return (
    <main>
      <SideBar />
      { children }
    </main>
  )
}

export default HomeLayout
