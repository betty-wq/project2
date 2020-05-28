const React = require('react')
const Layout = require('../Layout.jsx')

class LoginUser extends React.Component {
    render(){
        return(
            <Layout>
            <div class="container">
                <a href="/cars">Home</a><br/>
                <a href="/user/new">Sign up</a>
                <h1>Login</h1>
                <form action="/sessions/" method="POST">
                    username: <input type="text" name="username"/><br/>
                    password: <input type="password" name="password"/><br/>
                    <input type="submit" value="login"/>
                </form>
            </div>
            </Layout>
        )
    }
}

module.exports = LoginUser