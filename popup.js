document.getElementById('checkLinks').addEventListener('click', async () => {
  const links = document.getElementById('linkInput').value.split('\n');
  const workingLinks = [];
  const brokenLinks = [];

  for (var i = 0; i < links.length; i++) {
    try {
      var link = links[i];
      link = link.replace('https://', '').replace('http://', '');
      const response = await fetch('http://' + link.trim());
      if (response.ok) {
        workingLinks.push(link);
      } else {
        brokenLinks.push(link);
      }
    } catch (error) {
      brokenLinks.push(link);
    }
  }

  document.getElementById('workingLinks').innerHTML = workingLinks
    .map(link => `<li>${link}</li>`)
    .join('');

  document.getElementById('brokenLinks').innerHTML = brokenLinks
    .map(link => `<li>${link}</li>`)
    .join('');
});
