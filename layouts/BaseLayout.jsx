import { Outlet } from 'react-router-dom';
import { Navbar } from "../components/common/index";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default BaseLayout
