export const initialState = [
   {
   item: 'Learn about reducers',
   completed: false,
   id: 0
   }, 
   {
   item: 'some other task',
   completed: false,
   id: 1
   }, 
   {
   item: 'another task',
   completed: false,
   id: 2
   }, 
];

export const reducer = (state, action) => {

console.log(action);

switch(action.type) {

    case 'ADD_TASK':
        return [...state, {
            item: action.payload,
            completed: false,
            id: Date.now()
        }]

    case 'TOGGLE_STATUS':
        return state.map((item) => {
            if (item.id === action.payload) {
                return {
                    ...item,
                    completed: !item.completed
                }
            } else return item;
        })
    
    case 'REMOVE_COMPLETED':
        return state.filter(item => !item.completed)
}

};
