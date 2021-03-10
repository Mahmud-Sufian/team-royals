import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import './SingleTeam.css';
import found1 from '../../images/found 1.png';
import flag1 from '../../images/flag (1) 1.png';
import football from '../../images/football (1) 1.png';
import gender1 from '../../images/male-gender-sign 1.png';
import male from '../../images/Rectangle 28.png';
import female from '../../images/female.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


const SingleTeam = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState([]);
    const {intFormedYear, strCountry, strSport, strGender, strTeamLogo, strTeam, strDescriptionEN} = team;
    console.log(team)

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[teamId]);

    let pic;
    if(strGender === female){
        pic = <img className="left-img" src={female} alt=""/>
    }
    else{
        pic = <img className="left-img" src={male} alt=""/>
    }
        


    return (
        <div className="twin-team-container">
             <div className="twin-team-banner">
               <div className="row">
                   <div className="col-md-4"></div>
                   <div className="col-md-4"> <img src={strTeamLogo} alt=""/></div>
                   <div className="col-md-4"></div>
               </div>
             </div>
 

             <div className="row bg-danger status-bar"> 
                 <div className="col-sm-12 col-md-6 pl-5">
                        <h3 className="text-white mb-4">{strTeam}</h3>
                    <div className="status"> 
                        <img src={found1} alt=""/>    
                        <p>Founded : {intFormedYear}</p>
                    </div>
                    <div className="status"> 
                        <img src={flag1} alt=""/>    
                        <p>Country : {strCountry}</p>
                    </div>
                    <div className="status"> 
                        <img src={football} alt=""/>    
                        <p>Sport Type : {strSport}</p>
                    </div>
                    <div className="status"> 
                        <img src={gender1} alt=""/>    
                        <p>Gender : {strGender}</p>
                    </div>
                 </div>
                 <div className="col-sm-12 col-md-6">
                      
                       { pic }
                       
                 </div>
             </div>

             <div className="row description">
                 <div className="col-md-12">
                    <p>{strDescriptionEN}</p>
                    <br/>
                    <p>{strDescriptionEN}</p>
                 </div>
             </div>
             <div className="icon">
                <TwitterIcon></TwitterIcon>
                <FacebookIcon></FacebookIcon>
                <YouTubeIcon></YouTubeIcon>
             </div>
            
        </div>
    );
};

export default SingleTeam;