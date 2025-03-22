// frontend/tests/BugForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';

test('should render the form and handle user input', () => {
  render(<BugForm />);

  const titleInput = screen.getByLabelText(/Bug Title/i);
  const descriptionInput = screen.getByLabelText(/Bug Description/i);
  const submitButton = screen.getByText(/Submit Bug/i);

  fireEvent.change(titleInput, { target: { value: 'Bug 1' } });
  fireEvent.change(descriptionInput, { target: { value: 'Test Bug' } });
  fireEvent.click(submitButton);

  expect(titleInput.value).toBe('Bug 1');
  expect(descriptionInput.value).toBe('Test Bug');
});
