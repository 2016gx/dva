import React from 'react';
import { connect } from 'dva';
import ExamSpan from '../components/examSpan'
import Loading from '../components/loading'

class ExaminationsList extends React.Component {

  componentDidMount () {
    // const { dispatch } = this.props
    // dispatch({
    //   type: 'examinations/save',
    //   payload: [{ id: 1000, name: '测试' }]
    // })
  }

  generateExamSpans = props => {
    const examinations = Object.values(props.examinations) || []
    return examinations.map(item => <ExamSpan data={item} />)
  }

  render () {
    const { loading } = this.props
    console.log('loading', loading)
    return (
      loading.global ? <Loading /> : this.generateExamSpans(this.props)
    )
  }
}

ExaminationsList.propTypes = {
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    examinations: state.examinations
  }
}

export default connect(mapStateToProps)(ExaminationsList);
