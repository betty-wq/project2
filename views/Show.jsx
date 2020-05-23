const React = require('react')
const Layout = require('./Layout.jsx')

class Show extends React.Component {
    render() {
        const { cars } = this.props;
        return(
             <Layout>
                   <h1>Show Page</h1>
                   <h2>{car.name}</h2>
                   <img src={car.img}/>
                   <p>{car.stock}</p>
                   <input type="submit" value="Buy"></input>
                   <ul>
                       <li>{car.mpg}</li>
                       <li>{car.fuel_type}</li>
                       <li>{car.mileage}</li>
                       <li>{car.engine}</li>
                       <li>{car.features}</li>
                   </ul>
             </Layout>
        )
    }
}

module.exports = Show;