import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import repas from '../ressources/evenements/repas'
import Slider from "react-slick";

import '../components/Evenement.css'



class Repa extends Component {
    constructor(props) {
        super(props)

        this.state = {
            repas: []

        }
    }

    componentDidMount() {
        this.setState({
            repas
        })
    }

    render() {


        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
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
            <div className="repas"    >
                <Slider {...settings}>
                    {

                        repas.map((repas) => {
                            return (
                                <div className="figure-container" key={repas._id}>
                                    <figure >
                                        <img src={(`../../images/evenements/${repas.picture}`)}
                                            alt={repas.name} />
                                        <figcaption className="figcaption-name">{repas.name}</figcaption>
                                    </figure>
                                    <div className='slider-description'>
                                        {repas.description}
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

export default Repa
