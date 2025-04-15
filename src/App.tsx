// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// react
import "./App.css";
// import { useState } from "react";

// sections
import { Handle } from "./components/Handle";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Resume } from "./components/sections/Resume";
import { Nav } from "./components/Nav";
import { Socials } from "./components/socials";
// import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <div className="test1 w-full">
          <Handle />
          <Nav />
          <Socials />
        </div>
        <div className="test2 w-full grid gap-4">
          <About />
          <Resume />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
