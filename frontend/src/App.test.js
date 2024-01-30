// eslint-disable
import React from 'react' // Add import statement for React

import { render, screen } from '@testing-library/react'

import App from './App'
import { expect, test } from '@jest/globals' // Add import statement for 'expect' from 'jest-globals'

test('renders learn react link', () => {
  render(
    <App />
  )
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
// eslint-enable
