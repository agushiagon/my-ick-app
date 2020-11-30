import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            form: {
                title: '',
                comment: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;

        this.setState(prevState => {
            return {
                form: {
                    ...prevState.form,
                    [name]: event.target.value
                    },
            }
        });
    }

    handleSubmit() {

        this.setState(prevState => {
            return {
                posts: [
                    ...prevState.posts,
                    {
                        title: this.state.form.title,
                        comment: this.state.form.comment,
                        isLiked: false,
                        date: this.getTodaysDate(),
                    }
                ],
                form: {
                    title: '',
                    comment: ''
                    },
                };
            });
    }

    getTodaysDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        today = mm + '/' + dd + '/' + yyyy;

        return ` ${today} |  Time:${time}`;
    }





    render() {

        const pst = this.state.posts.map((e, i) => {
            return (
                <li class="row" key={i}>
                    <h3>{e.title} </h3>
                    <span>Creation Date: {e.date}</span>
                    <p>{e.comment}</p>
                    <div class="action">
                        <button type="button" title="Edit">Edit</button>
                        <button type="button" title="Like" >Like</button>
                        <button type="button" title="Delete">Delete</button>
                    </div>
                </li>
            )
        })


        return (
            <div>
                <form>
                    <div>
                        <label for="title">Post Title: </label>
                        <input
                            type="text"
                            id="title"
                            name='title'
                            value={this.state.form.title}
                            onChange={this.handleChange}
                            required
                            minlength="5" 
                            maxlength="100" 
                        ></input>
                    </div>
                    <div>
                        <label for="comment">Comment: </label>
                        <textarea
                            class="text-area"
                            id="comment"
                            name='comment'
                            value={this.state.form.comment}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                        <input type="submit" onClick={this.handleSubmit}/>
                </form>
                <hr/>
                <h2>List of Posts</h2>
                <ul>
                    {pst}
                </ul>
            </div>
        )
    }
}

export default App;