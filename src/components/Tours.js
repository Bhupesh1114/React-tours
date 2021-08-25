import React from 'react';
import Tour from "./Tour";

const Tours = ({tours, removeTour}) => {
    return (
        <section>
            <div className="text-center mt-3">
                <h1>Ours Tours</h1>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
               })}
            </div>
        </section>
    )
}

export default Tours
