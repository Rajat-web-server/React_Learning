
import React from 'react';

export const Numb=()=>{
    return <h1>
        number : 1
        
    </h1>
}

export const Single =()=>{
    return (
      <div id="one">
        <h1>number : 1</h1>
        <h2>niger</h2>
        </div>  
    );
}

export const Singlewithoutjsx =()=>{
    return React.createElement('div',{id:"one"},React.createElement('h1',null,'numbwer : 1 without jsx'));
}

export const Numbwithoutjsx = ()=>{
    return React.createElement('h1',null, 'number : 1 without jsx')
}