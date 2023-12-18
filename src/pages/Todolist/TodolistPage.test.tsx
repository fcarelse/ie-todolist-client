import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import {TodolistPage} from './TodolistPage'
import {test, expect} from '@jest/globals';

test('Is Functional Component',()=>{
	render(<TodolistPage />);
	const el = screen.getByText(/Todolist Page/i);
	expect(el).toBeInTheDocument();
})