const React = require('react')
const {Component} = React;
const Layout = require('./Layout.jsx')

class New extends React.Component {
    render(){
        return(
           <Layout>
               <h1>New Page</h1>
               <div>
                   <form action="/cars" method="POST">
                      Name: <input type="text" name="name"/><br/>
                      Image: <input type="img" name="image"/><br/>
                      Stock: <input type="number" name="stock"/><br/>
                      MPG: <input type="number" name="mpg"/><br/>
                      Fuel Type: <input type="text" name="fuel type"/><br/>
                      Mileage: <input type="number" name="mileage"/><br/>
                      Features: <input type="text" name="features"/> 
                   </form>
               </div>
           </Layout>
        )

    }
}

module.exports = New;