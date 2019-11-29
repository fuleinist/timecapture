import { Loadable } from 'utils/components'
import { USERS_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'User' */ './components/UserPage')
  })
}
