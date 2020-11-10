import React, { Component } from 'react'
import BreadCrumb from '../elements/BreadCrumb/BreadCrumb'
import InputDate from '../elements/Forms/inputDate/InputDate'

export default class Example extends Component {

    // state = {
    //     value: {
    //         startDate: new Date(),
    //         endDate: new Date(),
    //         key: "selection"
    //     }
    // }
    // handleChange = e => {
    //     console.log('KKKK')
    //     this.setState({ [e.target.name]: e.target.value })
    // }
    render() {

        const breadCrumbList = [{ pageTitle: "Home", pageHref: "" }, { pageTitle: "House Detail", pageHref: "" }]
        return (
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div className="col-auto">
                        <BreadCrumb data={breadCrumbList} />
                    </div>
                </div>
            </div>
        )


    }
}
