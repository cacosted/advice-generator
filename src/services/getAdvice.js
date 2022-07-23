export const getAdvice = (url, updater) => {
  return fetch(url)
    .then(response => response.json())
    .then(({slip, message}) => {
      const data = slip 
        ? {...slip} 
        : { id: message.type, advice: message.text} 
      updater(data.id, data.advice)
    })
    .catch(error => console.log(error))
}
