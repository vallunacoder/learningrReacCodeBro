//we will be working with function base components


//remember to pay attention to the capitalization
//Withing our header function we can write a combination of js and html
//let's just return something here

// withing our return statement we can insert some js.


function Footer(){
    return(
       <footer>
         <p>&copy; {new Date().getFullYear()} Your website name</p>
       </footer>
    )
}

export default Footer