import { render } from '@testing-library/react';

import HomeVievs from './HomeVievs';

describe('HomeVievs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeVievs />);
    expect(baseElement).toBeTruthy();
  });
});
