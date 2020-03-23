import fetch from 'cross-fetch'
const requestApi = "https://cors-anywhere.herokuapp.com/https://todos-restful-api.herokuapp.com/api/todos"

const TodoListApi = {
    async list() {
        try {
            const response = await fetch(requestApi, {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return response.json()
        } catch (error) {
            console.log(error);
        }
    },
    async addTodo(name) {
        try {
            const newTodo = await fetch(requestApi, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                })
            });
            return newTodo.json()
        } catch (error) {
            console.log(error);
        }
    },
    async deleteTodo(id) {
        try {
            return await fetch(requestApi + '/' + id, {
                method: 'DELETE',
                credentials: 'same-origin',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.log(error);
        }
    },
    async toggleTodo(id, completed) {
        try {
            const updatedTodo = await fetch(requestApi + '/' + id, {
                method: 'PUT',
                credentials: 'same-origin',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !completed,
                })
            });
            return updatedTodo.json()
        } catch (error) {
            console.log(error);
        }
    }
};

export { TodoListApi };
