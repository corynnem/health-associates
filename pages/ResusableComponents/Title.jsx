import React from 'react'


const Title = ({ pageName, styles }) => {



    return(
        <div style={{textAlign: 'center', marginTop: '20px'}}>
            {/* <div id="left-rect" style={styles.left}></div> */}
            <div id="rect"></div>
            <div id="cent-rect" ><h1 style={{width: '300px'}}>{ pageName }</h1></div>
     
            
           
        </div>
    )
}



export default Title;