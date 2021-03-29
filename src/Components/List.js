import React, { Component } from 'react';

export default class List extends Component {
    constructor() {
        super();
        this.state = {
        title: [],
        author: [],
        date: [],
        subject: [],
        cover: []
    }
}
    render() {
        return (
          <div className="container"> 
          <div className="Text"> 

            <div className="bk1">
            <h3 className="New">{this.state.title[0]}</h3>
              <p>Author: {this.state.author[0]}</p>
              <p>Date: {this.state.date[0]}</p>
              <p>Subject: {this.state.subject[0]}</p>
              <p>Cover: {this.state.cover[0]}</p>
          </div>

            <div className="bk2">
              <h3 >{this.state.title[1]}</h3>
              <p>Author: {this.state.author[1]}</p>
              <p>Date: {this.state.date[1]}</p>
              <p>Subject: {this.state.subject[1]}</p>
              <p>Cover: {this.state.cover[1]}</p>
            </div>

            <div className="bk3">
              <h3>{this.state.title[2]}</h3>
              <p>Author: {this.state.author[2]}</p>
              <p>Date: {this.state.date[2]}</p>
              <p>Subject: {this.state.subject[2]}</p>
              <p>Cover: {this.state.cover[2]}</p>
            </div>

            <div className="bk4">
          <h3>{this.state.title[3]}</h3>
          <p>Author: {this.state.author[3]}</p>
              <p>Date: {this.state.date[3]}</p>
              <p>Subject: {this.state.subject[3]}</p>
              <p>Cover: {this.state.cover[3]}</p>
        </div>

            <div className="bk5">
              <h3>{this.state.title[4]}</h3>
              <p>Author: {this.state.author[4]}</p>
              <p>Date: {this.state.date[4]}</p>
              <p>Subject: {this.state.subject[4]}</p>
              <p>Cover: {this.state.cover[4]}</p>
            </div>

          </div>
          </div>
    }

          