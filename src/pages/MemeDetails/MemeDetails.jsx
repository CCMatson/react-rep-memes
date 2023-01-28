import { useState } from "react";
// import { getDetails } from "../../services/api-calls";
import { useLocation } from "react-router-dom";

const MemeDetails = () => {
  const location = useLocation()
  const [memeDetails, setMemeDetails] = useState(location.state.meme)

//   useEffect(() => {
//     const fetchDetails = async () => {
//       const memeData = await getDetails(location.state.meme)
//       setMemeDetails(memeData)
//       console.log(memeData)
//     }
// fetchDetails()    
//   }, [location.state.meme])


  return (
    <div>
      <h3>Memes are dumb </h3>
  
      <img src={memeDetails.url} />

    </div>
  )
}

export default MemeDetails;