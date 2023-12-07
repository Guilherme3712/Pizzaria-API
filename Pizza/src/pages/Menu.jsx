import { useEffect, useState } from 'react';
import Axios from 'axios';

const Menu = ({children}) => {

  const [userInfo, setUserInfo] = useState([]);
  const [authenticated, setAuthenticated] = useState(true); 

  const UserInfo = async () => {
    try {
      const token = localStorage.getItem('userToken');
      if (!token) {
        setAuthenticated(false);
        return;
      }
      const response = await Axios.get("http://localhost:3001/userInfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      setUserInfo(response.data);

    } catch (error) {
      console.error(error,"Erro na solicitação");
      setAuthenticated(false);
    }
  };


  useEffect(() => {
    UserInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setUserInfo([]);
    setAuthenticated(false);
  };

    return(
        <div>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                    <a href="/" className="flex items-center">
                        <img src="/src/assets/image/logo-pizza.png" className="h-8 mr-3" alt="Flowbite Logo"/>
                    </a>
                    <div className="flex md:order-2 gap-5">
                    {authenticated ? (
                        <div>
                            <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="flex row gap-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 border-none" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Meu Perfil
                            </button>
                            <div id="dropdownInformation" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                {userInfo.length > 0 ? (
                                    userInfo.map((user) => (
                                        <div key={user.email} className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                            <div>{user.nm_usuario}</div>
                                            <div className="font-medium truncate">{user.email}</div>
                                        </div>
                                    ))
                                ) : (
                                    <p>Nenhum dado disponível.</p>
                                )}
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                                <li>
                                    <a href="/" className="block px-4 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:text-red-500">Home</a>
                                </li>
                                <li>
                                    <a href="/usuario" className="block px-4 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:text-red-500">Meus Dados</a>
                                </li>
                                </ul>
                                <div className="py-2">
                                    <button onClick={handleLogout}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</button>
                                </div>
                            </div>
                        </div>
                        ) : (
                            <div disabled></div>
                    )}

                        <a href="/cadastro" className="flex row gap-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            Cadastro
                        </a>
                        <a href="/login" className="flex row gap-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            Login
                        </a>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="flex row gap-2 block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-500" aria-current="page">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                Home</a>
                            </li>
                            <li>
                                <a href="/cardapio" className="flex row gap-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                Cárdapio</a>
                            </li>
                            <li>
                                <a href="/cadastrar-pizza" className="flex row gap-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                    </svg>
                                Cadastrar Pizza</a>
                            </li>
                            <li>
                                {children}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
        
    )
}
export default Menu