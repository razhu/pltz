const test = require('ava');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

let config = {
    logging: function() {}
}

let MetricStub = {
    belongsTo: sinon.spy()
};

let AgentStub = null;
let db = sinon.spy();

test.beforeEach(async () => {
    AgentStub: {
        hasMany = function() {

        }
    }
    // const setupDatabase = require('./'); // en vez de esto usar proxyquire
    const setupDatabase = proxyquire('../', {
        './models/agent': () => AgentStub,
        './models/metric': () => MetricStub
    });
    db = await setupDatabase(config);
})

test('Agent', t => {
    t.truthy(db.Agent, 'Agent servicde should exist');
})