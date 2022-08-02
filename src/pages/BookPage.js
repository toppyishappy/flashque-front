import React from 'react';


export const BookPage = () => {
    const handleBook = (e) => {
        window.location.href = '/que'
    }
    return(
        <>
            <img style={{width: '120px'}} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-irish-pub-zoom-background-design-template-b4d29aa1948aaca66767cf9034d50e9a_screen.jpg?ts=1587032496'/>
            <div>
                <div>จำนวนที่นั่ง</div>
                <input type='number'/>
                <button type="button" class="btn btn-outline-primary" onClick={handleBook}>Book now!</button>
            </div>
        </>
    )
} 