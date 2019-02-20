import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router'
// import fetch from 'dva/fetch';

class SubjectsList extends React.Component {

  componentDidMount () {
    const { dispatch } = this.props
    // dispatch({
    //   type: 'examinations/fetch',
    //   payload: { a: 1 }
    // })
    dispatch({
      type: 'subjects/fetch'
    })
  }

  pushHistory = () => {
    // this.props.history.push({
    //   search: 'test=true'
    // })
    const { dispatch } = this.props
    dispatch(
      routerRedux.push({
        pathname: '/subjects',
        search: 'test=true'
    }))
  }

  render () {
    return (
      <span onClick={this.pushHistory}>click me</span>
    )
  }
}

SubjectsList.propTypes = {
};

const mapStateToProps = state =>{
  return {
    subjects: state.subjects,
    loading: state.loading,
    examinations: state.examinations
  }
}

export default connect(mapStateToProps)(SubjectsList);
