import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import {LoginPage} from './LoginPage.tsx'
import {test, expect} from '@jest/globals';

test('Is Functional Component',()=>{
	render(<LoginPage />);
	const el = screen.getByText(/Login Page/i);
	expect(el).toBeInTheDocument();
})