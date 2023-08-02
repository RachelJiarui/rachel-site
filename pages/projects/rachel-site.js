import React from 'react';
import ProjectTemplate from '../components/cards/ProjectTemplate'
import { rachelSiteContent } from '../../content-manager/projects';

const RachelSite = () => {
  return (
    <ProjectTemplate content={rachelSiteContent}/>
  );
};

export default RachelSite;