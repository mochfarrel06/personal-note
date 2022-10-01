import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      maxChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.maxChar),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);

    this.setState(() => {
      return {
        title: '',
        body: '',
      };
    });
  }

  render() {
    return (
      <section className="pt-36">
        <div className="container">
          <div className="w-full px-4">
            <h2 className="font-bold mb-10 text-center text-2xl text-slate-700">Add Notes</h2>

            <div className="max-w-2xl mx-auto">
              <form onSubmit={this.onSubmitEventHandler}>
                <label className="block mb-2">
                  <span className="block text-xs font-normal text-slate-500 mb-2 text-right">Sisa karakter: {this.state.maxChar - this.state.title.length}</span>
                  <span className="block text-sm font-medium text-slate-700 mb-2">Judul Catatan</span>
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-slate-700 mb-2">Catatan Anda</span>
                  <textarea
                    name="message"
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                    required
                    id="message"
                    cols="30"
                    rows="10"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
                  ></textarea>
                </label>
                <label className="block mt-5">
                  <button
                    type="submit"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800 hover:bg-indigo-800 transition duration-300 ease-in-out hover:text-slate-100"
                  >
                    Add
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NoteInput;
