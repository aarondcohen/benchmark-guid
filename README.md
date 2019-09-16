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
   Node.JS: 12.5.0
   V8: 7.5.288.22-node.14
   Intel(R) Core(TM) i7-4578U CPU @ 3.00GHz × 4

Suite: Competitors
✔ Id128.Ulid                            2,965,346 rps
✔ Id128.Ulid Canonical                  1,504,664 rps
✔ Id128.UlidMonotonic                   2,224,170 rps
✔ Id128.UlidMonotonic Canonical         1,274,779 rps
✔ Id128.Uuid1                           4,325,194 rps
✔ Id128.Uuid1 Canonical                 2,307,356 rps
✔ Id128.Uuid4                           3,842,202 rps
✔ Id128.Uuid4 Canonical                 2,212,015 rps
✔ Id128.Uuid6                           4,388,703 rps
✔ Id128.Uuid6 Canonical                 2,353,231 rps
✔ Id128.UuidNil                         8,043,788 rps
✔ Id128.UuidNil Canonical               3,138,393 rps
✔ Cuid                                    142,749 rps
✔ Ksuid                                   210,361 rps
✔ Nanoid                                  432,216 rps
✔ Nanoid like Uuid v4                     413,898 rps
✔ Ulid                                     25,187 rps
✔ Ulid Monotonic                        1,918,737 rps
✔ Uuid1345.v1                           2,372,100 rps
✔ Uuid1345.v4                             364,645 rps
✔ Uuidv1                                1,316,013 rps
✔ Uuidv4                                  330,464 rps
✔ Uuidv6                                1,055,381 rps
✔ UuidRandom                            4,532,015 rps
✔ UuidRandom Canonical                  2,527,621 rps
✔ Uuid4                                   298,234 rps
✔ UuidJs                                   67,761 rps
✔ UuidJs v4                                38,558 rps
✔ UuidJs v4 Canonical                      38,422 rps

   Id128.Ulid                          -63.13%      (2,965,346 rps)   (avg: 337ns)
   Id128.Ulid Canonical                -81.29%      (1,504,664 rps)   (avg: 664ns)
   Id128.UlidMonotonic                 -72.35%      (2,224,170 rps)   (avg: 449ns)
   Id128.UlidMonotonic Canonical       -84.15%      (1,274,779 rps)   (avg: 784ns)
   Id128.Uuid1                         -46.23%      (4,325,194 rps)   (avg: 231ns)
   Id128.Uuid1 Canonical               -71.32%      (2,307,356 rps)   (avg: 433ns)
   Id128.Uuid4                         -52.23%      (3,842,202 rps)   (avg: 260ns)
   Id128.Uuid4 Canonical                -72.5%      (2,212,015 rps)   (avg: 452ns)
   Id128.Uuid6                         -45.44%      (4,388,703 rps)   (avg: 227ns)
   Id128.Uuid6 Canonical               -70.74%      (2,353,231 rps)   (avg: 424ns)
   Id128.UuidNil                            0%      (8,043,788 rps)   (avg: 124ns)
   Id128.UuidNil Canonical             -60.98%      (3,138,393 rps)   (avg: 318ns)
   Cuid                                -98.23%        (142,749 rps)   (avg: 7μs)
   Ksuid                               -97.38%        (210,361 rps)   (avg: 4μs)
   Nanoid                              -94.63%        (432,216 rps)   (avg: 2μs)
   Nanoid like Uuid v4                 -94.85%        (413,898 rps)   (avg: 2μs)
   Ulid                                -99.69%         (25,187 rps)   (avg: 39μs)
   Ulid Monotonic                      -76.15%      (1,918,737 rps)   (avg: 521ns)
   Uuid1345.v1                         -70.51%      (2,372,100 rps)   (avg: 421ns)
   Uuid1345.v4                         -95.47%        (364,645 rps)   (avg: 2μs)
   Uuidv1                              -83.64%      (1,316,013 rps)   (avg: 759ns)
   Uuidv4                              -95.89%        (330,464 rps)   (avg: 3μs)
   Uuidv6                              -86.88%      (1,055,381 rps)   (avg: 947ns)
   UuidRandom                          -43.66%      (4,532,015 rps)   (avg: 220ns)
   UuidRandom Canonical                -68.58%      (2,527,621 rps)   (avg: 395ns)
   Uuid4                               -96.29%        (298,234 rps)   (avg: 3μs)
   UuidJs                              -99.16%         (67,761 rps)   (avg: 14μs)
   UuidJs v4                           -99.52%         (38,558 rps)   (avg: 25μs)
   UuidJs v4 Canonical                 -99.52%         (38,422 rps)   (avg: 26μs)
-----------------------------------------------------------------------
```

# Acknowledgments

Thank you [Wes Roberts](https://github.com/jchook) for adding the uuid-random binary format.

# Contributing

Feel free to make a branch and send a pull request through [github](https://github.com/aarondcohen/benchmark-guid)

# Issues

Please report any issues or bugs through [github](https://github.com/aarondcohen/benchmark-guid/issues)
