# TODO

1. Angular material bugs with colors from css variables

# E2e tests

Preferred https://playwright.dev/docs/intro
https://playwright.dev/docs/accessibility-testing
https://playwright.dev/docs/test-snapshots

## Frontend

`npm run start:mock:e2e`

`npm run test:mock:e2e`

# Best practises

## Routing

### Use queryParams instead of route params except resource id

Bad
`'/product-details/:id'`

Good
`'/product-details?id=1'`
