import React from "react";
import axios from "axios";
function Products(){
    var [product,setproduct] = React.useState([])
    React.useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(function(res){
        setproduct(res.data)
    })
},[])
var data = [...product]
function asc(){
    var x = data.sort((a,b)=>{
        if(a.category<b.category){
            return -1;
        }
        if(a.category>b.category){
            return 1;
        }
        return 0;
    })
    setproduct(x)
}
function dec(){
    var y = data.sort((a,b)=>{
        if(a.category<b.category){
            return 1;
        }
        if(a.category>b.category){
            return -1;
        }
        return 0;
    })
    setproduct(y)
}
function abc(){
    var p = document.getElementById('dg')
    var g = product.filter(function(a){
        return (a.category.toLowerCase().startsWith(p.value))

    })
    setproduct(g)
}
return (
    <div className="mybox">
        <button onClick={asc}>Ascending</button>
        <button onClick={dec}>Decending</button>
        <input type="text" id="dg" onKeyUp={()=>{abc()}}/>
        {
        product.map((a)=>{
            return <li>{a.category}</li>
            })
        }
    </div>
    )
}
export default Products;