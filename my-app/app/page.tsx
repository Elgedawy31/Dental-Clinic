'use client'
import { About } from "./components/About";
import { Main } from "./components/Home";
import { Navbar } from "./components/Navbar";
import './all.min.css'
import Footer from "./components/Footer";

export default function Home() {

const userData = JSON.parse(localStorage.getItem('user') || "{}");

  return (
    <div >
      <Navbar data={userData.data}/>
      <Main  />
      <About />
      <Footer />
    </div>
  );
}
