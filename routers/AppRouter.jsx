import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Error, ViewGameAll, ViewGameDetails } from '../views/index';
import Login from '../views/Login'
import Signup from '../views/Signup'
import ForgotPassword from '../views/ForgotPassword'
import ResetPassword from '../views/ResetPassword'
import BaseLayout from "../layouts/BaseLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <Login /> } />
        <Route path = "/signup" element = { <Signup /> } />
        <Route path = "/forgotPassword" element = { <ForgotPassword /> } />
        <Route path = "/resetPassword/:token" element = { <ResetPassword /> } />
        <Route path = "/" element = { <BaseLayout /> }>
          <Route path = "/home" element = { <Home /> } />
          <Route path = "/error" element = { <Error /> } />
          <Route path = "/games" element = { <ViewGameAll /> } />
          <Route path = "/games/:gameId" element={<ViewGameDetails />} />
          <Route path = "*" element = { <Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
