import React, { useState } from "react";

const SearchBar = ({ submitSearch }) => {
  const [ term, setTerm ] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    submitSearch(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field" >
          <label>Video Search</label>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          ></input>
        </div>
      </form>
    </div>
  );
};


// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { term: '' };
//   }

//   onFormSubmit = (e) => {
//     e.preventDefault();
//     this.props.submitSearch(this.state.term)
//   }

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form className="ui form" onSubmit={this.onFormSubmit}>
//           <div className="field" >
//             <label>Video Search</label>
//             <input
//               type="text"
//               placeholder="Search..."
//               onChange={(e) => this.setState({ term: e.target.value })}
//               value={this.state.term}
//             ></input>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;