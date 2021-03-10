import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Teams.css'; 
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'; 


const Teams = (props) => {
    const { idTeam, strTeam, strTeamLogo, strSport } = props.team
    return (
        
            <div className="row">
                <div className="col-sm-12">
                    <Card className="card-container text-center" style={{ width: '18rem' }}>
                        <Card.Img className="card-img" variant="top" src={strTeamLogo} />
                        <Card.Body>
                            <Card.Title>{strTeam}</Card.Title>
                            <Card.Text>
                                <p>Sports Type : {strSport}</p>
                            </Card.Text>
                            <Link to={`/team/${idTeam}`}><Button className="mt-3" variant="primary">Explore <ArrowRightAltIcon></ArrowRightAltIcon> </Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        
    );
};

export default Teams;