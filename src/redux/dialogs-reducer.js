// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hey HOW'},
        {id: 3, message: 'YO'},
        {id: 4, message: 'YOU'},
        {id: 5, message: 'YOU ARE'},
        {id: 6, message: 'YOU IS'},
    ],
    dialogs: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Igar'},
        {id: 4, name: 'Andrei'},
        {id: 5, name: 'Karolina'},
        {id: 6, name: 'Kirill'},
    ]
}
export const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {

        // case UPDATE_NEW_MESSAGE_BODY:
        //     return {
        //         ...state,
        //         newMessageBody: action.body
        //     };
        //     // stateCopy.newMessageBody = action.body;
        //     return stateCopy;

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        // stateCopy.newMessageBody = '';
        // stateCopy.messages.push({id: 6, message: body}); в message копируем стейт и в конец добавляем Message:body, id....
        // return stateCopy;

        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
// export const updateNewMessageBodyCreator = (body) =>
//     ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body})

export default dialogsReducer;