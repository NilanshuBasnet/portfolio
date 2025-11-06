// --- Project Carousel Data ---

// Array of project objects containing data to populate the carousel cards
const projectsData = [
  { id: 1, title: "AI Movie Recommendation", category: "Web App", techTag: "Gemini + Tmdb API", status: "Live Site", imagePlaceholder: "assets/MovieMatePoster.png", link: "https://movie-recommendation-coral-iota.vercel.app/" },
  { id: 2, title: "Weather App", category: "Webpage", techTag: "Javascript", status: "Github Project", imagePlaceholder: "assets/weatherApp.png", link: "https://github.com/NilanshuBasnet/WeatherApp"},
  { id: 3, title: "Memory Game", category: "Webpage", techTag: "React", status: "Game", imagePlaceholder: "assets/memory.png", link: "https://github.com/NilanshuBasnet/memoryGame" },
  { id: 4, title: "To-Do List", category: "Storage", techTag: "Javascript / HTML", status: "Live Site", imagePlaceholder: "assets/todo.png", link: "https://todo-list-eta-puce.vercel.app/"},
  { id: 5, title: "Personal Portfolio", category: "Portfolio", techTag: "Gemini + ChatGPT", status: "This Site", imagePlaceholder: "assets/portfolioWebsite.png", link: "https://nilanshubasnet.com" }
];

// Get references to the carousel elements
const track = document.getElementById('carousel-track');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// --- Carousel Population Functionality ---

// Iterate through the project data and create HTML card elements
projectsData.forEach(project => {
  const card = document.createElement('div');
  // Define class for card styling and flex shrinking
  card.className = "w-[250px] bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 hover:scale-105 transition-transform duration-300";
  // Set the inner HTML template for the project card
  card.innerHTML = `
  <a href="${project.link}" target="_blank">
    <img src="${project.imagePlaceholder}" alt="${project.title}" class="w-full h-[210px] object-cover" />
    <div class="p-4">
      <h3 class="font-semibold text-gray-900 mb-1">${project.title}</h3>
      <p class="text-gray-500 text-sm mb-2">${project.category} • ${project.techTag}</p>
      <span class="text-xs font-medium text-red-600">${project.status}</span>
    </div></a>
  `;
  // Append the newly created card to the carousel track
  track.appendChild(card);
});

// Defines the amount of pixels to scroll when a button is clicked (roughly one card width + gap)
const scrollAmount = 270; 

// --- Carousel Navigation Functionality ---

// Event listener for the Previous button
prevButton.addEventListener('click', () => {
  // Smoothly scroll the track content to the left
  track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  // Check button state after a short delay to account for smooth scrolling
  setTimeout(checkButtons, 200);
});

// Event listener for the Next button
nextButton.addEventListener('click', () => {
  // Smoothly scroll the track content to the right
  track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  // Check button state after a short delay to account for smooth scrolling
  setTimeout(checkButtons, 200);
});

// Function to check the state of the scroll buttons and enable/disable them
function checkButtons() {
  // Disable previous button if scrolled all the way to the left (start)
  prevButton.disabled = track.scrollLeft <= 0;
  // Disable next button if scrolled all the way to the right (end). Subtract 1 for floating point safety.
  nextButton.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
}

// Initialize buttons state when the window loads
window.addEventListener('load', () => {
  checkButtons();
});

// --- Dynamic Year Update for Footer ---

// Sets the current year dynamically in the footer copyright notice
document.getElementById('current-year').textContent = new Date().getFullYear();
// --- Changing Words Animation ---
    document.addEventListener('DOMContentLoaded', () => {
        const words = document.querySelectorAll('.changing-word');
        let currentIndex = 0;
        const animationDuration = 3000; // Time each word is displayed (3 seconds)

        function showNextWord() {
            // 1. Remove the 'active' class from the current word
            words[currentIndex].classList.remove('active');

            // 2. Move to the next word, or loop back to the first one
            currentIndex = (currentIndex + 1) % words.length;

            // 3. Add the 'active' class to the new current word
            words[currentIndex].classList.add('active');
        }

        // Initialize: show the first word immediately
        if (words.length > 0) {
            words[currentIndex].classList.add('active');
        }

        // Start the continuous animation loop
        setInterval(showNextWord, animationDuration);

    });
