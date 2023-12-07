import {useState, useEffect} from 'react';
import Axios from "axios";




function Cart() {
    const [shoppingCart, setShoppingCart] = useState([]);


    const [listPizzas, setListPizzas] = useState([]);


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
    



    return (
        <>
            <div className="w-screen flex flex-col items-center">
                <h2>Pizzas</h2>
                <ul>
                    {listPizzas.map((pizza) => (
                        <li key={pizza.id}>
                            <p>{pizza.ds_sabor}</p>
                            <p>{pizza.ds_preco}</p>
                            <button onClick={() => handleAddToCart(pizza.idcardapio)}>Add to cart</button>
                        </li>
                    ))}
                </ul>


                
                <h2>Shopping cart ({totalCart})</h2>
                <button onClick={handleCleanCart}>Limpar</button>
                <ul>
                    {shoppingCart.map((item, index) => (
                        <li key={index}>
                            <p>Pizza: {item.product.ds_sabor}</p>
                            <p>Preço: {item.product.ds_preco}</p>
                            <p>Quantidade: {item.quantity}</p>
                            <p>Total: {item.quantity * item.product.ds_preco}</p>
                            <button onClick={() => handleRemoveFromCart(item.product.idcardapio)}>Remove from cart</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Cart;
