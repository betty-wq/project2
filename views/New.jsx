const React = require('react')
const Layout = require('./Layout.jsx')

class New extends React.Component {
    render(){
        return(
           <Layout>
               <a href="/cars">Home</a>
               <h1>New Page</h1>
               <div>
                   <form action="/cars" method="POST">
                      Name: <input type="text" name="name"/><br/>
                      Image: <input type="img" name="image"/><br/>
                      Price: <input type="text" name="price"/><br/>
                      Stock: <input type="number" name="stock" min="0"/><br/>
                      MPG: <input type="number" name="mpg" min="0"/><br/>
                      Fuel Type: <input type="text" name="fuel type"/><br/>
                      Mileage: <input type="number" name="mileage" min="0"/><br/>
                      Transmission: <input type="text" name="transmission"/><br/>
                      Features: <input type="text" name="features"/><br/>
                      <input type="submit" value="Add"/> 
                   </form>
               </div>
           </Layout>
        )

    }
}

module.exports = New;