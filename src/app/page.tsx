import { Sidebar } from '@/components/Home/Sidebar';
import { Header } from '@/components/Home/Header';
import { HeaderNotes } from '@/components/Notes/Header';
import { Main } from '@/components/Home/Main';
import { MainNotes } from '@/components/Notes/Main';

import { Notepad } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <HeaderNotes />
        <MainNotes />
      </div>
    </div>
  );
}
