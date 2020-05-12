import React from 'react'

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    submitHandler = event => {
       event.preventDefault()
        const {title} = this.state
        const newPost = {
           title, id: Date.now().toString()
        }
        console.log(newPost)
        this.setState({ title: ''})
    }
    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1>Form</h1>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input value={this.state.title}
                           name="title"
                           onChange={this.changeInputHandler}
                        type="text" id="titel" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-success">Create</button>
            </form>
        )
    }

}
