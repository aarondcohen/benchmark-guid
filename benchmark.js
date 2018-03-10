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

suite('Competitors', function() {
  set('iterations', 100000);

	bench('Id128.Ulid', function() {
		Id128Ulid.generate();
	});

	bench('Id128.Ulid Canonical', function() {
		Id128Ulid.generate().toCanonical();
	});

	bench('Id128.UlidMonotonic', function() {
		Id128UlidMonotonic.generate();
	});

	bench('Id128.UlidMonotonic Canonical', function() {
		Id128UlidMonotonic.generate().toCanonical();
	});

	bench('Id128.Uuid1', function() {
		Id128Uuid1.generate();
	});

	bench('Id128.Uuid1 Canonical', function() {
		Id128Uuid1.generate().toCanonical();
	});

	bench('Id128.Uuid4', function() {
		Id128Uuid4.generate();
	});

	bench('Id128.Uuid4 Canonical', function() {
		Id128Uuid4.generate().toCanonical();
	});

	bench('Id128.Uuid6', function() {
		Id128Uuid6.generate();
	});

	bench('Id128.Uuid6 Canonical', function() {
		Id128Uuid6.generate().toCanonical();
	});

	bench('Id128.UuidNil', function() {
		Id128UuidNil.generate();
	});

	bench('Id128.UuidNil Canonical', function() {
		Id128UuidNil.generate().toCanonical();
	});

	bench('Cuid', function() {
		Cuid();
	});

	bench('Ksuid', function() {
		Ksuid.randomSync();
	});

	bench('Nanoid', function() {
		Nanoid();
	});

	const HEX_ALPHABET = '0123456789ABCDEF';
	bench('Nanoid like Uuid v4', function() {
		Nanoid(32, HEX_ALPHABET);
	});

	bench('Ulid', function() {
		Ulid.ulid();
	});

	const ulidMonotonic = Ulid.monotonicFactory();
	bench('Ulid Monotonic', function() {
		ulidMonotonic();
	});

	bench('Uuid1345.v1', function() {
		Uuid1345.v1();
	});

	bench('Uuid1345.v4', function() {
		Uuid1345.v4();
	});

	bench('Uuidv1', function() {
		Uuidv1();
	});

	bench('Uuidv4', function() {
		Uuidv4();
	});

	const uuidV6 = Uuidv6.v6setup({ disableRandom: true });
	bench('Uuidv6', function() {
		uuidV6();
	});

	bench('UuidRandom', function() {
		UuidRandom();
	});

	bench('Uuid4', function() {
		Uuid4();
	});

	bench('UuidJs', function() {
		UuidJs.generate();
	});

	bench('UuidJs v4', function() {
		UuidJs.genV4();
	});

	bench('UuidJs v4 Canonical', function() {
		UuidJs.genV4().toString();
	});
});
