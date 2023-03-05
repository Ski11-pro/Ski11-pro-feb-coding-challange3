var imageLinks = [    "https://picsum.photos/200/300",    "https://picsum.photos/200/300",    "https://picsum.photos/200/300",    "https://picsum.photos/200/300",    "https://picsum.photos/200/300",    "https://picsum.photos/200/300"];

var container = document.querySelector('.container');

for (var i = 0; i < imageLinks.length; i++) {
    
    var card = document.createElement('div');
    card.className = 'card';

    
    var img = document.createElement('img');
    img.src = imageLinks[i];
    img.alt = 'Bild ' + (i + 1);

    
    var h2 = document.createElement('h2');
    h2.textContent = 'Hej';

    
    card.appendChild(img);
    card.appendChild(h2);
    container.appendChild(card);
}
