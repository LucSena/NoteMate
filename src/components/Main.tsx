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
            <div className="w-full md:w-2/5 h-full bg-white border border-gray-200 rounded-lg mb-4 md:mb-0">
                <div className="flex justify-between">
                    <h1 className="p-6 pb-2 font-semibold text-lg">Notas</h1>
                    <div className="flex">
                        <a href="#" className="hover:text-indigo-700 mr-4 mt-4">
                            <PlusSquare size={24} />
                        </a>
                        <a href="#" className="hover:text-indigo-700 mr-4 mt-4">
                            <DotsThreeVertical size={24} weight="bold" />
                        </a>
                    </div>
                </div>

                {/* Ajuste a propriedade gap para reduzir o espaçamento vertical e horizontal */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 w-full max-h-[calc(100vh-12rem)] overflow-y-auto">
                    <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                        <div className="flex justify-between">
                            <h1 className="p-5 font-semibold text-lg">Férias em Paris ✈</h1>
                            <div className="flex justify-end p-5">
                                <a href="#" className="hover:text-indigo-700">
                                    <DotsThreeVertical size={24} weight="bold" />
                                </a>
                            </div>
                        </div>
                        {/* Adicione um parágrafo com o conteúdo da anotação */}
                        <p className="p-5 text-gray-500">
                            Vou passar as férias em Paris com a minha família. Vamos visitar a Torre Eiffel, o Museu do Louvre e o Palácio de Versalhes. Vai ser incrível!
                        </p>
                        {/* de um lado vai ter a categoria e do outro direito vai ter a data */}
                        <div className="p-4 px-6 flex justify-between mt-auto">
                            <div className="flex items-center border border-violet-700 bg-violet-200 text-violet-700 rounded p-1 px-2">
                                <span className="text-sm">Viagem</span>
                            </div>

                            <span className="text-gray-500 pt-1">10 Sept</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                        <div className="flex justify-between">
                            <h1 className="p-5 font-semibold text-lg">Tarefa de casa 📝</h1>
                            <div className="flex justify-end p-5">
                                <a href="#" className="hover:text-indigo-700">
                                    <DotsThreeVertical size={24} weight="bold" />
                                </a>
                            </div>
                        </div>

                        <p className="p-5 text-gray-500">
                            Fazer a lição de matemática da página 50 até a 60. Estudar para a prova de ciências.
                        </p>

                        <div className="p-4 px-6 flex justify-between mt-auto">
                            <div className="flex items-center border border-yellow-700 bg-yellow-200 text-yellow-700 rounded p-1 px-2">
                                <span className="text-sm">Escola</span>
                            </div>

                            <span className="text-gray-500 pt-1">08 Sept</span>
                        </div>

                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                        <div className="flex justify-between">
                            <h1 className="p-5 font-semibold text-lg">Reunião com o time🥂</h1>
                            <div className="flex justify-end p-5">
                                <a href="#" className="hover:text-indigo-700">
                                    <DotsThreeVertical size={24} weight="bold" />
                                </a>
                            </div>
                        </div>

                        <p className="p-5 text-gray-500">
                            Reunião com o time de desenvolvimento para discutir o planejamento do próximo sprint, definir as tarefas e metas.
                        </p>

                        <div className="p-4 px-6 flex justify-between mt-auto">
                            <div className="flex items-center border border-blue-700 bg-blue-200 text-blue-700 rounded p-1 px-2">
                                <span className="text-sm">Trabalho</span>
                            </div>

                            <span className="text-gray-500 pt-1">07 Sept</span>
                        </div>
                    </div>
                    
                    <div className="bg-white border border-gray-300 rounded-lg flex flex-col h-80">
                        <div className="flex justify-between">
                            <h1 className="p-5 font-semibold text-lg"> Aula de Inglês 📚</h1>
                            <div className="flex justify-end p-5">
                                <a href="#" className="hover:text-indigo-700">
                                    <DotsThreeVertical size={24} weight="bold" />
                                </a>
                            </div>
                        </div>

                        <p className="p-5 text-gray-500">
                            Aula de inglês com a professora Maria. Vamos estudar os verbos irregulares e fazer um exercício de listening.
                        </p>

                        <div className="p-4 px-6 flex justify-between mt-auto">
                            <div className="flex items-center border border-green-700 bg-green-200 text-green-700 rounded p-1 px-2">
                                <span className="text-sm">Escola</span>
                            </div>

                            <span className="text-gray-500 pt-1">04 Sept</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-300 rounded-lg flex flex-col h-80">
                        <div className="flex justify-between">
                            <h1 className="p-5 font-semibold text-lg">Compras do mês 🛒</h1>
                            <div className="flex justify-end p-5">
                                <a href="#" className="hover:text-indigo-700">
                                    <DotsThreeVertical size={24} weight="bold" />
                                </a>
                            </div>
                        </div>

                        <p className="p-5 text-gray-500">
                            Comprar os itens da lista de compras do mês: 
                            - Arroz
                            - Feijão
                            - Carne
                            - Frutas
                            - Verduras
                        </p>

                        <div className="p-4 px-6 flex justify-between mt-auto">
                            <div className="flex items-center border border-red-700 bg-red-200 text-red-700 rounded p-1 px-2">
                                <span className="text-sm">Casa</span>
                            </div>

                            <span className="text-gray-500 pt-1">01 Sept</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-300 rounded-lg flex flex-col h-80">
                        <div className="flex justify-between">
                            <h1 className="p-5 font-semibold text-lg">Aniversário da Maria 🎂</h1>
                            <div className="flex justify-end p-5">
                                <a href="#" className="hover:text-indigo-700">
                                    <DotsThreeVertical size={24} weight="bold" />
                                </a>
                            </div>
                        </div>

                        <p className="p-5 text-gray-500">
                            Comprar o presente de aniversário da Maria. Vamos comprar um livro de presente.
                        </p>

                        <div className="p-4 px-6 flex justify-between mt-auto">
                            <div className="flex items-center border border-purple-700 bg-purple-200 text-purple-700 rounded p-1 px-2">
                                <span className="text-sm">Pessoal</span>
                            </div>

                            <span className="text-gray-500 pt-1">30 Aug</span>
                        </div>
                    </div>

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