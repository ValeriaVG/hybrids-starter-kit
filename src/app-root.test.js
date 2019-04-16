import App from './app-root'
it('should render app', () => {
  const div = document.createElement('div')
  const host = {}
  const update = App.render(host, { shadowRoot: false })
  // Updates target element
  update(host, div)
  // Check results synchronously
  expect(div.children[0].textContent).toBeTruthy()
})
