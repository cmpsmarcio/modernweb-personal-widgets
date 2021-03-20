export default (req, res) => {
  return fetch('https://economia.awesomeapi.com.br/json/all')
  .then(resp => resp.json())
  .then(data => {
    res.status(200).json(data)
  })
  .catch(() => {
    res.status(200).json({
      USD: {
        high: 0,
        low: 0,
      },
      EUR: {
        high: 0,
        low: 0
      }
    })
  })
}
