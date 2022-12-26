import React, {useEffect, useState} from "react";
import "./App.css";
import {useSelector} from "react-redux"
import CartItem from "./components/CartItem";
import Item from "./components/Item";
import Total from "./components/Total";

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
                                        <Item
                                            key={odd.id}
                                            id={odd.id}
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
                    <Total />
                    {cart?.map((item) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            event_name={item.event_name}
                            odd={item.odd}
                        />
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;
