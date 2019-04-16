import { html } from 'hybrids'
// Registering components
import * as elements from './elements'
import logo from './logo.png'
import appStyles from './app-root.css'
const App = {
  render: () =>
    html`
      <app-store>
        <div class="hero">
          <img src="${logo}" alt="Hybrids" />
          <p>
            <a
              href="https://hybrids.js.org/"
              target="_blank"
              rel="noopener,noreferrer"
            >
              Hybrids
            </a>
            is a UI library for creating
            <a
              href="https://www.webcomponents.org/"
              target="_blank"
              rel="noopener,noreferrer"
            >
              Web Components </a
            >, which favors plain objects and pure functions over class and this
            syntax.
          </p>
          <div class="example">
            <app-button add="-1">Minus</app-button>
            <app-counter>Count:</app-counter>
            <app-button add="+1">Plus</app-button>
          </div>
        </div>
      </app-store>
    `
      .define({ ...elements })
      .style(appStyles),
}
export default App
