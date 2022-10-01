import React from 'react';

class NavbarSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.onQueryChangeEventHandler = this.onQueryChangeEventHandler.bind(this);
  }

  onQueryChangeEventHandler(event) {
    this.setState({ query: event.target.value }, () => {
      return this.props.searchNote(this.state);
    });
  }

  render() {
    return (
      <div className="flex items-center justify-center mt-7 lg:mt-0">
        <div className="flex space-x-1">
          <input
            type="text"
            value={this.state.query}
            onChange={this.onQueryChangeEventHandler}
            className="block w-full px-4 py-1 text-slate-700 bg-white border rounded-full focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
        </div>
      </div>
    );
  }
}

export default NavbarSearch;
