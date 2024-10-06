const maisonMargielaArticle = {
    title: "Maison Margiela Fanpage",
    subheadingImage: "pics/Remove background project.png", 
    designer: {
        name: "Martin Margiela",
        avatarImage: "https://drive.google.com/uc?export=view&id=1uuFogA4MQIMw4aCAcrBJAKDqmeZ-5mXd" // 使用Google Drive的图片链接
    },
    highlights: ["Anti-fashion", "Tabi Boots", "Repurposed Materials"],
    foundedYear: 1988,
    description: "Maison Margiela, founded by the enigmatic designer Martin Margiela, is known for its avant-garde approach, focusing on deconstruction, anonymity, and a bold reinterpretation of fashion norms. Since 2014, John Galliano has carried on the label’s legacy, bringing theatrical flair to the brand.",
    isFeatured: true
};

document.querySelector('.article-title').innerText = maisonMargielaArticle.title;
document.querySelector('.subheading-image').setAttribute('src', maisonMargielaArticle.subheadingImage); 
document.querySelector('.designer-name').innerText = maisonMargielaArticle.designer.name;
document.querySelector('.designer-image').setAttribute('src', 'https://drive.google.com/uc?export=view&id=1uuFogA4MQIMw4aCAcrBJAKDqmeZ-5mXd');

const highlightsContainer = document.querySelector('.article-highlights');
highlightsContainer.innerHTML = ''; 
maisonMargielaArticle.highlights.forEach(highlight => {
    const highlightElement = document.createElement('span');
    highlightElement.classList.add('highlight');
    highlightElement.innerText = highlight;
    highlightsContainer.appendChild(highlightElement);
});

document.querySelector('.founded-year').innerText = `Founded: ${maisonMargielaArticle.foundedYear}`;
document.querySelector('.article-description p').innerText = maisonMargielaArticle.description;
