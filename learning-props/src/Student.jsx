// props is going to be a js object
// remember class is a reserve keyword

//LET'S see propTypes = a mechanism that ensures that the passed value
// is of the correct datatype.
// age: PropTypes.number
// this is actually for debugging purposes.
// this is a good practice


//defaultProps  = default values for props in case
// they are not passed from the parent component
//  name: "Guest"

import PropTypes from 'prop-types';


function Student(props){
    return(
        <div  className="student">
        <p> Name: {props.name}</p>
        <p> Age: {props.age}</p>
        <p> student: {props.isStudent ?  "yes" : "no"}</p>
        </div>
    );

}

Student.prototype = {
        name: PropTypes.string,
        age: PropTypes.string,
        isStudent: PropTypes.bool,
}


Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false, 
}

export default Student