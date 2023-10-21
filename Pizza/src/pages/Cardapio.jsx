import Menu from "./Menu";
import Footer from "./footer";
import { useState, useEffect } from 'react'
import Pizzas from "../components/cards/cardViewCardapio";
import Axios from "axios";

function Cardapio(){
    const [listPizzas, setListPizzas] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/getCards-pizza").then((response) => {
            setListPizzas(response.data);
        });
    }, []);

    return(
        <>  
        <Menu/>
            <div className="mt-6 pt-6 w-screen flex flex-col items-center border border-black-500"> 

                <div>
                    <h2 className="m-5 text-3xl">🍕 Pizzas</h2>

                    <div className="flex grid grid-cols-3 gap-4">
                        {typeof listPizzas !== "undefined" && listPizzas.map((value) => {  
                        return (
                            <Pizzas
                            key={value.id} 
                            listCard={listPizzas}
                            setListCard={setListPizzas}
                            id={value.idcardapio}
                            saborCard={value.ds_sabor}
                            descCard={value.ds_detalhes}
                            precoCard={value.ds_preco}
                            imgCard={value.ds_img}
                            ></Pizzas>
                            );
                        })}  
                    </div>

                    <h2 className="m-5 text-3xl">🍫 Sobremesas</h2>

                    <div className="flex grid grid-cols-3 gap-4">

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