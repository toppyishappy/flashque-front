import React, { useState }  from 'react'
import { Link } from "react-router-dom";

export const StoreListPage = () => {
    const storeList = [
        {id: 1, name: 'Thay Ekkamai'},
        {id: 1, name: 'T-derm'},
        {id: 1, name: 'Bliss'},
        {id: 1, name: 'Urban'},
    ]
    return(
        <>
        {storeList.map(i => {
            return(
                <div className='card mb-2'>
                    <div className='card-body'>
                        <div className='d-flex align-items-center'>
                            <img style={{width: '120px'}} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-irish-pub-zoom-background-design-template-b4d29aa1948aaca66767cf9034d50e9a_screen.jpg?ts=1587032496'/>
                            <div className='container'>
                            
                                <span><a href='/1'>{i.name}</a></span>
                                <button type="button" class="btn btn-outline-primary">Book!</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </>
    )
}

