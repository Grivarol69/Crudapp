import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import React, { useState, useEffect } from 'react';


const initialDb = [
    {
      id: 1,
      name: "Seiya",
      constellation: "Pegaso",
    },
    {
      id: 2,
      name: "Shiryu",
      constellation: "Dragón",
    },
    {
      id: 3,
      name: "Hyoga",
      constellation: "Cisne",
    },
    {
      id: 4,
      name: "Shun",
      constellation: "Andrómeda",
    },
    {
      id: 5,
      name: "Ikki",
      constellation: "Fénix",
    },
  ];

const CrudApp = () => {
    //Definición de Estados Iniciales, initialDb contiene los datos iniciales
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    //createData, updateData y deleteData se definen en el Componente de 
    //primer nivel, se pasa como Props hacia abajo pero se ejecuta a través 
    //de un evento Submit en commponente de nivel inferior, las props van de 
    //arriba hacia abajo y los eventos van de abajo hacia arriba.

    const createData = (data) => {
      //createData recibe la data del formulario, hace una copia a través de
      //Spread Operator de lo que ya tiene en la DB y agrega el nuevo registro
      data.id = Date.now();
      setDb([
        ...db,
        data
      ]);
    };

    const updateData = (data) => {
      let newData = db.map(item => item.id === data.id ? data : item);
      setDb(newData);
    };

    const deleteData = (id) => {
      let isDelete = window.confirm(
        `¿Estás seguro de eliminar el registro Id ${id}?`
      );

      if (isDelete) {
        let newData = db.filter(dato => dato.id !== id);
        setDb(newData);
      } else {
        return;
      }
    };

    return( 
        <div>
            <h2>CRUD App</h2>
            <CrudForm 
              createData= {createData} //envía la función como Props
              updateData= {updateData} 
              dataToEdit= {dataToEdit} 
              setDataToEdit={setDataToEdit}
            />
            <CrudTable 
              data={ db }
              setDataToEdit= {setDataToEdit}
              deleteData= {deleteData}
            />
        </div>
    )
}

export default CrudApp;
