import FormDialog from '../dialog/dialog';
import React from 'react';

export default function Pizzas(props){
    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true)
    };
    return (
        <>
            <FormDialog 
                open={open} 
                setOpen={setOpen} 
                saborCard={props.saborCard} 
                descCard={props.descCard} 
                precoCard={props.precoCard}
                imgCard={props.imgCard}
                listcard={props.listCard}
                setlistcard={props.setlistCard}
                id={props.id}
            />
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={props.imgCard} alt={props.saborCard} />
                </a>
                <p className="font-bold">{props.saborCard}</p>
                <div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.descCard}</p>
                </div>
                <p>A partir de <h6 className="font-bold">R$ {props.precoCard}</h6></p>
                <button onClick={() => handleClickCard()} className="inline-flex items-center px-3 py-2 mt-4 font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Alterar
                </button>
            </div>
        </>
    )
}