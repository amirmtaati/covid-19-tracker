async function fetchApi(url,callback){
    // const req = await fetch(url)
    // const res = await req.json()
    // return res
    await fetch(url)
    .then(res => res.json())
    .then(callback)
    .catch(err => console.error(err))
}

export default fetchApi