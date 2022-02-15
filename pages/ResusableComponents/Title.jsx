import React from 'react'


const Title = ({ pageName, styles }) => {



    return(
        <div style={{textAlign: 'center', marginTop: '20px'}}>
            {/* <div id="left-rect" style={styles.left}></div> */}
            <div id="rect"></div>
            <div id="cent-rect" ><h1 style={pageName && pageName.length > 15? { fontSize: '1.5em'} : { fontSize: '3.8em' }}>{ pageName && pageName }</h1></div>
     
            
           
        </div>
    )
}



export default Title;