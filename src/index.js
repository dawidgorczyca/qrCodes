import React from 'react'
import ReactDOM from 'react-dom'
import { TranslatorProvider } from 'react-translate'
import available from './interfaces/translations/available'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

const language = (
  available.hasOwnProperty(navigator.language) ? navigator.language : "en-en"
)

const loadTranslations = (l) => 
  fetch(`/translations/${ l }.json`)
  .then((res) => res.json())

loadTranslations(language)
.then((translations) => {
  ReactDOM.render(<App translations={translations} />, document.getElementById('root'))
})
.catch((e) => console.error(e))
registerServiceWorker()
