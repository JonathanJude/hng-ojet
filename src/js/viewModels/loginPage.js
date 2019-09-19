/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define([
  "ojs/ojcore",
  "knockout",
  "jquery",
  "ojs/ojselectcombobox",
  "ojs/ojinputtext",
  "ojs/ojbutton"
], function(oj, ko, $) {
  function LoginPageViewModel() {
    var self = this;
    // Below are a subset of the ViewModel methods invoked by the ojModule binding
    // Please reference the ojModule jsDoc for additionaly available methods.
    self.userlogin = ko.observable();
    self.password = ko.observable();
    self.res = ko.observable();
    self.verifyInfo = function() {
      console.log("Button clicked...");
      console.log(self.userlogin());
      console.log(self.password());

      var data = JSON.stringify({
        username: self.userlogin(),
        password: self.password()
      });

      console.log(data);

      $.ajax({
        url: "http://localhost/ojet-api/api/login.php",
        method: "POST",
        contentType: "applicantion/json",
        data: data,
        success: function(data) {
          if (data.status == true) {
            console.log("logged in");

            oj.Router.rootInstance.go("dashboard");
          } else {
            console.log("invalid login / bad parsing");

            alert("Invalid Credentials! Try again");
          }
        },
        error: function(jqXHR, exception) {
          alert("Invalid Credentials. Try Again");
        }
      });
    };
    self.signupClick = function() {
      oj.Router.rootInstance.go("signupPage");
    };

    self.handleActivated = function(info) {
      // Implement if needed
    };

    self.handleAttached = function(info) {
      // Implement if needed
    };

    self.handleBindingsApplied = function(info) {
      // Implement if needed
    };

    self.handleDetached = function(info) {
      // Implement if needed
    };
  }

  return new LoginPageViewModel();
});
