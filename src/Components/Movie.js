import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios';

function Movie() {

    const [word, setWord] = useState("");
    const [movidata, setMovidata] = useState([]);
    const [page, setPage] = useState(1);
    const [pagcount, setPagcount] = useState();

    const handleSearch = () => {
    
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=97d606b3&s=${word}&page=${page}`)
            .then(function (response) {
                // handle success
                const data = response.data;
                const searchdata = data.Search;
                const dataresults = data.totalResults
                const pagecount = Math.ceil(dataresults/10)
                console.log(pagecount)
                setPagcount(pagecount);
                setMovidata(searchdata)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    
    const handlenext = ()=>{
        
        setPage(page+1)
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=97d606b3&s=${word}&page=${page}`)
            .then(function (response) {
                // handle success
                const data = response.data;
                const searchdata = data.Search;
                setMovidata(searchdata)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            
           
    }

    const handleprev = ()=>{
        setPage(page-1)
        
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=97d606b3&s=${word}&page=${page}`)
            .then(function (response) {
                // handle success
                const data = response.data;
                const searchdata = data.Search;
                setMovidata(searchdata)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            
            
    }

    useEffect(()=>{
        handleSearch()
        // eslint-disable-next-line
    },[page])



    return (
        <>
            <div id="movie">
                <h1 className='my-3'>Movie Mania</h1>
                <div className="container h-100 my-3">
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar">
                            <input className="search_input" type="text" name="" placeholder="Search..." onChange={(e) => setWord(e.target.value)} />
                            <button disabled={word.length===0} className="search_icon" onClick={() => handleSearch()}><i className="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>
                <div id="card">
                    {movidata === undefined ? <div className='heading'>No data available</div> : movidata.map((movie) => {
                        return (<MovieCard key={movie.imdbID} title={movie.Title} year={movie.Year} img={movie.Poster} />)
                    })}
                </div>
            </div>

            <div id="button" className='my-4'>
            <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handleprev}>&larr; Prev</button>
            <button disabled={page===pagcount} type="button" className="btn btn-dark" onClick={handlenext}>Next &rarr;</button>
            </div>
        </>
    )
}

export default Movie
