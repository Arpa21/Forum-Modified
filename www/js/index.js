/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 https://www.youtube.com/watch?v=Jc_Yycz7MEc
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};





app.initialize();

var topics = [
{title: "Student Topics", posts: 16, replies: [
{text:"My Reply", author: "Arpa", date: 1234}
]
},
{title: "Other Topics", posts:7}
];
var userPosts = [
{subject: "Why does restaring computer fixes everything?", author: "John Doe"
},
{subject: "Whi is university so stressful?", author: "Jane Doe"}
];

function showLogInPage() {

var page = $("<div></div>");
page.append("<h1>Login Page</h1>");

var username = $("<input type='text' id='textfield'></input>");

var usernameLine = $("<p>Username: </p>");
usernameLine.append(username);
page.append(usernameLine);
var password = $("<input type='password' id='passfield'></input>");

var passwordLine = $("<p>Password: </p>");
passwordLine.append(password);
page.append(passwordLine);

var loginButton = $("<button>LogIn</button>");
page.append(loginButton);


/*loginButton.on("click", function() {
showForumTopics();
});*/
loginButton.on("click", function() {
save();
});

$("#maincontent").html(page);


}

function showRegistrationPage() {



var page = $("<div></div>");
page.append("<h1>Registration Page</h1>");

var username = $("<input type='text'></input>");

var usernameLine = $("<p>Username: </p>");
usernameLine.append(username);
page.append(usernameLine);
var email = $("<input type='email'></input>");

var emailLine = $("<p>Email: </p>");
emailLine.append(email);
page.append(emailLine);
var password = $("<input type='password'></input>");

var passwordLine = $("<p>Create Password: </p>");
passwordLine.append(password);
page.append(passwordLine);


var registerButton = $("<button>Register</button>");
page.append(registerButton);
registerButton.on("click", function() {
showForumTopics();
});


$("#maincontent").html(page);


}

function createTopicOnClick(node, topic) {
node.on("click", function() {
showPosts(topic);
});
}
function createPostOnClick(node, post) {
node.on("click", function() {
showSinglePost(post);
});
}
function showForumTopics() {
var page = $("<div></div>");
page.append("<h1>Forum Topics</h1>");

var topicTable = $("<table class='topicsTable'><tr><th>Title</th><th>Posts</th></tr></table>");

for (index in topics) {
var row = $("<tr></tr>");
row.append("<td>" + topics[index].title + "</td>");
row.append("<td>" + topics[index].posts + "</td>");
createTopicOnClick(row, topics[index]);
topicTable.append(row);
}

page.append(topicTable);

$("#maincontent").html(page);

}

function showPosts() {
var page = $("<div></div>");
page.append("<h1>Posts</h1>");

var postTable = $("<table class='postTable'><tr><th>Title</th><th>Posts</th></tr></table>");

for (index in userPosts) {
var row = $("<tr></tr>");
row.append("<td>" + userPosts[index].subject + "</td>");
row.append("<td>" + userPosts[index].author + "</td>");
createPostOnClick(row, userPosts[index]);

postTable.append(row);
}

page.append(postTable);

$("#maincontent").html(page);
}
function showSinglePost(postDetails) {
var text;
var ab = confirm("Want to send a reply?");
if (ab == true) {
    text = prompt("Express your thought.");
} else {
    text = "You selected Cancel!";
}
}
function save() {
var fieldValue = document.getElementById('textfield').value;
localStorage.setItem('textfield', fieldValue);
var passValue = document.getElementById('passfield').value;

localStorage.setItem('passfield', passValue);
}
function load() {
var storedValue = localStorage.getItem('textfield');
if(storedValue) {
document.getElementById('textfield').value = storedValue;
}
var passStored = localStorage.getItem('passfield');
if(passStored) {
document.getElementById('passfield').value = passStored;
}

}
/*function init() {
if (localStorage.firstName){
document.getElementById("mytxt").value = localStorage.firstName;
}
}

function onSavePressed(){
localStorage.firstName = document.getElementById("mytxt").value;
}*/

$( document ).ready(function() {
$("#loginButton").on("click", showLogInPage);
$("#registerButton").on("click", showRegistrationPage);


showPosts();
showForumTopics();
showLogInPage();

$("#about").click(function(){
        $("#info").slideToggle("slow");
    });
});

