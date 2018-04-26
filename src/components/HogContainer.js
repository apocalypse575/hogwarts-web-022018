import React from 'react'
import HogsData from '../porkers_data'
import Hogs from './Hogs'
import Filter from './Filter'

class HogContainer extends React.Component {

  state = {
    hogs: HogsData
  }

  FilterHogs = (event) => {

    //console.log(event.target.className);
    let filtered = []

    switch(event.target.className){

      case 'name':
        filtered = this.state.hogs.sort(function(a, b){
          if (a.name < b.name) {
            return -1;
          }
          if (a.name> b.name) {
            return 1;
          }
          return 0;
        })
        break;

      case 'weight':
        filtered = this.state.hogs.sort(function(a, b){
          if (a[Object.keys(a)[3]] < b[Object.keys(b)[3]]) {
            return -1;
          }
          if (a[Object.keys(a)[3]] < b[Object.keys(b)[3]]) {
            return 1;
          }
          return 0;
        })
        break;
    }

    this.setState({
      hogs: filtered
    })
  }


  render(){

    return (
      <div>
        <ul>
          <Filter hogs={this.state.hogs} FilterHogs={this.FilterHogs}/>
          <Hogs hogs={this.state.hogs} />
        </ul>
      </div>
    )
  }
}

export default HogContainer
