module.exports.respond = function(note, callback){
    callback(null, {message: note.body});
}