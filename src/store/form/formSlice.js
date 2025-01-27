import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    module: 'React Mod7',
    username: '',
    email: '',
    password: 'mod7USIP-DIEGO',
}

const formSlice = createSlice({
    name: 'formLogin',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const {module, username, email, password } = action.payload
            state.module = module
            state.username = username
            state.email = email
            state.password = password
        }
    },
})

export const { addUser } = formSlice.actions
export default formSlice.reducer