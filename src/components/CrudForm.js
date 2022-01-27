import React, { useState, useEffect } from 'react';

const initialForm = {
    name: "",
    constellation: "",
    id: null
}

function CrudForm({createData, updateData, dataToEdit, setDataToEdit}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
        setForm(dataToEdit);
    } else {
        setForm(initialForm);
    }
  }, [dataToEdit]);
  
  
  // handleChange hace una copia de lo que ya tiene en el form y le agrega 
  //el campo que se carga en pantalla "form.name: e.target.value"
  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
  }

  //handleSubmit se activa cuando se presiona el boton submit
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.constellation) {
        alert("Datos Incompletos");
        return;
    }

    if (form.id === null) {
        createData(form);
    } else {
        updateData(form);
    }
    handleReset(); //para limpiar el formulario luego de la acción
  }

  const handleReset = (e) => {
    setForm(initialForm); //se renderiza con los datos del form en blanco
    setDataToEdit(null);
  }


  return (
      <div>
        <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                name= "name"
                placeholder='Nombre'
                onChange={handleChange}
                value={form.name}
            />

            <input 
                type="text"
                name= "constellation"
                placeholder='Constelación'
                onChange={handleChange}
                value={form.constellation}
            />

            <input
                type="submit"
                value="Enviar"
            />

            <input
                type="reset"
                value="Limpiar"
                onClick={handleReset}
            />
            
        </form>
      </div>
  );
}

export default CrudForm;
