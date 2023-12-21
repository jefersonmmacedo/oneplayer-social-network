import { useContext, useEffect, useState } from "react";
import "./myAddress.css"
import { IoAddCircleOutline, IoBusinessOutline, IoHomeOutline } from "react-icons/io5";
import Modal from 'react-modal';
import { mask as masker, unMask } from "remask";
import { AuthContext } from "../../contexts/Auth";
import api from "../../services/api";
import { MyAddressEdit } from "../MyAddressEdit/MyAddressEdit";

export function MyAddress() {
    const Local = localStorage.getItem("lenseyewear");
    const user = JSON.parse(Local);

    const {newAddressAccount} = useContext(AuthContext);


    const [isOpenModalProcess, setIsOpenModaProcess] = useState(false);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [road, setRoad] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [reference, setReference] = useState("");
    const [cep, setCep] = useState("");
    const [addressAccount, setAddressAccount] = useState([]);

    useEffect(() => {
        async function loadAddressAccount() {
            await api.get(`addressAccounts/user/${user.id}`).then((res) => {
                console.log(res.data)
                setAddressAccount(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }

        loadAddressAccount()
    },[])

    function handleRedirect(data) {
        window.open( `/minha-conta/${data}`, "_self")
    }

    function handleOpenModalProcess(e) {
        e.preventDefault();
          setIsOpenModaProcess(true)
        }
      
        function handleCloseModalProcess(e) {
          e.preventDefault();
          setIsOpenModaProcess(false);
        }

        function handleSelectType(data) {
            console.log(data);
            setType(data);
        }

        function handleNewAddress(e) {
            e.preventDefault();
            newAddressAccount({
                idAccount: user.id,
                type, title, road, number, complement, 
                district, city, uf, cep, reference
            })
        }

        function ChangeMaskCEP(e) {
            const originalValue = unMask(e.target.value);
            const maskedValue = masker(originalValue, [
              "99999-999",
            ]);
        
            setCep(maskedValue)
          }
        function ChangeMaskUF(e) {
            const originalValue = unMask(e.target.value);
            const maskedValue = masker(originalValue, [
              "AA",
            ]);
        
            setUf(maskedValue)
          }

        Modal.setAppElement('#root');

    return (
        <div className="MyAddress">
            <h3>MEUS ENDEREÇOS</h3>
            
            <div className="MyAddressList">

                {addressAccount.map((address) => {
                    return (
                        <div className="userAddress" key={address.id}>
                        <h4><span>Endereço:</span> {address.type} - {address.title}</h4>
                        <h4><span>Rua:</span> {address.road} - Nº {address.number}</h4>
                        <h4><span>Complemento: </span> {address.complement}</h4>
                        <h4><span>Bairro:</span> {address.district}</h4>
                        <h4><span>Cidade:</span> {address.city} - <span>Estado:</span> {address.uf}</h4>
                        <h4><span>CEP:</span> {address.cep}</h4>
                        <h4><span>Referência:</span> {address.reference}</h4>
                        <br />
                       <MyAddressEdit id={address.id} />
                    </div>
                    )
                })}
              
               

            </div>
                    <button onClick={handleOpenModalProcess}><IoAddCircleOutline />Novo Endereço</button>



                    <Modal isOpen={isOpenModalProcess} onRequestClose={handleCloseModalProcess}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">

        <div className="content-moda-Process-client">
        <div className="itensModal-Process-client">
            <h3>Novo Endereço</h3>

            <div className="form">
                <div className="buttons">
                    <button onClick={() => handleSelectType("Residencial")} className={type === "Residencial" ? "" : "btn2"} ><IoHomeOutline /> Residencial</button>
                    <button onClick={() => handleSelectType("Comercial")} className={type === "Comercial" ? "" : "btn2"}><IoBusinessOutline />Comercial</button>
                </div>
                <input type="text" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)}/>
                <input type="text" className="input2" placeholder="Rua" value={road} onChange={e => setRoad(e.target.value)}/>
                <input type="number" className="input3" placeholder="Nº" value={number} onChange={e => setNumber(e.target.value)}/>
                <input type="text" placeholder="Complemento" value={complement} onChange={e => setComplement(e.target.value)}/>
                <input type="text" className="input4" placeholder="Bairro" value={district} onChange={e => setDistrict(e.target.value)}/>
                <input type="text" className="input4" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                <input type="text" className="input4" placeholder="UF" value={uf?.toUpperCase()} onChange={ChangeMaskUF}/>
                <input type="text" className="input3" placeholder="CEP" value={cep} onChange={ChangeMaskCEP}/>
                <input type="text" className="input2" placeholder="Referência" value={reference} onChange={e => setReference(e.target.value)}/>

                <button onClick={handleNewAddress}><IoAddCircleOutline /> Cadastrar endereço</button>
            </div>

            
        </div>
        </div>

        </Modal>
        </div>
    )
}