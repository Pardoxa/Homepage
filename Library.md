---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: "page"
title: Rust libraries
subtitle:
auto-header: none
icon: fa-th
order: 1
---
## Rust library for random graph ensembles: `net_ensembles`
[![Crate](https://img.shields.io/crates/v/net_ensembles.svg)](https://crates.io/crates/net_ensembles)
[![Rust unit tests - master](https://github.com/Pardoxa/net_ensembles/workflows/Rust%20unit%20tests%20-%20master/badge.svg?branch=master)](https://github.com/Pardoxa/net_ensembles)
[![Docs](https://docs.rs/net_ensembles/badge.svg)](https://docs.rs/net_ensembles/)

Minimal Rust version: **1.55.0**

Implements simple sampling and monte carlo (or rather markov-) steps,
that can be used to create a markov chain.

This is intended to be used for various different use cases.
As such, you can easily define additional data that should be stored at each vertex.

* [documentation of latest release](https://docs.rs/net_ensembles/)
* [documentation of working branch](https://pardoxa.github.io/net_ensembles/master/doc/net_ensembles/)
* [on crates.io](https://crates.io/crates/net_ensembles)
* [git repository](https://github.com/Pardoxa/net_ensembles)

## Rust library for scientific sampling: `sampling`
[![Crate](https://img.shields.io/crates/v/sampling.svg)](https://crates.io/crates/sampling)
[![Docs](https://docs.rs/sampling/badge.svg)](https://docs.rs/sampling/)

Minimal Rust version: **1.55.0**

Large-deviation sampling methods (Wang-Landau, Replica-exchange Wang-Landau, 
entropic sampling, Markov-chains), bootstrap resampling, histograms, heat maps and more.
It also allows you to create gnuplot scripts for your heatmaps.

* [documentation of latest release](https://docs.rs/sampling/)
* [documentation of working branch](https://pardoxa.github.io/sampling/sampling/)
* [on crates.io](https://crates.io/crates/sampling)
* [git repository](https://github.com/Pardoxa/sampling)