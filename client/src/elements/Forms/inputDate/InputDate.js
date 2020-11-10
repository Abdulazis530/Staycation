import React, { useState, useEffect, useRef } from 'react'
import propTypes from 'prop-types'
import iconCalendar from '../../../assets/icons/icon-calender.svg'
import { DateRange } from 'react-date-range'

import './_inputDate.scss'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import formatDate from "../../../utilities/formatDate"


export default function InputDate(props) {
    const { value, placeholder, name } = props
    const [isShowed, setIsShowed] = useState(false)


    const datePickerChange = value => {
        const target = {
            target: {
                value: value.selection,
                name
            }
        }
        props.onChange(target)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    })

    const refDate = useRef(null)
    const handleClickOutside = event => {

        if (refDate && !refDate.current.contains(event.target)) {
            setIsShowed(false)
        }
    }

    const check = focus => {
        focus.indexOf(1) < 0 && setIsShowed(false)
    }

    const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${value.endDate ? " - " + formatDate(value.endDate) : ""}`
    return (
        <div
            ref={refDate}
            className={["input-date mb-3", props.outerClassName].join(" ")}
        >
            <div className="input-group">
                <div className="input-group-prepend bg-gray-900">
                    <span className="input-group-text">
                        <img src={iconCalendar} alt="icon calendar" />
                    </span>
                </div>
                <input
                    readOnly
                    type="text"
                    className="form-control"
                    value={displayDate}
                    placeholder={placeholder}
                    onClick={() => setIsShowed(!isShowed)}
                />
                {isShowed && (<div className="date-range-wrapper">
                    <DateRange
                        editableDateInputs={true}
                        onChange={datePickerChange}
                        moveRangeOnFirstSelection={false}
                        onRangeFocusChange={check}
                        ranges={[value]}
                    />
                </div>)}
            </div>
        </div>
    )
}


InputDate.defaultProps = {
    min: 1,
    max: 1,
    prefix: "",
    suffix: ""
}

InputDate.propTypes = {
    value: propTypes.object,
    onChange: propTypes.func,
    // isSuffixPlural: propTypes.bool,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
}