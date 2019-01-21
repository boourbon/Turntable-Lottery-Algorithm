
const express = require('express');
const server = express();

server.listen(2138);

server.use('/getRotate',(req,res)=>{
	//First Prize           1%  210 ～ 270
	//Second Prize          1.5%  -30 ～ 30
	//Third Prize           2%  30 ～ 90
	//Fourth Prize          2.5%  90 ～ 150
	//Fifth Prize           3%   270 ～ 330
	//No Prize              90%  150 ～ 210


let rdm = Math.random() * 100;

if(rdm>=0 && rdm <= 10){
	let rdm2 = Math.random() * 10;
	if(rdm2 >=0 && rdm2 <1){
			let num = (210 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'Congratulations! You Win First Prize!',num:num})
		}
		else if(rdm2 >=1 && rdm2 <2.5){
			let num = (-30 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'Congratulations! You Win Second Prize!',num:num})
		}
		else if(rdm2>=2.5 && rdm2 <4.5){
			let num = (30 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'Congratulations! You Win Third Prize!',num:num})
		}
		else if(rdm2>=4.5 && rdm2 <7){
			let num = (90 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'You are lucky! You Win Fourth Prize!',num:num})
		}
		else if(rdm2>=7 && rdm2 <10){
			let num = (270 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'You are lucky! You Win Fifth Prize!',num:num})
		}

	}
	else{
		let num = (150 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
		res.send({ok:1,msg:'Sorry, but thank you for participating.',num:num})
	}


});
server.use('',express.static('./'))
