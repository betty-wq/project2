const React = require('react')
const Layout = require('./Layout.jsx')

class Index extends React.Component {
    render() {
        const { cars } = this.props;
       return(
           <Layout>
               <div class="container-fluid">
                   <div id="anchor" class="nav nav-pills nav-fill">
               <a href="#">ABOUT US</a>
               <a href="/cars/Display">VIEW VEHICLES</a>
                <a href="./sessions/new">SIGN IN</a>
               < a href="/cars/new">ADD A NEW CAR</a>
               </div>
               <div class="col-md-6 mb-4">
        <form class="form-inline">
          <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
            aria-label="Search"/>
        </form>
      </div>
               <div class="jumbotron">
               <h1>Welcome to My Cars</h1>
               <p>At My Cars, we can take care of all your needs. We're happy to help drivers like you from all over the country with all of your automotive needs!. The car you are looking at today and want to think about buying tomorrow may be the same car someone else looked at yesterday and will be back to buy today. Hurry up and get your dream car! </p>
               </div>
               <img src="https://www.cstatic-images.com/car-pictures/maxWidth503/usc90fot11af021001.png"></img>
               <img src="https://www.cstatic-images.com/car-pictures/xl/usc90fot11af021003.png"/>
               </div>
           </Layout>
       )

    }
}


module.exports = Index