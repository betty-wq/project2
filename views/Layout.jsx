const React = require('react')

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <title></title>
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