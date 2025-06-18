fetch('https://script.google.com/macros/s/AKfycbwxiw0R-XmhUUSpZ1PPrikXuzi6d6ikecqy4pkg5j1vCN19WjdmIGp4G5ZMBji9OHZ9/exec')
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector('.airdrops-list');
    container.innerHTML = ""; // clear old entries
    data.forEach(drop => {
      const card = document.createElement('div');
      card.className = 'airdrop-card';
      card.innerHTML = `
        <img src="${drop.image}" alt="${drop.name}" />
        <h3>${drop.name}</h3>
        <a href="airdrop.html?id=${drop.id}" class="detail-link">View Details</a>
      `;
      container.appendChild(card);
    });
  });
