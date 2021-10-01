import React from 'react'
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss'
import play_icon from '../assets/static/play-icon.png'
import plus_icon from '../assets/static/plus-icon.png'

import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
import { Link } from 'react-router-dom';

const CarouselItem = (props)=>{
    const {id, cover, title, year, contentRating, duration} = props
    const handleSetFavorite = ()=>{
        props.setFavorite({id, cover, title, year, contentRating, duration})
    }
    const handleDeleteFavorite = ()=>{
        props.deleteFavorite({id, cover, title, year, contentRating, duration})
    }
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt=""  />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`} >
                        <img className="carousel-item__details--img" src={play_icon} alt="Play Icon" /> 
                    </Link>
                    <img className="carousel-item__details--img" src={plus_icon} alt="Plus Icon" onClick={handleSetFavorite} />
                    {
                        props.delete && <button className="carousel-item__details--img" onClick={handleDeleteFavorite}>&#10006;</button>
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    {`${year} ${contentRating} ${duration}`}
                </p>
            </div>
        </div>
    )
}

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}

export default connect(null,mapDispatchToProps)(CarouselItem)