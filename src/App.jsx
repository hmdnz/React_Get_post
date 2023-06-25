import './App.css'

function App() {
 

  return (
    <>
     
     
      <form >
      <h1>BrainStorm CONTACT FORM</h1>
            <main>
        <div>
          <label htmlFor="name">First Name</label>
          <input
            name="FirstName"
            // value={devsData.FirstName}
            // onChange={handleChange}
            type="text"
          />
        </div>
        {/* <div>
          <label htmlFor="name">Middlename</label>
          <input
            name="MiddleName"
            value={devsData.MiddleName}
            onChange={handleChange}
            type="text"
          />
        </div>  */}
        </main> 
     </form>
        
     
    </>
  )
}

export default App
