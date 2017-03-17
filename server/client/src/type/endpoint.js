var entity = require('basis.entity');

function stringOrNull(value) {
    return value == null ? null : String(value);
}

var Endpoint = entity.createType('Endpoint', {
    id: entity.StringId,
    sessionId: stringOrNull,
    type: String,
    online: Boolean,
    title: String,
    location: String,
    pid: Number,
    num: Number,
    publishers: entity.createSetType('Publisher')
});

Endpoint.extendReader(function(data) {
    data.publishers = data.publishers.map(function(observer) {
        return data.id + '/' + observer;
    });
});

module.exports = Endpoint;
