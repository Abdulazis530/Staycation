import React, { Component } from 'react'
import Header from '../parts/Header';
import PageDetailTitle from '../parts/PageDetailTitle';
import itemDetails from '../dummyJson/itemDetails.json'
import FeaturedImage from '../parts/FeaturedImage';


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
            </>
        )
    }
}
