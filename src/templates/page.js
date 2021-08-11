import React, { Component }  from 'react';

export default ({pageContext: {repository}}) => (
  <div className="layout">
    {repository.id}
  </div>
);
