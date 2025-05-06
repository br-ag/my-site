// react
import "./App.css";
// import { useState } from "react";

// sections
import { Handle } from "./components/Handle";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Resume } from "./components/sections/Resume";
import { Nav } from "./components/Nav";
import { Socials } from "./components/Socials";
// import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <div
        id="test"
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{background: "radial-gradient(600px at 1101px 2701px, rgba(0, 0, 0, 0.15), transparent 80%);"}}
      ></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div className="test">
              <Handle />
              <Nav />
            </div>
            <Socials />
          </header>
          <main className="pt-24 lg:w-[52%] lg:py-24">
            <About />
            <Resume />
            <Projects />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
