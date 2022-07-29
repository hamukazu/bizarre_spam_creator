function obfuscate(s, start, end, pads) {
    let ss=s;
    for (i = end; i>=start; i--) {
        if (Math.random()<0.15) {
            let c = pads[Math.floor(Math.random()*pads.length)]
            ss = ss.slice(0,i) + c + ss.slice(i);
        }
    }
    return ss;
}

function fill() {
    const text =  "時代の進展に伴い、国民経済の下降圧力を背景に、新たな投資手法を模索し、高いリターンが得られるかどうかは投資手法は重要です。時代の大きな変化の下で富の秘訣は教師の手にあり、毎月の安定収入は30％以上です。私たちの高収入の秘訣は、ウォールストリートの投資および財務管理チームであるということです。\nプロなので安心してください。\nチームへの参加と連絡先の詳細については私のプロフィールをクリックしてください。";
    const pads = "ᢦ᠂᠈゛";
    let result = obfuscate(text,0,145,pads).replace(/\n/g,"<br>");
    const element = document.getElementById("content")
    element.innerHTML = result;
}
