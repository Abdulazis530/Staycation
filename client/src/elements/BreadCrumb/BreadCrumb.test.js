import React from 'react'
import { render } from "@testing-library/react"
import BreadCrumb from "./BreadCrumb"
import { BrowserRouter as Router } from "react-router-dom"

const setup = () => {
    const breadCrumbList = [{ pageTitle: "Home", pageHref: "" }, { pageTitle: "House Detail", pageHref: "" }]
    const { container } = render(
        <Router>
            <BreadCrumb data={breadCrumbList} />
        </Router>
    )
    const breadCrumb = container.querySelector(".breadcrumb")

    return {
        breadCrumb
    }
}

test("Should have ol with ClassName .breadcrumb and have text Home & House Details", () => {
    const { breadCrumb } = setup()
    expect(breadCrumb).toBeInTheDocument()
    expect(breadCrumb).toHaveTextContent("Home")
    expect(breadCrumb).toHaveTextContent("House Detail")

})