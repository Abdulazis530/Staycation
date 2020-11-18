import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import BookingInformation from '../parts/Checkout/BookingInformation'
import Header from '../parts/Header'
import ItemDetails from '../dummyJson/itemDetails.json'
import Payment from '../parts/Checkout/Payment'
import Completed from '../parts/Checkout/Completed'
import Stepper from '../elements/Stepper/Stepper'
import Numbering from '../elements/Stepper/Numbering/index'
import Meta from '../elements/Stepper/Meta'
import MainContent from '../elements/Stepper/MainContent'
import Controller from '../elements/Stepper/Controller'
import Button from '../elements/Button/Button'


export default class CheckOutPage extends Component {
    state = {
        data: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            proofPayment: "",
            bankName: "",
            bankHolder: ""
        }
    }
    onChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
    }

    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        const { data } = this.state

        const checkout = {
            duration: 3,
        }

        const steps = {
            bookingInformation: {
                title: "Booking Information",
                description: "Please fill up the blank fields below",
                content: (
                    <BookingInformation
                        data={data}
                        checkout={checkout}
                        ItemDetails={ItemDetails}
                        onChange={this.onChange}
                    />
                )
            },
            payment: {
                title: "Payment",
                description: "Kindly follow the instructions below",
                content: (
                    <Payment
                        data={data}
                        checkout={checkout}
                        ItemDetails={ItemDetails}
                        onChange={this.onChange}
                    />)

            },
            completed: {
                title: "Yaay! Completed!",
                description: null,
                content: <Completed />
            }
        }
        return (
            <>
                <Header isCentered />
                <Stepper steps={steps}>
                    {
                        (prevStep, nextStep, CurrentStep, steps) => (
                            <>
                                <Numbering
                                    data={steps}
                                    current={CurrentStep}
                                    style={{ marginBottom: 50 }}
                                />
                                <Meta
                                    data={steps}
                                    current={CurrentStep}

                                />
                                <MainContent data={steps} current={CurrentStep} />

                                {
                                    CurrentStep === "bookingInformation" && (

                                        <Controller>
                                            {
                                                data.firstName !== "" &&
                                                data.lastName !== "" &&
                                                data.email !== "" &&
                                                data.phone !== "" && (
                                                    <Fade>
                                                        <Button
                                                            className="btn mb-3"
                                                            type="button"
                                                            isBlock
                                                            isPrimary
                                                            hasShadow
                                                            onClick={nextStep}
                                                        >
                                                            Continue to Book
                                                            </Button>
                                                    </Fade>
                                                )
                                            }
                                            <Button
                                                className="btn"
                                                type="link"
                                                isBlock
                                                isLight
                                                href={`/properties/${ItemDetails._id}`}
                                            >
                                                Cancel
                                                </Button>
                                        </Controller>
                                    )
                                }
                                {
                                    CurrentStep === "payment" && (

                                        <Controller>
                                            {
                                                data.proofPayment !== "" &&
                                                data.bankName !== "" &&
                                                data.bankHolder !== "" &&
                                                (
                                                    <Fade>
                                                        <Button
                                                            className="btn mb-3"
                                                            type="button"
                                                            isBlock
                                                            isPrimary
                                                            hasShadow
                                                            onClick={nextStep}
                                                        >
                                                            Continue to Book
                                                            </Button>
                                                    </Fade>
                                                )
                                            }
                                            <Button
                                                className="btn"
                                                type="button"
                                                isBlock
                                                isLight
                                                onClick={prevStep}
                                            >
                                                Cancel
                                                </Button>
                                        </Controller>

                                    )
                                }
                                {
                                    CurrentStep === "completed" && (

                                        <Controller>

                                            <Button
                                                className="btn"
                                                type="link"
                                                isBlock
                                                isPrimary
                                                hasShadow
                                                href=""
                                            >
                                                Back To Home
                                                </Button>
                                        </Controller>

                                    )
                                }
                            </>
                        )
                    }
                </Stepper>
            </>
        )
    }
}
