import React from "react";
import { toast } from 'react-toastify';


class AddTodo extends React.Component{

    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handClickAddTodo = () => {

        if (!this.state.title) {
            toast.error("The title is empty.");
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type="button" className="add"
                    onClick={() => this.handClickAddTodo()}
                >Add</button>
            </div>
        )
    }
}

export default AddTodo;