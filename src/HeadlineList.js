import React, {Component} from 'react';
import HeadlineSave from "./HeadlineSave";
import {List} from 'material-ui/List';
import Appbar from './Appbar';
import NoteForm from './NoteForm';
import Note from './Note'
import * as apiCalls from './api';

class HeadlineList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: [],
            }
    }

    componentWillMount() {
        this.loadHeadlines();
        }


    async loadHeadlines() {
        let headlines = await apiCalls.getHeadlines();
        this.setState({headlines});
    }

    async saveHeadlines(headline) {
        await apiCalls.updateArticle(headline);
            const headlines = this.state.headlines.map(h =>
                (h._id === headline._id)
                ? {...h, isSaved: !h.isSaved}
                : h
            );
            this.setState({headlines: headlines});
    }

     addNote = async (val, id) => {
        const headline = await apiCalls.createNote(id, val);
        const headlines = this.state.headlines.map(h =>
            (h._id === headline._id)
            ? headline
            : h
        );
        this.setState({headlines: headlines});
    };

    deleteNote = async (noteId, headlineId) => {
        console.log('clicked'+noteId+headlineId);
        const headline = await apiCalls.deleteNote(noteId, headlineId);
        const headlines = this.state.headlines.map(h =>
            (h._id === headline._id)
                ? headline
                : h
        );
        console.log(headlines);
        this.setState({headlines: headlines});
    };




    render() {
        const headlines = this.state.headlines.map((h, idx) => (
            <div key={h._id}>
            <HeadlineSave

            {...h}
             onToggle={this.saveHeadlines.bind(this,h)}
            />
            <div>
                {h.isSaved ? <NoteForm headline={h._id} addNote={this.addNote}/> : ""}
            </div>
                <ul>{h.note.map(note => <Note key={note._id} note={note._id} headline={h._id} name={note.body} onDelete={this.deleteNote}/>)}</ul>
            </div>
        ));


    return (
        <div>
            <Appbar/>
            <br/>
                <List style={{
                    width: '80%',
                    margin: '0 auto',
                    border: '2px solid gray',
                }}>
                    {headlines}
                </List>
        </div>
    )
    }
}

export default HeadlineList;