import { Html } from 'email-craft';
import React from 'react';

export const Template: React.FC<Readonly<any>> = () => <Html>{process.env.ENV_TEST_VALUE}</Html>;
