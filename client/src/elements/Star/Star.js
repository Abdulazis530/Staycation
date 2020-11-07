import React from 'react'
import propTypes from 'prop-types'
import './_Star.scss'
export default function Star({ value, height, spacing, width, className }) {
    const decimals = Number(value) % 1
    const star = []
    let leftPos = 0
    for (let index = 0; index < 5 && index < value - decimals; index++) {
        leftPos += width
        star.push(
            <div className="star"
                key={`star-${index}`}
                style={{ left: index * width, width, height, marginRight: spacing }}>
            </div>
        )


    }
    if (decimals > 0 && value <= 5)
        star.push(
            <div className="star"
                key="starWidthDecimal"
                style={{ left: leftPos, height, width: decimals * width - spacing }}>
            </div>
        )
    const starPlaceholder = []

    for (let index = 0; index < 5; index++) {
        starPlaceholder.push(
            <div className="star placeholder"
                key={`starPlaceholder-${index}`}
                style={{ left: index * width, width, height, marginRight: spacing }}>
            </div>
        )

    }
    return (
        <>
            <div className={["stars", className].join(" ")} style={{ height }}>
                {starPlaceholder}
                {star}
            </div>
        </>
    )
}

Star.propTypes = {
    className: propTypes.string,
    value: propTypes.number,
    width: propTypes.number,
    height: propTypes.number,
    spacing: propTypes.number,
}