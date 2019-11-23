import { Loadable } from 'utils/components'
import { JOBS_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Job' */ './components/JobPage')
  })
}
