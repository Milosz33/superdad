import React, { useState, useEffect } from "react";
import {Form} from "formik";
import "../styles/Obozy.scss";
import { camps1 } from "../data/camps7";
import { camps2 } from "../data/camps10";
import { camps3 } from "../data/camps13";


const allCamps = [
    ...camps1, ...camps2, ...camps3
]

const Obozy = ()=> {
    const [age, setAge] = useState('7-9')
    const [data, setData] = useState(camps1)
    const handleSubmit = (e)=> {
        e.preventDefault()

        if (age==="7-9") {
            setData(camps1)
        }
        if (age==="10-12") {
            setData(camps2)
        }
        if (age==="13-15") {
            setData(camps3)
        }
        if (age==="wszystkie") {
            setData(allCamps)
        }
    }

    return (
        <>
        <form className="camps-form" onSubmit={handleSubmit}>
        <label htmlFor="children">Wybierz wiek dziecka:</label>

    <select value={age} onChange={(e)=>setAge(e.target.value)} id="child-age">
        <option value="7-9">7-9 lat</option>
        <option value="10-12">10-12 lat</option>
        <option value="13-15">13-15 lat</option>
        <option value="wszystkie">wszystkie</option>
    </select>
            <button type="submit" className="btn-camps" >
                Potwierdź
            </button>
        </form>
            <div>{data.map((el, index)=>{
                const{name, description, date, foto} = el;
                return(
                    <>
                        <div className="camps-container">
                            <img src={foto} />
                   <div className="camps-box">
                       <h2>{name}</h2>
                        <p>{date}</p>
                   <p>{description}</p>
                   </div>

                        </div>
                    </>


                )

            })} </div>
        </>
    );
}

export default Obozy;