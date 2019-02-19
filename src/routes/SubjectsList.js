import React from 'react';
import { connect } from 'dva';
// import fetch from 'dva/fetch';

class SubjectsList extends React.Component {

  componentDidMount () {
    const { dispatch } = this.props
    dispatch({
      type: 'examinations/fetch'
    })
    dispatch({
      type: 'subjects/fetch'
    })
  }

  pushHistory = () => {
    this.props.history.push({
      search: 'test=true'
    })
  }

  render () {
    return (
      <span onClick={this.pushHistory}>subject</span>
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
