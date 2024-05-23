import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

import { Notepad } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <Main />
      </div>
    </div>
  );
}
