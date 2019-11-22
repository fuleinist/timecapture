import { Loadable } from 'utils/components'
import { TIMEBREAKDOWN_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Timebreakdown' */ './components/TimebreakdownPage')
  })
}
