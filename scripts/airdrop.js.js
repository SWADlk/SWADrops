const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch('https://script.google.com/macros/s/AKfycbxB1eK89gWBtP2OaGjkabUiDih8bR5xN5ukgYv2OenApZ9-9v6SUqqIieiGldzI0Qlskw/exec')
  .then(res => res.json())
  .then(data => {
    const drop = data.find(d => d.id === id);
    const section = document.getElementById('airdropDetail');

    if (!drop) {
      section.innerHTML = `<p>Airdrop not found 😢</p>`;
      return;
    }

    section.innerHTML = `
      <h1>${drop.name}</h1>
      <img src="${drop.image}" alt="${drop.name}" style="max-width: 300px;" />
      <p>${drop.description}</p>
      <a href="${drop.refLink}" target="_blank" class="hero-btn">Join Airdrop</a>
    `;
  })
  .catch(err => {
    console.error("Failed to load airdrop detail:", err);
  });
