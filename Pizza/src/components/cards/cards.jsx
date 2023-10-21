import React from 'react';
import "./cards.css"
import FormDialog from '../dialog/dialog';

export default function Card(props){
    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true)
    };

    return (
        <>
            <FormDialog 
            open={open} 
            setOpen={setOpen} 
            nomeCard={props.nomeCard} 
            emailCard={props.emailCard} 
            senhaCard={props.senhaCard}
            listcard={props.listCard}
            setlistcard={props.setlistCard}
            id={props.id}
            />
            <div className='card--container' onClick={() => handleClickCard()}>
                <h1 className='card--title'>{props.nomeCard}</h1>
                <p className='card--category'>{props.emailCard}</p>
                <p className='card--cost'>{props.senhaCard}</p>
            </div>
        </>
    )
}