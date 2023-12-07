import Menu from "./Menu";
import { useEffect, useState } from 'react';
import Axios from 'axios';

function Usuario() {
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

  return (
    <>
      <Menu />
      <div className="bg-[#c8102e] bg-cover h-56 w-screen ">
        <div className="w-full flex flex-col items-center pt-12">
            {authenticated ? (
              <div className="w-full mt-12 max-w-[600px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-start ml-10 pb-10 pt-5">
                  {userInfo.length > 0 ? (
                    userInfo.map((user) => (
                      <div key={user.email} className="grid justify-items-start">
                        <h2 className="text-xl pt-3 pb-3 font-bold">Meus Dados</h2>
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="Bonnie image"/>
                        <h2 className="text-xl font-medium">Dados Pessoais</h2>
                        <div className="">
                          <h2 className="text-lg font-medium">Nome:</h2><span className="text-lg">{user.nm_usuario}</span>
                        </div>
                        <h2 className="text-xl font-medium pt-3">Dados de contanto</h2>
                        <div className="">
                          <h2 className="text-lg font-medium">Email:</h2><span className="text-lg">{user.email}</span>
                        </div>
                        <span className="mb-1 text-xl font-medium pt-3">Endereço</span>
                        <div className="">
                          <div className="">
                            <h2 className="text-lg font-medium">CEP: </h2><span className="text-lg">{user.cep}</span>
                          </div>
                          <div className="">
                            <h2 className="text-lg font-medium">Rua: </h2><span className="text-lg">{user.rua}</span>
                          </div>
                          <div className="">
                            <h2 className="text-lg font-medium">Número: </h2><span className="text-lg">{user.numero}</span>
                          </div>
                          <div className="">
                            <h2 className="text-lg font-medium">Bairro: </h2><span className="text-lg">{user.bairro}</span>
                          </div>
                          <div className="">
                            <h2 className="text-lg font-medium">Cidade: </h2><span className="text-lg">{user.cidade}</span>
                          </div>
                          <div className="">
                            <h2 className="text-lg font-medium">Estado: </h2><span className="text-lg">{user.uf}</span>
                          </div>
                        </div>

                        
                      </div>
                    ))
                  ) : (
                    <p>Nenhum dado disponível.</p>
                  )}
                  <button onClick={handleLogout} className="inline-flex mt-4 items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-red-800">Logout</button>
                </div>
              </div>
              ) : (
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex flex-col items-center pb-10 pt-5">
                    <h2 className="text-lg p-5 font-bold">Você não está autenticado.</h2>
                    <div className="rounded-full shadow-lg">
                      <img className="w-36 h-36 " src="/src/assets/image/triste.png" alt="Bonnie image"/>
                    </div>
                    <h2 className="text-lg p-5">Para acessar as informações do usuário, faça<a className="text-red-600" href="Login"> Login</a>. </h2>
                  </div>
                </div>
            )}
        </div>
      </div>
      <div className="h-96 mt-10">
      </div>
  
      <div className="h-52">
      </div>
    </>
  );
}

export default Usuario;
