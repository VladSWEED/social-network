import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    // let newMessageBody = state.newMessageBody;
    //
    // let onSendMessageClick = () => {
    //     props.sendMessage();
    // }
    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body); обрабтчик событий: при каждом нажатии симлов диспатчим в стор
    // }
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    if (!props.isAuth) return <Redirect to={"/login"}/>;
    // const MessageForm = () => {

    // }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const maxLength50=maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                validate={[required,maxLength50]}
                       name={"newMessageBody"} placeholder={"Enter your message "}/>
                {/*<textarea placeholder='Enter your message '
                       onChange={onNewMessageChange}
                       component={"textarea"}
                       name={"message"}
                       value={newMessageBody}>
                </textarea>*/}
            </div>
            <div>
                {/*<button onClick={onSendMessageClick}>send</button>*/}
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;