import React from 'react';


export function CrudTableRow({item, setDataToEdit, deleteData}) {
    
    const {id, name, constellation} = item;

    return (
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button 
                    onClick={() => setDataToEdit(item)}
                >
                    Editar
                </button>
                <button 
                    onClick={() => deleteData(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
}


