import React, { Component } from 'react';

// simple approach
// const withClass = (props) => (
//    <div className={props.classes}>
//      {props.children}
//    </div>
// )

// Better approach
// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//    )

// Statefull approach
// const withClass = (WrappedComponent, className) => {

//     // If we need access to lifecycle hooks
//     return class extends Component {
//         render() {
//             return (
//                 <div className={className}>
//                     <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
//                 </div>
//             )
//         }
//     }
// }

const withClass = (WrappedComponent, className) => {

    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    });
}

/*
reference forwarding :
    Here we want to focus input element in Person component from PersonS component
    ref attribute is only accesible from within the component. so {...props} will not have ref property
    So we can use a hack, just create a ref and pass the property with some other name than "ref". eg
        constructor(){
            this.inputElement = React.createRef();
        }
        <Person forwardedRef={this.inputElement} />
    
    Now in HOC we'll have access to ref through props.forwardedRef 
        <WrappedComponent ref={this.props.forwardedRef} {...props} /> 
        //this is the indevidual Person component
        we're referencing the Person Element which is wrapped in Hoc
        and it doesn't have focus(). So we need to add focus() in Person
        component which will call focus() in it's input element



    BUT THERE'S A BETTER WAY.
    don't return the class yet. Instead store it in a variable. and return fn call to forwardRef
*/

export default withClass;