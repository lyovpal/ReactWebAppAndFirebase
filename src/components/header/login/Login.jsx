import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <button>SignIn</button>
                <button>SignUp</button>
                
            </div>
        );
    }
}

export default Login;
