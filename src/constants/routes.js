import News from 'news/components/News/News';
import ReadLater from 'news/components/ReadLater/ReadLater';

import routePaths from './routePaths';

export default [{
  component: News,
  exact: true,
  path: routePaths.index,
}, {
  component: ReadLater,
  exact: true,
  path: routePaths.readLater,
}];
