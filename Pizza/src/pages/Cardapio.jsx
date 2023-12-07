import Menu from "./Menu";
import Footer from "./footer";
import { useState, useEffect } from 'react'
import Pizzas from "../components/cards/cardViewCardapio";
import Axios from "axios";
import Modal from "../components/cards/cardCart";
import '../components/cards/cardCart.css';
import '../components/cards/cards.css';

function Cardapio(){

    const [shoppingCart, setShoppingCart] = useState([]);

    const [listPizzas, setListPizzas] = useState([]);

    const [modalOpen, setModalOpen] = useState(false)

    const handleOpenModal = () => {
        setModalOpen(true)
    }


    const handleCloseModal = () => {
        setModalOpen(false)
    }


    const getPizzas = async () => {
        try {
            const res = await Axios.get("http://localhost:3001/getCards-pizza");
            setListPizzas(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPizzas();
    }, []);

    const handleAddToCart = (idcardapio) => {
        const pizza = listPizzas.find((pizza) => pizza.idcardapio === idcardapio);
        const alreadyInShoppingCart = shoppingCart.find(
            (item) => item.product.idcardapio === idcardapio
        );
        
        if (alreadyInShoppingCart) {
            const newShoppingCart = shoppingCart.map((item) => {
                if (item.product.idcardapio === idcardapio) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
            setShoppingCart(newShoppingCart);
        } else {
            const cartItem = {
                product: pizza,
                quantity: 1,
            };
            const newShoppingCart = [...shoppingCart, cartItem];
            setShoppingCart(newShoppingCart);
        }
    };
    

    const handleRemoveFromCart = (idcardapio) => {
        const alreadyInShoppingCart = shoppingCart.find(
            (item) => item.product.idcardapio === idcardapio
        );

        if (alreadyInShoppingCart?.quantity > 1) {
            const newShoppingCart = shoppingCart.map((item) => {
                if (item.product.idcardapio === idcardapio) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
                return item;
            });
            setShoppingCart(newShoppingCart);
            return;
        }

        const newShoppingCart = shoppingCart.filter(
            (item) => item.product.idcardapio !== idcardapio
        );
        setShoppingCart(newShoppingCart);
    };

    const handleCleanCart = () => {
        setShoppingCart([])
    }; 

    const totalCart = shoppingCart.reduce((total, current) => {
        return total + (current.product.ds_preco * current.quantity);
    }, 0).toFixed(2);

    return(
        <>  
            <header className="p-0 m-0">
                <Menu>
                <button onClick={handleOpenModal} className="border-gray-200">       
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>                
                </button>
                </Menu>
                <Modal isOpen={modalOpen} onClose={handleCloseModal}>
                    <div className="modal-header grid gap-5 grid-cols-1">
                        <div className="modal-header-title">
                            Carrinho de compras
                        </div>
                        <div className="total font-bold">
                            <span className="font-bold">Total da compra: </span>R${totalCart}
                        </div>
                        <button className="border-red-500 hover:bg-red-200" onClick={handleCleanCart}>Limpar</button>
                    </div>

                    {shoppingCart.map((item, index) => (
                        <div className="border-2 rounded-md border-radius-3 mt-5 p-2" key={index}>
                            <h6 className="text-lg">Pizza: <span className="font-bold">{item.product.ds_sabor}</span></h6>
                            <h6>Preço: <span className="font-bold">{item.product.ds_preco}</span></h6>
                            <img className="object-scale-down h-48 w-96" src={item.product.ds_img} alt={item.product.ds_sabor} />
                            <h6>Quantidade: <span className="font-bold">{item.quantity}</span></h6>
                            <h6>Total: <span className="font-bold">{item.quantity * item.product.ds_preco}</span></h6>
                            <button onClick={() => handleRemoveFromCart(item.product.idcardapio)}>Remover item</button>
                        </div>
                    ))}
                    <div className="grid gap-12 grid-cols-2 mt-5">
                        <button type="button" className="border-gray-500 hover:bg-gray-200" onClick={handleCloseModal}>Fechar</button>
                        <button type="button" className="border-red-500 hover:bg-red-200" onClick={handleCloseModal}>Confirmar</button>
                    </div>
                </Modal>
            </header>

            <div className="mt-10 pt-10 w-screen flex flex-col items-center border border-black-500"> 

                <div>
                    <h2 className="m-5 text-3xl">🍕 Pizzas</h2>

                    <div className="flex grid grid-cols-3 gap-4">
                        {typeof listPizzas !== "undefined" && listPizzas.map((value) => {  
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className="card-food">
                                <Pizzas
                                key={value.id} 
                                listCard={listPizzas}
                                setListCard={setListPizzas}
                                id={value.idcardapio}
                                saborCard={value.ds_sabor}
                                descCard={value.ds_detalhes}
                                precoCard={value.ds_preco}
                                imgCard={value.ds_img}
                                >
                                <button onClick={() => handleAddToCart(value.idcardapio)}>Adicionar</button>
                                </Pizzas>
                            </div>
                            );
                        })}  
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
        </>
    )
}

export default Cardapio