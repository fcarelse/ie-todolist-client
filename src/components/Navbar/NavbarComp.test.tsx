import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import {NavbarComp} from './NavbarComp'
import {test, expect} from '@jest/globals';

test('Is Functional Component',()=>{
	render(<NavbarComp />);
	const el = screen.getByText(/Navbar Component/i);
	expect(el).toBeInTheDocument();
})