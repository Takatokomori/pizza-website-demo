import React from 'react';
import "../styles/Menu.css";
import { MenuList } from "../helpers/MenuList";
import MenuItem from '../components/MenuItem';

export default function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((menu, key)=>{
                return <MenuItem
                key={key}
                image={menu.image}
                name={menu.name}
                price={menu.price} />;
            })}
        </div>
    </div>
  )
}
