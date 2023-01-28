const baseUrl = "https://api.imgflip.com/"


export async function getMemes(){
  const res = await fetch(`${baseUrl}/get_memes`)
  return res.json()
}

export async function getDetails(apiUrl){
  const res = await fetch(`${apiUrl}`)
  return res.json()
}