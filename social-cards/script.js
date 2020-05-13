const friends = document.querySelector('.friends');

async function getPeople() {
  const res = await fetch('https://randomuser.me/api/?results=10');
  const people = await res.json();
  console.log(people);
  people.results.forEach(person => {
    let names = `${person.name.first} ${person.name.last}`;
    let nameParagraph = document.createElement('p');
    nameParagraph.classList.add('name');
    nameParagraph.textContent = names;

    let picture = person.picture.large;
    let avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = picture;
    avatar.alt = name;

    let personItem = document.createElement('div');
    personItem.classList.add('person');
    personItem.appendChild(avatar);
    personItem.appendChild(nameParagraph);

    friends.appendChild(personItem);
  });
}
getPeople();
