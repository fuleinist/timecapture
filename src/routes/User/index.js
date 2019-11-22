import { Loadable } from 'utils/components'
import { USER_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'User' */ './components/UserPage')
  })
}
