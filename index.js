const SelectAllCards = document.querySelectorAll('.img-card');

SelectAllCards.forEach(val => {
    val.addEventListener('click', function() {
        console.log(this.dataset);

        var image = document.createElement('img');
        image.setAttribute('src', this.dataset.imgSrc);
        image.setAttribute('alt', this.dataset.imgCaption);
        
        var fullImage = document.getElementById('fullImage');
        var imageText = document.getElementById('imageText');

        fullImage.setAttribute('src', this.dataset.imgSrc);
        fullImage.setAttribute('alt', this.dataset.imgCaption);

        imageText.textContent = this.dataset.imgCaption + " (image and text displays after card below clicked!!!)";
    })
})