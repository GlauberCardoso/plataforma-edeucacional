import React from 'react'
import IntermediumCourse from '../../molecules/IntermediumCourse';
import MenuLearning from "../../molecules/MenuLearning"
import Modules from '../../molecules/Modules';
import SubMenu from '../../molecules/SubMenu';
import ModulesCard from '../../molecules/ModulesCard';

export default function Intermediario() {
  return (
    <div>
       <MenuLearning />
       <SubMenu />
       <IntermediumCourse />
       <Modules />
       <ModulesCard />
    </div>
  )
}
