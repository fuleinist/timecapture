import { Loadable } from 'utils/components'

export default {
  path: ':jobId',
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Project' */ './components/JobPage')
  })
}
