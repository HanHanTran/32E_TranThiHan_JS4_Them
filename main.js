// Bài tập 1: Tính ngày tháng năm
// input: nhapNgayb1: Number, nhapThangb1:Number, nhapNamb1: Number
// output: ngayHomQua,ngayMai : String
// xử lý: ngayHomQua-1, ngayMai +1

document.getElementById('btnngayHomQua').onclick = function () {
    var nhapNgayb1 = Number(document.getElementById('nhapNgayb1').value);
    var nhapThangb1 = Number(document.getElementById('nhapThangb1').value);
    var nhapNamb1 = Number(document.getElementById('nhapNamb1').value);
    var ketQuaHomQua = '';
    // var ketQuaNgayMai = '';
   if (nhapNgayb1 == 1 && nhapThangb1 == 1 || nhapThangb1 == 3 || nhapThangb1 == 5 || nhapThangb1 ==7 || nhapThangb1 == 10 || nhapThangb1 ==12&& nhapNamb1 == nhapNamb1) {
       nhapNgayb1 = 31;
       ketQuaHomQua = (nhapNgayb1 -1) + "/" + (nhapThangb1-1) + "/" + nhapNamb1;

       
   } else if (nhapNgayb1 == 1 && nhapThangb1 == 4 || nhapThangb1 == 6 || nhapThangb1 == 9 || nhapThangb1 ==11 && nhapNamb1 == nhapNamb1){
    nhapNgayb1 = 30;
    ketQuaHomQua = (nhapNgayb1 -1) + "/" + (nhapThangb1-1) + "/" + nhapNamb1;
   } else if (nhapThangb1 == 2 & nhapNamb1 % 4 == 0 && nhapNamb1 % 100 !==0 || nhapNamb1 %400 == 0){
    nhapNgayb1 = 29;
    ketQuaHomQua = (nhapNgayb1 -1) + "/" + (nhapThangb1) + "/" + nhapNamb1;
    
   } else{
    ketQuaHomQua = (nhapNgayb1 -1) + "/" + (nhapThangb1) + "/" + nhapNamb1;

   }
   document.getElementById('ketQua_b1').innerHTML = ketQuaHomQua;
}
document.getElementById('btnngayMai').onclick = function () {
    var nhapNgayb1 = Number(document.getElementById('nhapNgayb1').value);
    var nhapThangb1 = Number(document.getElementById('nhapThangb1').value);
    var nhapNamb1 = Number(document.getElementById('nhapNamb1').value);
    var ketQuaNgayMai = '';
    // var ketQuaNgayMai = '';
   if (nhapNgayb1 == nhapNgayb1 && nhapThangb1 == nhapThangb1 && nhapNamb1 == nhapNamb1) {
       ketQuaNgayMai = (nhapNgayb1+1) + "/" + nhapThangb1 + "/" + nhapNamb1;
 
       
   }
   document.getElementById('ketQua_b1').innerHTML = ketQuaNgayMai;
}



// bài tập 2: tính ngày
// input: nhapThangb2: Number, nhapNamb2: Number
// output: số ngày 
// xửu lý: Tháng 4,6,9,11 có 30 ngày
            // Tháng 1,3,5,9,10,12 có 31 ngày
            // Năm nhuận là năm chia hết cho 4 và không chia hết cho 100 hoặc chia hết cho 400 : tháng 2 sẽ co 29 ngảy
            // Năm không nhuận tháng 2 sẽ có 28 ngày




document.getElementById('btntinhNgay').onclick = function () {
    var nhapThangb2 = Number(document.getElementById('nhapThangb2').value);
    var nhapNamb2 = Number(document.getElementById('nhapNamb2').value);
    var ketQuab3 = 0;
    if (nhapThangb2 == 4 || nhapThangb2 == 6 || nhapThangb2 == 9 || nhapThangb2 == 11) {
        ketQuab3 = 30;
    } else if (nhapThangb2 == 1 || nhapThangb2 == 3 || nhapThangb2 == 5 || nhapThangb2 == 7 || nhapThangb2 ==10 || nhapThangb2 ==12){
        ketQuab3 = 31;
    
    } else if(nhapThangb2 ==2 && nhapNamb2 % 4 === 0 && nhapNamb2 % 100 !== 0 || nhapNamb2 % 400 ===0) {
        ketQuab3 = 29 ;
        // năm nhuận

    } else{
        ketQuab3 = 28;
        // năm không nhuận

    }
    document.getElementById('soNgay').innerHTML = 'Số ngày là: '+ketQuab3;

}


// Bài tập 3: Đọc số
// input: nhaoSob3: NUMBER
// output:  ketQua:string
// xử lý:
// Tiến hành tách thành 3 số hàng trăm, chục, đơn vị bằng cách : 
// - tram = Math.floor(N/100)
// - chuc = Math.floor(N %100 /10)
// - donvi = Math.floor(N %100 %10)

// Sử dụng switch case để tiến hành đọc lần lượt các số hàng trăm, hàng chục và đơn vị
// - Trường hợp đặc biệt khi người dùng nhập vào số có hàng chục = 0 và đơn vị = 0  tiến hành xuất ra màn hình chỉ đọc số hàng trăm
// - Trường hợp số hàng chục = 0 gán chục bằng "lẻ"
// - Trường hợp số hàng đơn vị  = 0 gán dơn vị bằng "" (bỏ qua đơn vị)
// - Trường hợp người dùng nhập sai số N >999 || N<99 thì xuất ra màn hình người dùng nhập sai số  
// Đầu ra : xuất ra màn hình cách đọc của số vừa nhập vào 


document.getElementById('btndocSo').onclick = function() {
        var demso = Number(document.getElementById('nhapSob3').value);
        var docSoTram = '';
        var docSoChuc = '';
        var docSoDonVi = '';
        var temp = ''; // gán giá trị khi nhập sai
        var tram = Math.floor(demso / 100);
        var chuc = Math.floor(demso % 100 / 10);
        var donvi = demso % 100 % 10;
        switch (tram) {
            case 1: {
                docSoTram = 'một trăm'
            }; break;
            case 2: {
                docSoTram = 'hai trăm'
            }; break;
            case 3: {
                docSoTram = 'ba trăm'
            }; break;
            case 4: {
                docSoTram = 'bốn trăm'
            }; break;
            case 5: {
                docSoTram = 'năm trăm'
            }; break;
            case 6: {
                docSoTram = 'sáu trăm'
            }; break;
            case 7: {
                docSoTram = 'bảy trăm'
            }; break;
            case 8: {
                docSoTram = 'tám trăm'
            }; break;
            case 9: {
                docSoTram = 'chín trăm'
            }; break;
            default: {
                docSoTram = ''
            }; break;
        }
        switch (chuc) {
            case 1: {
                docSoChuc = 'một mươi'
            }; break;
            case 2: {
                docSoChuc = 'hai mươi'
            }; break;
            case 3: {
                docSoChuc = 'ba mươi'
            }; break;
            case 4: {
                docSoChuc = 'bốn mươi'
            }; break;
            case 5: {
                docSoChuc = 'năm mươi'
            }; break;
            case 6: {
                docSoChuc = 'sáu mươi'
            }; break;
            case 7: {
                docSoChuc = 'bảy mươi'
            }; break;
            case 8: {
                docSoChuc = 'tám mươi'
            }; break;
            case 9: {
                docSoChuc = 'chín mươi'
            }; break;
            default: {
                docSoChuc = ' lẻ'
            }; break;
        }
        switch (donvi) {
            case 1: {
                docSoDonVi = 'một '
            }; break;
            case 2: {
                docSoDonVi = 'hai '
            }; break;
            case 3: {
                docSoDonVi = 'ba '
            }; break;
            case 4: {
                docSoDonVi = 'bốn '
            }; break;
            case 5: {
                docSoDonVi = 'năm '
            }; break;
            case 6: {
                docSoDonVi = 'sáu '
            }; break;
            case 7: {
                docSoDonVi = 'bảy '
            }; break;
            case 8: {
                docSoDonVi = 'tám '
            }; break;
            case 9: {
                docSoDonVi = 'chín '
            }; break;
            default: {
                docSoDonVi = '';
            }; break;
        }
        if(demso>999 || demso <99){
            temp = 'Nhập sai số ! Vui lòng nhập lại'
            document.getElementById('ketQuab3').innerHTML = temp;
            return 0;
        }
        if (donvi === 0 && chuc === 0) {
            document.getElementById('ketQuab3').innerHTML = docSoTram;
        }
        else {
            document.getElementById('ketQuab3').innerHTML = docSoTram + ' ' + docSoChuc + ' ' + docSoDonVi;
        }
    
    
    
}
// bài tập 4: tìm sinh viên xa trường nhất
// input: nhapToaDoX: Number, nhapToaDoY: Number
// output: tìm d max và in ra tên sinh viên xa trừơng nhất
// xuwr lý
document.getElementById('tim').onclick = function(){
    var nhapTen1 = document.getElementById('nhapTen1').value;
    var x1 = Number(document.getElementById('nhapToaDoX1').value);
    var y1 = Number(document.getElementById('nhapToaDoY1').value);

    var nhapTen2 = document.getElementById('nhapTen2').value;
    var x2 = Number(document.getElementById('nhapToaDoX2').value);
    var y2 = Number(document.getElementById('nhapToaDoY2').value);

    var nhapTen3 = document.getElementById('nhapTen3').value;
    var x3 = Number(document.getElementById('nhapToaDoX3').value);
    var y3 = Number(document.getElementById('nhapToaDoY3').value);


    var xT = Number(document.getElementById('nhapToaDoXT').value);
    var yT = Number(document.getElementById('nhapToaDoYT').value);
    var ketQuaB4 = '';
    if( Math.sqrt((xT - x1)*(xT-x1) + (yT -y1)*(yT-y1)) > Math.sqrt((xT - x2)*(xT-x2) + (yT -y2)*(yT-y2)) > Math.sqrt((xT - x3)*(xT-x3) + (yT -y3)*(yT-y3))) {
     ketQuaB4 = nhapTen2;
        
    }else if( Math.sqrt((xT - x2)*(xT-x2) + (yT -y2)*(yT-y2)) > Math.sqrt((xT - x1)*(xT-x1) + (yT -y1)*(yT-y1)) > Math.sqrt((xT - x3)*(xT-x3) + (yT -y3)*(yT-y3))) {
     ketQuaB4 = nhapTen3;

    } else {
    ketQuaB4 = nhapTen1;
     
}
document.getElementById('ketQuab4').innerHTML = 'Sinh viên xa trường nhất là: '+ ketQuaB4;
}
