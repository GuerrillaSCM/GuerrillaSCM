import React,{Component} from 'react';
import axios from 'axios'

const { Provider, Consumer } = React.createContext();

const URL = "http://localhost:3005/api/";

class AxiosContextProvider extends Component {
    


    // getResponse() {
    //     axios.get(URL + "response/survey/5dec493cf525a2415c89c290")
    //     .then(reponse => {
    //         console.log(response);
    //     });
    // }


    render() {
        return(
            <Provider>
                {this.props.children}
            </Provider>
        );
    }
}

export {AxiosContextProvider, Consumer as AxiosContextConsumer}