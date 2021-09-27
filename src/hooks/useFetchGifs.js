import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true,
        total: 0
    });
    // Similar to componentDidMount and componentDidUpdate:
    useEffect( () => {
        // this must be sync.
        getGifs( category )
            .then( ({gifs,total}) => {
                setState({
                    data: gifs,
                    loading: false,
                    total
                });
            })

    }, [category])
    return state; // { data:[], loading: true };
}


