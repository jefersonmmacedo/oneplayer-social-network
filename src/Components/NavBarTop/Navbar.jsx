import React, { useContext } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import LogoImg from '../../assets/images/logo2.png'
import { AuthContext } from '../../contexts/Auth';
import { IoCalendarOutline, IoChatbubbleEllipsesOutline, IoHeartOutline } from 'react-icons/io5';
import { BsPlusSquare } from "react-icons/bs";
import { GoPlusCircle } from "react-icons/go";
import { CiSaveDown2 } from 'react-icons/ci';
import { HiFire, HiOutlineFire } from 'react-icons/hi';
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineStadium } from 'react-icons/md';

const Nav = styled.nav`
  width: 100%;
  display: none;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: fixed;
  top: 0;
  z-index: 97;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  font-size: 14px;
  color: var(--Description);
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
  padding: 0px 60px 0px 0px ;

  
.logotipo {
    display: none;
  }



@media (max-width: 900px) {
  display: flex;
  height: 45px;
  padding: 0 70px 0 30px;
  .account {
    margin: 20px 0;
    width: 100%;
    justify-content: center;
  }

.logotipo {
  display: block;
    padding-top: 5px;
  }
.logotipo a img {
    height: 30px;
  }

  .buttonsNarbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    border-radius: 10px;
}
.buttonsNarbar button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 10px 15px;
    font-size: 22px;
    background: transparent;
    color: var(--Primary);
    border: none;
    border-radius: 6px;
    margin: 0 20px;
}



  @media (max-width: 650px) {

    display: flex;
    height: 45px;
    padding: 0 60px 0 20px;


  @media (max-width: 600px) {
    .buttonsNarbar button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      padding: 10px 10px;
      font-size: 22px;
      background: transparent;
      color: var(--Primary);
      border: none;
      border-radius: 6px;
      margin: 0px;
  }
  

  }
  }
}

`



const Navbar = () => {

  
  return (
    <Nav>
      <div className="logotipo">
      <a href='/'>
      <img src={LogoImg} alt="Lens Eyewear" />
      </a>
      </div>


      <div className="buttonsNarbar">
                <button ><IoCalendarOutline /></button>
                <button ><MdOutlineStadium /></button> 
                <button ><IoHeartOutline /></button>
                <button ><IoChatbubbleEllipsesOutline /></button>
            </div>


      <Burger />
    </Nav>
  )
}

export default Navbar


