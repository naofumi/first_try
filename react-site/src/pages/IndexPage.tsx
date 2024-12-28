import {useState} from "react"

export default function IndexPage() {
  const [message, setMessage] = useState("")

  function handleClick() {
    setMessage("Hello World!")
  }

  return (
    <>
      <p>This is the React App</p>
      <button onClick={handleClick}>Click for greetings</button>
      <div style={{color: "red"}}>
        {message}
      </div>

      <div>
        <a href="/detail">Go to details page</a>
      </div>
    </>
  )
}
