import React, {useEffect, useState} from 'react';
import BannerPhoto from "./components/BannerPhoto/BannerPhoto"
import Navbar from "./components/Navbar/Navbar"
import URLInput from "./components/Input/Input"
import AppContext from "./Context/AppContext"
import Article from "./components/Article/Article"

function App() {
  const [article, setarticle] = useState({})
  const [url, seturl] = useState("")

  useEffect(() => {
    console.log("url has changed in App.js", url);
    
    fetch('/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "url": url})
    })
    .then(res => res.json())
    .then(data => {
      console.log("article data return", data);
      setarticle(data)
    })
  }, [seturl, url])

  return (
    <div>
      <AppContext.Provider value={{url, seturl, article}}>
        <Navbar/>
        <BannerPhoto/>
        <URLInput/>
        {article.summary ? <Article/> : null}
      </AppContext.Provider>
    </div>
  );
}

export default App;
