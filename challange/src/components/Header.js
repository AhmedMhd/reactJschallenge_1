import React from 'react'

const Header = () => {
    return (
        <div className={'headerDiv1'}>
            <div className={'headerDiv2'}>
                <div>
                    <h4> 6 Suggestions </h4>
                </div>
                <div>
                <lable> sort by</lable>
                <list></list>
                </div>
            </div>
            <div> 
                <button style={{background:'purple'}}>add feedback</button>
            </div>
        </div>
    )
}

export default Header
