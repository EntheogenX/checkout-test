import React, { PureComponent } from 'react';
import request from 'superagent';

class SignIn extends PureComponent {

    constructor(prop) {
        super(prop);
        this.login = this.login.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.getItems = this.getItems.bind(this);
    }

    render() {
        return (
            <div id="mainLeftColumn">
                <section className="content signInPanel" id="panelSignIn">

                    <div id="BoxSignIn">
                        <h2>Sign in to your Indigo account</h2>

                        <div>
                            <input type="email"
                                id="fieldEmailAddress"
                                name="fieldEmailAddress"
                                placeholder="email address" />
                        </div>

                        <div id="signInAreaPassword">
                            <input type="password"
                                id="fieldPassword"
                                name="fieldPassword"
                                placeholder="password" />
                        </div>

                        <div className="buttonRow">
                            <a href="javascript:void(0)" className="button01"
                                id="buttonSignIn1" onClick={this.login}>
                                Sign In
                            </a>
                        </div>
                    </div>
                </section>
                <button type="button" onClick={this.getInfo}>
                    Get Info
                </button>
                <button type="button" onClick={this.getItems}>
                    Get Items
                </button>
            </div>
        );
    }

    getInfo() {
        request
            .get('/api/getInfo')
            .query({ userId: 2012 })
            .end((err, res) => {
                if (err) {
                    return console.log(err);
                }
                else {
                    console.log("info obtained");
                }
            }
        );
    }


    getItems() {
        request
            .get('/api/getItems')
            .query({ userId: 2012 })
            .end((err, res) => {
                if (err) {
                    return console.log(err);
                }
                else {
                    console.log("Items obtained");
                }
            }
        );
    }

    login() {
        const username = document.getElementById('fieldEmailAddress').value;
        const password = document.getElementById('fieldPassword').value;
        request
            .post('/login')
            .send({ email: username, password: password })
            .set('accept', 'json')
            .end((err, res) => {
                if (err) {
                    return console.log(err);
                }
                else {
                    const jwtToken = JSON.parse(res.text).token;
                    console.log(jwtToken);
                    document.cookie = "jwt=" + jwtToken;
                }

            }
            );
    }
}



export default SignIn;
