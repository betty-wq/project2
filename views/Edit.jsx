const React = require('react')
const Layout = require('./Layout.jsx')

class Edit extends React.Component{
    render(){
        const { Car } = this.props
        return(
            <Layout>
                <h1>Edit Page</h1>
                <form action={`/cars/edit/${Car._id}?_method=put`} method="POST">
                Name: <input type="text" name="name"/><br/>
                      Image: <input type="img" name="image"/><br/>
                      Stock: <input type="number" name="stock" min="0"/><br/>
                      MPG: <input type="number" name="mpg" min="0"/><br/>
                      Fuel Type: <input type="text" name="fuel type"/><br/>
                      Mileage: <input type="number" name="mileage" min="0"/><br/>
                      Features: <input type="text" name="features"/><br/>
                      <input type="submit" value="Edit"/>
                      </form>
            </Layout>
        )
    }
}

module.exports = Edit