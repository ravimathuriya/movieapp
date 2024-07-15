import React from 'react'

function MovieCard(props) {
    return (
        <>

                
            <div className="container-fluid col">
                <div className="profile-card-2"><img src={props.img==="N/A" ? "https://st.depositphotos.com/1653909/1228/i/450/depositphotos_12283193-stock-photo-movie-clapper-and-film-reels.jpg": props.img } className="img img-responsive" alt=''  style={{width:"300px", height:"450px"}}/>
                    <div className="profile-username">Year:{props.year} </div>
                    <div className="profile-name"> {props.title} </div>
                </div>
                </div>
      
        </>
    )
}

export default MovieCard
