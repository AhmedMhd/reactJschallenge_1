import React from 'react';
import CategoriesList from './CategoriesList';
import SidebarList from './SidebarList';
import SidebarTitle from './SidebarTitle';

function Sidebar(props) {
    return (
        <div className="sidebar">
            <SidebarTitle />
            <CategoriesList cats={props.cats} />
            <SidebarList />
         </div>
    );
}

export default Sidebar;