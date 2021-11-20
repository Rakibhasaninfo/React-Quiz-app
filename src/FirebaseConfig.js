import {initializeApp} from 'firebase/app'

const firebaseConfig={
    apiKey: "AIzaSyC5xHVxDxK5FUX0Q9GXkdENIWkQL3rRjzI",
    authDomain: "react-quiz-dev-2e891.firebaseapp.com",
    projectId: "react-quiz-dev-2e891",
    storageBucket: "react-quiz-dev-2e891.appspot.com",
    messagingSenderId: "393639550073",
    appId: "1:393639550073:web:6902b73e534254209388a8"
};

const app = initializeApp(firebaseConfig);

export default app;