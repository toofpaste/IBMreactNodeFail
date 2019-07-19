import React, { Component } from 'react';
class GetUser extends Component {
    constructor(){
        super();
        this.state = {
            pics: [],
        }
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=3')
        .then(results => {
            return results.json();
        }).then(data => {
            let pics = data.results.map((pic) => {
                return(
                    <div key={pic.results}>
                    <img src={pic.picture.medium}/>
                    </div>
                )
            })
            this.setState({pics: pics});
        })
    }
    render(){
    return (
        <div>
            {this.state.pics}
        </div>
    );
    }
}

export default GetUser;


// curl -X POST -u "apikey:1rL0qaf0W1vCMjaydmTZwmzFxeq9WKVnFWyMVW3RLpUZ" \
// --header "Content-Type: text/plain;charset=utf-8" \
// --header "Accept: application/json" \
// --data-binary @profile.txt \
// "https://gateway-syd.watsonplatform.net/personality-insights/api/v3/profile?version=2017-10-13"