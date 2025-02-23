
        function openTab(tabName) {
            document.querySelectorAll('.auth-form').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
            document.getElementById(tabName).classList.add('active');
            document.querySelector(`[onclick="openTab('${tabName}')"]`).classList.add('active');
        }


// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read: if false;
//       allow write:if true;
//     }
//   }
// }
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#signup").addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("Signup form submitted");
    });

    document.querySelector("#login").addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("Login form submitted");
    });
});
const signupForm = document.querySelector("#signup");
const loginForm = document.querySelector("#login");

if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("Signup form exists and is being used.");
    });
} else {
    console.error("Signup form not found.");
}

if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("Login form exists and is being used.");
    });
} else {
    console.error("Login form not found.");
}



