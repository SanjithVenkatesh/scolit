import Vue from 'vue'
import App from './App.vue'
import router from "./router";

const AWS = require("aws-sdk");
AWS.config.region = "us-west-2";

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-west-2:5db620ff-1c51-409c-9595-b30c3ae7e965"
});

function getCredentials() {
  console.log("in credentials");

  var promise = AWS.config.credentials.getPromise();
  promise.then(
    function(){
      console.log("result....");
      var creds = {
        accessKeyId: AWS.config.credentials.accessKeyId,
        secretAccessKey: AWS.config.credentials.secretAccessKey,
        sessionToken: AWS.config.credentials.sessionToken
      };
      console.log("got credentials: " + JSON.stringify(creds, null, 2));
      return creds;
    },
    function(err){
      console.log("err...." + JSON.stringify(err, null, 2));
      return null;
    }
  )
}

export default getCredentials

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
