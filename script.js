 //local data
 const reviews = [
    {
    id:1,
    name: "John Doe",
    img:'img/person-img4.jpg',
    job:'UX Designer',
    text: "Vestibulum euismod libero nec purus tincidunt vehicula. Fusce ut feugiat velit. Nullam fringilla, sapien in suscipit malesuada, metus odio tempor ipsum, non vehicula justo augue non felis.",
    },
    {
    id:2,
    name: "Michael Johnson",
    job:'Logo Designer',
    img:'img/person-img3.jpg',
    text: "Nulla facilisi. Pellentesque lacinia aliquam orci, nec bibendum justo luctus eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."
    },
    {
    id:3,
    name: "Emily Davis",
    job:'JS Developer',
    img:'img/person-img2.jpg',
    text: "Sed at odio id ante tincidunt gravida a id libero. Integer bibendum ac velit vel malesuada. Nulla facilisi. Sed sit amet varius ipsum.",
    },
    {
    id:4,
    name: "Olivia White",
    job:'AI expert',
    img:'img/person-img1.jpg',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat, purus eu viverra mattis, elit odio tincidunt ipsum.",
    },
 ];
 //select item
    const img=document.getElementById('person-img');
    const author=document.getElementById('author');
    const job=document.getElementById('job');
    const info=document.getElementById('info');

    const prevBtn=document.querySelector('.prev-btn');
    const nextBtn=document.querySelector('.next-btn');
   

    // set item
    let currentItem=1;



window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job; // Assuming you have a 'job' element
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem >= reviews.length) {
        currentItem = 0; // Wrap around to the first person
    }
    showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1; // Wrap around to the last person
    }
    showPerson(currentItem);
});