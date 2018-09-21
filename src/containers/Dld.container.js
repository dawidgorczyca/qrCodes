import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cookie from 'js-cookie';

import {
  dldWipe,
  dldMessageAdd,
  dldMessageEdit,
  dldMessageDelete
} from '../store/actions/dld.actions'

import QrReaderComponent from '../components/QrReader.component' 

import './Dld.container.css'

const data = 'dbMock'

class DldContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      addNewVisible: false,
      results: []
    }
    this.handleAddNew = this.handleAddNew.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  componentWillMount() {
    this.handleSavedData()
  }

  handleSavedData() {
    const storedData = Cookie.get(data)
    if(storedData) {
      this.setState({ results: JSON.parse(storedData) })
    }
  }

  handleAddNew() {
    this.setState({ addNewVisible: !this.state.addNewVisible })
  }

  handleResults(results) {
    Cookie.set(data, results);
    this.setState({
      results: results
    })
  }

  handleDelete(index) {
     const results = JSON.parse(JSON.stringify(this.state.results))
     results.splice(index, 1)
     this.setState({results: results})
     this.handleResults(results)
  }

  handleClear() {
    this.setState({
      results: []
    })
    Cookie.set(data, [])
  }

  render() { 
    return (
    <div className="content-dld">

      <div className="content-toolbar">
        <a className="btn btn-primary" onClick={this.handleAddNew}>Add New</a>
        <a className="btn btn-secondary" onClick={this.handleClear}>Clear Saved Data</a>
      </div>

      {this.state.addNewVisible && (
        <QrReaderComponent
          saveResults={(results) => this.handleResults(results)}
        />
      )}

      {this.state.results && this.state.results.length > 0 && (
        <div className="content-dld-results">
          <h3>Saved results:</h3>
          <ul>
            {this.state.results.map((result, index) => (
              <li key={index}>
                {result.data}

                <a href="#" onClick={(index) => this.handleDelete(index)}>Delete</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dld: state.dld
  }
}

export default connect( mapStateToProps )(DldContainer)