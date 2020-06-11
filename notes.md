
======================
Git Branch Management
======================

```
$ git branch --list

* master
  version1
  version2
  version3
  version4
  version5
  version6

$ git checkout <branch>
$ git branch <new-branch>
$ git branch -d <branch>
```

======================
package.json (changes)
======================

```
{
  "name": "gumball",
  "description": "Simple Test Form",
  "version": "1.0.0",
  "main": "app.js",
  "engines": {
    "node": "4.1.1"
  },
  "private": true,
  "scripts": {
    "start": "node app.js",
    "test": "vows --spec"
  },  
  "dependencies": {
    "express" : "3.x",
    "fs" : "0.0.2",
    "node-rest-client" : "1.4.1",
    "mongodb" : ">=2.0.14",
    "vows" : "*"
  }
}
```

=================
app.js (changes)
=================

```
app.set('port', (process.env.PORT || 5000));

app.post("*", handle_post );
app.get( "*", handle_get ) ;

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
```

===========
.travis.yml
===========

```
language: node_js
node_js:
  - "4.1"
```  

======================
MongoDB / MongoLabs
======================

```
  https://devcenter.heroku.com/articles/mongolab
  http://docs.mongolab.com/connecting/

    heroku config --app pnguyen-gumball | grep MONGOLAB_URI
    MONGOLAB_URI: 
    mongodb://heroku_jc07tp0r:paf27qhrk1l9v9bj2ecqks4n5c@ds045614.mongolab.com:45614/heroku_jc07tp0r
  
    var db_host = "ds045614.mongolab.com" ;
    var db_port = "45614" ;
    var db_user = "heroku_jc07tp0r" ;
    var db_pwd  = "paf27qhrk1l9v9bj2ecqks4n5c" ;
    var db_name = "heroku_jc07tp0r" ;

  Grant Role Read/Write:

    use heroku_jc07tp0r
    db.grantRolesToUser( "heroku_jc07tp0r", [ "readWrite" ] ) ;


  To connect using the mongo shell:

    mongo ds045614.mongolab.com:45614/heroku_jc07tp0r -u heroku_jc07tp0r -p paf27qhrk1l9v9bj2ecqks4n5c

  To connect using a driver via the standard MongoDB URI (what's this?):

	  mongodb://heroku_jc07tp0r:paf27qhrk1l9v9bj2ecqks4n5c@ds045614.mongolab.com:45614/heroku_jc07tp0r
 	
  Troubleshoot Connections:

    ping ds045614.mongolab.com
    nc -w 3 -v ds045614.mongolab.com 45614
    heroku logs --app pnguyen-gumball
    
  MongoDB Node Drivers:
  
    https://docs.mongodb.org/ecosystem/drivers/node-js/
```

    
=================
Command Prompts
=================
    
```    
    4  git branch -help
    7  git branch --list
    9  git branch version1
   10  git branch --list
   11  git checkout version1
   12  git branch --list
   14  git commit --all
   17  git push --set-upstream origin version1
   21  git checkout master
   25  git branch version2
   26  git checkout version2
   60  git status
   61  git add -A
   62  git commit -m "."
   64  git push --set-upstream origin version2
   73  git status
   74  git checkout master
   76  git checkout version2
   87  mpn install
   88  npm install
   90  git checkout version1
   91  git checkout version2
  121  npm test
  125  npm install
  126  ls node_modules/
  130  vows
  131  vows --spec
  133  mkdir test
  135  cd test
  137  touch hellotest.js
  139  vows --spec
  145  vows --help
  147  vows -v --spec
  148  vows test/*
  151  git status
  152  git add -A
  153  git status
  154  git commit -m "."
  155  git push
  172  git branch --list
  173  heroku pg:psql
  177  heroku apps
  178  heroku pg:psql
  179  heroku pg:psql --app pnguyen-gumball
  201  vows
  202  vows --spec
  205  node test/hello-test.js 
  206  vows -w
```
