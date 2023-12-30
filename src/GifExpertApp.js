import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // no se debe mutar constantes
    // no le avisa a react que debe de volver a renderizar
    // no se hace de esta manera a menos que no se necesite cambiar
    // const categories = ['One Punch', 'Samurai x', 'Dragon Ball'];

    const [categories, setcategories] = useState(['Dragon ball']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setcategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category} 
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
