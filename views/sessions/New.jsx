const React = require('react')

class LoginUser extends React.Component {
    render(){
        return(
            <div>
                <a href="/cars">Home</a><br/>
                <a href="./users/new.jsx">New User</a>
                <h1>Login</h1>
                <form action="/sessions/" method="POST">
                    username: <input type="text" name="username"/><br/>
                    password: <input type="password" name="password"/><br/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        )
    }
}

module.exports = LoginUser