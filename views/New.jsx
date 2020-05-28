const React = require('react')
const Layout = require('./Layout.jsx')

class New extends React.Component {
    render(){
        return(
           <Layout>
               <div class="container">
               <a href="/cars" class="btn btn-secondary">Home</a>
               <div class="jumbotron">
               <h1 class="py-2 text-center">Build a new car</h1>
               <p class="py-2 text-center">"I couldn't find the car of my dreams, so I built it myself." -Ferdinand Porche</p>
               </div>
                   <form action="/cars" method="POST">
                      Name: <input class="form-control" type="text" name="name"/><br/>
                      Image: <input class="form-control" type="text" name="img"/><br/>
                      Price: <input class="form-control" type="text" name="price"/><br/>
                      MPG: <input class="form-control" type="string" name="mpg"/><br/>
                      Fuel Type: <input class="form-control" type="text" name="fuel_type"/><br/>
                      Transmission: <input class="form-control" type="text" name="transmission"/><br/>
                      Features: <input class="form-control" type="text" name="features"/><br/>
                      <input type="submit" value="Add"/> 
                   </form>
                   
               </div>
           </Layout>
        )

    }
}

module.exports = New;