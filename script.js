const scorpyExtendedBio = `<p class="intro"> Born under traumatic circumstances, Scorpius endured a very difficult childhood under Scarran guardianship. He relented for decades and was eventually able to escape his captors. </p>`;

const grid = document.querySelector('.grid');
const fullGrid = `<article id="scorpy" class="scorpy">
<h3>Scorpius</h3>
<p>A multi-dimensional villain with complex motivations and a deep history. Pragmatic, resourceful and ruthless, he will stop at nothing to get what he wants.</p> 
<img src="https://i.pinimg.com/originals/f9/93/60/f993604bc6e26595c4a2ce50387e7939.jpg" alt="Scorpius can often be seen wearing a menacing expression on his face, letting others know he is serious.">
</article>

<article id="crichton">
<h3>Crichton</h3>
<p>Commander John Crichton is Farscape's main protagonist. In a far away part of the galaxy, John finds himself at the centre of a series of incredible adventures.</p> 
<img src="https://www.eightieskids.com/wp-content/uploads/2019/09/5Fan.png" alt="Commander John Crichton in space, in a far-away galaxy.">
</article>

<article id="rygel">
<h3>Rygel</h3>
<p>Dominar Rygel the Sixteenth is a member of the Hynerian royalty. He was desposed in a coup by his cousin and imprisoned by the Peacekeepers for centuries.</p> 
<img src="https://pbs.twimg.com/media/EGh21_BXkAEtOsK.jpg" alt="Regal Rygel poses majestically for all to admire.">
</article>

<article id="zhaan">
<h3>Zhaan</h3>
<p>Despite striving for inner peace, Zhaan's life has been marked by violence and trauma, yet she never wavers from her spiritual path, even during her imprisonment.</p> 
<img src="https://www.thecompanion.app/wp-content/uploads/sites/2/2020/11/Farscape-Featured-Image.jpg" alt="Zhaan's blue complexion, shared by all Delvians, is a result of chlorophyll pigmentation.">
</article>

<article id="chianna">
<h3>Chianna</h3>
<p>Chianna is on the run from a nefarious faction within her home planet. She seeks refuge with the rest of the crew which leads to a lot of chaos and mischief.</p> 
<img src="https://www.giantfreakinrobot.com/wp-content/uploads/2020/10/chiana3-edited.jpg" alt="Chianna is having a quiet moment of reflection about...something.">
</article>

<article id="crais">
<h3>Crais</h3>
<p>Tactical, unforgiving and highly disciplined is Crais. Born and raised as a peacekeeper, he grew to respect the force of authority and embraced his servitude.</p> 
<img src="https://i.pinimg.com/originals/13/25/16/1325161d450042ba97dd3e8e01aa7292.jpg" alt=".">
</article>

<article id="dargo">
<h3>Dargo</h3>
<p>A battle-scarred warrior, Dargo struggles to fight against his powerful rage, a rage born of past traumas. Years in captivity have only served to amplify his rage.</p> 
<img src="https://m.media-amazon.com/images/M/MV5BNjA4Mjk2NjM5OV5BMl5BanBnXkFtZTgwMzQ4MzU1MjE@._V1_.jpg" alt=".">
</article>

<article id="aeryn">
<h3>Aeryn</h3>
<p>Like Crais, Aeryn was also born into military service and knows no other way. But after being betrayed for carrying out her duty, she id forced to re-examine her worldview.</p> 
<img src="https://1.bp.blogspot.com/-l8ww0vcvyGs/XypZtaAUx8I/AAAAAAAAAy4/s_ypYW-PW_EYAkCHWHmCoesXAMXlYtBGQCLcBGAsYHQ/s1600/aeryn3.png" alt="Aeryn looking into the distance, contemplating her next move.">
</article>`;


grid.addEventListener('mouseover', e => {
  //  console.log(e.target);
 // if (e.target.matches('.scorpy')) {
  //  grid.setAttribute('class', 'temp-grid');
  //   grid.innerHTML = scorpyExtendedBio;
 // }

})

grid.addEventListener('mouseleave', e => {
   // grid.setAttribute('class', 'grid');
   // grid.innerHTML = fullGrid;
})
