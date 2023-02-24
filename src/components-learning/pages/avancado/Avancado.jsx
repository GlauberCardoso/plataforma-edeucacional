import React from 'react'
import AdvancedCourse from '../../molecules/AdvancedCourse';
import MenuLearning from "../../molecules/MenuLearning"
import Modules from '../../molecules/Modules';
import SubMenu from '../../molecules/SubMenu';
import ModulesCard from '../../molecules/ModulesCard';

export default function Avancado() {
  return (
    <div>
       <MenuLearning />
       <SubMenu />
       <AdvancedCourse />
       <Modules />
       <ModulesCard />
    </div>
  )
}
