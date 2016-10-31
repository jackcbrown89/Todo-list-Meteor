/**
 * Created by jack on 10/29/16.
 */
import { Template } from 'meteor/templating';

import { Tasks } from '../api/task.js';

import './task.html';

Template.task.events({
    'click .toggle-checked'() {
        // set it to opposite checked value
        Meteor.call('tasks.setChecked', this._id, !this.checked);
    },
    'click .delete'() {
        Meteor.call('tasks.remove', this._id);
    },
});