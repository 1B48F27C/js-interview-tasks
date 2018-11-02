// What this code is doing and where is the mistake?

var isServerAvailable = true;

var service = new Promise(
    function (resolve, reject) {
        if (isServerAvailable) {
            var message = {
                id: 1,
                text: 'This text of the message'
            };
            resolve(message);
        } else {
            var reason = new Error('Server is not available');
            reject(reason);
        }

    }
);

var sendMessage = function () {
    service
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error.message);
        });
};

sendMessage();

