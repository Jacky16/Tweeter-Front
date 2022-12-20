<img src="./resources/img/tweeter.svg"
alt="Picture"
width="100%"
height="100"
style="display: block; margin: 0 auto" />

[![Netlify Status](https://api.netlify.com/api/v1/badges/552f5694-863b-40f1-bed5-4e888534eb12/deploy-status)](https://app.netlify.com/sites/tweeterdev/deploys)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2022_Adria-Martinez_Front-Final-Project-202209-BCN&metric=coverage)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2022_Adria-Martinez_Front-Final-Project-202209-BCN)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2022_Adria-Martinez_Front-Final-Project-202209-BCN&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2022_Adria-Martinez_Front-Final-Project-202209-BCN)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2022_Adria-Martinez_Front-Final-Project-202209-BCN&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2022_Adria-Martinez_Front-Final-Project-202209-BCN)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2022_Adria-Martinez_Front-Final-Project-202209-BCN&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2022_Adria-Martinez_Front-Final-Project-202209-BCN)

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=isdi-coders-2022_Adria-Martinez_Front-Final-Project-202209-BCN)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2022_Adria-Martinez_Front-Final-Project-202209-BCN)

## Table of contents

- [About](#about)
- [Demo](#demo)
- [Technology stack](#technology-stack)
- [Features](#features)
- [Images](#images)
- [Installation](#installation)
- [Usage](#usage)

## About

Tweeter is a clone of Twitter where you can create tweets, each user can create,edit and delete their tweets.

You can install Tweeter in your computer because is a Progressive Web App (PWA)

Has been developed using CI/CD with Github Actions, SonarCloud and Netlify.

The main goal of this project is to have a 100% coverage in the tests and a good quality code. During the development each new feature have been tested and this is the way that i have been able to achieve the 100% coverage.

## Demo

You can see the project deployed in [Netlify](https://tweeterdev.netlify.app/)

> If you dont want to register you can use this user to test the app:
>
> - Email: adria@gmail.com
> - Password: 1234567890

### Backend

Tweeter is a full stack project, you can see the [backend project ](https://github.com/Jacky16/Tweeter-Back).

## Technology stack

- React
- Typescript
- Redux
- React Router
- Material UI
- Axios
- Jest
- React Testing Library
- Styled Components

## Features

- Filter tweets by category
- Delete and edit tweets if you are the author
- Secure authentication with Json Web Token

## Images

![Register page mobile](./resources/img/register-mobile.png)
![Login page mobile](./resources/img/login-mobile.png)
![Home page mobile](./resources/img/home-mobile.png)
![Tweet options page mobile](./resources/img/tweet-options-mobile.png)
![Tweet detail page mobile](./resources/img/detail-tweet-mobile.png)
![Form tweet page mobile](./resources/img/form-tweet-mobile.png)

## Installation

To run the project you need to clone the repository and install the dependencies with the following commands:

```bash
npm install
```

## Usage

To run the project in development mode you can use the following command:

```bash
npm start
```
