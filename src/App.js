import React from 'react';
import BodyNote from './components/BodyNote';
import Navbar from './components/Navbar';
import { getInitialData } from './utils/index';

class App extends React.Component {
  constructor(props) {
    super(props);

    const notes = getInitialData();

    this.state = {
      notes: notes,
      querySearch: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchEventHandler({ query }) {
    this.setState(() => {
      return { querySearch: query };
    });
  }

  onArchiveHandler(id) {
    this.setState({ notes: this.state.notes.map((note) => (note.id === id ? { ...note, archived: true } : note)) });
  }

  onActiveHandler(id) {
    this.setState({ notes: this.state.notes.map((note) => (note.id === id ? { ...note, archived: false } : note)) });
  }

  render() {
    return (
      <div>
        <Navbar searchNote={this.onSearchEventHandler} />
        <BodyNote addNote={this.onAddNoteHandler} notes={this.state.notes} querySearch={this.state.querySearch} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onActive={this.onActiveHandler} />
      </div>
    );
  }
}

export default App;
