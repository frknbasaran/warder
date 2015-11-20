module.exports = function (type, params) {

    return function (req, res, next) {

        var state = true;
        var notProvided = [];

        params.forEach(function (param) {
            if (req[type][param] == undefined) {
                state = false;
                notProvided.push(param);
            }
        })

        if (state) next();
        else res.json({"error": true, "message": "Required fields not provided:" + notProvided.toString()})

    }
}