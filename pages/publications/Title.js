import React from 'react'


const Title = ({ pageName, styles }) => {



    return(
        <div style={{textAlign: 'center', marginTop: '20px'}}>
            {/* <div id="left-rect" style={styles.left}></div> */}
            <div id="rect"></div>
            <div style={{marginTop: '-120px', marginLeft: '30px', fontFamily: 'Niramit'}}><h1 style={ pageName && pageName.length > 14? { fontSize: '2.2em', color: 'white'} : { fontSize: '3.8em' , color: 'white'}}>{ pageName && pageName }</h1></div>
        </div>
    )
}



export default Title;