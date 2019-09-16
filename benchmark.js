const Benchmarkify = require("benchmarkify");
const {
	Ulid: Id128Ulid,
	UlidMonotonic: Id128UlidMonotonic,
	Uuid1: Id128Uuid1,
	Uuid4: Id128Uuid4,
	Uuid6: Id128Uuid6,
	UuidNil: Id128UuidNil,
} = require('id128');
const Cuid = require('cuid');
const Ksuid = require('ksuid');
const Nanoid = require('nanoid');
const Ulid = require('ulid');
const Uuidv1 = require('uuid/v1');
const Uuidv4 = require('uuid/v4');
const Uuidv6 = require('uuid-with-v6');
const UuidRandom = require('uuid-random');
const Uuid1345 = require('uuid-1345');
const Uuid4 = require('uuid4');
const UuidJs = require('uuidjs');

let tmp;

const suite = new Benchmarkify().createSuite('Competitors');
suite.add('Id128.Ulid', function() {
	tmp = Id128Ulid.generate();
});
suite.add('Id128.Ulid Canonical', function() {
	tmp = Id128Ulid.generate().toCanonical();
});
suite.add('Id128.UlidMonotonic', function() {
	tmp = Id128UlidMonotonic.generate();
});
suite.add('Id128.UlidMonotonic Canonical', function() {
	tmp = Id128UlidMonotonic.generate().toCanonical();
});
suite.add('Id128.Uuid1', function() {
	tmp = Id128Uuid1.generate();
});
suite.add('Id128.Uuid1 Canonical', function() {
	tmp = Id128Uuid1.generate().toCanonical();
});
suite.add('Id128.Uuid4', function() {
	tmp = Id128Uuid4.generate();
});
suite.add('Id128.Uuid4 Canonical', function() {
	tmp = Id128Uuid4.generate().toCanonical();
});
suite.add('Id128.Uuid6', function() {
	tmp = Id128Uuid6.generate();
});
suite.add('Id128.Uuid6 Canonical', function() {
	tmp = Id128Uuid6.generate().toCanonical();
});
suite.add('Id128.UuidNil', function() {
	tmp = Id128UuidNil.generate();
});
suite.add('Id128.UuidNil Canonical', function() {
	tmp = Id128UuidNil.generate().toCanonical();
});
suite.add('Cuid', function() {
	tmp = Cuid();
});
suite.add('Ksuid', function() {
	tmp = Ksuid.randomSync();
});
suite.add('Nanoid', function() {
	tmp = Nanoid();
});
const HEX_ALPHABET = '0123456789ABCDEF';
suite.add('Nanoid like Uuid v4', function() {
	tmp = Nanoid(32, HEX_ALPHABET);
});
suite.add('Ulid', function() {
	tmp = Ulid.ulid();
});
const ulidMonotonic = Ulid.monotonicFactory();
suite.add('Ulid Monotonic', function() {
	tmp = ulidMonotonic();
});
suite.add('Uuid1345.v1', function() {
	tmp = Uuid1345.v1();
});
suite.add('Uuid1345.v4', function() {
	tmp = Uuid1345.v4();
});
suite.add('Uuidv1', function() {
	tmp = Uuidv1();
});
suite.add('Uuidv4', function() {
	tmp = Uuidv4();
});
const uuidV6 = Uuidv6.v6setup({ disableRandom: true });
suite.add('Uuidv6', function() {
	tmp = uuidV6();
});
suite.add('UuidRandom', function() {
	tmp = UuidRandom.bin();
});
suite.add('UuidRandom Canonical', function() {
	tmp = UuidRandom();
});
suite.add('Uuid4', function() {
	tmp = Uuid4();
});
suite.add('UuidJs', function() {
	tmp = UuidJs.generate();
});
suite.add('UuidJs v4', function() {
	tmp = UuidJs.genV4();
});
suite.add('UuidJs v4 Canonical', function() {
	tmp = UuidJs.genV4().toString();
});
suite.run();

if (! tmp) throw Error('Failed Invariant: ID');
