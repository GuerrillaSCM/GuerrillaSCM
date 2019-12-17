import React,{Component} from 'react';
import axios from 'axios'

const { Provider, Consumer } = React.createContext();

const LOCAL = "http://localhost:3005/api/";
const RESPONSE = "response/survey/";

class AxiosContextProvider extends Component {
    


    getAllResponses(id) {
        return (axios.get(LOCAL + RESPONSE+ id))
    }


    render() {
        return(
            <Provider>
                {this.props.children}
            </Provider>
        );
    }
}

export {AxiosContextProvider, Consumer as AxiosContextConsumer}