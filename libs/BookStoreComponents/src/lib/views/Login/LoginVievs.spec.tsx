import { render } from '@testing-library/react';

import LoginVievs from './LoginVievs';

describe('LoginVievs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginVievs />);
    expect(baseElement).toBeTruthy();
  });
});
