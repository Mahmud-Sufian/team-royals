import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Teams from '../Teams/Teams';
import './Home.css';


const Home = () => {
    const [teams, setTeams] = useState([]);
    console.log(teams)
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div class="twin-team-container">
            <div className="twin-team-banner">
                   <p class="text-center text-white">Team Royals</p> 
            </div> 

            <div class="row">
                <div class="col-md-12 col-sm-12 team-container">
                     
                        {
                            teams.map(team => <Teams team={team}></Teams>)
                        }
                    
                </div>
            </div>
        </div>
    );
};

export default Home;


{/* <div className="team-container">
                        {
                            teams.map(team => <Teams team={team}></Teams>)
                        }
                    </div> */}
