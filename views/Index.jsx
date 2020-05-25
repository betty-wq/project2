const React = require('react')
const Layout = require('./Layout.jsx')

class Index extends React.Component {
    render() {
        const logout = (
            <form action="/sessions/?_method=delete" method="post">
                <input type="submit" value="Logout" />
            </form>
        );
        const { cars } = this.props;
       return(
           <Layout>
               <div>
               <h1 class="jumbotron">My Cars</h1>
               <nav>
                   < a href="/cars/new">Create a new car</a>
               </nav>
               </div>
               <div>
                   {cars.map((car, index) =>{
                       return(
                           <div>
               <h2>{car.name}</h2>
               <a href={'/cars/Show'}><img src={car.img}></img></a>
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
           </Layout>
       )

    }
}


module.exports = Index