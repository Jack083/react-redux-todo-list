import { TodoListApi } from './api'
import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
    fectchTodoSucceed,
    addTodoSucceed,
    deleteTodoSucceed,
    toggleTodoSucceed,
    fectchTodoFailed,
    addTodoFailed,
    deleteTodoFailed,
    toggleTodoFailed
} from './actions'
import { CONSTANTS } from './constants'


function* fetchTodoListSaga() {
    yield takeLatest(CONSTANTS.FETCH_TODOLIST.REQUEST, function* (action) {
        console.log(action)
        try {
            const todoList = yield call(TodoListApi.list)
            yield put(fectchTodoSucceed(todoList))
        } catch (error) {
            yield put(fectchTodoFailed(error))
        }
    })
}

function* addTodoSaga() {
    yield takeLatest(CONSTANTS.ADD_TODO.REQUEST, function* (action) {
        console.log(action)
        const { name } = action
        try {
            const newTodo = yield call(TodoListApi.addTodo, name)
            yield put(addTodoSucceed({ ...newTodo }))
        } catch (error) {
            yield put(addTodoFailed(error))
        }
    })
}

function* deleteTodoSaga() {
    yield takeLatest(CONSTANTS.DELETE_TODO.REQUEST, function* (action) {
        const { id } = action
        console.log(action)
        try {
            yield call(TodoListApi.deleteTodo, id)
            yield put(deleteTodoSucceed(id))
        } catch (error) {
            yield put(deleteTodoFailed(error))
        }
    })
}

function* toggleTodoSaga() {
    yield takeLatest(CONSTANTS.TOGGLE_TODO.REQUEST, function* (action) {
        const { id, completed } = action
        console.log(action)
        try {
            const updatedTodo = yield call(TodoListApi.toggleTodo, id, completed)
            yield put(toggleTodoSucceed({ ...updatedTodo }))
        } catch (error) {
            yield put(toggleTodoFailed(error))
        }
    })
}

function* rootSaga() {
    yield all([
        fetchTodoListSaga(),
        addTodoSaga(),
        toggleTodoSaga(),
        deleteTodoSaga(),
    ])
}

export { rootSaga };