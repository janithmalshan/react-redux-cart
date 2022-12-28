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
                    {console.log(data.map(x => console.log('x', x)))}
                    {data.map(e => (
                        <li className="events__list__item" key={e.id}>
                            <h2 className="events__list__item__name">{e.event_name}</h2>
                            {
                                <div className="events__list__item__outrights">{e.outright.map((odd) => (
                                    <Item
                                        key={odd.id}
                                        id={odd.id}
                                        name={odd.name}
                                        event_name={e.event_name}
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
