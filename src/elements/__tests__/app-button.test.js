import AppButton from '../app-button'
describe('app-button', () => {
  it('should render plus', () => {
    const div = document.createElement('div')
    const host = { add: +1, innerHTML: 'Plus', store: { count: 1 } }
    const render = AppButton.render(host)
    // Render/Update target element
    render(host, div)
    // Check results synchronously
    const button = div.children[0]
    expect(button).toBeTruthy()
    expect(div.children[0].textContent).toMatch(/Plus/)
    div.children[0].dispatchEvent(new Event('click'))
    expect(host.store.count).toBe(2)
  })
  it('should render minus', () => {
    const div = document.createElement('div')
    const host = { add: -1, innerHTML: 'Minus', store: { count: 1 } }
    const render = AppButton.render(host)
    render(host, div)
    const button = div.children[0]
    expect(button).toBeTruthy()
    expect(div.children[0].textContent).toMatch(/Minus/)
    div.children[0].dispatchEvent(new Event('click'))
    expect(host.store.count).toBe(0)
  })
})
