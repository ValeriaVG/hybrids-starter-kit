import { html, parent, property } from 'hybrids'
import AppStore, { add } from './app-store'
import buttonStyles from './app-button.css'
const handleClick = rhs => {
  return ({ store }) => {
    return add(store, rhs)
  }
}

const AppButton = {
  store: parent(AppStore),
  add: property(Number),
  render: ({ innerHTML, add }) => {
    return html`
      <button onclick="${handleClick(add)}">
        ${innerHTML}
      </button>
    `.style(buttonStyles)
  },
}

export default AppButton
