import './App.css'
type aui ={
  text:string
}
function HAMDI(props : aui) {
  return(
    <h1>{props.text}</h1>
  )
}

function App() {
  

  return (
    <>
    <p>I LOVE YOU GEDO<HAMDI text = "HAMDI"/> AND <h1>OSMAN</h1></p>
    </>
  )
}

export default App
