//This script will replace the IP address with a new one. 

// Create Interceptor to hook the function 
var ipHook = Interceptor.attach(Module.findExportByName("libc", "getaddrinfo"), {

    // onEnter is called when function is called 
    onEnter: function(args) {

        // Replace IP with new one 
        args[0].replace("127.0.0.1", "192.168.1.1");

    }
});
