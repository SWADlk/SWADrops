const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://script.google.com/macros/s/AKfycbwxiw0R-XmhUUSpZ1PPrikXuzi6d6ikecqy4pkg5j1vCN19WjdmIGp4G5ZMBji9OHZ9/exec")
  .then((res) => res.json())
  .then((data) => {
    console.log("Fetched ID:", id);
    console.log("Data:", data);

    const drop = data.find((d) => d.id === id);
    const section = document.getElementById("airdropDetail");

    if (!drop) {
      section.innerHTML = `<p>Airdrop not found 😢</p>`;
      return;
    }

    section.innerHTML = `
      <h1>${drop.name}</h1>
      <img src="${drop.image}" alt="${drop.name}" />
      <p>${drop.description}</p>
      <a href="${drop.refLink}" target="_blank" class="hero-btn">Join Airdrop</a>
      <a href="index.html" class="back-link">← Back to Airdrops</a>
    `;
  })
  .catch((err) => {
    console.error("Fetch error:", err);
    document.getElementById("airdropDetail").innerHTML = `<p>Error loading airdrop 😓</p>`;
  });
