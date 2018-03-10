# GUID Benchmarks

Benchmark all noteworthy implementations of GUIDs

To run the benchmarks:
```bash
yarn install
yarn benchmark
```

```
  1,801,029 op/s » Id128.Ulid
  1,064,396 op/s » Id128.Ulid Canonical
  1,657,874 op/s » Id128.UlidMonotonic
  1,002,465 op/s » Id128.UlidMonotonic Canonical
  3,814,480 op/s » Id128.Uuid1
  2,041,624 op/s » Id128.Uuid1 Canonical
  2,050,010 op/s » Id128.Uuid4
  1,394,391 op/s » Id128.Uuid4 Canonical
  4,048,844 op/s » Id128.Uuid6
  1,912,653 op/s » Id128.Uuid6 Canonical
  9,540,200 op/s » Id128.UuidNil
  3,040,878 op/s » Id128.UuidNil Canonical
    754,792 op/s » Cuid
    108,938 op/s » Ksuid
    356,590 op/s » Nanoid
    328,709 op/s » Nanoid like Uuid v4
     28,283 op/s » Ulid
  1,849,182 op/s » Ulid Monotonic
  2,594,004 op/s » Uuid1345.v1
    390,484 op/s » Uuid1345.v4
  2,265,899 op/s » Uuidv1
    378,630 op/s » Uuidv4
  1,017,885 op/s » Uuidv6
  1,619,752 op/s » UuidRandom
    253,487 op/s » Uuid4
     80,376 op/s » UuidJs
     47,599 op/s » UuidJs v4
     48,635 op/s » UuidJs v4 Canonical
```

# Contributing

Feel free to make a branch and send a pull request through [github](https://github.com/aarondcohen/benchmark-guid)

# Issues

Please report any issues or bugs through [github](https://github.com/aarondcohen/benchmark-guid/issues)
