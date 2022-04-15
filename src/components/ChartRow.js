import React, {useState, useEffect, useRef} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import DetailProductInDb from './DetailProductInDb';

function ChartRow(props){

    let [detalleProductoPa, setDetalleProductoPa] = useState({})
    console.log("ChartRow>>>>>>>>>>>>>>>>>>>>>>")
    console.log(props.detail)
    return (
        <React.Fragment>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name ? props.name : props.first_name}</td>
                    <td>{props.description ? props.description : props.email}</td>
                    <td><Link to={"/verdetalle"+props.detail}>Click para ver el detalle</Link></td>
                </tr>

                </React.Fragment>
            )
    }

export default ChartRow;