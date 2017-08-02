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

function showLogInPage() {

var page = $("<div></div>");
page.append("<h1>Login Page</h1>");

var username = $("<input type='text'></input>");

var usernameLine = $("<p>Username: </p>");
usernameLine.append(username);
page.append(usernameLine);

var loginButton = $("<button>LogIn</button>");
page.append(loginButton);
loginButton.on("click", function() {
showForumTopics();
});


$("#maincontent").html(page);


}

function showRegistrationPage() {
var page = $("<div></div>");
page.append("<h1>Registration Page</h1>");

$("#maincontent").html(page);


}
function createTopicOnClick(node, topic) {
node.on("click", function() {
showSingleTopic(topic);
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

function showSingleTopic(topicDetails) {
alert(topicDetails.title);
}
$( document ).ready(function() {
$("#loginButton").on("click", showLogInPage);
$("#registerButton").on("click", showRegistrationPage);

showForumTopics();
});

