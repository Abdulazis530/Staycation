import React from 'react'
import Button from '../elements/Button/Button'
import IconText from './IconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{ width: 350 }}>
                        <IconText />
                        <p className="brand-tagline">
                            We make your dream holiday come true.
                        </p>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">
                            For Beginners
                        </h6>
                        <ul className="list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">
                                    Start Booking a Room
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/regiuse-payments">
                                    Use Payment
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">
                            Explore Us
                        </h6>
                        <ul className="list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers">
                                    Our Careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">
                                    Privacy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms">
                                    Terms & Conditions
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2">
                            Connect Us
                        </h6>
                        <ul className="list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:support@staycation.id">
                                    support@staycation.id
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+62212121">
                                    0312323213
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <span>staycation, kemang, Jakarta</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2019 . All rights reserved . staycation
                    </div>
                </div>
            </div>
        </footer>
    )
}
