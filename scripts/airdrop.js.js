const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch('https://opensheet.elk.sh/2PACX-1vT943qVS4mINhlyhCENZ2TlwD75e7uvjSIdCtd97XMQ1R3aLcLO1zPOAvW-0LTDoPK1hvBxoLYtytcN/Sheet1')
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
  });
