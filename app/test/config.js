'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ReactDOMServer from 'react-dom/server';
import testdom from 'testdom';
import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);
testdom('<html><body></body></html>');
const expect = chai.expect;

export { React, ReactDOM, ReactDOMServer, TestUtils, expect, chai, spies };
