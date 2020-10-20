// 外部ライブラリからのimport
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

// 画面固有のimport
// import  from '../actions/events-index';

class EventsNew extends Component {

  //TODO
  // constructor(props) {
  //     super(props);
  //     this.onSubmit = this.onSubmit.bind(this);
  //   }

  //TODO
  // renderField(field) {
  //   const { input, label, type, meta: {touched, error} } = field

  //TODO
  //   return (
  //   <div>
  //     <input {...input} placeholder={label} type={type} />
  //     { touched && error && <span>{error}</span> }
  //   </div>
  //   )
  // }

  //TODO
  // async onSubmit(values) {
  //     await this,props.postEvents(values);
  //     this.props.history.push('/');
  // }

  render() {

    //TODO
    // const { handleSubmit, pristine, submitting } = this.props;

    return (
    <>
      <form>
          <div>
              <Field label="title" name="title" type="text" component="input" />
              {/* <Field label="body" name="body" type="text" component="input" /> */}
          </div>

          <div>
              <input type='submit' value='submit' disabled={false} />
              <Link to='/'>Cancel</Link>
          </div>
      </form>
    </>
    )
  }
}

const validate = (values) => {
    
    const errors = {}

    if(!values.title) { errors.title = 'タイトルを入力してください'; }
    if(!values.body) { errors.body = '内容を入力してください'; }

    return errors;

}

const EventsNewForm = reduxForm({ validate, form: 'eventsNewForm' })(EventsNew);

//TODO
// const mapDispatchToProps = (dispatch) => {
//   return ({
//   postEvents() { dispatch(postEvents()) },
//   })
// }

// const mapDispatchToProps = ({ postEvents })

export default connect(null)(EventsNewForm)