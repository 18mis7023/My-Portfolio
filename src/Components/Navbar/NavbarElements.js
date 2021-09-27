import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav=styled.nav`
    background:#00122E;
    height:200px;
    display:flex;
    justify-content:space-between;
    padding:0.5rem calc((100vw-1000px)/2);
    z-index:10;
    overflow-x: hidden;
    
`

export const NavLink=styled(Link)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;
    margin-top:-120px;
    font-size:20px;
    &.active{
        color:#15cdfc;
    }
`
export const Bars=styled(FaBars)`
    display:none;
    color:#fff;

    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        padding:20px;
        transform:translated(-100%,75%);
        font-size:1.8rem;
        cursor:pointer;
    }
`

export const NavMenu=styled.div`
    display:flex;
    align-items:center;
    margin-right:-24px;
    
    @media screen and (max-width:768px){
        display:none;
    }
`

export const NavBtn=styled.nav`
    display:flex;
    align-items:center;
    margin-right:24px;

    @media screenand (max-width:768px){
        display:none;
    }
`

export const NavImage=styled.image`
    height:200px;
    width:200px;
    background: linear-gradient(202.07deg, #00122E 5.91%, #FC59FF 128.53%);
    filter: blur(50px);
    margin-right:-120px;
    margin-top:-120px;

    @media screen and (max-width:768px){
        display:none;
    }
`