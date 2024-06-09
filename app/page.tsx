"use client"

import Image from "next/image";
import Sections from "./components/Sections";
import Header from "./components/layout/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-[90%] mx-auto">
      <Header />
      <Sections />    
    </main>
  );
}
