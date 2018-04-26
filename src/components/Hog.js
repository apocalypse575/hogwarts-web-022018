import React from 'react'

class Hog extends React.Component {


  state = {
    specialty: '',
    greased: ''
  }


  HandleClick = () => {
    console.log('in handle click');

    // RE-render
    this.setState({
       specialty: this.props.hog.specialty,
       greased: this.props.hog.greased.toString()
    })

    return <li>'hi'</li>
  }

  HideHog = (event) => {
    document.getElementById(this.props.hog.name.replace(/\s/g, '_').toLowerCase()).style.display='none'
  }

  render(){

    return (
      <div>
        <ul onClick={this.HandleClick} id={this.props.hog.name.replace(/\s/g, '_').toLowerCase()}>
          <li><b>{this.props.hog.name}</b></li>
          <img src={this.props.img_src} />
          <li>{this.state.specialty} </li>
          <li>{this.state.greased}</li>
          <button onClick={this.HideHog}>Hide '{this.props.hog.name}' the Hog</button>
        </ul>
      </div>
    )
  }
}

export default Hog
