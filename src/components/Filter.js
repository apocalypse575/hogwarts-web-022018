import React from 'react'

class Filter extends React.Component {



  render(){

    return (
      <div>
        Sort By:
        &nbsp;<button className="name" onClick={this.props.FilterHogs}>Name</button>
        <button className='weight' onClick={this.props.FilterHogs}>Weight</button>
      </div>
    )
  }
}

export default Filter
