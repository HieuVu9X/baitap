Array.prototype.logger = function(title, message) {

    this.title = title,
    this.message = message,
    output = this.title + ': ' + this.message;
    console.log(output);    
};

const arr1 = [1,2];
arr1.logger('ERR', 'this is err message');
arr1.logger('INFO', 'this is info message'); 