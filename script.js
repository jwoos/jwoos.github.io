var sites = [
  'http://heeeeeeeey.com/',
  'http://thatsthefinger.com/',
  'http://cant-not-tweet-this.com/',
  'http://eelslap.com/',
  'http://www.staggeringbeauty.com/',
  'http://burymewithmymoney.com/',
  'http://www.fallingfalling.com/',
  'http://ducksarethebest.com/',
  'http://www.trypap.com/',
  'http://www.republiquedesmangues.fr/',
  'http://www.movenowthinklater.com/',
  'http://www.partridgegetslucky.com/',
  'http://www.rrrgggbbb.com/',
  'http://beesbeesbees.com/',
  'http://www.sanger.dk/',
  'http://www.koalastothemax.com/',
  'http://www.everydayim.com/',
  'http://www.leduchamp.com/',
  'http://grandpanoclothes.com/',
  'http://www.haneke.net/',
  'http://r33b.net/',
  'http://randomcolour.com/',
  'http://cat-bounce.com/',
  'http://www.sadforjapan.com/',
  'http://www.taghua.com/',
  'http://chrismckenzie.com/',
  'http://hasthelargehadroncolliderdestroyedtheworldyet.com/',
  'http://ninjaflex.com/',
  'http://iloveyoulikeafatladylovesapples.com/',
  'http://ihasabucket.com/',
  'http://corndogoncorndog.com/',
  'http://giantbatfarts.com/',
  'http://www.ringingtelephone.com/',
  'http://www.pointerpointer.com/',
  'http://www.pleasedonate.biz/',
  'http://imaninja.com/',
  'http://willthefuturebeaweso.me/',
  'http://salmonofcapistrano.com/',
  'http://www.ismycomputeron.com/',
  'http://www.wwwdotcom.com/',
  'http://www.nullingthevoid.com/',
  'http://www.muchbetterthanthis.com/',
  'http://www.ouaismaisbon.ch/',
  'http://iamawesome.com/',
  'http://www.pleaselike.com/',
  'http://crouton.net/',
  'http://corgiorgy.com/',
  'http://www.electricboogiewoogie.com/', 
  'http://www.nelson-haha.com/',
  'http://www.wutdafuk.com/', 
  'http://unicodesnowmanforyou.com/',
  'http://tencents.info/',
  'http://intotime.com/',
  'http://leekspin.com/',
  'http://minecraftstal.com/',
  'http://www.riddlydiddly.com/',
  'http://www.patience-is-a-virtue.org/',
  'http://whitetrash.nl/',
  'http://www.theendofreason.com/',
  'http://zombo.com',
  'http://secretsfornicotine.com/',
  'http://pixelsfighting.com/',
  'http://crapo.la/', 
  'http://baconsizzling.com/',
  'http://isitwhite.com/',
  'http://noot.space/',
  'http://tomsdog.com/',
  'http://hardcoreprawnlawn.com/',
  'http://www.omfgdogs.com/',
  'http://thefo.nz/',
  'http://oct82.com/'
]

function goSite() {
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  }
  
  index = getRandomInt(0, sites.length + 1)
  window.location.replace(sites[index]);
}

/*
function slowAlert1() {
  alert('What are you still doing here?');
}

function slowAlert2() {
  alert('I promise you there is nothing more here');
}

function getName() {
  name = window.prompt("Alright, what's your name?");
  return name;
}

window.setTimeout(slowAlert1, 10000);
window.setTimeout(slowAlert2, 15000);
window.setTimeout(function() {
  getName();
  while (name == "" || name == null) {
    alert('Put a name!');
    getName();
  }
  choice = confirm('Hi ' + name + '\nI am going to redirect you to a random interesting site now...' + "\nClick OK to continue or if you want to stay here click cancel (althought I don't know why you would...)");
  if (choice == true) {
    alert('Redirecting...');
    goSite();
  } else {
    alert("Well, that's cool too...");
    element = document.getElementById('inner');
    p = document.createElement("p");
    tnode = document.createTextNode('Well I guess you can stay here... Nice to meet you, ' + name);
    element.appendChild(p);
    p.appendChild(tnode);
  }
}, 30000);
*/
