import React from 'react'

type Props = {
    image: string;
    name: string;
    price: number;    
}

export default function MenuItem(props: Props) {
    const {image, name, price} = props;
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>${price}</p>
    </div>
  )
}
