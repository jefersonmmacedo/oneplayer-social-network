import "./comingSoon.css";
import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import { TopSign } from "../../Components/TopSign/TopSign";
import logo from "../../assets/images/logo2.png";
import { useContext, useState } from "react";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../../contexts/Auth";

export function ComingSoon() {
    const date = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {loginSession} = useContext(AuthContext);

    function handleLogin(e) {
        e.preventDefault();
        loginSession({email, password})
    }

    return (
        <div className="ComingSoon">

            <div className="sections">
                <div className="sectionComingSoon">
                        <div className="form">
                <a href="/">
                <img src={logo} alt="" />
                </a>
                        <h2>Apaixonados pelo esporte!</h2>
                        <h2>Apaixonados pelo esporte!</h2>
                        <h3>Em Breve</h3>
                        </div>

                </div>


            </div>

        </div>
    )
}