import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mignardises from './mignardises'
import Slider from "react-slick";



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

        // const { mignardises } = this.state

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
            <div className="mignardise" style={{ width: "370px", heigth: "150px" }}>
                <Slider {...settings}>
                    {

                        mignardises.map((mignardise) => {
                            return (
                                <div className="figure-container" key={mignardise.name}>
                                    <figure style={{ height: "30vh" }}>
                                        <img src={(`images${mignardise.picture}`)}
                                            alt={mignardise.name} />
                                        <figcaption className="figcaption-name">{mignardise.name}</figcaption>
                                    </figure>
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

export default Mignardise


