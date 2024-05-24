import { Bell, MagnifyingGlass, List, PenNib, Note, PlusCircle, SelectionAll, CalendarDot, CalendarDots, Calendar, DotsThreeVertical, Star } from "@phosphor-icons/react/dist/ssr";

export function MainNotes() {
    return (
        <div className="flex flex-col w-full h-full bg-slate-100    overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 rounded-full border border-gray-300 p-3 bg-amber-400 hover:bg-amber-400">
                        <SelectionAll size={24} />
                        <h2 className="text-lg font-medium">Todos</h2>
                    </div>
                    <div className="flex items-center space-x-1 rounded-full border border-gray-300 p-3 hover:bg-amber-400">
                        <CalendarDot size={24} />
                        <h2 className="text-lg font-medium">Hoje</h2>
                    </div>
                    <div className="flex items-center space-x-1 rounded-full border border-gray-300 p-3 hover:bg-amber-400">
                        <CalendarDots size={24} />
                        <h2 className="text-lg font-medium">Semana</h2>
                    </div>
                    <div className="flex items-center space-x-1 rounded-full border border-gray-300 p-3 hover:bg-amber-400">
                        <Calendar size={24} />
                        <h2 className="text-lg font-medium">Anual</h2>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                        <PlusCircle size={32} color="#FFE032" />
                    </a>
                </div>
            </div>

            <div className="p-6 pt-1 grid grid-cols-1 md:grid-cols-5 gap-y-4 gap-x-4">
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                    <div className="flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Férias em Paris ✈</h1>
                        <div className="flex justify-end p-2 pt-5">
                            <a href="#" className="hover:text-amber-400">
                                <Star size={23} color="#FBBF24" weight="fill"/>
                            </a>
                            <a href="#" className="hover:text-amber-400">
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

                        <span className="text-gray-500 pt-1">18 Sept</span>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                    <div className="flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Férias em Paris ✈</h1>
                        <div className="flex justify-end p-2 pt-5">
                            <a href="#" className="hover:text-amber-400">
                                <Star size={23} color="#FBBF24" weight="fill"/>
                            </a>
                            <a href="#" className="hover:text-amber-400">
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

                        <span className="text-gray-500 pt-1">18 Sept</span>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                    <div className="flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Férias em Paris ✈</h1>
                        <div className="flex justify-end p-2 pt-5">
                            <a href="#" className="hover:text-amber-400">
                                <Star size={23} color="#FBBF24" weight="fill"/>
                            </a>
                            <a href="#" className="hover:text-amber-400">
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

                        <span className="text-gray-500 pt-1">18 Sept</span>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                    <div className="flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Estudar para a prova 📚</h1>
                        <div className="flex justify-end p-2 pt-5">
                            <a href="#" className="hover:text-amber-400">
                                <Star size={23} />
                            </a>
                            <a href="#" className="hover:text-amber-400">
                                <DotsThreeVertical size={24} weight="bold" />
                            </a>
                        </div>
                    </div>
                    {/* Adicione um parágrafo com o conteúdo da anotação */}
                    <p className="p-5 text-gray-500">
                        Tenho que estudar para a prova de matemática que vai ser na próxima semana. Vou estudar álgebra, geometria e cálculo.
                    </p>
                    {/* de um lado vai ter a categoria e do outro direito vai ter a data */}
                    <div className="p-4 px-6 flex justify-between mt-auto">
                        <div className="flex items-center border border-yellow-700 bg-yellow-200 text-yellow-700 rounded p-1 px-2">
                            <span className="text-sm">Escola</span>
                        </div>

                        <span className="text-gray-500 pt-1">10 Sept</span>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                    <div className="flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Comprar comida 🛒</h1>
                        <div className="flex justify-end p-2 pt-5">
                            <a href="#" className="hover:text-amber-400">
                                <Star size={23} />
                            </a>
                            <a href="#" className="hover:text-amber-400">
                                <DotsThreeVertical size={24} weight="bold" />
                            </a>
                        </div>
                    </div>
                    <p className="p-5 text-gray-500">
                        Preciso comprar arroz, feijão, carne, frutas e verduras. Vou ao super
                    </p>
                    <div className="p-4 px-6 flex justify-between mt-auto">
                        <div className="flex items-center border border-red-700 bg-red-200 text-red-700 rounded p-1 px-2">
                            <span className="text-sm">Casa</span>
                        </div>

                        <span className="text-gray-500 pt-1">09 Sept</span>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                    <div className="flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Dentista 🦷</h1>
                        <div className="flex justify-end p-2 pt-5">
                            <a href="#" className="hover:text-amber-400">
                                <Star size={23} />
                            </a>
                            <a href="#" className="hover:text-amber-400">
                                <DotsThreeVertical size={24} weight="bold" />
                            </a>
                        </div>
                    </div>
                    {/* Adicione um parágrafo com o conteúdo da anotação */}
                    <p className="p-5 text-gray-500">
                        Tenho uma consulta com o dentista marcada para a próxima semana. Vou fazer uma limpeza e um check-up.
                    </p>
                    {/* de um lado vai ter a categoria e do outro direito vai ter a data */}
                    <div className="p-4 px-6 flex justify-between mt-auto">
                        <div className="flex items-center border border-orange-700 bg-orange-200 text-orange-700 rounded p-1 px-2">
                            <span className="text-sm">Saúde</span>
                        </div>

                        <span className="text-gray-500 pt-1">08 Sept</span>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                    <div className="flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Série na Netflix 🎬</h1>
                        <div className="flex justify-end p-2 pt-5">
                            <a href="#" className="hover:text-amber-400">
                                <Star size={23} />
                            </a>
                            <a href="#" className="hover:text-amber-400">
                                <DotsThreeVertical size={24} weight="bold" />
                            </a>
                        </div>
                    </div>
                    {/* Adicione um parágrafo com o conteúdo da anotação */}
                    <p className="p-5 text-gray-500">
                        Vou assistir a nova série da Netflix que todo mundo está falando. Vou fazer pipoca e assistir na sala.
                    </p>
                    {/* de um lado vai ter a categoria e do outro direito vai ter a data */}
                    <div className="p-4 px-6 flex justify-between mt-auto">
                        <div className="flex items-center border border-green-700 bg-green-200 text-green-700 rounded p-1 px-2">
                            <span className="text-sm">Lazer</span>
                        </div>

                        <span className="text-gray-500 pt-1">01 Sept</span>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                    <div className="flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Macarronada 🍝</h1>
                        <div className="flex justify-end p-2 pt-5">
                            <a href="#" className="hover:text-amber-400">
                                <Star size={23} />
                            </a>
                            <a href="#" className="hover:text-amber-400">
                                <DotsThreeVertical size={24} weight="bold" />
                            </a>
                        </div>
                    </div>
                    {/* Adicione um parágrafo com o conteúdo da anotação */}
                    <p className="p-5 text-gray-500">
                        Vou fazer macarronada para o jantar de hoje. Vou fazer um molho de tomate com carne moída e queijo ralado.
                    </p>
                    {/* de um lado vai ter a categoria e do outro direito vai ter a data */}
                    <div className="p-4 px-6 flex justify-between mt-auto">
                        <div className="flex items-center border border-purple-700 bg-purple-200 text-purple-700 rounded p-1 px-2">
                            <span className="text-sm">Culinária</span>
                        </div>

                        <span className="text-gray-500 pt-1">19 Aug</span>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                    <div className="flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Férias na China ✈</h1>
                        <div className="flex justify-end p-2 pt-5">
                            <a href="#" className="hover:text-amber-400">
                                <Star size={23} />
                            </a>
                            <a href="#" className="hover:text-amber-400">
                                <DotsThreeVertical size={24} weight="bold" />
                            </a>
                        </div>
                    </div>
                    {/* Adicione um parágrafo com o conteúdo da anotação */}
                    <p className="p-5 text-gray-500">
                        Visitar a Grande Muralha da China, a Cidade Proibida e o Templo do Céu. Vou comer muita comida chinesa e tirar muitas fotos.
                    </p>
                    {/* de um lado vai ter a categoria e do outro direito vai ter a data */}
                    <div className="p-4 px-6 flex justify-between mt-auto">
                        <div className="flex items-center border border-violet-700 bg-violet-200 text-violet-700 rounded p-1 px-2">
                            <span className="text-sm">Viagem</span>
                        </div>

                        <span className="text-gray-500 pt-1">10 Aug</span>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                    <div className="flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Sair com os amigos 🎉</h1>
                        <div className="flex justify-end p-2 pt-5">
                            <a href="#" className="hover:text-amber-400">
                                <Star size={23} />
                            </a>
                            <a href="#" className="hover:text-amber-400">
                                <DotsThreeVertical size={24} weight="bold" />
                            </a>
                        </div>
                    </div>
                    {/* Adicione um parágrafo com o conteúdo da anotação */}
                    <p className="p-5 text-gray-500">
                        Vou sair com os meus amigos para comemorar o aniversário de um deles. Vamos jantar em um restaurante e depois ir para uma balada.
                    </p>
                    {/* de um lado vai ter a categoria e do outro direito vai ter a data */}
                    <div className="p-4 px-6 flex justify-between mt-auto">
                        <div className="flex items-center border border-green-700 bg-green-200 text-green-700 rounded p-1 px-2">
                            <span className="text-sm">Lazer</span>
                        </div>

                        <span className="text-gray-500 pt-1">09 Aug</span>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                    <div className="flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Caminhar no parque 🌳</h1>
                        <div className="flex justify-end p-2 pt-5">
                            <a href="#" className="hover:text-amber-400">
                                <Star size={23} />
                            </a>
                            <a href="#" className="hover:text-amber-400">
                                <DotsThreeVertical size={24} weight="bold" />
                            </a>
                        </div>
                    </div>
                    {/* Adicione um parágrafo com o conteúdo da anotação */}
                    <p className="p-5 text-gray-500">
                        Vou caminhar no parque para relaxar e respirar ar puro. Vou levar o meu cachorro para brincar e correr.
                    </p>
                    {/* de um lado vai ter a categoria e do outro direito vai ter a data */}
                    <div className="p-4 px-6 flex justify-between mt-auto">
                        <div className="flex items-center border border-orange-700 bg-orange-200 text-orange-700 rounded p-1 px-2">
                            <span className="text-sm">Saúde</span>
                        </div>

                        <span className="text-gray-500 pt-1">03 Aug</span>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-80">
                    <div className="flex justify-between">
                        <h1 className="p-5 font-semibold text-lg">Matar Aula 📚</h1>
                        <div className="flex justify-end p-2 pt-5">
                            <a href="#" className="hover:text-amber-400">
                                <Star size={23} />
                            </a>
                            <a href="#" className="hover:text-amber-400">
                                <DotsThreeVertical size={24} weight="bold" />
                            </a>
                        </div>
                    </div>
                    {/* Adicione um parágrafo com o conteúdo da anotação */}
                    <p className="p-5 text-gray-500">
                        Vou matar aula para ir ao shopping com as minhas amigas. Vamos almoçar, fazer compras e assistir um filme.
                    </p>
                    {/* de um lado vai ter a categoria e do outro direito vai ter a data */}
                    <div className="p-4 px-6 flex justify-between mt-auto">
                        <div className="flex items-center border border-green-700 bg-green-200 text-green-700 rounded p-1 px-2">
                            <span className="text-sm">Lazer</span>
                        </div>

                        <span className="text-gray-500 pt-1">01 Aug</span>
                    </div>
                </div>
            </div>
            


            {/* <div className="flex flex-col items-center justify-center flex-1">
                <List size={64} />
                <h2 className="text-lg font-semibold">Ainda não há notas</h2>
                <p className="text-sm text-gray-500">Crie uma nova nota clicando no botão abaixo</p>
                <button className="px-4 py-2 mt-1 text-white bg-blue-500 rounded-md hover:bg-blue-600">Criar uma nova nota</button>
            </div> */}
        </div>
    )
}