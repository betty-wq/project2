const React = require('react')
const Layout = require('./Layout.jsx')

class Edit extends React.Component{
    render(){
        const { car } = this.props
        return(
            <Layout>
                <div class="container">
                <a href="/cars/display" class="btn btn-secondary">Return To Display</a>
                <h1 class="jumbotron">Edit</h1>
                <form action={`/cars/edit/${car._id}?_method=put`} method="POST">
                      Name:        <input class="form-control" type="text" name="name" value={car.name}/><br/>
                      Price:       <input class="form-control" type="number" name="price" min="0" value={car.price}/><br/>
                      Image:        <input class="form-control" type="text" name="img" value={car.img}/><br/>
                      MPG:          <input class="form-control" type="text" name="mpg" value={car.mpg}/><br/>
                      Fuel Type:    <input class="form-control" type="text" name="fuel type" value={car.fuel_type}/><br/>
                      Transmission: <input class="form-control" type="text" name="transmission" value={car.transmission}/><br/>
                      Features:     <input class="form-control" type="text" name="features" value={car.features}/><br/>
                      <input type="submit" value="Edit"/>
                      </form>
                      </div>
            </Layout>
        )
    }
}

module.exports = Edit