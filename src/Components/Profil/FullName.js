import React from 'react'
import PropTypes from 'prop-types'


const FullName = props => {
    return (
        <div>
            <h1 class='text-muted' >{props.name}</h1>
            
        </div>
    )
}

FullName.propTypes = {

}

export default FullName
