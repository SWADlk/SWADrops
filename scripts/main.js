fetch('https://opensheet.elk.sh/2PACX-1vT943qVS4mINhlyhCENZ2TlwD75e7uvjSIdCtd97XMQ1R3aLcLO1zPOAvW-0LTDoPK1hvBxoLYtytcN/Sheet1')
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector('.airdrops-list');
    data.forEach(drop => {
      const card = document.createElement('div');
      card.className = 'airdrop-card';
      card.innerHTML = `
        <img src="${drop.image}" alt="${drop.name}" />
        <h3>${drop.name}</h3>
        <p>${drop.description}</p>
        <a href="airdrop.html?id=${drop.id}" class="detail-link">View Details</a>
      `;
      container.appendChild(card);
    });
  });
