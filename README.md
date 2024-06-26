[npm]: https://img.shields.io/npm/v/email-craft
[npm-url]: https://www.npmjs.com/package/email-craft

[![npm][npm]][npm-url]
[![Join our Discord](https://img.shields.io/badge/join_our-Discord-5a64ea)](https://discord.gg/FywZN57mTg)
[![libera manifesto](https://img.shields.io/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)

<div align="center">
	<img src="https://raw.githubusercontent.com/messageraft/email-craft/main/assets/npm-header.svg" alt="Email Craft"/><br/><br/>
</div>

<div>
  Email Craft provides a set of React components and helpers for building delightful and responsive email templates, compatible with modern email clients.
  <br/><br/>
  The components handle the heavy lifting of compatibility and client inconsistency so designers and developers can focus on building impactful and engaging templates.
  <br/>
</div>

## Getting Started

Everything to know about the components, props, and usage is available within our [Documentation Site](https://emailcraft.dev/docs/introduction). Please give that a read and let us know if there's anything we can help with.

## Requirements

The packages and components that make up Email Craft require an [LTS](https://github.com/nodejs/Release) Node version (v18.0.0+) and React v18.2.0+

<div>
  <br/>
	<img src="https://raw.githubusercontent.com/messageraft/email-craft/main/assets/clients.svg" alt="Email Craft" class="clients"/><br/>
  Compatible with all modern email services
  <br/><br/>
</div>

## Components

A list of available components can be found on the [`email-craft` Documentation](https://emailcraft.dev/docs/introduction)

## Advantages Over `react-email`

The goals of this project are to provide an improved focus on Developer Experience, maintenance, fast improvements and fast releases. As such, we feel that `email-craft` has a number of improvements and advantages over `react-email`. Those include:

- [Email Client Compatibility Checking](https://emailcraft.dev/docs/core/cli#client-compatibility-check)
- Crazy fast Tailwind support
- Support for `<Suspense>` and `async` within Components
- Exclusive Components
- Enhanced Developer Experience (DX)
- Better Command Line tools
- Works with Monorepos out of the box. No exhaustive setup needed.
- Less complex, smoother Preview Server
- Faster improvements, feature development, and releases
- Community-driven maintenance rather than company-planning priority
- No vendor lock-in for tools. `email-craft` uses only generic components and tools

## Service Integrations

Email built and rendered with Email Craft can be used with any email provider that provides an API for sending email as a `String`.
This includes [AWS SES](https://aws.amazon.com/ses), [Loops](https://loops.so), [Nodemailer](https://nodemailer.com), [Postmark](https://postmarkapp.com),[Resend](https://resend.com), [Plunk](https://www.useplunk.com/), and [SendGrid](https://sendgrid.com). See our documentation on [Email Providers](https://emailcraft.dev/docs/email-providers) for more info and example usage.

<!-- FIXME: Write and link to example code for integrations on the docs site -->

## Contributing, Working With This Repo

We 💛 contributions! After all, this is a community-driven project. We have no corporate sponsorship or backing. The maintainers and users keep this project going!

Please check out our [Contribution Guide](./CONTRIBUTING.md).

## Attribution 🧡

This project was built upon prior work for `jsx-email` by Andrew Powell ([@bukinoshita](andrew@shellscape.org)).

`email-craft` is a fork of `jsx-email`.

This fork was created as a result of noticing so many little things that are either broken or features that are missing which would make email development fun, flexible and intuitive. I guess time will tell, and you the consumers of this will be the judge. Stay tuned.

## License

[MIT License](./LICENSE.md)
