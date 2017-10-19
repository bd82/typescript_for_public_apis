[![Build Status](https://travis-ci.org/bd82/typescript_for_public_apis.svg?branch=master)](https://travis-ci.org/bd82/typescript_for_public_apis)

# Validated TypeScript public APIs in vanilla JavaScript projects

**TLDR**: skip to the [Suggested Pattern](#suggested_pattern)

## Background
In the article [Get the advantages of TypeScript without transpiling](http://seg.phault.net/blog/2017/10/typescript-without-transpiling/)
@segphault described how TypeScript and JSDocs annotations can be combined to provide type checking
capabilities for vanilla JavaScript projects.

This repo takes this concept one step farther and demonstrates how to use TypeScript
to provide **validated** high quality **public APIs** in a vanilla JavaScript project.


### Can't we already do this using [DefinitelyTyped](http://definitelytyped.org/guides/contributing.html)?
DefinitelyTyped is awesome as it allows "external" contributors to provide definitions
for packages independently of the "internal" development of these packages.

This approach however, has three main disadvantages

1. Independent life cycle of packages and their definitions may lead to quality issues.
2. Definitions developed by end users instead of package authors may suffer from quality issues.
3. There exists **no validation that the implementation of the package aligns with the definition**.
    - For example: A function may be added in the implementation without a corresponding change in the definitions.


### Could not all these concerns be resolved if package authors develop the definitions as part of their packages?
Yes and No.

It is possible to include definitions as part of a package using the [@types property](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)
This will indeed resolve the first two concerns, The problem is that to resolve the 3rd concern, that of
**validating the definitions match the implementation**. The whole package would have had to be developed in TypeScript.
Which may not be desired for various (and legitimate) reasons.

Luckily a new alternative is available since TypeScript 2.3


## <a name="suggested_pattern"></a> Suggested Pattern   
The basic premise is quite simple:

 - Define our public APIs as [d.ts files](https://github.com/bd82/typescript_for_public_apis/blob/master/api.d.ts).
 
 - Use JSDocs annotations in the JS **implementations** of our public APIs and [reference the types](https://github.com/bd82/typescript_for_public_apis/blob/master/src/functional.js#L5)
   defined on the d.ts files.
   
 - Configure the TS compiler via [tsconfig.json](https://github.com/bd82/typescript_for_public_apis/blob/master/tsconfig.json#L4-L6) to check JS files and **not** generate any code.
 
 - Expose our d.ts definitions using the [@types property](https://github.com/bd82/typescript_for_public_apis/blob/master/package.json#L6) in our package.json.
 

**Pros**
 - The implementations of the public APIs **must now match their definitions**.
 - Our project is still a vanilla JS project.
 - Our public APIs are now easily exportable and can be easily consumed by end users 
   * As opposed to pure JSDocs. 
 - We are using a better syntax than JSDocs to define our public APIs.
 
**Cons**
 - Unknown how to apply this pattern to classes yet (is it even possible?).
 - Integrating TypeScript as a "pure" type checker may require some minor modifications/fixes
   as with the integration of any linter...
    
