import React from 'react'
import Navigation from './Nav/Navigation'
import Title from './ResusableComponents/Title'

const Services = () => {
    const styles = {
        left: { 
            marginLeft: '10px',
            marginBottom: '-50px',
        },
        right: {
            marginLeft: '50px',
        },
        center: {
            marginLeft: '30px',
            marginTop: '-90px',
            lineHeight: '70px'
        }
    }

    return (
        <div id="services">
            <Navigation/>
                <Title pageName={'Services'} styles={styles}/>
        </div>
    )
}

export default Services