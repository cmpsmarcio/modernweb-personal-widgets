export default (req, res) => {
  return fetch(encodeURI(`https://api.hgbrasil.com/weather?fields=only_results,temp,city,description,date&key=96e37c95&city_name=${req.query.city}`))
  .then(resp => resp.json())
  .then(data => {
    res.status(200).json(data)
  })
}
