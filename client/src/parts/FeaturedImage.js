import React from 'react'
import Fade from 'react-reveal/Fade'

export default function FeaturedImage({ data }) {
    return (
        <div className="container mb-5">
            <div className="container-grid sm">
                {data.map((item, index) => (
                    <div
                        key={`featuredImage-${index}`}
                        className={`item ${index > 0 ? "column-5 row-1" : "column-7 row-2"}`}
                    >
                        <Fade bottom delay={300 * index}>
                            <div className="card h-100">
                                <figure className="img-wrapper">
                                    <img className="img-cover" src={item.url} alt={item._id} />
                                </figure>
                            </div>
                        </Fade>
                    </div>
                ))}
            </div>

        </div>
    )
}
