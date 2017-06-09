import todoApp from '../components/reducers';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../components/actions'
import { createStore } from 'redux'


function mytest() {
    let store = createStore(todoApp)
    // Log the initial state
    console.log(store.getState())

    // Every time the state changes, log it
    // Note that subscribe() returns a function for unregistering the listener
    let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
    )

    // Dispatch some actions
    store.dispatch(addTodo('Learn about actions'))
    store.dispatch(addTodo('Learn about reducers'))
    store.dispatch(addTodo('Learn about store'))
    store.dispatch(toggleTodo(0))
    store.dispatch(toggleTodo(1))
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

    // Stop listening to state updates
    unsubscribe()
}

export default mytest;