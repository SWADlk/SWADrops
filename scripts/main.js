fetch('https://script.google.com/macros/s/AKfycbxB1eK89gWBtP2OaGjkabUiDih8bR5xN5ukgYv2OenApZ9-9v6SUqqIieiGldzI0Qlskw/exec')
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
