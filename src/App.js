import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            form: {
                title: '',
                comment: ''
            },
            currentPostIndex: -1,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
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

    handleDelete(i) {
        this.setState(prevState => {
            return {
                posts: prevState.posts.filter((item, index) => index !== i)
            }
        });
    }

    handleEdit(i) {
        const currentPost = this.state.posts.find((val, index) => index === i);
        this.setState({
            form: currentPost,
            currentPostIndex: i
        })
    }

    handleEditSubmit() {
        const posts = [...this.state.posts];
        const editedPost = {
            ...posts[this.state.currentPostIndex],
            title: this.state.form.title,
            comment: this.state.form.comment,
            date: this.getTodaysDate()
        }
        posts[this.state.currentPostIndex] = editedPost;
        this.setState(prevState => {
            return {
                posts: posts,
                currentPostIndex: -1,
                form: {
                    title: '',
                    comment: '',
                }
            };
        });
    }

    handleLike(i) {
        const posts = [...this.state.posts];
        const editedPost = {
            ...posts[i],
            isLiked: !posts[i].isLiked
        }
        posts[i] = editedPost;
        this.setState({
            posts: posts
        });
    }




    render() {

        const pst = this.state.posts.map((e, i) => {
            return (
                <li class="row" key={i}>
                    <h3>{e.title} </h3>
                    <span>Creation Date: {e.date}</span>
                    <p>{e.comment}</p>
                    <div class="action">
                        <button type="button" title="Edit" onClick={() => this.handleEdit(i)}>Edit</button>
                        <button type="button" title="Like" onClick={() => this.handleLike(i)}> 
                        { e.isLiked ? 'Unlike' : 'Like'}
                        </button>
                        <button type="button" title="Delete"  onClick={() => this.handleDelete(i)}>Delete</button>
                    </div>
                    <hr />
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
                    {
                        this.state.currentPostIndex === -1 ?
                        <input type="submit" onClick={this.handleSubmit}/> :
                        <button type="submit" onClick={this.handleEditSubmit}>Edit Post</button>
                    }
                </form>
                <hr/>
                <h2>List of Posts</h2>
                <hr/>
                <ul>
                    {pst}
                </ul>
            </div>
        )
    }
}

export default App;