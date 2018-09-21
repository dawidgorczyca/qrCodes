import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

import './QrReader.component.css'

const defaultResult = 'Please point your camera at the code'

class QrReaderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 300,
      result: defaultResult,
      scanResults: []
    }
    this.handleScan = this.handleScan.bind(this)
    this.handleScanSelection = this.handleScanSelection.bind(this);
    this.handleSaveResults = this.handleSaveResults.bind(this);
  }

  handleScan(data){
    const currentResults = JSON.parse(JSON.stringify(this.state.scanResults))
    if(data){
      const newDataCheck = this.findInResults(data);
      console.log(newDataCheck)
      this.setState({
        result: data
      })

      if(newDataCheck === -1) {
        const newResult = {
          checked: false,
          data: data
        }
        this.setState({
          scanResults: [...currentResults, newResult]
        })
      }
    }
  }
  handleError(err){
    console.error(err)
  }

  findInResults(data) {
    return this.state.scanResults.findIndex((el) => el.data === data)
  }

  handleScanSelection(event, index) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const currentResults = JSON.parse(JSON.stringify(this.state.scanResults))
    
    currentResults[index] = {
      ...currentResults[index],
      checked: value
    }

    this.setState({
      scanResults: currentResults
    })
  }

  handleSaveResults() {
    const currentResults = this.state.scanResults.filter((item, index) => item.checked)
    this.props.saveResults(currentResults)
  }

  renderScanResults() {

    return (
      <div className="qr-reader-results">
        <ul>
          {this.state.scanResults.map((result, index) => (
            <li key={index}>
              <input
                name="isGoing"
                type="checkbox"
                checked={result.checked}
                onChange={(e) => this.handleScanSelection(e, index)} />
              {result.data}
            </li>
          ))}
        </ul>
        <a className="btn btn-primary" onClick={() => this.handleSaveResults()}>SAVE SELECTED RESULTS</a>
      </div>
    )
  }

  render() {
    const scanResults = this.state.scanResults.length > 0 && (this.renderScanResults())
    return (
    <div className="qr-reader">
      <div className="qr-reader-video">
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
      </div>
      <p>{this.state.result}</p>
      {scanResults}
    </div>
    )
  }
}
 
export default QrReaderComponent