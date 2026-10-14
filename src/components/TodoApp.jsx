import { useState } from "react";
import styles from "./todoApp.module.css";

function TodoApp () {
    const notass = [
          {
    id: crypto.randomUUID(),
    text: "soy la nota 1",
    },
     {
    id: crypto.randomUUID(),
    text: "soy la nota 2",
    },
    ];
    const [notas, setNotas] = useState(notass);

    const estilos = {
        color: "orange",
        fontSize: "4rem",
    };

// (props) | (componente) console.log(tituloApp, sub ) al igual que dentro de la funtion TodoApp
// { notasApp }
// const { notasApp } = props
    return (
        <>
        <h1 className={styles.titulo}>Notas</h1>
        <ul className={styles.noteList}>
           {notas.map(nota => <li className={styles.noteItem}key={nota.id}>{nota.text}</li>)}
            </ul>  
        </>
    );
}

export default TodoApp;