import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
    name: "users",
    initialState: {
    value: JSON.parse(localStorage.getItem("user")) || []
    },
    reducers: {
        addToUsers(state, action){
            stateValue = [...state.value, action.payload]
            locacalStorage.setItem("user", JSON.stringify(state.value) )
        },
        removeFromUsers(state, aciton){
            state.value = state.value.filter(user => user.id !== aciton.payload.id)
            locacalStorage.setItem("user", JSON.stringify(state.value) )
        }
    }
})

export const { addToUsers, removeFromUsers } = usersSlice.actions
export default usersSlice.reducer