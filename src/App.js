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
        }
    }





    render() {
        return (
            <div>
                <form>
                    <div>
                        <label for="title">Post Title: </label>
                        <input
                            type='text'
                            id="title"
                            name='title'
                            ></input>
                    </div>
                    <div>
                        <label for="comment">Comment: </label>
                        <textarea
                            class="text-area"
                            id="comment"
                            name='comment'
                        ></textarea>
                    </div>
                        <input type="submit" /> 
                </form>
                <hr/>
                <h2>List of Posts</h2>
                <ul>
                    <li class="row">
                        <h5>Title: </h5>
                        <p>Content:</p>
                        <div class="action">
                            <button type="button" title="Edit" >Edit</button>
                            <button type="button" title="Like">Like</button>
                            <button type="button" title="Delete">Delete</button>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default App;