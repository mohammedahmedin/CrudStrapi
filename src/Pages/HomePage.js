import React from 'react'
import useFetch from '../Hooks/UseFetch'
import { Link } from 'react-router-dom'

export default function HomePage() {

const {data, error, loading } = useFetch('http://localhost:1337/mobiles')


if(loading)return <p>Loading...😁</p>
if(error)return <p>Error...🤔</p>

// console.log("Homepage")

    return (
        <div>
            {data.map(mobile => (
             <div key ={mobile.id} className="mobile-card">
             <div className ="rating">{mobile.rating}</div>
             <h2>{mobile.Model}</h2> 

             
             <small>console list</small>
             

            
                
            <p>{mobile.Body.substring(0, 200)}</p>
             <Link to={'/MobileDetails/${mobile.id}'}>Read more</Link>
             </div> ))}
        </div>
    )
}
 