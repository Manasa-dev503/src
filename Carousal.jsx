import React from "react";
function Carousal(){
    var [images,setimages] = React.useState(["https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg","https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200","https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"])
    return (
        <div className="box">
            <h1>Edupoly</h1>
            <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" width="100px"/>
            <button></button>

        </div>
    )


    
    
}
export default Carousal;