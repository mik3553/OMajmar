import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gourmandises from '../ressources/evenements/gourmandises'
import Slider from "react-slick";

import '../components/Evenement.css'

class Gourmandise extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gourmandises: []

        }
    }

    componentDidMount() {
        this.setState({
            gourmandises
        })
    }

    render() {


        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            slieToScroll: 1,
            className: "slides"

            // dots: true,
            // infinite: true,
            // speed: 500,
            // slidesToShow: 1,
            // slidesToScroll: 1

        };

        return (
            <div className="gourmandise"  >
                <Slider {...settings}>
                    {

                        gourmandises.map((gourmandises) => {
                            return (
                                <div className="figure-container" key={gourmandises._id} style={{ display: "none" }}>
                                    <figure >
                                        <img src={(`../../images/evenements/${gourmandises.picture}`)}
                                            alt={gourmandises.name} />
                                        <figcaption className="figcaption-name">{gourmandises.name}</figcaption>
                                    </figure>
                                    <div className='slider-description'>
                                        {gourmandises.description}
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </Slider>

            </div>
        );
    }
}

export default Gourmandise
