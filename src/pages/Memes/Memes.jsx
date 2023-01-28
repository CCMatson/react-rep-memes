import { useEffect, useState } from "react";
import { getMemes } from "../../services/api-calls";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";


const Memes = () => {
  const [memes, setMemes] = useState([])


  useEffect(() => {
    const fetchMemes = async () => {
      const memeData = await getMemes()
      setMemes(memeData.data.memes)
      console.log(memeData.data.memes)
    }
    fetchMemes()
  }, [])

  return (
    <>

      {memes.length ?
        <>
          {memes.map(meme =>
            {
              return <div key={meme.name} className="card">
                <Link to='/meme' state={{ meme }} key={meme.name} className="links">  {meme.name}   </Link>
          
              </div>;
            }
          )}
        </>
        :
        <>
          <div>Loading memes...</div>
        </>
      }
    </>
  );
}

export default Memes;