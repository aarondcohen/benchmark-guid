# GUID Benchmarks

Benchmark all noteworthy implementations of GUIDs

To run the benchmarks:
```bash
yarn install
yarn benchmark
```

```
  1,732,282 op/s » Id128.Ulid
  1,008,961 op/s » Id128.Ulid Canonical
  1,246,496 op/s » Id128.UlidMonotonic
    831,968 op/s » Id128.UlidMonotonic Canonical
  3,836,224 op/s » Id128.Uuid1
  2,019,059 op/s » Id128.Uuid1 Canonical
  1,977,660 op/s » Id128.Uuid4
  1,345,925 op/s » Id128.Uuid4 Canonical
  7,759,882 op/s » Id128.UuidNil
  2,889,596 op/s » Id128.UuidNil Canonical
    737,053 op/s » Cuid
    101,238 op/s » Ksuid
    329,181 op/s » Nanoid
    312,563 op/s » Nanoid like Uuid v4
     26,951 op/s » Ulid
  1,746,210 op/s » Ulid Monotonic
  2,352,901 op/s » Uuid1345.v1
    367,424 op/s » Uuid1345.v4
  2,229,689 op/s » Uuidv1
    356,271 op/s » Uuidv4
  1,538,740 op/s » UuidRandom
    241,795 op/s » Uuid4
     77,865 op/s » UuidJs
     48,144 op/s » UuidJs v4
     48,030 op/s » UuidJs v4 Canonical
```

# Contributing

Feel free to make a branch and send a pull request through [github](https://github.com/aarondcohen/benchmark-guid)

# Issues

Please report any issues or bugs through [github](https://github.com/aarondcohen/benchmark-guid/issues)
