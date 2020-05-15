---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: "page"
title: Rust library - net_ensembles
subtitle:
auto-header: none
icon: fa-th
order: 1
---
[![Crate](https://img.shields.io/crates/v/net_ensembles.svg)](https://crates.io/crates/net_ensembles)
[![Docs](https://docs.rs/net_ensembles/badge.svg)](https://docs.rs/net_ensembles/)
[![Rust unit tests - master](https://github.com/Pardoxa/net_ensembles/workflows/Rust%20unit%20tests%20-%20master/badge.svg?branch=master)](https://github.com/Pardoxa/net_ensembles)  
Implements simple sampling and monte carlo (or rather markov-) steps,
that can be used to create a markov chain.  
This is intended to be used for various different use cases.
As such, you can easily define additional data that should be stored at each vertex.

## Usage

Add this to your `Cargo.toml`:
```toml
[dependencies]
net_ensembles = "0.3"
# for feature "serde_support" (enabled by default) also use
serde = { version = "1.0", features = ["derive"] }
```
If you do not need `serde` support, add this instead:
```toml
[dependencies]
net_ensembles = { version = "0.3", default-features = false  }
```

## currently implemented graph ensembles

* Erdős-Rényi (x2)
* small-world

## Graph

* visualize the current graph (create a `*.dot` file)
- average degree
- connected components
- diameter
- is_connected
- leaf count
- q_core
- transitivity
- biconnected component
- vertex_load (closely related, often equal to betweeness)

#### Iterators

* depth first search from index
* breadth first search from index
* over additional data
* …

### For each vertex

* degree
* check adjacency with other nodes
* access additional data

#### Iterators
* iterate over indices stored in adjacency list
* …

## Documentation

* [changelog](https://github.com/Pardoxa/net_ensembles/blob/master/CHANGELOG.md)
* [current working branch](https://pardoxa.github.io/net_ensembles/master/doc/net_ensembles/)
* [releases](https://docs.rs/net_ensembles/)

## Notes

No warranties whatsoever, but since
I am writing this library for my own simulations,
I do my best to avoid errors.  
If you notice any bugs, or want to request new features: do not hesitate to
open a new [issue](https://github.com/Pardoxa/net_ensembles/issues) on the repository.
