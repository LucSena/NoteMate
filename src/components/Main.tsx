import { PlusSquare, DotsThreeVertical, FolderSimplePlus } from "@phosphor-icons/react/dist/ssr";

export function Main() {
    return (
        // {/* VAI TER 4 DIVS/ABAS, 
        // 1* - UMA VAI SER A DE "NOTAS", ELA VAI OCUPAR 2/5 DO WIDTH DA TELA E O HEIGHT VAI ATÉ O FINAL E DENTRO DELA VAI TER VARIOS CARDS DAS ANOTAÇÕES
        // 2* - ELA VAI OCUPAR O 3/5 DO WIDTH DA TELA E VAI E DE HEIGHT VAI FICAR EM 50% DA TELA, VAI SER A ABA DE CHECKLIST, AONDE VAI TER OS CARDS DA CHECKLIST
        // 3* - VAI FICAR EM BAIXO DA ABA DE CHECKLIST, VAI OCUPAR METADE DO 3/5 DO WIDTH DA TELA E VAI OCUPAR METADE DO HEIGHT DA TELA, VAI SER A ABA DE CALENDARIO
        // 4* - VAI FICAR AO LADO DA ABA DE CALENDARIO, OCUPANDO O RESTANTE DO CHECKLIST, VAI SER UMA ABA ESCRITA "DRAFT PAD" E VAI TER UM BOX ESCRITO Comece a escrever, para a pessoa digitar
        // */}

        <div className="w-full h-full p-4 flex flex-col md:flex-row bg-slate-100">
            <div className="w-full md:w-2/5 h-full bg-white border border-gray-200 rounded-lg mb-4 md:mb-0 flex justify-between">
                <h1 className="p-5 font-semibold text-lg">Notas</h1>
                <div className="flex">
                    <a href="#" className="hover:text-indigo-700 mr-4 mt-4">
                        <PlusSquare size={24} />
                    </a>
                    <a href="#" className="hover:text-indigo-700 mr-4 mt-4">
                        <DotsThreeVertical size={24} weight="bold" />
                    </a>
                </div>

            </div>

            <div className="flex flex-col w-full md:w-3/5 ml-4">
                <div className="w-full h-2/3 bg-white border border-gray-200 rounded-lg mb-4 flex justify-between">
                    <h1 className="p-5 font-semibold text-lg">Checklist</h1>
                    <div className="flex">
                        <a href="#" className="hover:text-indigo-700 mr-4 mt-4">
                            <FolderSimplePlus  size={24} />
                        </a>
                        <a href="#" className="hover:text-indigo-700 mr-4 mt-4">
                            <DotsThreeVertical size={24} weight="bold" />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
                    <div className="bg-white border border-gray-200 rounded-lg flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Calendario</h1>
                        <div className="flex">
                            <a href="#" className="hover:text-indigo-700 mr-4 mt-4">
                                <DotsThreeVertical size={24} weight="bold" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Draft Pad</h1>
                        <div className="flex">
                            <a href="#" className="hover:text-indigo-700 mr-4 mt-4">
                                <DotsThreeVertical size={24} weight="bold" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}