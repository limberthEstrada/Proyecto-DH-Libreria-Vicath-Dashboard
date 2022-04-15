import React, {useState, useEffect, useRef} from 'react';
import LastProdInd  from './LastProdInd';
import {useParams, useLocation} from 'react-router-dom';

function DetailProductInDb(detalle){

    const lelele = useParams()
    const location = useLocation()
    console.log("ADELA")
    const urlDetalle = location.pathname.slice(11)
    console.log(urlDetalle)
    let [ultimoProducto, setUltimoProducto] = useState({})
    //let [verDetalleState, setVerDetalle] = useState(false)

    useEffect(()=>{
		fetch('https://vicath-libreria.herokuapp.com'+urlDetalle)
		.then(response => {
			return response.json()
		})
		.then(data => {
            console.log("------------------------------")
            //console.log(data.lastProduct)
			setUltimoProducto(data)
            
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

export default DetailProductInDb;
