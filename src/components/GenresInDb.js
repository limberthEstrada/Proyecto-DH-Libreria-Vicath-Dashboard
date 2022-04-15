import React, {useState, useEffect, useRef} from 'react';
import Genre  from './Genre';


function GenresInDb(){
    let [categoryList, setCategoryList] = useState([])

    useEffect(()=>{
     console.log("Estoy en el hook -inicio-")
        fetch('https://vicath-libreria.herokuapp.com/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(data => {
          setCategoryList(data.countByCategory)
          
          
          //setarrayCategoryConverted(arrayCategory)
        })
        .catch(error => console.log(error))
    }, [])

    console.log("Esto se ejecuta primero")
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800">Categorias - Vicath</h6>
                            </div>
                            <div className="card-body fondoCaja">
                                <div className="row">
                                    {
                                      categoryList.length > 0 &&
                                      categoryList.map((categoria,index)=>{
                                            return  <Genre  {...categoria}  key={index} />
                                        })
                                    }
                                    { categoryList.length === 0 && <p>No se encontró nada</p>}
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
    

}
export default GenresInDb;