import React, { Component } from 'react'
import Header from '../parts/Header';
import PageDetailTitle from '../parts/PageDetailTitle';
import itemDetails from '../dummyJson/itemDetails.json'
import FeaturedImage from '../parts/FeaturedImage';
import PageDetailDescription from '../parts/PageDetailDescription';


export default class DetailPage extends Component {
    componentDidMount() {
        window.title = "Details Page";
        window.scrollTo(0, 0)
    }
    render() {
        const breadCrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Detail", pageHref: "" }
        ]
        return (
            <>
                <Header {...this.props} />
                <PageDetailTitle
                    breadCrumb={breadCrumb}
                    data={itemDetails}
                />
                <FeaturedImage data={itemDetails.imageUrls} />
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <PageDetailDescription data={itemDetails} />
                        </div>
                        <div className="col-5">
                            BOOKING FORM
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
