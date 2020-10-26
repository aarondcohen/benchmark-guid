# GUID Benchmarks

Benchmark all noteworthy implementations of GUIDs

To run the benchmarks:
```bash
yarn install
yarn benchmark
```

```
=========
  GUIDs
=========

Platform info:
==============
   Darwin 18.2.0 x64
   Node.JS: 15.0.0
   V8: 8.6.395.16-node.15
   Intel(R) Core(TM) i7-4578U CPU @ 3.00GHz × 4

Suite: Competitors

   Id128.Ulid                           -57.3%       (4,378,372rps)   (avg: 228ns)
   Id128.Ulid Canonical                -82.28%       (1,817,086rps)   (avg: 550ns)
   Id128.Ulid Raw                      -75.13%       (2,549,770rps)   (avg: 392ns)
   Id128.UlidMonotonic                 -59.21%       (4,182,626rps)   (avg: 239ns)
   Id128.UlidMonotonic Canonical       -81.96%       (1,849,897rps)   (avg: 540ns)
   Id128.UlidMonotonic Raw             -76.09%       (2,451,986rps)   (avg: 407ns)
   Id128.Uuid1                         -50.46%       (5,079,822rps)   (avg: 196ns)
   Id128.Uuid1 Canonical               -72.09%       (2,861,373rps)   (avg: 349ns)
   Id128.Uuid4                         -36.57%       (6,504,108rps)   (avg: 153ns)
   Id128.Uuid4 Canonical               -78.86%       (2,167,110rps)   (avg: 461ns)
   Id128.Uuid6                         -57.24%       (4,384,644rps)   (avg: 228ns)
   Id128.Uuid6 Canonical               -75.47%       (2,515,266rps)   (avg: 397ns)
   Id128.UuidNil                            0%      (10,253,380rps)   (avg: 97ns)
   Id128.UuidNil Canonical             -63.39%       (3,753,652rps)   (avg: 266ns)
   Cuid                                -99.02%         (100,369rps)   (avg: 9μs)
   Ksuid                               -98.34%         (170,679rps)   (avg: 5μs)
   Nanoid                              -83.98%       (1,642,819rps)   (avg: 608ns)
   Nanoid like Uuid v4                 -87.46%       (1,286,215rps)   (avg: 777ns)
   Ulid                                -99.88%          (11,884rps)   (avg: 84μs)
   Ulid Monotonic                      -80.94%       (1,954,479rps)   (avg: 511ns)
   Uuid1345.v1                         -73.51%       (2,715,616rps)   (avg: 368ns)
   Uuid1345.v4                         -97.71%         (234,968rps)   (avg: 4μs)
   Uuidv1                               -85.4%       (1,497,052rps)   (avg: 667ns)
   Uuidv4                              -89.51%       (1,075,683rps)   (avg: 929ns)
   Uuidv6                              -89.83%       (1,043,149rps)   (avg: 958ns)
   UuidRandom                          -26.79%       (7,506,162rps)   (avg: 133ns)
   UuidRandom Canonical                -67.29%       (3,353,549rps)   (avg: 298ns)
   Uuid4                               -98.06%         (199,071rps)   (avg: 5μs)
   UuidJs                              -99.55%          (45,728rps)   (avg: 21μs)
   UuidJs v4                            -99.7%          (30,835rps)   (avg: 32μs)
   UuidJs v4 Canonical                  -99.7%          (30,928rps)   (avg: 32μs)
-----------------------------------------------------------------------
```

# Acknowledgments

Thank you [Wes Roberts](https://github.com/jchook) for adding the uuid-random binary format.

# Contributing

Feel free to make a branch and send a pull request through [github](https://github.com/aarondcohen/benchmark-guid)

# Issues

Please report any issues or bugs through [github](https://github.com/aarondcohen/benchmark-guid/issues)
