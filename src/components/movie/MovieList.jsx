import React from 'react'
import "./MovieList.css"

const MovieList = (props) => {
    return (
        <div className="box">
            <img src={props.poster} alt="" />

            <div className="para">
                <h4>{props.title}</h4>
                <p>{props.year}</p>
            </div>

        </div>
    )
}

export default MovieList