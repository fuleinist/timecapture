import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'react-redux-firebase/lib/helpers'
import { Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import ProjectRoute from 'routes/Projects/routes/Project'
import ProjectTile from '../ProjectTile'
import NewProjectTile from '../NewProjectTile'
import NewProjectDialog from '../NewProjectDialog'
import { renderChildren } from 'utils/router'
import styles from './ProjectsPage.styles'

const useStyles = makeStyles(styles)

function ProjectsPage({
  projects,
  collabProjects,
  auth,
  newDialogOpen,
  toggleDialog,
  deleteProject,
  addProject,
  match,
  goToProject
}) {
  const classes = useStyles()

  return (
    <Switch>
      {/* Child routes */}
      {renderChildren([ProjectRoute], match, { auth })}
      {/* Main Route */}
      <Route
        exact
        path={match.path}
        render={() => (
          <div className={classes.root}>
            <NewProjectDialog
              onSubmit={addProject}
              open={newDialogOpen}
              onRequestClose={toggleDialog}
            />
            <div className={classes.tiles}>
              <NewProjectTile onClick={toggleDialog} />
              {!isEmpty(projects) &&
                projects.map((project, ind) => (
                  <ProjectTile
                    key={`Project-${project.id}-${ind}`}
                    name={project.name}
                    onSelect={() => goToProject(project.id)}
                    onDelete={() => deleteProject(project.id)}
                  />
                ))}
            </div>
          </div>
        )}
      />
    </Switch>
  )
}

ProjectsPage.propTypes = {
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
  auth: PropTypes.object, // from enhancer (connect + firebaseConnect - firebase)
  projects: PropTypes.array, // from enhancer (connect + firebaseConnect - firebase)
  newDialogOpen: PropTypes.bool, // from enhancer (withStateHandlers)
  toggleDialog: PropTypes.func.isRequired, // from enhancer (withStateHandlers)
  deleteProject: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  collabProjects: PropTypes.object, // from enhancer (withHandlers - firebase)
  addProject: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  goToProject: PropTypes.func.isRequired // from enhancer (withHandlers - router)
}

export default ProjectsPage
