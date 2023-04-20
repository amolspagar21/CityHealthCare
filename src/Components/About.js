import React from 'react'

import Karan  from "./images/Karan.jpeg";
import Neha from "./images/Neha.jpg";
import Tushar from "./images/Tushar.jpg";
import  Sanket from "./images/Sanket.jpg";
import  Sumeet from "./images/Sumeet.jpg";
import Swaraj from "./images/Swaraj.jpeg";
import Amol  from "./images/Amol.jpeg";
import  Omkar from "./images/Omkar.jpeg";
import Khushboo from "./images/Khushboo.jpeg";
import  Aboli from "./images/Aboli.jpeg";
import "../CSS/Aboutus.css"

function About() {
    return (
        <div>

            <div className='text-center text-light mt-4 mb-2 py-2 pb-sm-1'>
                <h1>About us</h1>
            </div>

            <div className='p-3 p-sm-2 mt-sm-0 mt-0 p-2 mx-xl-5'>

                <div className='mx-sm-2 mt-sm-3 mx-2 d-flex cards'>
                    <div className='col-4 col-md-3 col-lg-3'>
                        <img src={Karan} className="w-100 border border-dark border-1 personImages"></img>
                    </div>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-md-1 col-9 cardsColor1 rounded-end-5  '>
                        <h1 className='text-start text-dark names'>Karan Jagtap</h1>
                        <h5 className='text-start text-secondary locations'>Beed</h5>
                        <h4 className='text-start emailIDs'>karanjagtap107@gmail.com</h4>
                        <div className='description '>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div>
                    </div>
                </div>

                <div className='mx-2 mx-sm-2 mt-3 mt-sm-3 d-flex cards'>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-sm-0 py-md-1 col-9 cardsColor3'>
                        <h1 className='text-end text-dark names'>Neha Saratakar</h1>
                        <h5 className='text-end text-secondary px-1 locations'>Nashik</h5>
                        <h4 className='text-end emailIDs'>saratakarneha@gmail.com</h4>
                        {/* <div className='description  '>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div> */}
                        <p className='text-end emailIDs'>We are always ready to hear coming suggestions. </p>
                    </div>
                    <div className=' p-0 col-4 col-md-3 col-lg-3 '>
                        <img src={Neha} className="w-100 border personImages"></img>
                    </div>
                </div>

                <div className='mx-2 mx-sm-2 mt-3 mt-sm-3 d-flex cards'>
                    <div className=' p-0 col-4 col-md-3 col-lg-3'>
                        <img src={Tushar} className="w-100 border personImages"></img>
                    </div>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-sm-0 py-md-1 col-9 cardsColor2 rounded-end-5  '>
                        <h1 className='text-start text-secondary names'>Tushar Jaybhaye</h1>
                        <h5 className='text-start locations locations'>Kalyan</h5>
                        <h4 className='text-start locations emailIDs'>tusharjaybhaye222@gmail.com</h4>
                        <div className='description  '>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div>
                    </div>
                </div>

                <div className='mx-2 mx-sm-2  mt-sm-3 mt-3 d-flex cards'>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-sm-0 py-md-1 col-9 cardsColor4 rounded-end-5  '>
                        <h1 className='text-end text-dark names'>Sanket Tanpure</h1>
                        <h5 className='text-end locations locations'>Ahmednagar</h5>
                        <h4 className='text-end locations emailIDs'>sanket.tanpure16@gmail.com</h4>
                        {/* <div className='description '>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div> */}
                        <p className='text-end emailIDs'>We are always ready to hear coming suggestions. </p>
                    </div>
                    <div className='p-0 col-4 col-md-3 col-lg-3'>
                        <img src={Sanket} className="w-100 border personImages"></img>
                    </div>
                </div>

                <div className='mx-2 mx-sm-2 mt-sm-3 mt-3 d-flex cards'>
                    <div className=' p-0 col-4 col-md-3 col-lg-3'>
                        <img src={Sumeet} className="w-100 border personImages"></img>
                    </div>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-sm-0 py-md-1 col-9 cardsColor5'>
                        <h1 className='text-start text-dark names'>Sumeet Kumawat</h1>
                        <h5 className='text-start locations locations'>Nashik</h5>
                        <h4 className='text-start locations emailIDs'>sumeetjkumawat@gmail.com</h4>
                        <div className='description  '>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div>
                    </div>
                </div>

                <div className='mx-2 mx-sm-2 mt-3 mt-sm-3 d-flex cards'>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-sm-0 py-md-1 col-9 cardsColor3'>
                        <h1 className='text-end text-dark names'>Khushboo Mahajan</h1>
                        <h5 className='text-end text-secondary px-1 locations'>Indore</h5>
                        <h4 className='text-end emailIDs'>khushboomhjn608@gmail.com</h4>
                        <p className='text-end emailIDs'>We are always ready to hear coming suggestions. </p>
                        {/* <div className='description'>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div> */}
                    </div>
                    <div className=' p-0 col-4 col-md-3 col-lg-3 '>
                        <img src={Khushboo} className="w-100 border personImages"></img>
                    </div>
                </div>

                <div className='mx-sm-2 mt-sm-3 mx-2 d-flex cards'>
                    <div className='col-4 col-md-3 col-lg-3'>
                        <img src={Omkar} className="w-100 border border-dark border-1 personImages"></img>
                    </div>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-md-1 col-9 cardsColor1 rounded-end-5  '>
                        <h1 className='text-start text-dark names'>Omkar shah</h1>
                        <h5 className='text-start text-secondary locations'>Nashik</h5>
                        <h4 className='text-start emailIDs'> omkarshah123@gmail.com</h4>
                       <div className='description'>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div>
                    </div>
                </div>

                <div className='mx-2 mx-sm-2  mt-sm-3 mt-3 d-flex cards'>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-sm-0 py-md-1 col-9 cardsColor4 rounded-end-5  '>
                        <h1 className='text-end text-dark names'>Aboli Kudav</h1>
                        <h5 className='text-end locations locations'>Mumbai</h5>
                        <h4 className='text-end locations emailIDs'>kudavaboli123@gmail.com</h4>
                        <p className='text-end emailIDs'>We are always ready to hear coming suggestions. </p>
                        {/* <div className='description '>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div> */}
                    </div>
                    <div className='p-0 col-4 col-md-3 col-lg-3'>
                        <img src={Aboli} className="w-100 border personImages"></img>
                    </div>
                </div>

                <div className='mx-2 mx-sm-2 mt-3 mt-sm-3 d-flex cards'>
                    <div className=' p-0 col-4 col-md-3 col-lg-3'>
                        <img src={Swaraj} className="w-100 border personImages"></img>
                    </div>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-sm-0 py-md-1 col-9 cardsColor2 rounded-end-5  '>
                        <h1 className='text-start text-secondary names'>Swaraj Patil</h1>
                        <h5 className='text-start locations locations'>Mumbai</h5>
                        <h4 className='text-start locations emailIDs'>swarajpatil2000@gmail.com</h4>
                        
                        <div className='description  '>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div>
                    </div>
                </div>

                <div className='mx-2 mx-sm-2  mt-sm-3 mt-3 d-flex cards'>
                    <div className='p-3 px-sm-3 py-sm-2 px-md-5 py-sm-0 py-md-1 col-9 cardsColor4 rounded-end-5  '>
                        <h1 className='text-end text-dark names'>Amol Pagar</h1>
                        <h5 className='text-end locations locations'>Nashik</h5>
                        <h4 className='text-end locations emailIDs'>amolspagar21@gmail
                            com</h4>
                        <p className='text-end emailIDs'>We are always ready to hear coming suggestions. </p>
                        {/* <div className='description '>
                            <i className='text-start text-center'>We are always ready to hear coming suggestions. </i>
                        </div> */}
                    </div>
                    <div className='p-0 col-4 col-md-3 col-lg-3'>
                        <img src={Amol} className="w-100 border personImages"></img>
                    </div>
                </div>                             
            </div>
        </div>
    )
}

export default About;