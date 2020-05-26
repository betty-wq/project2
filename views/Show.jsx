const React = require('react')
const Layout = require('./Layout.jsx')

class Show extends React.Component {
    render() {
        const {car} = this.props;
        console.log(car)
        return(
             <Layout>
                 <div class="container">
                 <a href="/cars">Home</a>
                   <h1>{car.name}</h1>
                   <img src={car.img}/>
                   <p>Price: $ {car.price}</p>
                   <p>Stock: {car.stock}</p>
                   <ul>
                       <li>MPG: {car.mpg}</li>
                       <li>Feul Type: {car.fuel_type}</li>
                       <li>Tansmission: {car.transmission}</li>
                       <li>Features: {car.features}</li>
                   </ul>
                   <input type="submit" value="Buy"></input>
                   </div>
             </Layout>
        )
    }
}

module.exports = Show;