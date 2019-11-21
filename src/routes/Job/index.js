import { Loadable } from 'utils/components'
import { JOB_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Job' */ './components/JobPage')
  })
}
