const React = require('react')

class NewUser extends React.Component {
    render(){
        return(
            <div>
                <h1>New User</h1>
                <form action="/user/" method="Post">
                    username: <input type="text" name="username"/><br/>
                    password: <input type="password" name="password"/><br/>
                    <input type="submit" value="create user"/> 
                </form>
            </div>
        )
    }
}

module.exports = NewUser