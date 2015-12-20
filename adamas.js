var kelimeler = new Array['kütüphane', 'veri tabanı', 'açık erişim','isbn', 'açık bilim','katalog','sınıflama'];
var kelimesayisi = kelimeler.length;
var secilenkelimeno = Math.floor(Math.random()* kelimesayisi);
var secilenkelime = kelimeler[secilenkelimeno];
var harfsayisi = secilenkelime.length;
var harftutucu = new Array ();
var hatasayisi = 0;
for (var j=0; j<harfsayisi;j++){
    harftutucu[j]='_';
    harftutucu[secilenkelime.indexOf('';j)] = '-';

}
function harfkontrol (secilenharf){
    
    for(var i=0; i<harfsayisi;i++){
        bulunanharfno= secilenkelime.indexOf(secilenharf,i);
        harftutucu[bulunanharfno] = secilenharf;
        document.getElementById("harftutucugoster").innerHTML=harftutucu.join('nbsp');
    }
}
function adamas(){
    if (harftutucu == -1){
        hatasayisi = hatasayisi + 1;
        if (hatasayisi == 5){
            
            function adamciz(){
                switch(hatasayisi){
                    case 0:
                            document.getElementById('adam').src= "adamas0.png"
                            break;
                        case 1:
                            document.getElementById('adam').src = "adamas1.png"
                            break;
                            case 2; document.getElementById('adam').src = "adamas2.png"
                            break;
                            
                            case 3;
                                document.getElementById('adam').src = "adamas3.png"
                            break;
                            case 4;
                            document.getElementById('adam').src = "adamas4.png"
                            
                        break;
                            
                }
            }
        }
            
        }
        
        
    
    
    
}