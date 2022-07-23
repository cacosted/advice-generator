import { getAdvice } from './services/getAdvice.js'

const API = 'https://api.adviceslip.com/advice'
const adviceId = document.querySelector('#advice-id')
const adviceText = document.querySelector('#advice-text')
const randomBtn = document.querySelector('#btn-random')

const advice = { id: null, text: null }
const MAX_ADVICES = 224

const renderAdvice = () => {
  adviceId.textContent = advice.id
  adviceText.textContent = advice.text
}

const setAdvice = (id, text) => {
  advice.id = id
  advice.text = text
  renderAdvice()
}

getAdvice(API, setAdvice)

randomBtn.addEventListener('click', () => {  
  const randomNumber = Math.random() * MAX_ADVICES
  getAdvice(`${API}/${randomNumber}`, setAdvice)
})