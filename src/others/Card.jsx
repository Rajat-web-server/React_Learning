import React from 'react';

export const Card = ()=>{
    return <div>
        <h2>Card Component</h2>
        </div>
};

export const Cardwithoutjsx = () =>{
    return React.createElement('div', null, 
        React.createElement('h2',null,'Card component wihout JSX')
    )
}