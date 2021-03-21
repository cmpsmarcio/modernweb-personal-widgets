export default (req, res) => {
  return fetch(encodeURI(`https://api.hgbrasil.com/weather?fields=only_results,temp,city,description,date&key=e36250f0&city_name=${req.query.city}`))
  .then(resp => resp.json())
  .then(data => {
    res.status(200).json(data)
    //res.status(200).json({temp: 25, description: 'teste'})
  })
  .catch(() => {
    res.status(200).json({temp: 0, description: 'Erro ao recuperar os dados'})
  })
}
