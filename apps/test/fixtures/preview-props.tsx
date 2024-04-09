import { Body, Html } from 'email-craft';

export const TemplateName = 'preview-props';

export const Template = ({ test }: { test: string }) => (
  <Html>
    <Body>{test}</Body>
  </Html>
);

Template.PreviewProps = { test: 'batman' };
