import React, {useState , useEffect} from 'react'
import DataTable from "./DataTable";
require("es6-promise").polyfill();
require("isomorphic-fetch");
export default function GetData() {
        const [data, setData] = useState([]);
        const [q, setQ] = useState("");
        useEffect(() => {
            fetch("https://mocki.io/v1/efb077c7-5382-4c4b-813b-735761799922")
            .then((response)=>response.json())
            .then((json)=>setData(json));            
        }, [])
    return (
        <div>
            <DataTable data={data}/>
        </div>
    )
}
