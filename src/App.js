import React from 'react';

class App extends React.Component {
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
            </div>
        )
    }
}

export default App;