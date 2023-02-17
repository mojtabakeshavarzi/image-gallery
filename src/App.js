import { useState } from "react";


function App() {

  // access key
  //jIoFx6nGLjVAL_h0BMiWJaKeP9z3mgZxIA4Glofd-xQ
  const[value , setValue] = useState("");

  const[result , setResult] = useState("");

  const fetchImage = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=jIoFx6nGLjVAL_h0BMiWJaKeP9z3mgZxIA4Glofd-xQ&query=${value}`)
    .then(res => res.json())
    .then(data => {
      setResult(data.results);
    })
    
  }

  return (
    <div>
        <div className="header">
          <span>Search</span>
          <input 
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={fetchImage}>Search</button>
        </div>
        <div className="gallery">
          {
            result && result.map((item) => 
            <img
            key={item.id}
            src={item.urls.regular}
            alt=""
            /> )
          }
        </div>
    </div>
  );
}

export default App;
