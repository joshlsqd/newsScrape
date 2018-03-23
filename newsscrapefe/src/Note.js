import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import Clear from 'material-ui/svg-icons/content/clear';

class Note extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        this.props.onDelete(this.props.note, this.props.headline);
    }
    render() {
        return (
            <div style={{
                width: "50%"
            }}>
                <ListItem
                    primaryText={this.props.name}
                    rightIconButton={<RaisedButton
                        backgroundColor="red"
                        style={{}}
                        icon={<Clear color={fullWhite} />}
                        onClick={this.handleSubmit}

                    />}
                />
            </div>
        )
    }
}

export default Note;
