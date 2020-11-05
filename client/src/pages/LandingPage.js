import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import landingPageData from '../dummyJson/landingPage.json'
export default class LandingPage extends React.Component {
    render() {
        return (
            <>
                <Header {...this.props} />
                <Hero data={landingPageData.hero} />
            </>
        )
    }
}
