export const loadState = () => {
    const serializedState = localStorage.getItem('session');
    if (serializedState === null) {
        return undefined;
    }
    return JSON.parse(serializedState);
};

export const saveState = (session) => {
    const serializedState = JSON.stringify(session);
    localStorage.setItem('session', serializedState);
};

export const getCartState = () => {
  const session = JSON.parse(localStorage.getItem('session'));
  return session.cartList;
};