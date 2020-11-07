import React from 'react'
import Button from '../elements/Button/Button'
import imageHero from '../assets/images/img-hero.jpg'
import imageHero_ from '../assets/images/img-hero-frame.jpg'
import iconCity from '../assets/icons/icon-city.svg'
import iconTravel from '../assets/icons/icon-travel.svg'
import iconTreasure from '../assets/icons/icon-treasure.svg'
import numberFormat from '../utilities/formatNumber'
export default function Hero(props) {

    const showMostPicked = () => {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: "530px" }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Busy Work, <br />Start next vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
                        We provide what you needs to make your dream came true.
                        Let’s take a break make a memorable moment with your
                        family and explore amazing place with us!
                    </p>
                    <Button className="btn px-5"
                        hasShadow
                        isPrimary
                        onClick={showMostPicked}>
                        Show Me Now
                    </Button>
                    <div className="row" style={{ marginTop: 80 }}>
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img
                                height="25"
                                width="25"
                                src={iconTravel}
                                alt={`${props.data.travelers} Travelers`} />
                            <h6 className="mt-3">
                                {numberFormat(props.data.travelers)} {" "}<span className="text-gray-500 font-weight-light">Travelers</span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img
                                height="25"
                                width="25"
                                src={iconTreasure}
                                alt={`${props.data.treasures} Treasure`} />
                            <h6 className="mt-3">
                                {numberFormat(props.data.treasures)}{" "} <span className="text-gray-500 font-weight-light">Treasure</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img
                                height="25"
                                width="25"
                                src={iconCity}
                                alt={`${props.data.cities}Travelers`} />
                            <h6 className="mt-3">
                                {numberFormat(props.data.cities)}{" "} <span className="text-gray-500 font-weight-light">Cities</span>
                            </h6>
                        </div>

                    </div>
                </div>
                <div className="col-6 pl-5">
                    <div style={{ width: 540, height: 370 }}>
                        <img src={imageHero} alt="Room with Couches" className="img-fluid position-absolute" style={{
                            margin: '-30px 0 0 -30px', zIndex: 1
                        }} />
                        <img src={imageHero_} alt="Room with Couches frame" className="img-fluid position-absolute" style={{
                            margin: '0 -15px -15px 0'
                        }} />
                    </div>
                </div>
            </div>

        </section>
    )
}
