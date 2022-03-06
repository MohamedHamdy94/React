export const Fovorites_state = 'Fovorites_state'
export const Count_state ='count_state'
export const addToFovorite =( payload) =>{
    return {
        type: Fovorites_state ,
        payload
    }
};
export const InCount =( payload) =>{
    return {
        type: Count_state ,
        payload
    }
};