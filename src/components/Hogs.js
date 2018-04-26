import React from 'react'
import Hog from './Hog'

class Hogs extends React.Component {



  render(){

    const hogs = this.props.hogs.map((hog, index) =>
        <Hog key={index} hog={hog} img_src= {"../hog-imgs/" + hog.name.replace(/\s/g, '_').toLowerCase() + ".jpg"} />
    );

    return (
      <div>
        {hogs}
      </div>
    )
  }
}

export default Hogs
