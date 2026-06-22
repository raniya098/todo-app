import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)
  const handleinc=()=>{
    if(count<10){
      setCount((count) => count+1)


  }}
  const handledec=()=>{
  if(count<0){
    setCount((count) => count-1)
  }}

  return (
    <>
      <section id="center">
        
        <div>
          <h1>counter</h1>
          
        </div>
        <button
          type="button"
          className="counter"
          onClick={handleinc}
        >
          increment
        </button>
        
        <button
          type="button"
          className="counter"
          onClick={handledec}
        >
          decrement
        </button>
        
        <h1>{count}</h1>

      </section>

  


      <section id="next-steps">
        
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default Counter
