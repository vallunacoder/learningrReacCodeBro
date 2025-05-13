//we will be working with function base components


//remember to pay attention to the capitalization
//Withing our header function we can write a combination of js and html
//let's just return something here

//remember that you can return just one  element. if you want to return multiple elements
// create an element with children inside

function Header(){
    return(
       <header>
        <h1> My website </h1>
        <nav>
            <ul>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">About</a></li>
                <li> <a href="#">Services</a></li>
                <li> <a href="#">Contact</a></li>
        <hr />
            </ul>
        </nav>
    </header>
    )
    
}

export default Header