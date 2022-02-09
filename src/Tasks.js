import React, { useEffect } from "react";


export default function Tasks(props) {

return (
  <>
  <p>
    <input
      type="checkbox"
      name="completion"
      checked={props.task.completion}
      onChange={(e) => props.handleChange(e, props.task)}
    />
    <input
      name="name"
      value={props.task.name}
      onChange={(e) => props.handleChange(e, props.task)}
    />
    </p>
    <div>

    </div>
  </>
  );
}
