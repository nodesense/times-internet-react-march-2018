// Action creators

//Pure function
export function increment(value) {
    return {
        type: 'INCREMENT',
        value: value
    }
}

export function decrement(value) {
    return {
        type: 'DECREMENT',
        value: value
    }
}