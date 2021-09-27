import React from 'react';
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading, total } = useFetchGifs( category );

    return (
        <>
            <div className="gridTitle">
                <h3 className="animate__animated animate__fadeIn"> { category } </h3>
                <p><b>Total</b>: {total}</p>
            </div>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}