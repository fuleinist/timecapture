import { Loadable } from 'utils/components'
import { ACCOUNTS_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Account' */ './components/AccountPage')
  })
}
