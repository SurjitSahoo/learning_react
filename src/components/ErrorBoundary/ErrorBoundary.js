import react, { Component } from 'react';

class ErrorBoundary extends Component{
    state = {
        hasError : false,
        errorMessage : ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage : error});
    }

    render(){
        if(this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        }
        else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;


/*
<ErrorBoundary key='someKey'>
    <div> some html</div>
</ErrorBoundary>

* key is the props
* div is the props.children
*/