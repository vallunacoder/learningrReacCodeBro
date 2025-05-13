
//our component will be function base
// Pay attention to the capitalization here , className


import profilePic from  './assets/Open Peeps - Bust.png'

function Card (){
            return(
             <div className="card">
                  <img className="card-img" src={profilePic} alt="just a animated img of me" />
                 <h2 className="card-title">  Valluna teacher </h2>
                <p className="card-text"> teach English and code</p>
            </div>
            );
}

export default Card