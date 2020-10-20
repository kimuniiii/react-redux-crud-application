// 外部ライブラリからのimport
import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

        <Link to='events/new/'>Events New</Link>
      </>
    )
  }
}

const mapStateToProps = (events) => { return { events } }

const mapDispatchToProps = (dispatch) => {
  return ({
  readEvents : () => { dispatch(readEvents()) },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);