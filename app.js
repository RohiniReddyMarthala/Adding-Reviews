const pplReviews = [
    {
      name: 'julie jain',
      job: 'software developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "The components of the environment likely to impact the brands' ability to realize its vision include competitors, customers, and the economy.",
    },
    {
      name: 'mary imnesia',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'This work discusses the emergence of technology and streaming services and some psychological factors that may be predictive of the emergence of binge-watching behavior.',
    },
    {
      name: 'Ryan mchall',
      job: 'software tester',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'The intended audience is men and women between the ages of 15 and 20 or the ones who were born after the 2000s. While the stations were observed live, the nature of the assignment required a further examination of the content.',
    },
    {
      name: 'Amrit yugoslar',
      job: 'backend developer',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Managed Services provide access to 24x7 reservations, help desk, and video infrastructure which breaks the costs down into two components: upfront costs and recurring costs. ',
    },
  ];

const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const randomBtn=document.querySelector(".random-btn");

currentItem=0
window.addEventListener("DOMContentLoaded", ()=>{
    personDetails();
})

function personDetails(){
    const item= pplReviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem<0){
        currentItem=pplReviews.length-1;
    }
    personDetails();
});

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem>pplReviews.length-1){
        currentItem=0;
    }
    personDetails();
});

randomBtn.addEventListener('click', function(){
    currentItem=Math.floor(Math.random()*pplReviews.length)
    personDetails(currentItem);
});