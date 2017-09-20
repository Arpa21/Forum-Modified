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
 for hashing password - http://coursesweb.net/javascript/sha256-encrypt-hash_cs
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

var loginButton = $("<button id='cryptstr'>LogIn</button>");
page.append(loginButton);


loginButton.on("click", function() {
save();
showForumTopics();
});

var createAccountButton = $("<button id='create'>Create Account</button>");
page.append(createAccountButton);

createAccountButton.on("click", function() {
showRegistrationPage();

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

confirmEmail();
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

function confirmEmail() {
alert("Please confirm your email to activate your account");
}
// code for SHA256 starts

function SHA256(s){
  var chrsz   = 8;
  var hexcase = 0;

 function safe_add (x, y) {
   var lsw = (x & 0xFFFF) + (y & 0xFFFF);
   var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
   return (msw << 16) | (lsw & 0xFFFF);
 }

 function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
 function R (X, n) { return ( X >>> n ); }
 function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
 function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
 function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
 function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
 function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
 function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }

 function core_sha256 (m, l) {
   var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
   var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
   var W = new Array(64);
   var a, b, c, d, e, f, g, h, i, j;
   var T1, T2;

   m[l >> 5] |= 0x80 << (24 - l % 32);
   m[((l + 64 >> 9) << 4) + 15] = l;

   for ( var i = 0; i<m.length; i+=16 ) {
     a = HASH[0];
     b = HASH[1];
     c = HASH[2];
     d = HASH[3];
     e = HASH[4];
     f = HASH[5];
     g = HASH[6];
     h = HASH[7];

     for ( var j = 0; j<64; j++) {
       if (j < 16) W[j] = m[j + i];
       else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);

       T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
       T2 = safe_add(Sigma0256(a), Maj(a, b, c));

       h = g;
       g = f;
       f = e;
       e = safe_add(d, T1);
       d = c;
       c = b;
       b = a;
       a = safe_add(T1, T2);
     }

     HASH[0] = safe_add(a, HASH[0]);
     HASH[1] = safe_add(b, HASH[1]);
     HASH[2] = safe_add(c, HASH[2]);
     HASH[3] = safe_add(d, HASH[3]);
     HASH[4] = safe_add(e, HASH[4]);
     HASH[5] = safe_add(f, HASH[5]);
     HASH[6] = safe_add(g, HASH[6]);
     HASH[7] = safe_add(h, HASH[7]);
   }
   return HASH;
 }

 function str2binb (str) {
   var bin = Array();
   var mask = (1 << chrsz) - 1;
   for(var i = 0; i < str.length * chrsz; i += chrsz) {
     bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
   }
   return bin;
 }

 function Utf8Encode(string) {
   string = string.replace(/\r\n/g,"\n");
   var utftext = "";

   for (var n = 0; n < string.length; n++) {

     var c = string.charCodeAt(n);

     if (c < 128) {
       utftext += String.fromCharCode(c);
     }
     else if((c > 127) && (c < 2048)) {
       utftext += String.fromCharCode((c >> 6) | 192);
       utftext += String.fromCharCode((c & 63) | 128);
     }
     else {
       utftext += String.fromCharCode((c >> 12) | 224);
       utftext += String.fromCharCode(((c >> 6) & 63) | 128);
       utftext += String.fromCharCode((c & 63) | 128);
     }

   }

   return utftext;
 }

 function binb2hex (binarray) {
   var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
   var str = "";
   for(var i = 0; i < binarray.length * 4; i++) {
     str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
     hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
   }
   return str;
 }

 s = Utf8Encode(s);
 return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}

//code for sha256 ends


function save() {
var fieldValue = document.getElementById('textfield').value;
localStorage.setItem('textfield', fieldValue);
//var passValue = document.getElementById('passfield').value;

var txt_string = document.getElementById('passfield').value;
var passValue = SHA256(txt_string);
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

//create a global variable for the URL
window.baseUrl = "http://introtoapps.com/datastore.php?appid=215141369";
window.currentUsername = null;
window.forumTopics = [];

/*function displayForumPage() {
	for (var index = 0; index < forumTopics.length; index++) {
	var topic = forumTopics[index];
	$("body").append("<p>" + topic.subject + " / " + topic.author + "</p>");
	
	}
	
	var newTopic = {
	subject: "data typed by user",
	author: window.currentUsername;
	}
}*/

function loadForumTopics() {
var url = baseUrl + "&action=load&objectid=forumtopics";
	
	
	$.ajax({
	url: url,
	cache: false
	})
	.done(function( data ) {
	
	/*try {
	window.forumTopics = JSON.parse(data);
	displayForumPage();
	} catch (e) {
	alert(e);
	}*/
	}).fail(function( jqXHR, textStatus ) {
		alert( "Request failed: " + textStatus );
	});

}

function createUser(username, password) {
	var userObject = {
		username : username,
		password : password,
	};

	var data = JSON.stringify(userObject);
	alert("Data to be saved: " + data);
	//create a url for saving
	var url = baseUrl + "&action=save&objectid=" + encodeURIComponent(username) + ".user&data=" + encodeURIComponent(data);
	alert("URL: "+url);
	
	$.ajax({
	url: url,
	cache: false
	})
	.done(function( data ) {
	//when successfully complete, run this function
	alert("Result from server: " + data);
	}).fail(function( jqXHR, textStatus ) {
		alert( "Request failed: " + textStatus );
	});

}


function loadUser (username) {
var url = baseUrl + "&action=load&objectid=" + encodeURIComponent(username) + ".user";
console.log(url);

$.ajax({
	url: url,
	cache: false
	})
	.done(function( data ) {

	$( "body" ).append( data );
	}).fail(function( jqXHR, textStatus ) {
		alert( "Request failed: " + textStatus );
	});

}





$( document ).ready(function() {

$("#loginButton").on("click", showLogInPage);
$("#registerButton").on("click", showRegistrationPage);


showPosts();
showForumTopics();
showLogInPage();
console.log("My app starting (v1.2)...");
loadForumTopics();

//createUser("bob", "bobs password");
$("#about").click(function(){
        $("#info").slideToggle("slow");
    });
});

