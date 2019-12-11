import React from 'react';
import { Route } from 'react-router-dom';

function Projects() {
  const params = location.pathname.split('/');
  return (
    <div className="container m-3">
      <div className="row">
        <div
          className={`col-sm-9 ${
            params[params.length - 1] !== 'projects' ? 'd-none d-sm-block' : ''
          } border `}
        >
          Projects List
        </div>
        <div className="col-xs-12 col-sm-3 border">
          <Route
            exact
            path="/projects/:projectid"
            component={({ match }) => <h1>{match.params.todoid}</h1>}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
