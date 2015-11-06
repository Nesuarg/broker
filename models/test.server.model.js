/**
 * Created by jann551c on 01/11/15.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String

});

//expose (export) model


var user = mongoose.model('user', userSchema);

user.find({}).exec(function(err, collection){
    if(collection.length === 0) {
        user.create({firstname:'Jannik', lastname: 'Grausen', username: 'nesuarg'});
        user.create({firstname:'John', lastname: 'Lennon', username: 'jole'});
        user.create({firstname:'Anders', lastname: 'And', username: 'Andand'});
    }
});

// build a model from the schema

//var test = mongoose.model('test', testSchema);



// schema add

/*var exampleSchema = new schema;
exampleSchema.add({
    if

        else
}); */

