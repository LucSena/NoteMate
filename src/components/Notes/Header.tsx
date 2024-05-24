import { Bell, MagnifyingGlass, List, PenNib, Note } from "@phosphor-icons/react/dist/ssr";

export function HeaderNotes() {
    return (
        <nav className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <Note size={24} />
                <h2 className="text-lg font-semibold">Notes</h2>
            </div>

            <input type="text" className="text-gray-700 p-4 rounded-md border border-gray-200 hover:bg-gray-200 w-8/12" placeholder="Pesquise seu Card..." />

            <div className="flex items-center">
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