import { useForm } from 'react-hook-form';

function Cadastro() {

    const {register, handleSubmit, setValue, setFocus} = useForm();

    const onSubmit = (e) => {
        console.log(e);
    }

    const checkCEP = (e) => {
        if (!e.target.value) return; 
        const cep = e.target.value.replace(/\D/g, '');
        // console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json()).then(data => {
            console.log(data);
            setValue('address', data.logradouro);
            setValue('neigborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);
            setFocus('addressNumber');
        });
    }
    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center gap-2 block py-2 pl-3 pr-4 text-red-600 rounded hover:bg-red md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500">Voltar para Home</a>
                    <div className="justify-center ">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <a href="/" className="flex items-center">
                                <img src="/src/assets/image/logo-pizza.png" className="h-8 mr-3" alt="Flowbite Logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>


            <div className="mt-6 pt-6 w-screen flex flex-col items-center">
                <div className="w-full items-center justify-center flex gap-20">
                    <img src="https://pizzahut.com.br/assets/account-art.97b4e2c7.svg" alt="" />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-2xl pb-5">Criar minha conta</h2>
                        <div className="mb-4">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Digite seu nome de usuário:</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Digite seu endereço de email:</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Crie uma senha:</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Digite seu CEP:</label>
                                <input type="text" name="floating_first_name" id="floating_first_name" {...register("cep")} onBlur={checkCEP} className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rua</label>
                                <input type="text" name="floating_first_name" id="floating_first_name" {...register("address")}  className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número:</label>
                                <input type="text" name="floating_firsa_name" id="floating_first_name" {...register("addressNumber")}  className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bairro</label>
                                <input type="text" name="floating_first_name" id="floating_first_name" {...register("neigborhood")}  className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cidade</label>
                                <input type="text" name="floating_first_name" id="floating_first_name" {...register("city")}  className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
                                <input type="text" name="floating_first_name" id="floating_first_name" {...register("uf")}  className="block w-32 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
                            </div>
                        </div>

                        <div className="mb-4 text-center">
                            <button type="button" className="w-96 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Cadastrar</button>
                        </div>
                        <div className="mb-4 text-center">
                            <p>Já tem uma conta? <a href="#" className="text-red-700 hover:text-red">Acesse aqui</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Cadastro
