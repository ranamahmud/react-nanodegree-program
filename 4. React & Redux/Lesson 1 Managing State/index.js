const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';
const TOGGLE_TODO = 'TOGGLE_TODO';
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
    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id)
        case TOGGLE_TODO:
            state.map((todo) => todo.id !== action.id ?
                todo : Object.assign({}, todo, { complete: !todo.complete }))
        default:
            return state
    }
}

function goals(state = [], action) {
    switch (action.type) {
        case ADD_GOAL:
            return state.concat([action.goal])
        case REMOVE_GOAL:
            return state.filter((goal) => goal.id !== action.id)

        default:
            return state
    }
}
function app(state = {}, action) {
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action),
    }
}
const store = createStore(app);
store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})

store.dispatch({ type: 'ADD_TODO', todo: { id: 0, name: 'Learn Redux', complete: false } })
store.dispatch({ type: 'ADD_TODO', todo: { id: 1, name: 'Learn Redux', complete: false } })
store.dispatch({ type: 'ADD_TODO', todo: { id: 2, name: 'Learn Redux', complete: false } })
store.dispatch({ type: 'ADD_TODO', todo: { id: 3, name: 'Learn Redux', complete: false } })


store.dispatch({ type: 'ADD_GOAL', goal: { id: 0, name: 'Learn Redux', complete: false } })
store.dispatch({ type: 'ADD_GOAL', goal: { id: 1, name: 'Learn Redux', complete: false } })
store.dispatch({ type: 'REMOVE_GOAL', id: 1 })
