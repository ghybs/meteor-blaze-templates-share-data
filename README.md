# Meteor Blaze templates share data

This demo app is a test for Stack Overflow question:
[How to pass variables among different templates in meteor](https://stackoverflow.com/questions/43148872/how-to-pass-variables-among-different-templates-in-meteor/43687311#43687311)

Test is done with current Meteor version (1.6.1)

Simply clone the repo or extract the ZIP archive, then run:
1. `meteor npm install` to install npm dependencies.
2. `npm start` to start the app.

The demo app simply shares a `ReactiveVar` from a parent template with
2 different child templates, letting one (Child2) of them setting it
and observing the effect on all other templates (Parent and Child1).
