import { Bell, MagnifyingGlass, List, PenNib, Note, PlusCircle, SelectionAll, CalendarDot, CalendarDots, Calendar  } from "@phosphor-icons/react/dist/ssr";

export function MainNotes() {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 rounded-full border border-gray-200 p-3 bg-amber-200 hover:bg-amber-400">
                        <SelectionAll size={24} />
                        <h2 className="text-lg font-semibold">Todos</h2>
                    </div>
                    <div className="flex items-center space-x-2 rounded-full border border-gray-200 p-3 hover:bg-amber-400">
                        <CalendarDot size={24} />
                        <h2 className="text-lg font-semibold">Hoje</h2>
                    </div>
                    <div className="flex items-center space-x-2 rounded-full border border-gray-200 p-3 hover:bg-amber-400">
                        <CalendarDots size={24} />
                        <h2 className="text-lg font-semibold">Semana</h2>
                    </div>
                    <div className="flex items-center space-x-2 rounded-full border border-gray-200 p-3 hover:bg-amber-400">
                        <Calendar size={24} />
                        <h2 className="text-lg font-semibold">Anual</h2>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <PlusCircle size={24} />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-1">
                <List size={64} />
                <h2 className="text-lg font-semibold">No notes yet</h2>
                <p className="text-sm text-gray-500">Create a new note by clicking the button below</p>
                <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md">Create a new note</button>
            </div>
        </div>
    )
}