# TODO

1. Angular material bugs with colors from css variables

# E2e tests

## Frontend

`npm run start:mock:e2e`

`npm run test:mock:e2e`

# Best practises

## Routing

### Use queryParams instead of route params

Bad
`'/product-details/:id'`

Good
`'/product-details?id=1'`
