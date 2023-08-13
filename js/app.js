const dropDown = document.querySelector(".dropdownMenu");
const dropOptions = document.querySelector(".drop-options");
const toggle = document.querySelector(".toggle");
const icon = document.querySelector(".bx");
const countries = document.querySelector(".countries");
const search = document.querySelector(".search");
const region = document.querySelectorAll(".regions");
const regionName = document.getElementsByClassName("regionName");
const singlePage = document.getElementsByClassName("openSingle");

console.log(singlePage);

toggle.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-mode");
  toggle.classList.toggle("dark-mode");
  icon.classList.toggle("bxs-moon");
});

dropDown.addEventListener("click", (e) => {
  dropOptions.classList.toggle("show-options");
});

async function getCountries() {
  const url = await fetch("https://restcountries.com/v2/all");
  const res = await url.json();
  res.forEach((api) => {
    showCountry(api);
  });
}

getCountries();

//render countries

function showCountry(data) {
  const country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = `
  <div  onclick="openSingle('${data.name}')">
    <div class="country-img">
    <img src=${data.flag} alt="">
    </div>

    <div class="country-details">
      <h5 class="countryName">${data.name}</h5>
      <p><strong>population:</strong>${data.population}</p>
      <p class="regionName"><strong>Region:</strong>${data.region}</p>
      <p><strong>Capital:</strong>${data.capital}</p>
    </div>
    </div>`;
  countries.appendChild(country);
}

const countryName = document.getElementsByClassName("countryName");

search.addEventListener("input", (e) => {
  Array.from(countryName).forEach((country) => {
    if (country.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      console.log(country);
      country.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      country.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
});

region.forEach((region) => {
  region.addEventListener("click", (e) => {
    Array.from(regionName).forEach((element) => {
      if (
        element.innerText.includes(region.innerText) ||
        region.innerText == "All"
      ) {
        element.parentElement.parentElement.parentElement.style.display =
          "grid";
      } else {
        element.parentElement.parentElement.parentElement.style.display =
          "none";
      }
    });
  });
});

//push
function openSingle(name) {
  let dataDb = [];
  const url = fetch(`https://restcountries.com/v2/name/${name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("viewedCountry", JSON.stringify(data));
      window.location.href = `detail.html`;
    });
}

// singlePage.addEventListener("click", (e) => {
//   openSingle();
// });
