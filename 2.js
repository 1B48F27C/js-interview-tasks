// What's the meaning of ‘this’ in javascript? What will be the result:

const a = {
	b: '1',    
	c: function () {
        var b = '2'
        console.log(`${this.b}`);
    }
};

a.c()