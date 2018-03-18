import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

///////////////////////////////////////////////////////
// Parent template
///////////////////////////////////////////////////////

Template.Parent.onCreated(function parentOnCreated() {
  // counter starts at 0
// Just initialize the variable.
  this.counter = new ReactiveVar(0);
});

Template.Parent.helpers({
  // This is what will be sent to Child1 and Child2.
  sharedVar() {
    return Template.instance().counter;
  }
});


///////////////////////////////////////////////////////
// Child 1 template
///////////////////////////////////////////////////////

Template.Child1.helpers({
  myValue() {
    // As usual, this will be reactive.
    return Template.instance().data.sharedVar1.get();
  }
});


///////////////////////////////////////////////////////
// Child 2 template
///////////////////////////////////////////////////////

Template.Child2.events({
  'click #increment'(event, instance) {
    event.preventDefault();

    const sharedVar2 = instance.data.sharedVar2;

    // increment the counter when button is clicked
    // This change will trigger an autorun of Child1 myValue helper.
    sharedVar2.set(sharedVar2.get() + 1);
  },
});

Template.Child2.helpers({
  myValue() {
    // As usual, this will be reactive.
    return Template.instance().data.sharedVar2.get();
  }
});
