# GUID Benchmarks

Benchmark all noteworthy implementations of GUIDs

To run the benchmarks:
```bash
yarn install
yarn benchmark
```

```
✔ Id128.Ulid                            2,966,347 rps
✔ Id128.Ulid Canonical                  1,434,789 rps
✔ Id128.UlidMonotonic                   2,158,872 rps
✔ Id128.UlidMonotonic Canonical         1,267,483 rps
✔ Id128.Uuid1                           4,344,360 rps
✔ Id128.Uuid1 Canonical                 2,232,281 rps
✔ Id128.Uuid4                           3,884,280 rps
✔ Id128.Uuid4 Canonical                 2,176,643 rps
✔ Id128.Uuid6                           4,340,979 rps
✔ Id128.Uuid6 Canonical                 2,214,772 rps
✔ Id128.UuidNil                         8,574,751 rps
✔ Id128.UuidNil Canonical               3,120,219 rps
✔ Cuid                                    141,748 rps
✔ Ksuid                                   193,355 rps
✔ Nanoid                                  421,427 rps
✔ Nanoid like Uuid v4                     405,785 rps
✔ Ulid                                     24,571 rps
✔ Ulid Monotonic                        1,921,834 rps
✔ Uuid1345.v1                           2,345,635 rps
✔ Uuid1345.v4                             353,708 rps
✔ Uuidv1                                1,279,706 rps
✔ Uuidv4                                  327,775 rps
✔ Uuidv6                                1,022,093 rps
✔ UuidRandom                            2,528,814 rps
✔ Uuid4                                   292,115 rps
✔ UuidJs                                   66,053 rps
✔ UuidJs v4                                37,653 rps
✔ UuidJs v4 Canonical                      38,108 rps

   Id128.Ulid                          -65.41%      (2,966,347 rps)   (avg: 337ns)
   Id128.Ulid Canonical                -83.27%      (1,434,789 rps)   (avg: 696ns)
   Id128.UlidMonotonic                 -74.82%      (2,158,872 rps)   (avg: 463ns)
   Id128.UlidMonotonic Canonical       -85.22%      (1,267,483 rps)   (avg: 788ns)
   Id128.Uuid1                         -49.34%      (4,344,360 rps)   (avg: 230ns)
   Id128.Uuid1 Canonical               -73.97%      (2,232,281 rps)   (avg: 447ns)
   Id128.Uuid4                          -54.7%      (3,884,280 rps)   (avg: 257ns)
   Id128.Uuid4 Canonical               -74.62%      (2,176,643 rps)   (avg: 459ns)
   Id128.Uuid6                         -49.37%      (4,340,979 rps)   (avg: 230ns)
   Id128.Uuid6 Canonical               -74.17%      (2,214,772 rps)   (avg: 451ns)
   Id128.UuidNil                            0%      (8,574,751 rps)   (avg: 116ns)
   Id128.UuidNil Canonical             -63.61%      (3,120,219 rps)   (avg: 320ns)
   Cuid                                -98.35%        (141,748 rps)   (avg: 7μs)
   Ksuid                               -97.75%        (193,355 rps)   (avg: 5μs)
   Nanoid                              -95.09%        (421,427 rps)   (avg: 2μs)
   Nanoid like Uuid v4                 -95.27%        (405,785 rps)   (avg: 2μs)
   Ulid                                -99.71%         (24,571 rps)   (avg: 40μs)
   Ulid Monotonic                      -77.59%      (1,921,834 rps)   (avg: 520ns)
   Uuid1345.v1                         -72.64%      (2,345,635 rps)   (avg: 426ns)
   Uuid1345.v4                         -95.88%        (353,708 rps)   (avg: 2μs)
   Uuidv1                              -85.08%      (1,279,706 rps)   (avg: 781ns)
   Uuidv4                              -96.18%        (327,775 rps)   (avg: 3μs)
   Uuidv6                              -88.08%      (1,022,093 rps)   (avg: 978ns)
   UuidRandom                          -70.51%      (2,528,814 rps)   (avg: 395ns)
   Uuid4                               -96.59%        (292,115 rps)   (avg: 3μs)
   UuidJs                              -99.23%         (66,053 rps)   (avg: 15μs)
   UuidJs v4                           -99.56%         (37,653 rps)   (avg: 26μs)
   UuidJs v4 Canonical                 -99.56%         (38,108 rps)   (avg: 26μs)
```

# Contributing

Feel free to make a branch and send a pull request through [github](https://github.com/aarondcohen/benchmark-guid)

# Issues

Please report any issues or bugs through [github](https://github.com/aarondcohen/benchmark-guid/issues)
