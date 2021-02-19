import React, { useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from './actions/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App (props) {
  const {fetchSmurfs} = props;

  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs])
 
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }

  const mapStateToProps = (state) => {
    return {
      error: state.error, 
      smurfs: state.smurfs, 
      isLoading: state.isLoading,
      newSmurf: state.newSmurf
    }
  }

export default connect(mapStateToProps, {fetchSmurfs, addSmurf})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.