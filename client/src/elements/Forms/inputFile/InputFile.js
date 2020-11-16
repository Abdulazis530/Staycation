import React, { useRef } from 'react'
import propTypes from 'prop-types'

import "./_InputFile.scss";


export default function InputFile(props) {
    const { value, placehoder, name, accept, prepend, append, outerClassName, inputClassName } = props

    const refInputFile = useRef(null)
    return (
        <div className={["input-text mb-3", outerClassName].join(" ")}>
            <div className="input-group">
                {
                    prepend && <div className="input-group-prepend bg-gray-900">
                        <span className="input-group-text">{prepend}</span>
                    </div>
                }
                <input
                    name={name}
                    accept={accept}
                    ref={refInputFile}
                    className="d-none"
                    type="file"
                    value={value}
                    onChange={props.onChange}
                />
                <input
                    onClick={() => refInputFile.current.click()}
                    defaultValue={value}
                    placeholder={placehoder}
                    className={["form-control", inputClassName].join(" ")}
                />
                {
                    append && <div className="input-group-append bg-gray-900">
                        <span className="input-group-text">{append}</span>
                    </div>
                }
            </div>
        </div>
    )

}

InputFile.defaultProps = {
    placehoder: "Browse a file...",
}

InputFile.propTypes = {
    name: propTypes.string.isRequired,
    value: propTypes.propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
    append: propTypes.oneOfType([propTypes.number, propTypes.string]),
    accepet: propTypes.string.isRequired,
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
    inputClassName: propTypes.string
}
