
// library code
function createStore(reducer) {
    // 1. the state store
    // 2. get the state
    // 3. listen to change on the state
    // 4. update the state
    let state;
    const listeners = []
    const getState = () => state
    const subscribe = (listener) => {
        listeners.push(listener)

        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    return {
        getState,
        subscribe,
        dispatch
    }
}

// const store = createStore();
// store.subscribe(() => {
//     console.log('The new state is:', store.getState());
// })

// const unsubscribe = store.subscribe(() => {
//     console.log('The state changed.', store.getState());
// })

// unsubscribe();

// app code
function todos(state = [], action) {
    if (action.type === 'ADD_TODO') {
        return state.concat([action.todo])
    }

    return state
}

const store = createStore(todos);
store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})

store.dispatch({ type: 'ADD_TODO', todo: { id: 0, name: 'Learn Redux', complete: false } })
store.dispatch({ type: 'ADD_TODO', todo: { id: 1, name: 'Learn Redux', complete: false } })
store.dispatch({ type: 'ADD_TODO', todo: { id: 2, name: 'Learn Redux', complete: false } })
store.dispatch({ type: 'ADD_TODO', todo: { id: 3, name: 'Learn Redux', complete: false } })