import React, { useState } from 'react'
import data from './data.json'

export const Main = () => {
    const [checkedState, setCheckedState] = useState(
        new Array(data.length).fill(false)
    );

    const [checkedFlip, setCheckedslip] = useState(
        new Array(data.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
      };


      const handleExpand = (position) => {
        const updatedCheckedState = checkedFlip.map((item, index) =>
            index === position ? !item : item
          );
          setCheckedslip(updatedCheckedState);
      }; 
    return (
        <div>
            <ul className='list'>
                {data.map(({title,content},index)=>{
                    return(
                        <li key={index}>
                            <div className='top-section'>
                                <div className='top-section-left'>
                                    <input 
                                        type="checkbox" 
                                        name={title}
                                        value={title} 
                                        checked={checkedState[index]} 
                                        id={`custom-checkbox-${index}`} 
                                        onChange={() => handleOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`} >{title}</label>
                                </div>
                                    <h1 className='expand-btn' onClick={() => handleExpand(index)}>{checkedFlip[index]? "-" : "+"}</h1>
                                    
                            </div>
                            <div className= {checkedFlip[index] ? 'content show' : 'content'}>
                                {content.map((drop)=>{
                                    return(
                                        <div>
                                            <p>{drop.text}</p>
                                            <img className='image' src={drop.img} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
