import React from 'react';

export const SkillCard = ({imgReact, nameSkill=''}) => {
  return (
    <div className="card card-div">
        <img src={`.${imgReact}`} style={{width: "4rem"}} className="card-img-top img-fluid card-img" alt="..."  />
        <div className="card-body">
            <p className="card-text skill-card-p">{nameSkill}</p>
        </div>
    </div>);
};
