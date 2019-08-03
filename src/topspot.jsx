import React from 'react';

export default props => (
<div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a className='btn btn-primary' href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} role='button'>
            <button className='btn btn-outline-primary'>Map</button>
            </a>
</div>
);