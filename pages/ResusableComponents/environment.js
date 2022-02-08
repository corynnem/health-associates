let URL = '';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.2':
        URL = 'http://localhost:3000';
        break;
    case 'corynnes-portfolio.herokuapp.com/':
        URL = 'https://health-associates.herokuapp.com/'
}


export default URL;