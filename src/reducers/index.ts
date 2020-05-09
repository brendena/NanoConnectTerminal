import * as log from 'loglevel';
import produce from "immer";

const initialState = {
    //properties of the page that will not be synced across all instances of the browser
    propsPage:{
        counter:0
    }
};


function rootReducer(state = initialState, action:any){
    var newState = produce(state,draft =>{
        log.info("changing state - " + action.type);
        if(action.type === "INCREASE_COUNTER")
        {
            log.info("increasing the count size")
            draft.propsPage.counter++;

        }
    });

    return newState;
}

export default rootReducer;