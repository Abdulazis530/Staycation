import React from 'react'
import Fade from 'react-reveal/Fade'
import BreadCrumb from '../elements/BreadCrumb/BreadCrumb'

export default function PageDetailTitle({ data, breadCrumb }) {
    return (
        <section className="container spacing-sm">
            <Fade bottom>
                <div className="row align-items-center">
                    <div className="col">
                        <BreadCrumb data={breadCrumb} />
                    </div>
                    <div className="col-auto text-center">
                        <h1 className="h2">{data.name}</h1>
                        <span className="text-gray-400">
                            {data.city}, {data.country}
                        </span>
                    </div>
                    <div className="col"></div>
                </div>
            </Fade>

        </section>
    )
}
