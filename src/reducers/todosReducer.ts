export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'TODO_ADDED':
      return [...state, action.payload]
  }
}