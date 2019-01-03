Testing shorthand vs. longhand adjustment maps in Accoutrement 2.

`yarn install`

`yarn sass` OR `yarn build`. The latter gives duration stats.

As you will eventually see in the debug output, the [long-hand syntax](https://oddbird.net/accoutrement/docs/core-get.html) sometimes produces incorrect results.

Oddly enough, if you change the `rgb(25, 129, 139)` to `'#P1'` in the six `h*` entries, everything works.
