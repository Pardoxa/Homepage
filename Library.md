---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: "page"
title: Rust library
subtitle:
auto-header: none
icon: fa-th
order: 1
---
## net_ensembles
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
net_ensembles = "0.4"
# for feature "serde_support" (enabled by default) also use
serde = { version = "1.0", features = ["derive"] }
```
If you do not need `serde` support, add this instead:
```toml
[dependencies]
net_ensembles = { version = "0.4", default-features = false  }
```

## Currently implemented graph ensembles

* Erdős-Rényi (x2)
* small-world

### work in progress
* Barabási-Albert
* Configuration Model

## Note

On a 64 bit system drawing an usize consumes more than on a 32 bit system, 
therefore ensembles drawn etc. are affected by the size of `usize`.

## Warranties

No warranties whatsoever, but since
I am writing this library for my own scientific simulations,
I do my best to avoid errors.

If you notice any bugs, or want to request new features: do not hesitate to
open a new [issue](https://github.com/Pardoxa/net_ensembles/issues) on the repository.

## Documentation
For more information, please look at the documentation.
If anything in the documentation is unclear, please 
open an [issue](https://github.com/Pardoxa/net_ensembles/issues) on the repository.

* [current working branch](https://pardoxa.github.io/net_ensembles/master/doc/net_ensembles/)
* [releases](https://docs.rs/net_ensembles/)
