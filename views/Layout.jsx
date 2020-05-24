const React = require('react')

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                <link rel="stylesheet" href="/public/style.css"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                    <title>Cars App</title>
                </head>
                <body>
                    <h1>{this.props.name}</h1>
                    <main>
                     {this.props.children}
                    </main>
                </body>
            </html>
        )
    }
}

module.exports = Layout