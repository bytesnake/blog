+++
title = "A profound identity in signal processing"
date = "2024-08-11"
+++

Arguably one of the most important identities in signal processing is the following theorem.

<div style="margin:0 auto;text-align:center">
    <object data="/sp-identity/identity.svg" width="500"> </object>
</div>

The identity is known as Moreau's decomposition and instantiates into useful applications for variational analysis, convex optimization and signal processing. This post will explain the symbolic meaning and implication of this theorem for signal processing.

<!-- more -->

The prerequisites for the theorem are lower semicontinuity, convexity and property of the function. They are necessary to find a function minorizing and being affine.

## Providing lower affine minorants

<div style="margin:0 auto;text-align:center">
    <object data="/sp-identity/gamma_0.svg" width="500"> </object>
</div>

They are playing a central role in convex analysis because the function family admits a minorant which completely characterises the function.

<div style="margin:0 auto;text-align:center">
    <object data="/sp-identity/affine_minorant.svg" width="500"> </object>
</div>

For a characteristic function of a set, finding a minorant for the function is equivalent to set closedness.

<div style="margin:0 auto;text-align:center">
    <object data="/sp-identity/minorant_example1.svg" width="500"> </object>
</div>

Examples for functions falling into this class are plentiful, here are a few entropy functions.

<div style="margin:0 auto;text-align:center">
    <object data="/sp-identity/minorant_example2.svg" width="500"> </object>
</div>

## Taking a different perspective

The existence condition of lower affine minorants motivates the Fenchel conjugate. To be continued
