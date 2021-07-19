import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../components/uiElements/Loader';
import './_Attendees.scss';

function Attendees() {
    const [loadedAttendees, setLoadedAttendees] = useState();
    const [isLoading, setLoading] = useState(true);

    const getAttendees = async () => {
        setLoading(true);
        try {
            const res = await axios.get("/attendees")
                .then(response => {

                    if (response.status === 200) {
                        setLoadedAttendees(response.data)
                    } 
                })
        } catch (error) {
            console.log(error)
        }

        setLoading(false);
    }


    useEffect(() => {
        document.body.style.background = "url('/attendeesBackground.jpg')";
        document.body.style.backgroundSize = "cover";
        // getAttendees();
    })

    let allAttendees;

    if (!isLoading) {
        allAttendees = loadedAttendees.map(person => (
            <tr>
                <td>{person.first + " " + person.last}</td>
                <td>{person.contact}</td>
                <td>{person.handicap}</td>
            </tr>
        ))
    }

    return (
        <div className="Attendees">
            {isLoading && <Loader />}
            {!isLoading && <div className="Attendees-container">
                <h1>Attendees</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Handicap</th>
                    </tr>
                    {allAttendees}
                </table>
            </div>}

        </div>
    )
}

export default Attendees
