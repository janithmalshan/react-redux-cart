import React, {useEffect, useState} from "react";
import "./App.css";
import {useSelector} from "react-redux"
import Item from "./components/Item";

function App() {
    const [data, setData] = useState([])
    const fetchData = () => {
        fetch('./data.json').then((res) => {
            return res.json()
        }).then(data => {
            setData(data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    const cart = useSelector((state) => state.cart)
    return (
        <div className="App">
            <header className="App-header">
                {data.length > 0 && (
                    <ul>
                        {data.map(e => (
                            <li key={e.id}>{e.event_name}
                                {
                                    <div>{e.outright.map((odd) => (
                                        // <span key={odd.id}>{odd.name}<button>Add</button></span>
                                        <Item
                                            id={odd.id}
                                            key={odd.id}
                                            name={odd.name}
                                            event_name={e.event_name}
                                            odd={odd.odd}/>
                                    ))}</div>
                                }
                            </li>
                        ))}
                    </ul>
                )}
                <div>
                    <p>== Cart ==</p>
                </div>
            </header>
        </div>
    );
}

export default App;
