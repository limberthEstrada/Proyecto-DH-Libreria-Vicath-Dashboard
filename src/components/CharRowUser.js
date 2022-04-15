import React from 'react';

function ChartRowUser(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.first_name}</td>
                    <td>{props.email}</td>
                    <td><a href={props.detail}>Click para ver el detalle</a></td>
                </tr>
            )
    }

export default ChartRowUser;