import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import GifList from './components/GifList'

export default class App extends Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(responseData => {
        this.setState({gifs: responseData.data.data})
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }

  render () {
    console.log(this.state.gifs)
    return (
      <div>
        <div className='main-header'>
          <div className='inner'>
            <h1 className='main-title'>GifSearch</h1>
            <SearchForm />
          </div>
        </div>
        <div className='main-content'>
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    )
  }
}
