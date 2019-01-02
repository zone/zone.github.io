<a href="https://zonedigital.com">
  <svg width="50px" viewBox="0 0 91 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <polygon fill="#1010E5" fill-rule="nonzero" points="0 100 47.8899982 23.3539536 4.10975684 23.3539536 7.10479574 18.539842 56.5443743 18.539842 8.6053776 95.2042629 68.8491456 95.2042629 71.8441845 90.4085258 17.2903779 90.4085258 65.2354995 13.6828566 10.3387028 13.6828566 18.9073314 0 90.678018 0.0183744717 43.2596313 75.9968151 86.5253874 75.9784406 83.4997244 80.8109267 34.6052551 80.8293012 82.121639 4.77736265 21.4491333 4.75898818 18.5520916 9.1198628 73.7306302 9.1198628 25.9386293 85.6189135 80.5108103 85.6189135 71.5318185 100"></polygon>
      </g>
  </svg>
</a>

# Zone: Tech

## Setup

This static site has been built using Gatsby. It requires to be built before being deployed.

### Prerequisites

- [Node](https://nodejs.org) (10.15.0 - LTS Dubnium)
- [Yarn](https://yarnpkg.com) (Latest)

### Install

Run `yarn install` followed by `yarn start`.

## Hosting and Contributing

GitHub pages is used to host. GitHub pages requires the production ready code to be on the `master` branch.

The `master` branch is the compiled output of the `develop` branch.

All work should end up on `develop`.

## Deployment

To deploy, checkout the `develop` branch and run `yarn deploy`. This will get Gatsby to compile to `/public` and use the `gh-pages` package to move the contents of that directory to the `master` branch, pushing the result to the remote repo (GitHub pages).
