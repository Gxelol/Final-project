export async function getAgents() {
  return await fetch(`https://valorant-api.com/v1/agents`)
    .then(async function (res) {
      if (res.ok) {
        const data = await res.json();
        return data;
      }

      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getWeapons() {
  return await fetch(`https://valorant-api.com/v1/weapons`)
    .then(async function (res) {
      if (res.ok) {
        const data = await res.json();
        return data;
      }

      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getMaps() {
  return await fetch(`https://valorant-api.com/v1/maps`)
    .then(async function (res) {
      if (res.ok) {
        const data = await res.json();
        return data;
      }

      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
}
