import Menu from "./Menu";
import Footer from "./footer";
import '../components/cards/cards.css';

function Home(){
    return(
        <div>
            <Menu/>
            <div className="mt-6 pt-6 w-screen flex flex-col items-center border border-black-500">
                
                <div className="mt-6 pt-6 card-food">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/ofertas%2Fpizza_hut_tartarugas_ninjas-4x1-v1-1040x260px.png?alt=media&token=4749aae1-59a8-4fa5-a12b-46b6164dbbb0" alt="" />
                        </a>
                </div>

                <div className="">
                    <h2 className="m-5 p-5 text-3xl">🔥 Dá um Hut nestas ofertas!</h2>
                    <div className="flex gap-5">
                        <div className="card-food max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/816x408%2FOfertas-Web%2Fweb-pizza-me%CC%81dia-512x265.jpg?alt=media&token=85de9a03-7717-4fe9-ad6c-96fd7fa250a6" alt="" />
                            </a>
                        </div>
                
                        <div className="card-food max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/816x408%2FOfertas-Web%2Fweb-cardapio-media-D1H-TIERA-512x256.jpg?alt=media&token=2b9a6a0b-427e-4cbe-9a57-46247673ae7f" alt="" />
                            </a>
                        </div>
                        <div className="card-food max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/816x408%2FOfertas-Web%2Fweb-cardapio-media-HUTBOX-512x256.jpg?alt=media&token=904f0f7b-0d3c-4b74-b48d-b286d2843378" alt="" />
                            </a>
                        </div>
                    </div>
                    <h1 className="text-2xl m-5 p-5">Tá na mão as mais recomendadas</h1>

                    <h2 className="m-5 text-3xl">🍕 Pizzas</h2>

                    <div className="flex gap-5">
                        
                        <div className="card-food max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/816x408%2FPizzas%2Fpepperoni-v1.jpg?alt=media&token=33fa61dd-636c-4924-a9e6-407bd16966ac" alt="" />
                            </a>
                            <p className="font-bold">Peperonni</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pepperoni Fatias de pepperoni servidas sobre generosa camada de</p>
                            <p>A partir de <h6 className="font-bold">R$ 26,90</h6></p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                                Personalizar
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>

                        <div className="card-food max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/816x408%2FPizzas%2Ffrango-e-requeijao-v1.jpg?alt=media&token=dde66ed4-4d4e-45f7-bcf9-1f77b249e242" alt="" />
                            </a>
                            <p className="font-bold">Frango com Requeijão</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frango, queijo Hut e requeijão cremoso</p>
                            <p>A partir de <h6 className="font-bold">R$ 29,90</h6></p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                                Personalizar
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>

                        <div className="card-food max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Pizzas/brasileira.jpg" alt="" />
                            </a>
                            <p className="font-bold">Brasileira</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Molho de tomate, queijo Hut, requeijão, presunto e</p>
                            <p>A partir de <h6 className="font-bold">R$ 24,90</h6></p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                                Personalizar
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>

                        
                    </div>

                    <h2 className="m-5 text-3xl">🍫 Sobremesas</h2>

                    <div className="flex gap-5">
                        
                        <div className="card-food max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Sobremesas/hut-cup-brigadeiro.jpg" alt="" />
                            </a>
                            <p className="font-bold">Hut Cup Brigadeiro</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Brigadeiro feito com Moça® no copinho.</p>
                            <p>A partir de <h6 className="font-bold">R$ 7,90</h6></p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                                Personalizar
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>

                        <div className="card-food max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Sobremesas/brigadeiro-media.jpg" alt="" />
                            </a>
                            <p className="font-bold">Pizza de Brigadeiro</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frango, queijo Hut e requeijão cremoso</p>
                            <p>A partir de <h6 className="font-bold">R$ 29,90</h6></p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                                Personalizar
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>

                        <div className="card-food max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Sobremesas/brigadeiro-slider.jpg" alt="" />
                            </a>
                            <p className="font-bold">Slider de Brigadeiro</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Molho de tomate, queijo Hut, requeijão, presunto e</p>
                            <p>A partir de <h6 className="font-bold">R$ 24,90</h6></p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                                Personalizar
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>

                    </div>

                    <div className="text-center">
                        <button type="button" className="mt-6 w-96 border border-black-500 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">       Ver cárdapio completo      </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home