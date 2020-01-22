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
        };

        return (
            <div className="mignardise" style={{ width: "370px", heigth: "150px" }}>
                <Slider {...settings}>
                    {

                        mignardises.map((mignardise) => {
                            return (
                                <div key={mignardise.name} style={{ height: "20vh" }}>
                                    {/* <img src={(`../images/${mignardise.picture}`)} alt={mignardise.name} /> */}

                                    <img src={(`../images/${mignardise.picture}`)} style={{ width: "370px", heigth: "150px" }} />
                                    <div className="description">
                                        <h2 style={{ fontWeight: "bold" }}>{mignardise.name}</h2>
                                        <p>Ingrédients :</p>
                                        <p>Nombre de part : min - max</p>
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

export default Mignardise


{/* <img
                                    src={"../images/" + mignardise.picture}
                                    alt={mignardise.name}
                                    style={{ width: "370px", heigth: "150px" }}
                                /> */}
{/* soit  */ }
{/* <img src={`../images/${mignardise.picture}`} alt={mignardise.name} style={{ width: "370px", heigth: "150px" }} /> */ }