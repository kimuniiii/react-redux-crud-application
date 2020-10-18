// 外部ライブラリからのimport
import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';

// 共通実装のimport
import store from '../stores/store';

// 画面固有のimport
import readEvents from '../actions/events-index'

class EventsIndex extends Component {

  componentDidMount() {
      this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, (cur) => {
      return (
        <tr key={cur.id}>
        <td>{cur.id}</td>
        <td>{cur.title}</td>
        <td>{cur.body}</td>
        </tr>
      )
    })
  }

  render() {

    return (
      <>
        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
              {this.renderEvents()}
          </tbody>

        </table>
      </>
    )
  }
}

const mapStateToProps = (events) => { return { events } }

const mapDispatchToProps = (dispatch) => {
  return {
  readEvents() { dispatch(readEvents()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);