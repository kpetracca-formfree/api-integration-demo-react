import React, { useEffect } from "react";

const ApplicationComplete = (props) => {
  const { orderId } = props.match.params;

  useEffect = (() => {}, [props.match.params]);

  return (
    <div>
      <p>Completion Dashboard</p>
    </div>
  );
};

export default ApplicationComplete;
