import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../components/uiElements/Loader';
import './_Attendees.scss';

function Attendees() {
    const [state, setState] = useState({ error: "", isLoading: true, loadedAttendees: [] });
    const { error, isLoading, loadedAttendees } = state;
    
    // you'll want to use "useCallback" to avoid having useEffect unnecessarily
    // calling this function more than once; this will also avoid 
    // the "exhaustive deps" ESLint warning that will be present if you don't include
    // this function as a dependency to useEffect
    const getAttendees = useCallback(async () => {
      try {
        // no need to mix thenables with async/await
        // axios automatically throws errors when the status is 400+
        const res = await axios.get("/attendees");
  
        setState({ error: "", isLoading: false, loadedAttendees: res.data });
      } catch (error) {
        // get previous state: (prevState) => and return ({ ...previous state, but override error })
        setState(prevState => ({ ...prevState, error: error.toString() }));
      }
    }, []);
  
  
    useEffect(() => {
      if (isLoading) getAttendees();
    }, [isLoading, getAttendees]);

    useEffect(() => {
        document.body.style.background = "url('/attendeesBackground.jpg')";
        document.body.style.backgroundSize = "cover";
    },[])
  
    // using nested ternary operators: if cond ? true : if cond ? true : false;
    // if error then display error, else if isLoading then show loading, else display data
    return (
      <div className="Attendees">
        {error ? (
          <p>{error}</p>
        ) : isLoading ? (
          <Loader />
        ) : (
          <div className="Attendees-container">
            <h1>Attendees</h1>
            <table>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Handicap</th>
              </tr>
              {loadedAttendees.map((person) => (
                <tr key={`${person.first} ${person.last}`}>
                  <td>{person.first} {person.last}</td>
                  <td>{person.contact}</td>
                  <td>{person.handicap}</td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    );
  }
  
  export default Attendees;
