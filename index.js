const names = ["Phil", "Tammy", "Karl", "Trent"];
const occupations = ["Designer", "Programmer", "Engineer", "Developer"];
const prices = [70, 30, 15, 80];
const maxFreelancers = 5;
const freelancers = [
    { name: "Sam", occupation: "Writer", price: 30 },
    { name: "Lauren", occupation: "Tutor", price: 40 },
    { name: "Tom", occupation: "Tester", price: 90 },
];

const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

render();

function render() {
    const namesList = document.querySelector("#names");
    const occupationList = document.querySelector("#occupations");
    const pricesList = document.querySelector("#prices");
    const averagePriceElement = document.querySelector("#average-price");

    namesList.innerHTML = "";
    occupationList.innerHTML = "";
    pricesList.innerHTML = "";

    freelancers.forEach((freelancer) => {
        const nameElement = document.createElement("li");
        nameElement.textContent = freelancer.name;
        nameElement.classList.add(freelancer.name);
        namesList.appendChild(nameElement);

        const occupationElement = document.createElement("li");
        occupationElement.textContent = freelancer.occupation;
        occupationElement.classList.add(freelancer.occupation);
        occupationList.appendChild(occupationElement);

        const priceElement = document.createElement("li");
        priceElement.textContent = freelancer.price; // Use textContent instead of classList.add
        pricesList.appendChild(priceElement);
    });

    const averagePrice = calculateAveragePrice();
    averagePriceElement.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
}

function calculateAveragePrice() {
    const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const averagePrice = totalPrice / freelancers.length || 0;
    return averagePrice;
}

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];

    if (freelancers.length >= maxFreelancers) {
        clearInterval(addFreelancerIntervalId);
    }

    freelancers.push({ name, occupation, price });

    render();
}
