# Easy User Authentication for React Apps

This repository hosts a React project that defines a Single-Page Application (SPA). You'll secure access to some of its routes using Auth0 User Authentication.

## Get Started

Install the client project dependencies:

```bash
npm install
```

## Set Up Authentication with Auth0

If you haven't already, <a href="https://auth0.com/signup" data-amp-replace="CLIENT_ID" data-amp-addparams="anonId=CLIENT_ID(cid-scope-cookie-fallback-name)">**sign up for a free Auth0 account**</a>.

Once you sign in, Auth0 takes you to the [Dashboard](https://manage.auth0.com/). In the left sidebar menu, click on ["Applications"](https://manage.auth0.com/#/applications).

Then, click the "Create Application" button. A modal opens up with a form to provide a name for the application and choose its type.

- **Name:** Auth0 React Sample

- **Application Type:** Single Page Web Applications

Click the "Create" button to complete the process. Your Auth0 application page loads up.

Your React application will redirect users to Auth0 whenever they trigger an authentication request. Auth0 will present them with a login page. Once they log in, Auth0 will redirect them back to your React application. For that redirecting to happen securely, you must specify in your **Auth0 Application Settings** the URLs to which Auth0 can redirect users once it authenticates them.

As such, click on the "Settings" tab of your Auth0 Application page and fill in the following values:


**Allowed Callback URLs**

```bash
{url on which server is up}
```

**Allowed Logout URLs**

```bash
{url on which server is up}
```

**Allowed Web Origins**

```bash
{url on which server is up}
```

**Scroll down and click the "Save Changes" button.**

Open the React starter project, `auth0-react-sample`, and create a `.env` file under the project directory:

```bash
touch .env
```

Populate `.env` as follows:

```bash
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_AUDIENCE=https://express.sample
REACT_APP_SERVER_URL=http://localhost:6060
```

The value of `REACT_APP_AUTH0_DOMAIN` is the "Domain" value from the "Settings".

The value of `REACT_APP_AUTH0_CLIENT_ID` is the "Client ID" value from the "Settings".

