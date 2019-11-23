import { Loadable } from 'utils/components'
import { LOGS_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Log' */ './components/LogPage')
  })
}
