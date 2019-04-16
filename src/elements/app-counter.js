import { html, parent } from 'hybrids'
import AppStore from './app-store'

const AppCounter = {
  store: parent(AppStore),
  render: ({ store: { count }, innerHTML }) => {
    return html`
      <span>
        ${innerHTML} ${count}
      </span>
    `.style(`
    span{
      margin:0 16px;
    }
    `)
  },
}

export default AppCounter
