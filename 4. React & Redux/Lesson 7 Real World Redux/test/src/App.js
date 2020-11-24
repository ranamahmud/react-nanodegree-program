import './App.css';
import { connect } from 'react-redux';
import { Component, Fragment } from 'react';
import { handleInitialData } from './actions/shared'
import Dashboard from './components/Dashboard';
import LoadingBar from 'react-redux-loading-bar'
import NewTweet from './components/NewTweet';
import TweetPage from './components/TweetPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />

          <div className="container">

            <Nav />
            {
              this.props.loading === true ?
                null :
                <div>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/tweet/:id" component={TweetPage} />
                  <Route path="/new" component={NewTweet} />
                </div>

            }
          </div>
        </Fragment>
      </Router>

    );
  }

}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
