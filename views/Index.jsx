const React = require('react')
const Layout = require('./Layout.jsx')

class Index extends React.Component {
    render() {
        const { cars } = this.props;
       return(
           <Layout>
               <div class="container">
               <a href="#">About</a>
                <a href="#">Sign in</a>
               < a href="/cars/new">Create a new car</a>
               <h1 class="jumbotron">My Cars</h1>
               <div>
                   {cars.map((car, index) =>{
                       return(
                           <div>
               <h2>{car.name}</h2>
               <a href={`/cars/${car._id}`}><img src={car.img}></img></a>
               <form action={`/cars/${car._id}?_method=DELETE`} method="post">
                   <input type="submit" value="delete"/>
               </form>
               <form action={`/cars/edit/${car._id}`} method="GET">
                  <input type="submit" value="edit"/>
               </form>
               </div>
                  )
               })}
               </div>
               </div>
           </Layout>
       )

    }
}


module.exports = Index