import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import * as yup from "yup";

function Cadastro() {
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState(null); // Estado para armazenar o feedback

    const handleClickRegister = async (values) => {
        try{
            const response = await Axios.post("http://localhost:3001/register", {
                nm_usuario: values.nm_usuario,
                email: values.email,
                password: values.password,
                cep: values.cep,
                rua: values.rua,
                numero: values.numero,
                bairro: values.bairro,
                cidade: values.cidade,
                uf: values.uf,
            });
            setFeedback(response.data.msg);

            if (response.data.msg === "Usuário cadastrado com sucesso") {
                setFeedback({ message: response.data.msg, color: 'green' });
                setTimeout(() => {
                    navigate('/'); 
                }, 3000);
            } else{
                setFeedback({ message: response.data.msg, color: 'red' });
            }
        }catch(error){
            console.error(error);
            setFeedback({ message: "Houve um erro ao processar a solicitação", color: 'red' });
        }
    };
    const validationRegister = yup.object().shape({
        email: yup
            .string()
            .email("Não é um email válido!")
            .required("Este campo é obrigatório!"),
        password: yup
            .string()
            .min(8, "A senha deve conter 8 caracteres!")
            .required("Este campo é obrigatório!"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "As senhas não são iguais!")
    });

    
    function checkCEP (ev, setFieldValue) {
        const { value } = ev.target;
        
        const cep = value?.replace(/[^0-9]/g,'');
        if (cep?.length !== 8){
            return;
        } 
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setFieldValue('bairro',data.bairro);
                setFieldValue('cidade',data.localidade);
                setFieldValue('rua',data.logradouro);
                setFieldValue('uf',data.uf);
            });
    }
    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center gap-2 block py-2 pl-3 pr-4 text-red-600 rounded hover:bg-red md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500">Voltar para Home</a>
                    {feedback && (
                        <div className={`text-center ${feedback.color === 'red' ? 'text-red-500' : 'text-green-500'}`}>
                            <div className={`p-4 mb-4 text-sm rounded-lg ${feedback.color === 'red' ? 'bg-red-50 dark:bg-red-800 dark:text-red-400' : 'bg-green-50 dark:bg-green-800 dark:text-green-400'}`} role="alert">
                                <span className="font-medium text-lg">{feedback.message}</span>
                            </div>
                        </div>
                    )}
                    <div className="justify-center ">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <a href="/" className="flex items-center">
                                <img src="/src/assets/image/logo-pizza.png" className="h-8 mr-3" alt="Logo Pizza" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="mt-10 pt-6 w-screen flex flex-col items-center">
                <div className="w-full items-center justify-center flex gap-20">
                    <img src="https://pizzahut.com.br/assets/account-art.97b4e2c7.svg" alt="" />
                    <Formik
                        initialValues={{}}
                        onSubmit={handleClickRegister}
                        validationSchema={validationRegister}
                        render={({ setFieldValue }) => (
                        <Form>
                            <h2 className="text-2xl pb-5">Criar minha conta</h2>
                            <div className="mb-4">
                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Digite seu nome de usuário:</label>
                                <Field name="nm_usuario" type="text" id="default-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></Field>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Digite seu endereço de email:</label>
                                <Field name="email" type="text" id="default-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Field>
                                <ErrorMessage
                                    component="span"
                                    name="email"
                                    className="text-red-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Crie uma senha:</label>
                                <Field name="password" type="text" id="default-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Field>
                                <ErrorMessage
                                    component="span"
                                    name="password"
                                    className="text-red-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirme sua senha:</label>
                                <Field name="confirmPassword" type="text" id="default-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Field>
                                <ErrorMessage
                                    component="span"
                                    name="confirmPassword"
                                    className="text-red-500"
                                />
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Digite seu CEP:</label>
                                    <Field className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text" 
                                    name="cep" 
                                    id="cep" 
                                    onBlur={(ev) => checkCEP(ev, setFieldValue)} placeholder=" " required />
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rua</label>
                                    <Field className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text" 
                                    name="rua" 
                                    id="rua"
                                    placeholder=" " required />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número:</label>
                                    <Field className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text" 
                                    name="numero" 
                                    id="numero" 
                                    placeholder=" " required />
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bairro</label>
                                    <Field className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text"
                                    name="bairro" 
                                    id="bairro" 
                                    placeholder=" " required />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cidade</label>
                                    <Field className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text" 
                                    name="cidade" 
                                    id="cidade" 
                                    placeholder=" " required />
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
                                    <Field className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    type="text" 
                                    name="uf" 
                                    id="uf"
                                    placeholder=" " required />
                                </div>
                            </div>
                            <div className="mb-4 text-center">
                                <button type="submit" className="w-96 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Cadastrar</button>
                            </div>
                            <div className="mb-4 text-center">
                                <p>Já tem uma conta? <a href="/login" className="text-red-700 hover:text-red">Acesse aqui</a></p>
                            </div>
                        </Form>
                        )}
                    />
                </div>
            </div>
        </>
    )
}

export default Cadastro
