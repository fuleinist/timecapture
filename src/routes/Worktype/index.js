import { Loadable } from 'utils/components'
import { WORKTYPE_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Worktype' */ './components/WorktypePage')
  })
}
