import React from 'react';
import './App.css';

export default class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <div className="card border border-primary">
              <div className="card-header bg-primary text-white">
                Color Picker
              </div>
              <div className="card-body">
                <div>
                  <span
                    className="bg-danger color-danger"
                    value="color"
                    style={this.style}
                  />
                  <span
                    className="bg-success color-danger"
                    onClick={this.changeColor}
                  />
                  <span className="bg-danger color-danger" />
                  <span className="bg-secondary color-danger" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border border-warning">
              <div className="card-header bg-warning">
                Size : 16px;
              </div>
              <div className="card-body">
                <button
                  className="btn btn-xs btn-success"
                  onClick={() => {
                    this.changeFontSizeOnBtn("increase");
                  }}
                >
                  Increase
                </button>
                <button
                  className="btn btn-xs btn-success ml-2"
                  onClick={() => {
                    this.changeFontSizeOnBtn("reduced");
                  }}
                >
                  Reduced
                </button>
              </div>
            </div>
            <button className="btn btn-primary mt-2">Reset</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="mt-4">Color: red - FontSize: 16px</p>
            <div className="border border-danger border-text-content">
              <p
                className="text-danger text-content mt-3 text-center"
              >
                Content Setting
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

