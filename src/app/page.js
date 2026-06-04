import React from 'react'
import Home from'./Components/Home';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import InnerPage from './Components/Inner-page';
function page() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <InnerPage />
      <Footer />
    </div>
  )
}

export default page
