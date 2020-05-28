const React = require('react')
const Layout = require('./Layout.jsx')

class Show extends React.Component {
    render() {
        const {car} = this.props;
        console.log(car)
        return(
             <Layout>
                 <div class="container">
                 <a href="/cars/display" class="btn btn-secondary">Return To Display</a>
                   <h1>{car.name}</h1>
                   <img src={car.img}/>
                   <img src={car.img2}></img>
                   <p>Price: $ {car.price}</p>
                   <ul>
                       <li class="list-group-item">MPG: {car.mpg}</li>
                       <li class="list-group-item">Feul Type: {car.fuel_type}</li>
                       <li class="list-group-item">Tansmission: {car.transmission}</li>
                       <li class="list-group-item">Features: {car.features}</li>
                   </ul>
                   <form action={`/cars/${car._id}?_method=DELETE`} method="post">
                   <input id="button" type="submit" value="Buy"/>
                   </form>
                   </div>
             </Layout>
        )
    }
}

module.exports = Show;