const React = require('react')
const Layout = require('./Layout.jsx')

class Display extends React.Component {
    render() {
        const { cars } = this.props;
        console.log(cars)
        return(
             <Layout>
                  <div class="container">
                  <a href="/cars" class="btn btn-secondary">Home</a>
                      <h1 class="jumbotron">Our latest model cars are listed below if you want to see detail about the cars click on the image of the vehicle.</h1>
                   {cars.map((car, index) =>{
                       return(
                           <div>
               <h1>{car.name}</h1>
               <a href={`/cars/${car._id}`}><img src={car.img}></img></a>
               <form action={`/cars/${car._id}?_method=DELETE`} method="post">
                   <input class="btn btn-outline-danger" type="submit" value="Delete"/>
               </form>
               <form action={`/cars/edit/${car._id}`} method="GET">
                  <input class="btn btn-outline-success" type="submit" value="Edit"/>
               </form>
               </div>
                )
            })}
               </div>
             </Layout>
        )
    }
}
module.exports = Display