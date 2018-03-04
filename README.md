# GUID Benchmarks

Benchmark all noteworthy implementations of GUIDs

To run the benchmarks:
```bash
yarn install
yarn benchmark
```

```
  1,664,207 op/s » Id128.Ulid
  1,012,267 op/s » Id128.Ulid Canonical
  1,635,350 op/s » Id128.UlidMonotonic
    976,965 op/s » Id128.UlidMonotonic Canonical
  3,864,248 op/s » Id128.Uuid1
  2,276,302 op/s » Id128.Uuid1 Canonical
  1,959,491 op/s » Id128.Uuid4
  1,445,531 op/s » Id128.Uuid4 Canonical
  8,223,572 op/s » Id128.UuidNil
  2,908,673 op/s » Id128.UuidNil Canonical
    714,221 op/s » Cuid
    105,325 op/s » Ksuid
    344,373 op/s » Nanoid
    306,845 op/s » Nanoid like Uuid v4
     26,845 op/s » Ulid
  1,815,213 op/s » Ulid Monotonic
  2,581,278 op/s » Uuid1345.v1
    375,712 op/s » Uuid1345.v4
  2,251,018 op/s » Uuidv1
    378,018 op/s » Uuidv4
  1,559,270 op/s » UuidRandom
    262,281 op/s » Uuid4
     80,077 op/s » UuidJs
     47,014 op/s » UuidJs v4
     45,740 op/s » UuidJs v4 Canonical
```

# Contributing

Feel free to make a branch and send a pull request through [github](https://github.com/aarondcohen/benchmark-guid)

# Issues

Please report any issues or bugs through [github](https://github.com/aarondcohen/benchmark-guid/issues)
