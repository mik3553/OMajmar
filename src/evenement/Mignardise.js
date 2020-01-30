import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mignardises from '../ressources/evenements/mignardises'
import Slider from "react-slick";

import '../components/Evenement.css'



class Mignardise extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mignardises: []

        }
    }

    componentDidMount() {
        this.setState({
            mignardises
        })
    }

    render() {


        const settings = {
            dots: true,
            infinite: true,
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
            <div className="mignardise"    >
                <Slider {...settings}>
                    {

                        mignardises.map((mignardise) => {
                            return (
                                <div className="figure-container" key={mignardise._id}>
                                    <figure >
                                        <img src={(`../../images/evenements/${mignardise.picture}`)}
                                            alt={mignardise.name} />
                                        <figcaption className="figcaption-name">{mignardise.name}</figcaption>
                                    </figure>
                                    <div className='slider-description'>
                                        {mignardises.description}
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </Slider>
                <div className='slider-description-maxwidth'>
                    {mignardises.description}
                </div>

            </div>
        );
    }
}

export default Mignardise


