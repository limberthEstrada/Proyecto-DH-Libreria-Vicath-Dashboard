import React, {useState, useEffect, useRef} from 'react';
import LastProdInd  from './LastProdInd';


function LastMovieInDb(){
    let [ultimoProducto, setUltimoProducto] = useState({})
    //let [verDetalleState, setVerDetalle] = useState(false)

    useEffect(()=>{
		fetch(`https://vicath-libreria.herokuapp.com/api/lastproduct`)
		.then(response => {
			return response.json()
		})
		.then(data => {
            console.log("------------------------------")
            //console.log(data.lastProduct)
			setUltimoProducto(data.lastProduct)
            
		})
	}, [])

  console.log("Testing---------------")
  console.log(ultimoProducto)

    return(
        <React.Fragment>
        {Object.keys(ultimoProducto).length > 0 && <LastProdInd {...ultimoProducto} />}
        </React.Fragment>
    )
}

export default LastMovieInDb;
