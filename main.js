let cards = document.querySelectorAll(".container .card");
let selectors = document.querySelectorAll(".container .card .filter p");
let counter = 1;

// first load of the page
window.onload = function () {
  if (localStorage.getItem("load") === null) {
    showFilteredCard();
    localStorage.setItem("load", true);
  } else {
      
  }
};

window.onabort = function () {
    localStorage.clear();
}

// clear localStoroage
window.onabort 

// Selectors click handler
selectors.forEach((selector) => {
  selector.addEventListener("click", (e) => {
    e.preventDefault();

    selectors.forEach((selector) => {
      selector.classList.remove("active");
    });
    selector.classList.add("active");

    // hide and show cards again
    showFilteredCard();
  });
});

function showFilteredCard() {
  // Hide all cards
  cards.forEach((card) => {
    card.classList.add("hidden");
    if (counter > 1 && counter <= 7) {
      card.querySelector(".previous span").innerHTML = "Last Day";
    } else if (counter > 7 && counter <= 13) {
      card.querySelector(".previous span").innerHTML = "Last Week";
    } else if (counter > 13) {
      card.querySelector(".previous span").innerHTML = "Last Month";
    } else {
      card.classList.remove("hidden");
    }
    counter++;
  });

  // Reset the counter
  counter = 1;
  // Show cards that filtered
  for (let i = 0; i <= selectors.length; i++) {
    if (selectors[i].classList.contains("active")) {
      for (let j = 1; j < 7; j++) {
        cards[j + i * 6].classList.remove("hidden");
      }
    }
  }
}
