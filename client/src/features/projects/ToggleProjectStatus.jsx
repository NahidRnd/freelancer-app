import { Field, Label, Switch } from '@headlessui/react'
import { useState } from "react"
import useToggleProject from './useToggleProject'
import Loading from '../../ui/Loading';
import Toggle from '../../ui/Toggle';

function ToggleProjectStatus({project}) {
    const enabled = project.status === "OPEN" ? true:false;
    const {status} = project;
    const {isUpdating, toggleProjectStatus} = useToggleProject();

    

    const toggleHandler = () => {
        const newStatus = status === "OPEN" ? "CLOSED":"OPEN";
        
        toggleProjectStatus({
            id: project._id,
            data: {status: newStatus},
        },
       );
    };

  return (
    <div>
        {isUpdating?(
            <Loading height={20} />
        ) : (
        <Toggle 
            label={project.status === "OPEN" ? (<span className="badge badge--success">باز</span>) : (<span className="badge badge--error">بسته</span>)} 
            enabled={enabled}
            onChange={toggleHandler}
        />
        )}
    </div>
  )
}

export default ToggleProjectStatus
