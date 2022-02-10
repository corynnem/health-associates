import React from 'react'


const Title = ({ pageName, styles }) => {



    return(
        <div style={{textAlign: 'center', marginTop: '5vh'}}>
            {/* <div id="left-rect" style={styles.left}></div> */}
            <div id="rect"></div>
            <div id="cent-rect" ><h1>{ pageName }</h1></div>
     
            
           
        </div>
    )
}



export default Title;