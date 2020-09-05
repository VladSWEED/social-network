import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'Its my first post)))', likesCount: 40},
            ],
            newPostText: 'qwerty'
        },
        dialogsPage: {
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
            ],
            newMessageBody: ""
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('state was changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);
    }

}



export default store;
window.state = store;