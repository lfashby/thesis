import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ChangeActions from '../../actions';



class TesterVideo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <h2> Test Video </h2>
      </div>

    )
  }
}



const mapStateToProps = (state) => {
  console.log('state', state);
  return ({

  })
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ChangeActions, dispatch)
})





export default connect(
  mapStateToProps,
  mapDispatchToProps
  ) (TesterVideo)