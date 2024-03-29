import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { makeStyles } from '@material-ui/core/styles'
import { ACCOUNTS_PATH } from 'constants/paths'
import enhance from './Navbar.enhancer'

const useStyles = makeStyles(() => ({
  buttonRoot: {
    color: 'white'
  }
}))

function AccountMenu({ firebase, history }) {
  const classes = useStyles()
  const [anchorEl, setMenu] = useState(null)

  function closeAccountMenu(e) {
    setMenu(null)
  }
  function handleMenu(e) {
    setMenu(e.target)
  }
  function handleLogout() {
    return firebase.logout().then(() => {
      closeAccountMenu()
      history.push('/')
    })
  }
  function goToAccount() {
    history.push(ACCOUNTS_PATH)
    closeAccountMenu()
  }

  return (
    <Fragment>
      <IconButton
        aria-owns={anchorEl ? 'menu-appbar' : null}
        aria-haspopup="true"
        onClick={handleMenu}
        classes={{ root: classes.buttonRoot }}>
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={closeAccountMenu}>
        <MenuItem onClick={goToAccount}>Account</MenuItem>
        <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
      </Menu>
    </Fragment>
  )
}

AccountMenu.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired // from enhancer (withRouter)
  }),
  firebase: PropTypes.shape({
    logout: PropTypes.func.isRequired // from enhancer (withFirebase)
  })
}

export default enhance(AccountMenu)
