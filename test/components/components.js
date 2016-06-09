import React from 'react';
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import App from '../../components/app'
import Products from '../../components/home-products-index'
import Product from '../../components/individualProduct'

const {
  isCompositeComponent,
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} = TestUtils

describe('The homepage component', () => {
	const homepage = mount(<Products/>)
	it('contains an h1 tag', () => {
		expectation(homepage.contains(<IndividualProduct />)).to.equal(true)
	})

})

describe('The Indiv-product component', () => {
	const homepage = shallow(<Products/>)
	it('contains an h1 tag', () => {
		expectation(homepage.find('h1').length).to.equal(1)
	})

	it('contains an img tag', () => {
		expectation(homepage.find('img').length).to.equal(1)
	})

	it('contains an p tag', () => {
		expectation(homepage.find('p').length).to.equal(1)
	})

	it('contains an btn tag', () => {
		expectation(homepage.find('btn').length).to.equal(1)
	})

})