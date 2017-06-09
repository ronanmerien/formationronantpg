function slidein() {
    document.getElementById("slide").outerHTML = "<div class=\"slideshow\" id=\"slide\" style=\"height: 0; padding: 0; transition: 0.3s\"></div>";
    document.getElementById("clicker").outerHTML = "<input type=\"submit\" value=\"Ok\" id=\"clicker\" onclick=\"slideout()\"/>";
}

function slideout() {
    document.getElementById("slide").outerHTML = "<div class=\"slideshow\" id=\"slide\">Fusce efficitur arcu et molestie imperdiet. Nunc finibus erat orci, ac sagittis sem rhoncus in. Vestibulum ut tristique enim. Morbi in justo vel neque dictum vehicula at non massa. Curabitur molestie leo leo, et maximus ex volutpat non. Donec laoreet lacinia elit ac tristique. Mauris semper purus sit amet aliquam viverra. Curabitur quis vestibulum lorem, et sagittis eros. Nam ac porta ex. Pellentesque ut leo eget massa congue vestibulum feugiat non nulla. Nunc ante ipsum, laoreet rhoncus vestibulum et, facilisis non nunc. Nulla leo lorem, pretium et scelerisque sit amet, sollicitudin id ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras nec nisl augue. Proin convallis augue diam, at porttitor ligula ultricies eget. Vivamus ut urna quis odio aliquam commodo.</div>";
    document.getElementById("clicker").outerHTML = "<input type=\"submit\" value=\"Ok\" id=\"clicker\" onclick=\"slidein()\"/>";
}