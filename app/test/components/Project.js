'use strict';

import { React, ReactDOM, ReactDOMServer, TestUtils, expect } from '../helpers/config';

import Project from '../../src/components/Project';

describe('Project', () => {
  it('should output proper html', () => {
    const project = ReactDOMServer.renderToStaticMarkup(<Project />);
    expect(project).to.eql('<div>Project</div>');
  });
});
