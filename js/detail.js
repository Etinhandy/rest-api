async function openCountry(border) {
  const url = await fetch("https://restcountries.com/v2/all");
  const response = await url.json();
  // console.log(response);
  // console.log(border);
  let singleCountry = response.filter(
    (country) => country.alpha3Code == border
  );
  localStorage.setItem("viewedCountry", JSON.stringify(singleCountry));
      window.location.href = `detail.html`;
  // console.log(singleCountry);
}

// openCountry()

const countryWrapper = document.getElementById("country-wrapper");

function renderSingle() {
  let newObject = localStorage.getItem("viewedCountry");
  let country = JSON.parse(newObject);

  country = country[0];
  //   console.log(country);
  countryWrapper.innerHTML = `
    <div class="detail-container">
        <div class="country-flag">
          <div class="flag-img">
            <img src="${country.flag}" alt="" />
          </div>
        </div>
        <div class="meta-data">
          <h1>${country.name}</h1>
          <div class="detail-row" onclick="">
            <div class="colmn-1">
              <p><strong>Native name:</strong> ${country.nativeName}</p>
              <p><strong>Population:</strong>${country.population}</p>
              <p><strong>Region:</strong> ${country.region}</p>
              <p><strong>Sub region</strong>${country.subregion}</p>
              <p><strong>Capital:</strong>${country.capital}</p>
            </div>

            <div class="column-2">
              <p><strong>Top Level Domain:</strong>${
                country.topLevelDomain[0]
              }</p>
              <p>
                <strong>Currencies:</strong> ${
                  country.currencies
                    ? country.currencies[0].name
                    : "No currency avalable"
                }
              </p>
              <p><strong>Languages:</strong>${country.languages[0].name}</p>
            </div>
          </div>
          <div class="last-row">
            <p><strong>Border countries:</strong></p>
            <div class="border-coun">
              ${
                country.borders
                  ? country.borders
                      .map((border) => {
                        return `<p class="border" onclick="openCountry('${border}')">${border}</p>`;
                      })
                      .join(" ")
                  : "No border"
              }
            </div>
          </div>
        </div>
      </div>`;
}

renderSingle();
