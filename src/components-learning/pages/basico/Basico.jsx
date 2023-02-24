import React from 'react';
import BasicCourse from '../../molecules/BasicCourse';
import MenuLearning from "../../molecules/MenuLearning";
import Modules from '../../molecules/Modules';
import ModulesCard from '../../molecules/ModulesCard';
import SubMenu from '../../molecules/SubMenu';

export default function Basico() {
  return (
    <div>
      <MenuLearning />
      <SubMenu />
      <BasicCourse />
      <Modules />
      <ModulesCard />
    </div>
  )
}
