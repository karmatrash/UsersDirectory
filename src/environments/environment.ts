// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCQJY0AC9950t7QmhgpHjgQ5X_USiEyWe4',
        authDomain: 'users-directory.firebaseapp.com',
        databaseURL: 'https://users-directory.firebaseio.com',
        projectId: 'users-directory',
        storageBucket: 'users-directory.appspot.com',
        messagingSenderId: '1076393203749'
    },
    gender: ['male', 'female']
};

