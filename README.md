# Config

`ng add @angular-eslint/schematics`

`npm i @opi_pib/eslint-config-base`

`npm i @opi_pib/eslint-plugin-assertions`

`npm i @opi_pib/stylelint-config-base`

https://tailwindcss.com/docs/guides/angular

# E2e tests

## Frontend

`npm run start:mock:e2e`

`npm run test:mock:e2e`

## Docs

`npm run start:docs:e2e`

`npm run test:docs:e2e`

# Server

`deno run --allow-net --allow-read --watch src/deno.js`

# Best practises

## Routing

### Use queryParams instead of route params

Bad
`'/product-details/:id'`

Good
`'/product-details?id=1'`
