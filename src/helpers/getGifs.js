


export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=20&api_key=88ZKwgzYeyuy5QdRjDYLH70yEVUtRnYD`;
    const resp = await fetch( url );
    const { data, pagination } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return {gifs, total: pagination?.total_count};


}