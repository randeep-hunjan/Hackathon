const puppy=require("puppeteer");
let browserPromise=puppy.launch({
    headless:false,
    defaultViewport:false,
});
const id="Rough_Mud8821";
const pass="Apple@0912";
let tab;
let val1=process.argv[2];
browserPromise.then(function(browser){
    let pagesPromise=browser.pages();
    return pagesPromise;
}).then(function(pages){
    tab=pages[0];
    let pagesOpenPromise=tab.goto("https://www.reddit.com/login/");
    return pagesOpenPromise;
}).then(function(){
    let idPromise=tab.type("#loginUsername",id);
    return idPromise;
}).then(function(){
    let passPromise=tab.type("#loginPassword",pass);
    return passPromise;
}).then(function(){
    let loginPromise=tab.click(".AnimatedForm__submitButton.m-full-width");
    return loginPromise;
}).then(function(){
    let waitPromise=tab.waitForSelector("#header-search-bar",{visible:true});
    return waitPromise;
}).then(function(){
    let searchPromise=tab.type("#header-search-bar",val1);
    return searchPromise;
}).then(function(){
    let ddPromise=tab.keyboard.press('Enter');
    return ddPromise; 
}).then(function(){
    let communityPromise=tab.waitForSelector(".DMHO9Pay4I5LSwZTtE4TY",{visible:true});
    return communityPromise;
}).then(function(){
    let resultsPromise=tab.click(".DMHO9Pay4I5LSwZTtE4TY");
    return resultsPromise;
}).then(function(){
    let commPromise=tab.waitForSelector("._3llSmEBMCJTcO537oPxHIH",{visible:true});
    return commPromise;
}).then(function(){
    let resPromise=tab.$$("._3llSmEBMCJTcO537oPxHIH");
    return resPromise;
}).then(function(data){
   for (let i=0;i<3;i++)
   {
    data[i].click();
   }
});
