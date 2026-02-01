const storyContainer = document.querySelector('.story-container');

const scaryStoryBtn = document.querySelector('#scary-btn');
const funnyStoryBtn = document.querySelector('#funny-btn');
const adventureStoryBtn = document.querySelector('#adventure-btn');

const resultParagraph = document.querySelector('#result');

const storyObj = {
    scary: {
        story: "In the dark woods, a group of friends stumbled upon an old abandoned cabin. They entered the cabin and awakened something malevolent that had been dormant for centuries.",
        borderColor: "#ee4b2b"
    },
    funny: {
        story: "A man slipped on a banana peel, stood up, slipped again, and decided bananas were his mortal enemy.",
        borderColor: "yellow"
    },
    adventure: {
        story: "With a map in hand and courage in their hearts, they set sail toward the unknown seas.",
        borderColor: "green"
    }
};

function displayStory(genre) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
}

scaryStoryBtn.addEventListener('click', () => displayStory('scary'));
funnyStoryBtn.addEventListener('click', () => displayStory('funny'));
adventureStoryBtn.addEventListener('click', () => displayStory('adventure'));
