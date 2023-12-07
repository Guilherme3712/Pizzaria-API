import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Login() {
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState(null); // Estado para armazenar o feedback



    const handleClickLogin = async (values) => {
        try {
            const response = await Axios.post("http://localhost:3001/login", {
                email: values.email,
                password: values.password,
            });      
            setFeedback(response.data.msg);

            if (response.data.msg === "Usuário autenticado com sucesso") {
                localStorage.setItem('userToken', response.data.token);
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            }
        } catch (error) {
            console.error(error);
            setFeedback("Houve um erro ao processar a solicitação");
        }
    };
    

    const validationLogin = yup.object().shape({
        email: yup
        .string()
        .email("Não é um email válido!")
        .required("Este campo é obrigatório!"),

        password: yup
        .string()
        .min(8, "A senha deve conter 8 caracteres!")
        .required("Este campo é obrigatório!"),
    })

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center gap-2 block py-2 pl-3 pr-4 text-red-600 rounded hover:bg-red md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500">Voltar para Home</a>
                    {feedback && (
                        <div className={`text-center ${feedback.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                            <div className={`p-4 mb-4 text-sm rounded-lg ${feedback.includes('sucesso') ? 'bg-green-50 dark:bg-gray-800 dark:text-green-400' : 'bg-red-50 dark:bg-red-800 dark:text-red-400'}`} role="alert">
                                <span className="font-medium text-lg">{feedback}</span>
                            </div>
                        </div>
                    )} 
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
                    <Formik
                    initialValues={{}}
                    onSubmit={handleClickLogin}
                    validationSchema={validationLogin}>
                        <Form>
                            <h2 className="text-2xl pb-5">Faça Login</h2>
                            <div className="mb-4">
                                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <Field name="email" type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Field>
                                <ErrorMessage 
                                    component="span"
                                    name="email"
                                    className="text-red-500"
                                    />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                                <Field name="password" type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Field>
                                <ErrorMessage 
                                    component="span"
                                    name="password"
                                    className="text-red-500"
                                    />
                            </div>
                            <div className="mb-4 text-center">
                                <button type="submit" className="w-96 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Cadastrar</button>
                            </div>
                            <div className="mb-4 text-center">
                                <p>Não possuí uma conta? <a href="/cadastro" className="text-red-700 hover:text-red">Acesse aqui</a></p>
                            </div>
                        </Form>
                    </Formik>

                </div>
            </div>
        </>
    )
}

export default Login
