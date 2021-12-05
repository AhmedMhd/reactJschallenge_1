import React from 'react';

function SidebarList(props) {
    return (
            <div className="list">
                <div >
                    <p>Roadmap</p>
                    <a href="#">View</a>
                </div>
                <ul>
                <li>Product1 <span>2</span></li>
                <li>Product2 <span>5</span></li>
                <li>Product3 <span>10</span></li>
                </ul>
            </div>  
    );
}

export default SidebarList;