import { render } from '@testing-library/react';
import Button from './button';

test('Button component tests', () => {
    const primaryButton = render(<Button type="primary">Primary Button</Button>);
    const secondaryButton = render(<Button type="secondary">Secondary Button</Button>);
    const successButton = render(<Button type="success">Success Button</Button>);
    const dangerButton = render(<Button type="secondary">Danger Button</Button>);
    const infoButton = render(<Button type="info">Info Button</Button>);
    const warningButton = render(<Button type="warning">Warning Button</Button>);
    const lightButton = render(<Button type="light">Light Button</Button>);

    expect(primaryButton).toMatchSnapshot();
    expect(secondaryButton).toMatchSnapshot();
    expect(successButton).toMatchSnapshot();
    expect(dangerButton).toMatchSnapshot();
    expect(infoButton).toMatchSnapshot();
    expect(warningButton).toMatchSnapshot();
    expect(lightButton).toMatchSnapshot();
});
