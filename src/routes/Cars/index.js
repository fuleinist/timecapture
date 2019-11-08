import { Loadable } from 'utils/components'
import { CAR_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () => import(/* webpackChunkName: 'Car' */ './components/CarPage')
  })
}
