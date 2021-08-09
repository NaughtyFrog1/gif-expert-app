const getGifs = async (category) => {
  const URL = 
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=cWowIkJNFHC2jPrkSx0MxW1yvAJYEqM9`
  const resp = await fetch(URL)
  const { data } = await resp.json()

  return data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }))
}

export default getGifs
