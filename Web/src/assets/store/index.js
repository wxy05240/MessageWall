import { createStore } from "vuex";
const store = createStore(
    {
        states (){
            return {
                count : 0,
                user : ''
            }
        },
        mutations : {
            increament(state){
                state.count++
            },
            getUser(state,n){
                state.user = n
            }
        },
        actions : {

        }
    }
)
export default store
    
