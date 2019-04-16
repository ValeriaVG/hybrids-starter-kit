export default {
  count: 0,
}

export function add(store, rhs) {
  store.count += rhs
}
