import './App.css';
import { connect } from 'react-redux';
import { Component } from 'react';
import { handleInitialData } from './actions/shared'
import Dashboard from './components/Dashboard';
import LoadingBar from 'react-redux-loading-bar'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoadingBar />

        {
          this.props.loading === true ?
            null :
            <Dashboard />

        }
      </div>
    );
  }

}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
