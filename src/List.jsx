function List(){
 let cars = ["audi", "porshe", "bmw"]

return(
    <>
    for(let i=0;i<3;i++){
        <h1>{cars[i]}</h1>
    }
    
    </>
)
}