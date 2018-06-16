import React from 'react';

const Search = props => 
<div>
    <form className="search">
	    <div className="form-group">
	      <label htmlFor="search" className="form-text-color">subject:</label>
	      <input
	        value={props.search}
	        onChange={props.handleInputChange}
	        name="search"
	        type="text"
	        className="form-control"
	        placeholder="Type in a subject to begin"
	        id="search"
	        />
	    </div>
	    	    <div className="form-group">
	      <label htmlFor="start-date" className="form-text-color">start date:</label>
	      <input
	        value={props.startDate}
	        onChange={props.handleInputChange}
	        name="startDate"
	        type="number" min="0" max="3000"
	        className="form-control"
	        placeholder="Type in a start year to begin - only numbers are allowed"
	        id="start-date"
	      />
	    </div>
	    <div className="form-group">
	      <label htmlFor="end-date" className="form-text-color">end date:</label>
	      <input
	        value={props.endDate}
	        onChange={props.handleInputChange}
	        name="endDate"
	        type="number" min="0" max="3000"
	        className="form-control"
	        placeholder="Type in an end year to begin - only numbers are allowed"
	        id="end-date"
	      />
	    </div>

	      <button
	        type="submit"
	        onClick={props.handleFormSubmit}
	        className="btn btn-success"
	      >
	        Search
	      </button>
	  </form>
</div>;

export default Search;