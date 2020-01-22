import React, { Component } from 'react'



const mignardises = [

    {
        // _id:, ???
        name: "Palmier aux olives",
        picture: "Boulette de sardine.jpg"
    },

    {
        name: "Brochette de champignon rotis à la marocaine",
        picture: "Cigare au poulet curry.jpg"
    },

    {
        name: "Mini quiche sans pâte façon tajine au poulet aux olives",
        picture: "Richbond marocain.jpg"
    },

    {
        name: "Financier de potiron",
        picture: ""
    },

    {
        name: "Boulette de sardine",
        picture: ""
    },

    {
        name: "Brochette de poulet mariné",
        picture: ""
    },

    {
        name: "Rose brisée à la viande hachée",
        picture: ""
    },

    {
        name: "Cigare au poulet curry",
        picture: "Cigare au poulet curry.jpg"

    },

    {
        name: "Brick à la viande hachée et pomme de terre",
        picture: ""
    },

    {
        name: "Brick de thon / tomate au fromage frais",
        picture: ""
    },

    {
        name: "Compotée d'oignons à la cannelle",
        picture: ""
    },

    {
        name: "Zaâlouk de carotte",
        picture: ""
    },

    {
        name: "Pomme de terre assaisonnée",
        picture: ""
    },

]
export default class MignardiseTest extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 1
        }
        // this.carouselSlide = this.carouselSlide.bind(this)
        this.prevButtonClick = this.prevButtonClick.bind(this)
        this.nextButtonClick = this.nextButtonClick.bind(this)

    }

    prevButtonClick = (e) => {
        e.preventDefault()

        // je cible mon carousel
        const carouselSlide = document.querySelector(".carousel-slide");

        //je cible 
        const carouselImages = document.querySelectorAll(
            ".carousel-slide .container-photo "
        );

        const size = carouselImages[0].clientWidth;

        this.setState({
            counter: this.state.counter - 1
        })

        carouselSlide.style.transform = "translateX(" + -size * this.state.counter + "px)";

        if (this.state.counter <= 0) return carouselSlide.style.transition = " transform 0.4s ease-in-out";

        this.setState({
            counter: this.state.counter - 1
        })

        carouselSlide.style.transform = "translateX(" + -size * this.state.counter + "px)";


        // carouselSlide.addEventListener("transitionend", () => {
        // if (carouselImages[this.state.counter].className === ".lastClone") {
        //     carouselSlide.style.transition = "none";
        //     this.setState({
        //         counter: carouselImages.length--
        //     })

        //     carouselSlide.style.transform = "translateX(" + -size * this.state.counter + "px)";
        // }
        // if (carouselImages[this.state.counter].className === ".firstClone") {
        //     carouselSlide.style.transition = "none";
        //     this.setState({
        //         counter: carouselImages.length - this.state.counter
        //     })

        //     carouselSlide.style.transform = "translateX(" + -size * this.state.counter + "px)";
        // }
        // });

    }

    nextButtonClick = (e) => {
        e.preventDefault()

        const carouselSlide = document.querySelector(".carousel-slide");
        // const carouselImages = document.querySelectorAll(".carousel-slide img");


        const carouselImages = document.querySelectorAll(
            ".carousel-slide .container-photo "
        );

        const counter = 1;
        this.setState({
            counter: this.state.counter
        })


        const size = carouselImages[0].clientWidth;
        console.log(counter)

        carouselSlide.style.transform = "translateX(" + -size * this.state.counter + "px)";

        const nextBtn = document.querySelector(".nextBtn");


        // nextBtn.addEventListener("click", () => {
        if (this.state.counter >= carouselImages.length + 1) return carouselSlide.style.transition = " transform 0.4s ease-in-out";
        this.setState({
            counter: this.state.counter + 1
        })

        carouselSlide.style.transform = "translateX(" + -size * this.state.counter + "px)";
        // });

        // carouselSlide.addEventListener("transitionend", () => {
        // if (carouselImages[this.state.counter].className === ".lastClone") {
        //     carouselSlide.style.transition = "none";
        //     this.state.counter = carouselImages.length - 1;

        //     carouselSlide.style.transform = "translateX(" + -size * this.state.counter + "px)";
        // }
        // if (carouselImages[this.state.counter].className === ".firstClone") {
        //     carouselSlide.style.transition = "none";
        //     this.state.counter = carouselImages.length - this.state.counter;

        //     carouselSlide.style.transform = "translateX(" + -size * this.state.counter + "px)";
        // }
        // });



    }

    // const carouselSlide = document.querySelector(".carousel-slide");
    // // const carouselImages = document.querySelectorAll(".carousel-slide img");
    // const carouselImages = document.querySelectorAll(
    //   ".carousel-slide .container-photo "
    // );

    // // buttons
    // const prevBtn = document.querySelector("#prevBtn");
    // const nextBtn = document.querySelector("#nextBtn");

    // //counter

    // let counter = 1;
    // const size = carouselImages[0].clientWidth;

    // carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

    // //button Listeners

    // nextBtn.addEventListener("click", () => {
    //   if (counter >= carouselImages.length - 1) return;

    //   carouselSlide.style.transition = " transform 0.4s ease-in-out";
    //   counter++;
    //   carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    // });

    // prevBtn.addEventListener("click", () => {
    //   if (counter <= 0) return;
    //   carouselSlide.style.transition = " transform 0.4s ease-in-out";
    //   counter--;
    //   carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    // });

    // carouselSlide.addEventListener("transitionend", () => {
    //   if (carouselImages[counter].id === "lastClone") {
    //     carouselSlide.style.transition = "none";
    //     counter = carouselImages.length - 2;

    //     carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    //   }
    //   if (carouselImages[counter].id === "firstClone") {
    //     carouselSlide.style.transition = "none";
    //     counter = carouselImages.length - counter;

    //     carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    //   }
    // });



    render() {
        return (
            <div className="carousel-container">
                <i className="fas fa-arrow-left prevBtn" onClick={this.prevButtonClick}></i>
                <i className="fas fa-arrow-right nextBtn" onClick={this.nextButtonClick}></i>
                <div className="carousel-slide">
                    <div className="container-photo lastClone">
                        <img src={require(`../images/${mignardises[0].picture}`)} alt="" />

                        {/* style={{ width: "375px", heigth: "150px" }} */}

                        <div className="description">
                            <h2>{mignardises[0].name}</h2>
                            <p>Ingrédients :</p>
                            <p>Nombre de part : min - max</p>
                        </div>
                    </div>
                    <div className="container-photo">
                        <img src={require(`../images/${mignardises[1].picture}`)} alt="" />

                        <div className="description">
                            <h2>{mignardises[1].name}</h2>

                            <p>Ingrédients :</p>
                            <p>Nombre de part : min - max</p>
                        </div>
                    </div>
                    <div className="container-photo">
                        <img src={require(`../images/${mignardises[2].picture}`)} alt="" />

                        <div className="description">
                            <h2>{mignardises[2].name}</h2>

                            <p>Ingrédients :</p>
                            <p>Nombre de part : min - max</p>
                        </div>
                    </div>
                    <div className="container-photo">
                        <img src={require(`../images/${mignardises[1].picture}`)} alt="" />


                        <div className="description">
                            <h2>{mignardises[1].name}</h2>

                            <p>Ingrédients :</p>
                            <p>Nombre de part : min - max</p>
                        </div>
                    </div>
                    <div className="container-photo">
                        <img src="./img/photo4.jpg" alt="" />

                        <div className="description">
                            <h2>Titre</h2>
                            <p>Ingrédients :</p>
                            <p>Nombre de part : min - max</p>
                        </div>
                    </div>
                    <div className="container-photo">
                        <img src="./img/photo5.jpg" alt="" />

                        <div className="description">
                            <h2>Titre</h2>
                            <p>Ingrédients :</p>
                            <p>Nombre de part : min - max</p>
                        </div>
                    </div>
                    <div className="container-photo">
                        <img src="./img/photo6.jpg" alt="" />

                        <div className="description">
                            <h2>Titre</h2>
                            <p>Ingrédients :</p>
                            <p>Nombre de part : min - max</p>
                        </div>
                    </div>
                    <div className="container-photo firstClone">
                        <img src="./img/photo1.jpg" alt="" />

                        <div className="description">
                            <h2>Titre</h2>
                            <p>Ingrédients :</p>
                            <p>Nombre de part : min - max</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
