import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin, handleResetPassword } = useAuth();
    return (
        <div className="mx-5 my-2">
            <form onSubmit={handleRegistration}>
                <h2 className="mt-3">Please {isLogin ? 'Login' : 'Register'}</h2>
                <br />
                {!isLogin &&
                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input onBlur={handleNameChange} type="name" className="form-control" id="inputName" placeholder="Enter Your Name" required />
                        </div>
                    </div>
                }
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Enter Your Email" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="Enter Your Password" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" htmlFor="gridCheck1">
                                Do you have an account?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-success">
                    {isLogin ? 'Login' : 'Register'}
                </button>
                <button onClick={handleResetPassword} type="button" className="btn btn-info ms-3">Reset Password</button>
            </form>
            <br />
            <div className="App social-login">
                <button onClick={signInUsingGoogle} className="btn btn-danger me-4"><i class="fab fa-google"></i> Sign In With Google</button>
                <br />
                <br />
                <button className="btn btn-dark me-4"><i class="fab fa-github-square"></i> Sign In With Github</button>
                <br />
                <br />
                <button className="btn btn-primary"><i className="fab fa-facebook"></i> Sign In With Facebook</button>
            </div>
        </div>
    );
};

export default Login;