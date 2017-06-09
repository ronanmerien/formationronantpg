function slidein() {
    getRandomColor();
    var color = document.getElementById("color").innerHTML;
    document.getElementById("slide").outerHTML = "<div class=\"slideshow\" id=\"slide\" style=\"animation: transa 1s forwards;\">Fusce efficitur arcu et molestie imperdiet. Nunc finibus erat orci, ac sagittis sem rhoncus in. Vestibulum ut tristique enim. Morbi in justo vel neque dictum vehicula at non massa. Curabitur molestie leo leo, et maximus ex volutpat non. Donec laoreet lacinia elit ac tristique. Mauris semper purus sit amet aliquam viverra. Curabitur quis vestibulum lorem, et sagittis eros. Nam ac porta ex. Pellentesque ut leo eget massa congue vestibulum feugiat non nulla. Nunc ante ipsum, laoreet rhoncus vestibulum et, facilisis non nunc. Nulla leo lorem, pretium et scelerisque sit amet, sollicitudin id ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras nec nisl augue. Proin convallis augue diam, at porttitor ligula ultricies eget. Vivamus ut urna quis odio aliquam commodo.</div>";
    document.getElementById("clicker").outerHTML = "<input type=\"submit\" value=\"White\" id=\"clicker\" onclick=\"slideout()\"/>";
    document.getElementById("coque").outerHTML = "<div class=\"coque\" id=\"coque\" style=\"background-color:"+ color +"\"><div class=\"ecran\"></div><div class=\"button\"></div></div>";
}

function slideout() {
    getRandomColor();
    var color = document.getElementById("color").innerHTML;
    document.getElementById("slide").outerHTML = "<div class=\"slideshow\" id=\"slide\" style=\"animation-name: transb; animation-duration: 1s;\">Fusce efficitur arcu et molestie imperdiet. Nunc finibus erat orci, ac sagittis sem rhoncus in. Vestibulum ut tristique enim. Morbi in justo vel neque dictum vehicula at non massa. Curabitur molestie leo leo, et maximus ex volutpat non. Donec laoreet lacinia elit ac tristique. Mauris semper purus sit amet aliquam viverra. Curabitur quis vestibulum lorem, et sagittis eros. Nam ac porta ex. Pellentesque ut leo eget massa congue vestibulum feugiat non nulla. Nunc ante ipsum, laoreet rhoncus vestibulum et, facilisis non nunc. Nulla leo lorem, pretium et scelerisque sit amet, sollicitudin id ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras nec nisl augue. Proin convallis augue diam, at porttitor ligula ultricies eget. Vivamus ut urna quis odio aliquam commodo.</div>";
    document.getElementById("clicker").outerHTML = "<input type=\"submit\" value=\"Purple\" id=\"clicker\" onclick=\"slidein()\"/>";
    document.getElementById("coque").outerHTML = "<div class=\"coque\" id=\"coque\" style=\"background-color:"+ color +"\"><div class=\"ecran\"></div><div class=\"button\"></div></div>";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("color").innerHTML = color;
    return color;
}