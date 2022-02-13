import React from 'react';

export const ProjectCard = ({imgProject, urlProject=''}) => {
  return   ( 
    <div>
        <div className="card card-div-projects">
            <a href={urlProject} target="_blank" rel="noopener noreferrer">
                <img src={`.${imgProject}`} className="img-fluid" alt="..."  />
            </a>
        </div>
    </div>
    );
};
