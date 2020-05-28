const React = require('react')

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                <link rel="stylesheet" href="./style.css"></link>
                <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>

                    <title>Cars App</title>
                </head>
                <body>
                    <h1>{this.props.name}</h1>
                    <main>
                     {this.props.children}
                    </main>
                    <footer >
                    <div class="footer-copyright text-center py-3">© 2020 Copyright: Betty
                     </div>
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Layout