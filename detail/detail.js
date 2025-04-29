// 获取URL中的自行车ID
const bikeId = window.location.pathname.split('/').pop().replace('.html', '');

fetch('../data/bikes.json')
  .then(res => res.json())
  .then(data => {
    const bike = data.find(b => b.id === bikeId);
    const detailContainer = document.getElementById('bike-detail');

    if (bike) {
      detailContainer.innerHTML = `
        <div class="car-card">
          <img src="${bike.image}" alt="${bike.name}" />
          <div class="info">
            <h2>${bike.name}</h2>
            <p><strong>品牌：</strong>${bike.brand}</p>
            <p><strong>电池容量：</strong>${bike.battery}</p>
            <p><strong>续航：</strong>${bike.range} km</p>
            <p><strong>价格：</strong>${bike.price}</p>
            <p><strong>整车重量：</strong>${bike.weight} kg</p>
            <p><strong>电机功率：</strong>${bike.motorPower} W</p>
          </div>
        </div>
      `;
    } else {
      detailContainer.innerHTML = '<p>未找到对应的自行车信息。</p>';
    }
  });
