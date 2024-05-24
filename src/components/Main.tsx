import { PlusSquare, DotsThreeVertical, FolderSimplePlus, ArrowSquareLeft, ArrowSquareRight } from "@phosphor-icons/react/dist/ssr";

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
                            <div className="flex items-center border border-purple-700 bg-blue-200 text-purple-700 rounded p-1 px-2">
                                <span className="text-sm">Pessoal</span>
                            </div>

                            <span className="text-gray-500 pt-1">30 Aug</span>
                        </div>
                    </div>

                </div>
            </div>



            <div className="flex flex-col w-full md:w-3/5 ml-4">
                <div className="w-full h-2/3 bg-white border border-gray-200 rounded-lg mb-4">
                    <div className="flex justify-between">
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

                    {/* AQUI SÓ TEMOS 3 CARDS POR LINHA, CASO TENHA MAIS, IRÁ SCROLLAR PARA O LADO, NÃO TEMOS MAIS DE 1 LINHA*/}
                    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-h-[calc(100vh-12rem)] overflow-x-auto">
                        <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                            <div className="flex justify-between">
                                <h1 className="p-5 font-semibold text-lg">Fazer compras 🛒</h1>
                                <div className="flex justify-end p-5">
                                    <a href="#" className="hover:text-indigo-700">
                                        <DotsThreeVertical size={24} weight="bold" />
                                    </a>
                                </div>
                            </div>

                             {/* Adicione inputs de checkbox com o conteúdo da anotação */}
                            <div className="pl-5 text-gray-500">
                                <div className="flex items-center pb-2">
                                    <input type="checkbox" id="item1" name="item1" value="item1" />
                                    <label htmlFor="item1" className="pl-1">Comprar arroz</label>
                                </div>
                                <div className="flex items-center pb-2">
                                    <input type="checkbox" id="item2" name="item2" value="item2" />
                                    <label htmlFor="item2" className="pl-1">Comprar feijão</label>
                                </div>
                                <div className="flex items-center pb-2">
                                    <input type="checkbox" id="item3" name="item3" value="item3" />
                                    <label htmlFor="item3" className="pl-1">Comprar carne</label>
                                </div>
                                <div className="flex items-center pb-2">
                                    <input type="checkbox" id="item4" name="item4" value="item4" />
                                    <label htmlFor="item4" className="pl-1">Comprar frutas</label>
                                </div>
                                <div className="flex items-center pb-2">
                                    <input type="checkbox" id="item5" name="item5" value="item5" />
                                    <label htmlFor="item5" className="pl-1">Comprar verduras</label>
                                </div>
                            </div>

                            <div className="p-4 px-6 flex justify-between mt-auto">
                                <div className="flex items-center border border-red-700 bg-red-200 text-red-700 rounded p-1 px-2">
                                    <span className="text-sm">Casa</span>
                                </div>

                                <span className="text-gray-500 pt-1">11 Sept</span>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                            <div className="flex justify-between">
                                <h1 className="p-5 font-semibold text-lg">Conteudos da prova 📚</h1>
                                <div className="flex justify-end p-5">
                                    <a href="#" className="hover:text-indigo-700">
                                        <DotsThreeVertical size={24} weight="bold" />
                                    </a>
                                </div>
                            </div>

                            <div className="pl-5 text-gray-500">
                                <div className="flex items-center pb-2">
                                    <input type="checkbox" id="item6" name="item6" value="item6" />
                                    <label htmlFor="item6" className="pl-1">Estudar matemática</label>
                                </div>
                                <div className="flex items-center pb-2">
                                    <input type="checkbox" id="item7" name="item7" value="item7" />
                                    <label htmlFor="item7" className="pl-1">Estudar ciências</label>
                                </div>
                                <div className="flex items-center pb-2">
                                    <input type="checkbox" id="item8" name="item8" value="item8" />
                                    <label htmlFor="item8" className="pl-1">Estudar história</label>
                                </div>
                                <div className="flex items-center pb-2">
                                    <input type="checkbox" id="item9" name="item9" value="item9" />
                                    <label htmlFor="item9" className="pl-1">Estudar geografia</label>
                                </div>
                            </div>

                            <div className="p-4 px-6 flex justify-between mt-auto">
                                <div className="flex items-center border border-yellow-700 bg-yellow-200 text-yellow-700 rounded p-1 px-2">
                                    <span className="text-sm">Escola</span>
                                </div>

                                <span className="text-gray-500 pt-1">08 Sept</span>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                            <div className="flex justify-between">
                                <h1 className="p-5 font-semibold text-lg">Sprint 🚀</h1>
                                <div className="flex justify-end p-5">
                                    <a href="#" className="hover:text-indigo-700">
                                        <DotsThreeVertical size={24} weight="bold" />
                                    </a>
                                </div>
                            </div> 

                            <div className="pl-5 text-gray-500">
                                <div className="flex items-center pb-2">
                                    <input type="checkbox" id="item10" name="item10" value="item10" />
                                    <label htmlFor="item10" className="pl-1">Definir tarefas</label>
                                </div>
                                <div className="flex items-center pb-2">
                                    <input type="checkbox" id="item11" name="item11" value="item11" />
                                    <label htmlFor="item11" className="pl-1">Definir metas</label>
                                </div>
                                <div className="flex items-center pb-2">
                                    <input type="checkbox" id="item12" name="item12" value="item12" />
                                    <label htmlFor="item12" className="pl-1">Definir prazos</label>
                                </div>
                            </div>

                            <div className="p-4 px-6 flex justify-between mt-auto">
                                <div className="flex items-center border border-blue-700 bg-blue-200 text-blue-700 rounded p-1 px-2">
                                    <span className="text-sm">Trabalho</span>
                                </div>

                                <span className="text-gray-500 pt-1">07 Sept</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
                <div className="bg-white border border-gray-200 rounded-lg">
                    <div className="flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Calendario</h1>
                        <div className="flex">
                            <a href="#" className="hover:text-indigo-700 mr-4 mt-4">
                                <DotsThreeVertical size={24} weight="bold" />
                            </a>
                        </div>
                    </div>
                    <div className="p-5 px-2 pt-0 flex justify-between items-center">
                        <select className="border border-gray-200 rounded-lg p-1 w-4/12">
                            <option value="January">Janeiro</option>
                            <option value="February">Fevereiro</option>
                            <option value="March">Março</option>
                            <option value="April">Abril</option>
                            <option value="May">Maio</option>
                        </select>
                        <div className="flex">
                            <button className="mr-2 hover:bg-gray-200 p-1 rounded">
                                <ArrowSquareLeft size={24} />
                            </button>
                            <button className="hover:bg-gray-200 p-1 rounded">
                                <ArrowSquareRight size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 p-2">
                        <div className='flex group border border-gray-400 hover:bg-blue-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-15'>
                            <div className='flex items-center px-4 py-4'>
                                <div className='text-center'>
                                    <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Dom </p>
                                    <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 11 </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex group bg-cyan-600 shadow-lg dark-shadow rounded-lg mx-1 cursor-pointer justify-center relative  w-15'>
                            <span className="flex h-3 w-3 absolute -top-1 -right-1">
                            <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-blue-400 "></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
                            </span>
                            <div className='flex items-center px-4 py-4'>
                                <div className='text-center'>
                                    <p className='text-gray-100 text-sm'> Seg </p>
                                    <p className='text-gray-100  mt-3 font-bold'> 12 </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex group border border-gray-400 hover:bg-blue-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-15'>
                            <div className='flex items-center px-4 py-4'>
                                <div className='text-center'>
                                    <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Ter </p>
                                    <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 13 </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex group border border-gray-400 hover:bg-blue-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-15'>
                            <div className='flex items-center px-4 py-4'>
                                <div className='text-center'>
                                    <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Qua </p>
                                    <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 14 </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex group border border-gray-400 hover:bg-blue-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-15'>
                            <div className='flex items-center px-4 py-4'>
                                <div className='text-center'>
                                    <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Qui </p>
                                    <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 15 </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex group border border-gray-400 hover:bg-blue-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-15'>
                            <div className='flex items-center px-4 py-4'>
                                <div className='text-center'>
                                    <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Sex </p>
                                    <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 16 </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex group border border-gray-400 hover:bg-blue-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-15'>
                            <div className='flex items-center px-4 py-4'>
                                <div className='text-center'>
                                    <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Sab </p>
                                    <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 17 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between mb-3">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                <span>Evento de Casa</span>
                            </div>

                            <span className="text-gray-500 pr-3">11:00</span>
                        </div>
                        <div className="flex justify-between mb-3">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                <span>Encontro com a Namorada</span>
                            </div>

                            <span className="text-gray-500 pr-3">14:00</span>
                        </div>
                        <div className="flex justify-between mb-3">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                <span>Reunião de Trabalho</span>
                            </div>

                            <span className="text-gray-500 pr-3">16:00</span>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                <span>Correr no Parque</span>
                            </div>

                            <span className="text-gray-500 pr-3">18:00</span>
                        </div>
                    </div>
                </div>

                    <div className="bg-amber-100 border border-gray-200 rounded-lg flex flex-col">
                        <div className="flex justify-between">
                            <h1 className="p-5 font-semibold text-lg">Draft Pad</h1>
                            <div className="flex">
                                <a href="#" className="hover:text-indigo-700 mr-4 mt-4">
                                    <DotsThreeVertical size={24} weight="bold" />
                                </a>
                            </div>
                        </div>
                        <textarea className="resize-none bg-amber-100 p-5 pt-1 w-full min-h-0 flex-grow" placeholder="Comece a escrever..."></textarea>
                    </div>

                </div>
            </div>
        </div>

    )
}