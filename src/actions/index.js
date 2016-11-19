
export const setContext = (context) => {
	return {
		type: 'SET_CONTEXT',
		context: context
	}
}

/*
export const setStat = (stat, value) => {
	return {
		type: 'SET_STAT',
		stat: stat,
		value: value
	}
}

export const addPoint = (stat) => {
	return {
		type: 'ADD_POINT',
		stat: stat
	}
}

export const subtractPoint = (stat) => {
	return {
		type: 'SUBTRACT_POINT',
		stat: stat
	}
}
*/


let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}