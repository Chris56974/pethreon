# Frontend

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

[React documentation](https://reactjs.org/)

There was an index.css and an app.css I deleted

```bash
yarn start # start a dev server on port 3000
yarn test  # run your tests (jest)
yarn build # build a production app
```

## Design Doc

- Landing page with CSS grid.
  - video on the right.
  - short description on the left.
  - animated Metamask logo with sign in button.

- Once signed-in, they will have a contributor portal and a creator portal.
  - There will be a button to switch between the two.
  - There will be a cookie remembering which portal the user last left off at.
  - Contributor portal will have ethereum address, balance, pledge stuff.
  - Creator portal will have withdraw, balance, pledge stuff.

### Icons

```tsx
<ion-icon name="heart-circle-outline"></ion-icon>
<ion-icon name="construct-outline"></ion-icon>
```

### Video

```tsx
```