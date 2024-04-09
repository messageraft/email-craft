// Note: This tests the fix for https://github.com/messageraft/email-craft/issues/174

import { Html, Tailwind } from 'email-craft';
// @ts-ignore
import { definePreset, presetUno } from 'unocss';

export const preset = definePreset(() => {
  return {
    presets: [presetUno()]
  };
});

export const TemplateName = 'Issue174';

export const Template = () => (
  <Tailwind config={{ presets: [preset] }}>
    <Html></Html>
  </Tailwind>
);
