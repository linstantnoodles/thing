# Thing

Just another library to save you a few lines when doing prototypal inheritance. To tell you the truth, the real purpose of this project is to teach myself how to build and release a tested project with CI to NPM and the idea for the library just happened to be on my mind. 

### Project Setup

```bash
npm init
npm install -g grunt-cli
npm install --save-dev grunt
npm install --save-dev karma
npm install --save-dev grunt-karma
npm install --save-dev karma-jasmine
npm install --save-dev karma-chrome-launcher
npm install --save-dev grunt-contrib-uglify
grunt test
```

### Continuous Integration Setup

Travis CI is a continuous integration service. That means they provide the platform which verifies your code checkins with automated builds. This is a development practice known as continuous integration. The main goal of CI is to smooth the process of code integration in a shared repository by checking every change. This allows developers to catch problems early and thus allow them to develop more rapidly and with greater confidence.

To get started, sign up for the free trial and enable the Travis integration with your Github account. Read the rest of the instructions [here](http://docs.travis-ci.com/user/getting-started/).

### Publish to NPM


