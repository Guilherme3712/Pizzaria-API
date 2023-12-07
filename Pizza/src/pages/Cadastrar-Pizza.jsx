import Menu from "./Menu";
import Footer from "./footer";
import Pizza from "../components/cards/cardCardapio";
import {useState, useEffect} from 'react';
import Axios from "axios";

function CadastrarPizza(){
    const [values, setValues] = useState();
    const [listPizzas, setListPizzas] = useState();

    const handleChangeValues = (value) => {
    setValues(prevValue=>({
    ...prevValue,
    [value.target.name]: value.target.value,
    }));
    };

    const getPizzas = async () => {
        try {
            const res = await Axios.get("http://localhost:3001/getCards-pizza");
            setListPizzas(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickButtonP = async () => {
        try {
            await Axios.post("http://localhost:3001/register-pizza", {
                ds_sabor: values.saborInput,
                ds_detalhes: values.detalhesInput,
                ds_preco: values.precoInput,
                ds_img: values.imgInput,
            }).then(() => {
                document.location.reload()
            });
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getPizzas();
    }, []);

    return(
        <div>
            <Menu/>
            <div className="mt-6 pt-6 w-screen flex flex-col items-center border border-black-500 mb-14 pb-1">
                <div className="flex flex-col rounded-lg m-14 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                    <img
                        className="rounded-lg object-cover"
                        src="https://img.uenicdn.com/cdn-cgi/image/width=512,fit=crop,f=auto/image/upload/v1559234733/service_images/shutterstock_719923828.jpg"
                        alt="" />
                </div>

                <div className="flex flex-col justify-start p-2 w-96">
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="sabor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sabor da Pizza</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                type="text" 
                                id="sabor" 
                                placeholder="Sabor" 
                                required
                                name="saborInput"
                                //value={formData.nome}
                                onChange={handleChangeValues}/>
                            </div>
                            <div>
                                <label htmlFor="descricao" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                type="text"
                                name="detalhesInput"
                                //value={formData.descricao}
                                onChange={handleChangeValues}
                                id="descricao" 
                                placeholder="Descrição" 
                                required/>
                            </div>
                            <div>
                                <label htmlFor="preco" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preço</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="R$" 
                                type="number" 
                                id="preco"
                                required
                                name="precoInput"
                                //value={formData.preco}
                                onChange={handleChangeValues}/>
                            </div>
                            <div>
                                <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL da Imagem</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="URL" 
                                required
                                type="url" 
                                id="url" 
                                name="imgInput"
                                //value={formData.imagem}
                                onChange={handleChangeValues}/>
                            </div>
                        </div>
                        <button onClick={() => handleClickButtonP()} className="text-white bg-black hover:bg-gray focus:ring-4 focus:outline-none w-28 focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
                </div>
                <h1>Clique nos cards para fazer alterações</h1>
                <div className="flex grid grid-cols-3 gap-4 mt-10">
                    {typeof listPizzas !== "undefined" && listPizzas.map((value) => {  
                    return (
                        <Pizza
                        key={value.id} 
                        listCard={listPizzas}
                        setListCard={setListPizzas}
                        id={value.idcardapio}
                        saborCard={value.ds_sabor}
                        descCard={value.ds_detalhes}
                        precoCard={value.ds_preco}
                        imgCard={value.ds_img}
                        ></Pizza>
                        );
                    })} 
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CadastrarPizza