import React, { useState, useEffect } from "react";
import "../styles/Obozy.scss";
import { camps1 } from "../data/camps7";
import { camps2 } from "../data/camps10";
import { camps3 } from "../data/camps13";
import {NavLink} from "react-router-dom";




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
            <section>
            <h2>Campy dla Twojego dziecka</h2>
        <form className="age-select" onSubmit={handleSubmit}>
        <label htmlFor="children">wiek dziecka:</label>
    <select onClick={handleSubmit} value={age} onChange={(e)=>setAge(e.target.value)} id="child-age">
        <option value="7-9">7-9 lat</option>
        <option value="10-12">10-12 lat</option>
        <option value="13-15">13-15 lat</option>
        <option value="wszystkie">wszystkie</option>
    </select>
        </form>
            <div>{data.map((el, index)=>{
                const{name, description, date, foto} = el;
                return(

                    <article>
                        <div className="camps-box">
                       <h2>{name}</h2>
                        <p>{date}</p>
                            <img  alt="camps-image" src={foto} />
                   <p>{description}</p>
                            <NavLink exact to={"/contact"}>zapisz się</NavLink>
                   </div>

                        </article>
                )

            })} </div>
            </section>
        </>
    );
}

export default Obozy;