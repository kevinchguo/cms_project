import React from 'react';

// import styles from './Creature.module.scss';

const Creature = (props) => {
    console.log(props);
    return(
        <div>
            <div>
                {props.name} 
                {props.description}
            </div>
        </div>  
    )
}

export default Creature;