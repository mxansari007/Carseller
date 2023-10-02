import McLearn from './McLaren-1.jpg';
import { useState,useEffect } from 'react';
import './Carscard.scss';
export default function Carscard(props){
    const [liked,setLiked] = useState(false);
    useEffect(()=>{
        props.data.liked = !props.data.liked;
        console.log(props.data);    
    },[liked])

    return (
        <>
            <div className='cars-card-container'>
                <div className='cars-card-img'>
                    <img src={props.data.img} alt='mclearn' />
                </div>
                <div className='cars-card-title'>
                    <h4>{props.data.title}</h4>
                    <p>{props.data.year}</p>
                </div>
                <div className='cars-card-desc'>
                    <p><i className='fa-solid fa-user-group decs-icon'></i> {props.data.people} People</p>
                    <p><i className='fa-solid fa-gas-pump decs-icon'></i> {props.data.type}</p>
                    <p><i className='fa-solid fa-gauge decs-icon'></i> {props.data.mileage}km/1-litre</p>
                    <p><i className='fa-solid fa-dharmachakra decs-icon'></i> {props.data.gear}</p>
                </div>
                <div className='cars-card-price'>
                    <p>{props.data.price}<span className='permonth'>/month</span></p>
                    <div className='cars-card-rent'>
                        <div onClick={()=>{setLiked(!liked)}} className='cars-card-like'>
                            {liked?<i className='fa-solid fa-heart'></i>:<i className='fa-regular fa-heart'></i>}
                        </div>
                        <button className='cars-card-button'>Rent Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}