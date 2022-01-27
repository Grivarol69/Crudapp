import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
import {CrudTableRow} from './CrudTableRow';


const CrudTable = ({data, setDataToEdit, deleteData}) => {
//   console.log(data);
  return (
    <div>
        <h3>Tabla de Datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Constelación</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                { 
                    data.length === 0 
                        ? <tr><td colSpan="3">Sin datos</td></tr>
                        : data.map((item) => 
                            <CrudTableRow
                                key= {item.id}
                                item= {item}
                                setDataToEdit= {setDataToEdit}
                                deleteData= {deleteData}
                            />
                          )
                }
            </tbody>
        </table>
    </div>
  );
};

export default CrudTable;
