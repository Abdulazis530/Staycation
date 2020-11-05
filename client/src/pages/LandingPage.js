import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import MostPicked from '../parts/MostPicked'
import landingPageData from '../dummyJson/landingPage.json'

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef()
    }
    render() {
        return (
            <>
                <Header {...this.props} />
                <Hero data={landingPageData.hero} refMostPicked={this.refMostPicked} />
                <MostPicked refMostPicked={this.refMostPicked}
                    data={landingPageData.mostPicked} />
            </>
        )
    }
}
