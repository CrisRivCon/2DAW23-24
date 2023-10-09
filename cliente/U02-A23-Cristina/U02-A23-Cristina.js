
for (i = 6, j = 1; j <= 7; i--, j++){
    if ( j == 7){
        j % 2 != 0 ? document.write("*" + "&nbsp;*".repeat(j - 1) + "<br>"): null;
    }else{
        j % 2 != 0 ? document.write("&nbsp;".repeat(i) + "*" + "&nbsp;*".repeat(j - 1) + "<br>"): null;
    }
}

for (i = 0, j = 6; j >= 0; i++, j--){
        j % 2 != 0 ? document.write("&nbsp;".repeat(i) + "&nbsp;*".repeat(j) + "<br>"): null;

}

