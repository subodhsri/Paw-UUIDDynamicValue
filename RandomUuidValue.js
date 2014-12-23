(function() {
    var RandomUuidValue;

    RandomUuidValue = function() {
        this.evaluate = function(context) {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16|0, v = c === 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
        }

        this.title = function() {
            return "UUID";
        }
    }


    RandomUuidValue.identifier = "com.hskrasek.PawExtensions.RandomUuidValue";

    RandomUuidValue.title = "Generate Random UUID";

    RandomUuidValue.inputs = [];

    registerDynamicValueClass(RandomUuidValue);

}).call(this);
