import React from 'react';
import ReflectionTemplate from '../components/cards/ReflectionTemplate'
import { NEUFreshman } from '../../content-manager/reflections';

const NeuFreshman = () => {

  return (
    <ReflectionTemplate content={NEUFreshman}/>
  );
};

export default NeuFreshman;