import React, {useEffect, useState} from "react";
import Item from "./Item";

function Events() {
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

    return (
        <div className="events">
            <h2>🎰 Events</h2>
            {data.length > 0 && (
                <ul className="events__list">
                    {data.map(item => (
                        <li className="events__list__item" key={item.id}>
                            <h2 className="events__list__item__name">{item.event}</h2>
                            {
                                <div className="events__list__item__outrights">{item.outright.map((odd) => (
                                    <Item
                                        id={odd.id}
                                        key={odd.id}
                                        name={odd.name}
                                        event={item.event}
                                        odd={odd.odd}/>
                                ))}
                                </div>
                            }
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Events
