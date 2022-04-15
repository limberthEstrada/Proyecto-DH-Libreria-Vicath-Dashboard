//import React from 'react';
import React, {useState, useEffect, useRef} from 'react';
import SmallCard from './SmallCard';

function ContentRowMovies(){
    let [countUsers, setCountUsers] = useState(0)
    let [countProducts, setCountProducts] = useState(0)
    let [countCategories, setCountCategories] = useState(0)

    useEffect(()=>{
		fetch(`https://vicath-libreria.herokuapp.com/api/users`)
		.then(response => {
			return response.json()
		})
		.then(data => {
			setCountUsers(data.count)

            //
                fetch(`https://vicath-libreria.herokuapp.com/api/products`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setCountProducts(data.count)
                    setCountCategories(data.countTotalCategories)
                })
		})
	}, [])

    let usersInDB = {
        title: 'Total de usuarios',
        color: 'success', 
        cuantity: countUsers,
        icon: 'fa-user-check'
    }
     
    let totalProducts = {
        title:'Total de productos', 
        color:'success', 
        cuantity: countProducts,
        icon:'fa-award'
    }

    let categoriesInDB = {
        title:'Total de categorias' ,
        color:'success',
        cuantity: countCategories,
        icon:'fa-clipboard-list'
    }
    
    let cartProps = [usersInDB, totalProducts, categoriesInDB];

    return (
        <div className="row">
            
            {cartProps.map( (data, i) => {

                return <SmallCard {...data} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;