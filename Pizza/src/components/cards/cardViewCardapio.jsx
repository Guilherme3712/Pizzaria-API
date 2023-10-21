import ViewDialog from '../dialog/viewdialog';
import React from 'react';

export default function Pizzas(props){
    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true)
    };  
    return (
        <>
            <ViewDialog 
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
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.descCard}</p>
                <p>A partir de <h6 className="font-bold">R$ {props.precoCard}</h6></p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                    Personalizar
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a onClick={() => handleClickCard()} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                    Detalhes
                </a>
            </div>
        </>
    )
}