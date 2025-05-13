//we will be working with function base components


//remember to pay attention to the capitalization
//Withing our header function we can write a combination of js and html
//let's just return something here

// withing our return statement we can insert some js.
//outside of the return statement you don't need the parenthesis.
// TO INCLUDE  js variable you need {}


function Food(){

    const food1 = "Orange";
    const food2 = "Banana";

    return(
    <ul>
         <li>Apple</li>
         <li> {food1}</li>
         <li> {food2.toUpperCase()}</li>

    </ul>
    )
}

export default Food