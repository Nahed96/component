import React from 'react'
import PropTypes from 'prop-types'



const ProfilPhoto = props => {
    return (
        <div>
            <img class="rounded-pill w-25 h-25" src={props.name}></img>
            </div>
    )
}

ProfilPhoto.propTypes = {

}

export default ProfilPhoto
