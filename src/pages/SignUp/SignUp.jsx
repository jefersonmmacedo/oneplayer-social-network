import "./signUp.css";
import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import { TopSign } from "../../Components/TopSign/TopSign";
import logo from "../../assets/images/logo2.png";
import { IoEyeOffOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { mask as masker, unMask } from "remask";
import { AuthContext } from "../../contexts/Auth";


export function SignUp() {
    const date = new Date().getFullYear();
    const {createAccount} = useContext(AuthContext);

    const [typeAccount, setTypeAccount] = useState("Torcedor");
    const [subTypeAccount, setSubTypeAccount] = useState("");
    const [cpf_cnpj, setCpf_cnpj] = useState("");
    const [name, setName] = useState("");
    const [socialName, setSocialName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    function handleSelectType(e) {
        setTypeAccount(e.target.value);
    }
    function handleSelectSubType(e) {
        setSubTypeAccount(e.target.value);
    }

    function ChangeMaskPhone(e) {
        const originalValue = unMask(e.target.value);
        const maskedValue = masker(originalValue, [
          "(99)99999-9999",
          "(99)99999-999",
        ]);
    
        setWhatsapp(maskedValue)
      }
    function ChangeMaskDocument(e) {
        const originalValue = unMask(e.target.value);
        const maskedValue = masker(originalValue, [
          "999.999.999-99",
          "99.999.999/9999-99",
        ]);
    
        setCpf_cnpj(maskedValue)
      }

    function handleCreateAccount(e) {
        e.preventDefault();
        
        if(name === "") {
            toast.error(`Preencha ${typeAccount === "Pessoa Física"  ?  "o Nome" : "a Rasão Social" }`);
            return
        }
        if(socialName === "") {
            toast.error(`Preencha ${typeAccount === "Pessoa Física"  ?  "o Nome Social" : "o Nome Fantasia" }`);
            return
        }
        if(cpf_cnpj === "") {
            toast.error(`Preencha ${typeAccount === "Pessoa Física"  ?  "o CPF" : "o CNPJ" }`);
            return
        }
        if(email === "") {
            toast.error(`Preencha o Email`);
            return
        }
        if(whatsapp === "") {
            toast.error(`Preencha o Whatsapp`);
            return
        }
       
        if(password === "") {
            toast.error(`Preencha a senha`);
            return
        }
        if(password !== "" && passwordConfirm === "") {
            toast.error(`Preencha a confirmação de senha`);
            return
        }
       
        if(password  !== passwordConfirm) {
            toast.error(`Senhas não coincidem`);
            return
        }
       
        console.log({type: typeAccount, cpf_cnpj, name, socialName, email, whatsapp, password})
        createAccount({type: typeAccount, cpf_cnpj, name, socialName, email, whatsapp, password})

    } 


    function selectTypeAccount(data) {
        setTypeAccount(data);
    }
    return (
        <div className="SignUp">

            <div className="sections">
            
                <div className="sectionSignUp">
                <a href="/">
                <img src={logo} alt="" />
                </a>

                        <div className="form">
                        <h3>Cadastre-se</h3>

                        <div className="textSpan">
                            <span>Usuário</span>
                        </div>

                        <div className="double">
                            <input type="text" value={name} onChange={e => (setName(e.target.value))} placeholder="Nome Completo"/>
                            <input type="text" value={socialName} onChange={e => (setSocialName(e.target.value))} placeholder="Nome de usuário"/>
                        </div>


                        <div className="textSpan">
                            <span>Tipo de conta</span>
                        </div>

                        <div className="buttonsSelect">
                            <button className={typeAccount == "Torcedor" ? "btnSelect1" : "btnSelect2"} onClick={ () => selectTypeAccount("Torcedor")}>Torcedor</button>
                            <button className={typeAccount == "Atleta" ? "btnSelect1" : "btnSelect2"} onClick={ () => selectTypeAccount("Atleta")}>Atleta</button>
                            <button className={typeAccount == "Comunicador" ? "btnSelect1" : "btnSelect2"} onClick={ () => selectTypeAccount("Comunicador")}>Comunicador</button>
                            <button className={typeAccount == "Clube" ? "btnSelect1" : "btnSelect2"} onClick={ () => selectTypeAccount("Clube")}>Clube</button>
                            <button className={typeAccount == "Profissional" ? "btnSelect1" : "btnSelect2"} onClick={ () => selectTypeAccount("Profissional")}>Profissional</button>
                            <button className={typeAccount == "Empresa" ? "btnSelect1" : "btnSelect2"} onClick={ () => selectTypeAccount("Empresa")}>Empresa</button>
                        </div>




                        <div className="double">
                            {/* <select onChange={handleSelectType}>
                                    <option value="Torcedor">Torcedor</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Comunicador">Comunicador</option>
                                    <option value="Clube">Clube</option>
                                    <option value="Profissional">Profissional</option>
                                    <option value="Empresa">Empresa</option>
                            </select> */}
                            </div>
                           

                                {
                                typeAccount == "Torcedor" ?
                                <select onChange={handleSelectSubType}> 
                                <option value="Torcedor">Torcedor</option>
                                   </select>
                                :
                                typeAccount == "Atleta" ?
                                <select onChange={handleSelectSubType}> 
                               
                                 <option value="Atleta profissional">Atleta profissional</option>
                                    <option value="Atleta Amador">Atleta Amador</option>
                                    </select>
                               : typeAccount == "Clube" ? 
                               <select onChange={handleSelectSubType}>
                                <option value="Clube Profissional">Clube Profissional</option>
                                <option value="Time amaddor">Time amaddor</option>
                                </select>
                               : typeAccount == "Comunicador" ? 
                               <select onChange={handleSelectSubType}>
                                <option value="Jornalista">Jornalista</option>
                                <option value="Influencer">Influencer</option>
                                <option value="Narrador">Narrador</option>
                                <option value="Comentarista">Comentarista</option>
                                <option value="Fotógrafo">Fotógrafo</option>
                                <option value="Apresentador">Apresentador</option>
                                <option value="Profissional da comunicação">Profissional da comunicação</option>
                                </select>
                               : typeAccount == "Profissional" ? 
                               <select onChange={handleSelectSubType}>
                                <option value="Treinador">Treinador</option>
                                <option value="Auxiliar Técnico">Auxiliar Técnico</option>
                                <option value="Presidente">Presidente</option>
                                <option value="Diretor">Diretor</option>
                                <option value="Médico">Médico</option>
                                <option value="Fisioterapeuta">Fisioterapeuta</option>
                                <option value="Psicologo">Psicologo</option>
                                <option value="Nutricionista">Nutricionista</option>
                                <option value="Staff">Staff</option>
                                <option value="Segurança">Segurança</option>
                                <option value="Estagiário">Estagiário</option>
                                <option value="Fotógrafo">Fotógrafo</option>
                                <option value="Scout">Scout</option>
                                <option value="Analista">Analista</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Programador">Programador</option>
                                <option value="Roupeiro">Roupeiro</option>
                                <option value="Preparador de Goleiros">Preparador de Goleiros</option>
                                </select>
                               : typeAccount == "Empresa" ? 
                               <select onChange={handleSelectSubType}>
                                <option value="Material Esportivo">Material Esportivo</option>
                                <option value="Rede de Academias">Rede de Academias</option>
                                <option value="Banco">Banco</option>
                                <option value="Alimentos">Alimentos</option>
                                <option value="Cosméticos">Cosméticos</option>
                                <option value="Casa de Apostas">Casa de Apostas</option>
                                <option value="TV ou Canais de Comunicação">TV ou Canais de Comunicação</option>
                                <option value="Plataforma de Stream">Plataforma de Stream</option>
                                <option value="Empresa Automobilistica">Empresa Automobilistica</option>
                                <option value="Cervejaria e bebidas">Cervejaria e bebidas</option>
                                </select>
                                :
                                ""
                                }
                                   
                            

                        
                      
                        <div className="textSpan">
                            <span>Data de nascimento</span>
                        </div>

                            <div className="triple">
                                <select name="" id="">
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                                <option value="5">05</option>
                                <option value="6">06</option>
                                <option value="7">07</option>
                                <option value="8">08</option>
                                <option value="9">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                </select>
                                <select name="" id="">
                                    <option value="0">Jan</option>
                                    <option value="1">Fev</option>
                                    <option value="2">Mar</option>
                                    <option value="3">Abr</option>
                                    <option value="4">Mai</option>
                                    <option value="5">Jun</option>
                                    <option value="6">Jul</option>
                                    <option value="7">Ago</option>
                                    <option value="8">Set</option>
                                    <option value="9">Out</option>
                                    <option value="10">Nov</option>
                                    <option value="11">Dez</option>
                                </select>
                                <select name="" id="">
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2011">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                                <option value="1982">1982</option>
                                <option value="1981">1981</option>
                                <option value="1980">1980</option>
                                <option value="1979">1979</option>
                                <option value="1978">1978</option>
                                <option value="1977">1977</option>
                                <option value="1976">1976</option>
                                <option value="1975">1975</option>
                                <option value="1974">1974</option>
                                <option value="1973">1973</option>
                                <option value="1972">1972</option>
                                <option value="1971">1971</option>
                                <option value="1970">1970</option>
                                <option value="1969">1969</option>
                                <option value="1968">1968</option>
                                <option value="1967">1967</option>
                                <option value="1966">1966</option>
                                <option value="1965">1965</option>
                                <option value="1964">1964</option>
                                <option value="1963">1963</option>
                                <option value="1962">1962</option>
                                <option value="1961">1961</option>
                                <option value="1960">1960</option>
                                <option value="1959">1959</option>
                                <option value="1958">1958</option>
                                <option value="1957">1957</option>
                                <option value="1956">1956</option>
                                <option value="1955">1955</option>
                                <option value="1954">1954</option>
                                <option value="1953">1953</option>
                                <option value="1952">1952</option>
                                <option value="1951">1951</option>
                                <option value="1950">1950</option>
                                <option value="1949">1949</option>
                                <option value="1948">1948</option>
                                <option value="1947">1947</option>
                                <option value="1946">1946</option>
                                <option value="1945">1945</option>
                                <option value="1944">1944</option>
                                <option value="1943">1943</option>
                                <option value="1942">1942</option>
                                <option value="1941">1941</option>
                                <option value="1940">1940</option>
                                <option value="1939">1939</option>
                                <option value="1938">1938</option>
                                <option value="1937">1937</option>
                                <option value="1936">1936</option>
                                <option value="1935">1935</option>
                                <option value="1934">1934</option>
                                <option value="1933">1933</option>
                                <option value="1932">1932</option>
                                <option value="1931">1931</option>
                                <option value="1930">1930</option>
                                </select>
                            </div>

                            <div className="textSpan">
                            <span>Contato</span>
                        </div>
                        
                            <div className="double">
                                <input type="text" value={email} onChange={e => (setEmail(e.target.value))} placeholder="Celular"/>
                                <input type="text" value={email} onChange={e => (setEmail(e.target.value))} placeholder="E-mail"/>
                            </div>
                           

                            <div className="textSpan">
                            <span>Senha</span>
                             </div>
                             <div className="passwords">
                                <div className="pass">                                    
                            <input type="password" value={password} onChange={e => (setPassword(e.target.value))} placeholder="Nova Senha"/>
                                  <button><IoEyeOffOutline /></button>  
                                </div>
                                <div className="pass">
                            <input type="password" value={passwordConfirm} onChange={e => (setPasswordConfirm(e.target.value))} placeholder="Confirmação de Senha"/>
                                <button><IoEyeOffOutline /></button>  
                                </div>
                            </div>

                            {
                               password  !== passwordConfirm ?
                                <p style={{color: 'red'}}>Senhas não combinam</p> :
                                ""
                            }

                            <button onClick={handleCreateAccount}>Cadastrar</button>
                            <a href="/entrar" className="Link">Entrar</a>
                        </div>

                        <p>One Player. A rede social dos esportes &copy; {date}</p>
                </div>



            </div>

        </div>
    )
}