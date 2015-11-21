module.exports = function (type, params) {

    return function (req, res, next) {
        
        /*
        @type Bool
        @desc State value for next or stop request
        */
        var state = true;
        
        /*
        @type Array
        @desc Params array which not provided in request
        */
        var notProvided = [];
        
        /*
            Check each param which required is included by request
            if required params not provided change state to false
            add not provided param into notProvided array
        */
        params.forEach(function (param) {
            if (req[type][param] == undefined) {
                state = false;
                notProvided.push(param);
            }
        })
        
        /*
            Check control state and next if result true
        */
        if (state) next();
        /*
            Or send json error message to client
        */
        else res.json({"error": true, "message": "Required fields not provided:" + notProvided.toString()})

    }
}
