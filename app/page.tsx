import Image from "next/image";
import Sections from "./components/Sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-[90%] mx-auto">
      <Sections />    
    </main>
  );
}
