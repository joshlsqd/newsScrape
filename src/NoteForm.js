import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import Add from 'material-ui/svg-icons/content/add';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            inputValue: e.target.value
        });
    }
    handleSubmit(){
        this.props.addNote(this.state.inputValue, this.props.headline)
            .then(this.setState({
                inputValue: ''
            })
        );
    }
    render() {
        return (
            <div>
                <TextField
                    type='text'
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    hintText="Add Note"
                    style={{
                        marginLeft: '80px'
                    }}
                />
                <RaisedButton
                    backgroundColor="#a4c639"
                    icon={<Add color={fullWhite} />}
                    onClick={this.handleSubmit}
                    style={{
                        marginLeft: '15px',

                    }}
                />

            </div>
        )
    }
}

export default NoteForm;
