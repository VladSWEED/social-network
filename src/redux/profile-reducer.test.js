import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'Its my first post)))', likesCount: 40},
    ]
}


test('length of posts should be incremented', () => {
    let action=addPostActionCreator("IT-KAMASUTRA");

    let newState=profileReducer(state,action);

    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    let action=addPostActionCreator("IT-KAMASUTRA");

    let newState=profileReducer(state,action);

    expect(newState.posts[2].message).toBe("IT-KAMASUTRA");
});

test('after deleting length of message should be decrement', () => {
    let action=deletePost(1);

    let newState=profileReducer(state,action);

    expect(newState.posts.length).toBe(1);
});
test('after deleting length should not be decrement if ID is incorrect', () => {
    let action=deletePost(1000);

    let newState=profileReducer(state,action);

    expect(newState.posts.length).toBe(2);
});



