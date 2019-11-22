import { Loadable } from 'utils/components'
import { JOBSTATUS_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Jobstatus' */ './components/JobstatusPage')
  })
}
