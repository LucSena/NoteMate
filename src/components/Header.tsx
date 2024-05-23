import { Bell, MagnifyingGlass, List, PenNib } from "@phosphor-icons/react/dist/ssr";

export function Header() {
    return (
        <nav className="p-4 border-b border-gray-200 flex justify-between items-center">

            <a href="#" className="ml-4 text-gray-700 hover:text-indigo-700 hover:font-bold hover:border-indigo-700 flex items-center p-4 border rounded-md border-gray-200">
                <PenNib size={24} className="mr-2"/>
                Customize
            </a>

            <input type="text" className="text-gray-700 p-4 rounded-md border border-gray-200 hover:bg-gray-200 w-4/12" placeholder="Faça suas anotações..." />

            <div className="flex items-center">
                <a href="#" className="text-gray-700 hover:text-indigo-700 hover:font-bold">
                    <MagnifyingGlass size={24} className="hover:text-indigo-700" />
                </a>
                <a href="#" className="text-gray-700 hover:text-indigo-700 hover:font-bold ml-4">
                    <Bell size={24} className="hover:text-indigo-700" />
                </a>
                <a href="#" className="text-gray-700 hover:text-indigo-700 hover:font-bold ml-4 mr-4">
                    <List size={24} className="hover:text-indigo-700" />
                </a>
            </div>
        </nav>
    )
}