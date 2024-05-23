import { Note, Notepad, House, Browsers, CalendarDots, Star, CheckSquare, Trash } from "@phosphor-icons/react/dist/ssr";

export function Sidebar() {
    return (
        <aside className="w-72 text-black p-4 border-r border-gray-200">
            <h1 className="text-2xl font-bold md:pl-4 md:pt-4 flex items-center text-indigo-700">
                <Notepad size={26} />
                NoteMate
            </h1>

            <nav className="mt-16">
                <ul>
                    <li className="pl-4 pt-5 text-gray-700 hover:border-b hover:border-indigo-700">
                        <a href="#" className="text-base font-medium flex items-center hover:text-indigo-700 hover:font-bold">
                            <House size={24} className="mr-1 mb-1" />
                            Home
                        </a>
                    </li>
                    <li className="pl-4 pt-5 text-gray-700 hover:border-b hover:border-indigo-700">
                        <a href="#" className="text-base font-medium flex items-center hover:text-indigo-700 hover:font-bold">
                            <Note size={24} className="mr-1 mb-1" />
                            Notes
                        </a>
                    </li>
                    <li className="pl-4 pt-5 text-gray-700 hover:border-b hover:border-indigo-700">
                        <a href="#" className="text-base font-medium flex items-center hover:text-indigo-700 hover:font-bold">
                            <Browsers size={24} className="mr-1 mb-1" />
                            Categorias
                        </a>
                    </li>
                    <li className="pl-4 pt-5 text-gray-700 hover:border-b hover:border-indigo-700">
                        <a href="#" className="text-base font-medium flex items-center hover:text-indigo-700 hover:font-bold fill">
                            <CalendarDots size={24} className="mr-1 mb-1" />
                            Calendario
                        </a>
                    </li>
                    <li className="pl-4 pt-5 text-gray-700 hover:border-b hover:border-indigo-700">
                        <a href="#" className="text-base font-medium flex items-center hover:text-indigo-700 hover:font-bold">
                            <Star size={24} className="mr-1 mb-1" />
                            Favoritos
                        </a>
                    </li>
                    <li className="pl-4 pt-5 text-gray-700 hover:border-b hover:border-indigo-700">
                        <a href="#" className="text-base font-medium flex items-center hover:text-indigo-700 hover:font-bold">
                            <CheckSquare size={24} className="mr-1 mb-1" />
                            Checklist
                        </a>
                    </li>
                    <li className="pl-4 pt-5 text-gray-700 hover:border-b hover:border-indigo-700">
                        <a href="#" className="text-base font-medium flex items-center hover:text-indigo-700 hover:font-bold">
                            <Trash size={24} className="mr-1 mb-1" />
                            Lixeira
                        </a>
                    </li>
                </ul>
            </nav>

            <footer className="absolute bottom-0 p-4 text-gray-700">
                <p className="text-sm">Feito com ❤️ por <a href="https://github.com/LucSena" className="text-indigo-700">Lucas Sena</a></p>
                <p className="text-sm">© {new Date().getFullYear()} NoteMate</p>
            </footer>
        </aside>
    )
}