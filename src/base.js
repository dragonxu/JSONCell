(function() {

    var root = this;
    var prevJC = root.JC;

    var JC = {};

    // 通过undescore模仿jquery的extend方法
    JC.extend = function(type) {
        var objArr = [],obj= type;
        if(type === true){
            objArr = slice.call(arguments, 2);
            obj = arguments[1];
        }else{
            objArr = slice.call(arguments, 1);
        }

        _.each(objArr, function(source) {
            if (source) {
                for (var prop in source) {

                    if(type === true && _.isObject(source[prop])){
                        var base =  _.isArray(source[prop])?[]:{};
                        obj[prop] = _.extend(true,base,source[prop]);
                    }else{
                        obj[prop] = source[prop];
                    }
                }
            }
        });
        return obj;
    };

    // 过渡JC变量的控制权
    JC.noConflict = function() {
        root.JC = prevJC;
        return this;
    };

    root.JC = JC;


}).call(this);
