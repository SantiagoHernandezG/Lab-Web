var doing = false;
var spin = [new Audio("/audio/spin.mp3"),new Audio("/audio/spin.mp3"),new Audio("/audio/spin.mp3"),new Audio("/audio/spin.mp3"),new Audio("/audio/spin.mp3"),new Audio("/audio/spin.mp3"),new Audio("/audio/spin.mp3")];
var coin = [new Audio("/audio/coin.mp3"),new Audio("/audio/coin.mp3"),new Audio("/audio/coin.mp3"), new Audio("/audio/coin.mp3")];
var win = new Audio("/audio/win.mp3");
var lose = new Audio("/audio/lose.mp3");
var audio = false;
var info = true;

function doSlot(){
	if (doing){return null;}
	doing = true;
	var numChanges = randomInt(1,4)*9
	var numeberSlot1 = numChanges+randomInt(1,9)
	var numeberSlot2 = numChanges+2*7+randomInt(1,9)
	var numeberSlot3 = numChanges+4*7+randomInt(1,9)
    var numeberSlot4 = numChanges+6*7+randomInt(1,9)
    
    var i1 = 0;
	var i2 = 0;
	var i3 = 0;
    var i4 = 0;
	
	var sound = 0
	slot1 = setInterval(spin1, 50);
	slot2 = setInterval(spin2, 50);
	slot3 = setInterval(spin3, 50);
	slot4 = setInterval(spin4, 50);
    
    function spin1(){
		i1++;
		if (i1>=numeberSlot1){
			coin[0].play()
			clearInterval(slot1);
			return null;
		}
		slotTile = document.getElementById("slot1");
		if (slotTile.className=="a9"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin2(){
		i2++;
		if (i2>=numeberSlot2){
			coin[1].play()
			clearInterval(slot2);
			return null;
		}
		slotTile = document.getElementById("slot2");
		if (slotTile.className=="a9"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
    function spin3(){
        i3++;
		if (i3>=numeberSlot3){
			coin[2].play()
			clearInterval(slot3);
			return null;
		}
		slotTile = document.getElementById("slot3");
		if (slotTile.className=="a9"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)

    }
	function spin4(){
		i4++;
		if (i4>=numeberSlot4){
			coin[3].play()
			clearInterval(slot4);
			win.play();
            doing =false;
			return null;
		}
		slotTile = document.getElementById("slot4");
		if (slotTile.className=="a9"){
			slotTile.className = "a0";
		}
		sound++;
		if (sound==spin.length){
			sound=0;
		}
		spin[sound].play();
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}

}


function toggleAudio(){
	if (!audio){
		audio = !audio;
		for (var x of spin){
			x.volume = 0.5;
		}
		for (var x of coin){
			x.volume = 0.5;
		}
		win.volume = 1.0;
		lose.volume = 1.0;
	}else{
		audio = !audio;
		for (var x of spin){
			x.volume = 0;
		}
		for (var x of coin){
			x.volume = 0;
		}
		win.volume = 0;
		lose.volume = 0;
	}
	document.getElementById("audio").src = "res/icons/audio"+(audio?"On":"Off")+".png";
}

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}