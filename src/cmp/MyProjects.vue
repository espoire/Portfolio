<script setup>
import ProjectCard from './ProjectCard.vue';
</script>

<template>
  <ProjectCard name="Pew-Pew Switcheroo" route="pew-pew-switcheroo" :tags="['game', 'published', '2024']">
    <p>
      <b>Pew-Pew Switcheroo</b> is a match-three puzzle/RPG game built with Three.js and Vue.js.
      As of May 2024, the game is in active development, and includes multiple stages consisting
      of roleplay sequences and fantasy puzzle combat.
    </p>
    
    <h3>Gameplay</h3>
    <p>
      Players must rearrange the gem board to make groups of three-in-a-row
      of the same type of gem, to enable their party of summoned battle monsters
      to attack or heal. Unlike many match-three games, players can move the
      gem they pick up long distances, and even around corners -- the game
      has a time limit for movement, not a distance limit.
    </p>

    <p>
      The game also includes a team construction meta-puzzle. Different
      opponents are strong against or weak to different types of party members,
      and interact with the gem board in different ways. Players discover
      these enemy abilities, and design a team to foil them. Defeated enemies
      may become summonable as allies, and team members can level up and grow
      stronger through repeated use.
    </p>

    <h3>Plot</h3>
    <p>
      While not heavily plot-driven, the game includes frequent simple dialogue
      scenes. These scenes help beak up the game flow by offering choices and
      comic relief.
    </p>
  </ProjectCard>

  <ProjectCard name="Monster Smash" route="monster-smash" :tags="['game', 'published', '2023']">
    <p>
      <b>Monster Smash</b> is a roguelike deck-building monster-battler game, built with vanilla JavaScript and HTML5.
      The game was built during late 2023, and at the time of writing development is no longer in progress.
      Monster Smash involves training a monster to battle other monsters, and hopefully become strong enough
      to defeat the end boss before time runs out.
    </p>

    <h3>Gameplay</h3>
    <p>
      Players alternate drawing and playing hands of Training cards, and then either visiting a shop or
      participating in monster battles. After the Shop or Battle, the player may gain a choice of new cards
      to add to their deck. Then, the player pre-selects their next event, the deck shuffles, and the cycle
      repeats.
    </p>
    <p>
      Cards have a wide variety of effects, including directly modifying a monster's stats, boosting future
      cards, permanently adding or removing cards from the deck, and granting temporary buffs or debuffs.
      Some cards can only be played when certain special conditions are met, or if a cost can be paid. Because
      the player preselects their upcoming battles and shop visits, the player can use cards differently based
      on their foreknowledge, for example, prioritizing healing before a tough battle.
    </p>

    <h3>Time Limit</h3>
    <p>
      During each game, players may only shuffle their deck 20 times. At the end of the final shuffle, the player
      must face a powerful dragon as a final test.
    </p>

    <h3>Other Contributors</h3>
    <p>
      Shawna Burns - 2D Images, Sound Effects
    </p>
  </ProjectCard>

  <ProjectCard name="Starry Sky" route="starry-sky" :tags="['animation', 'published', '2021']">
    <iframe
      src="https://espoire.github.io/starry-sky/"
      title="Live interactive demo of Starry Sky"
      width="150"
      height="150"
    ></iframe>

    <p>
      <b>Starry Sky</b> is a programmatic art piece made with Three.js.
      It features an animated star field, and can display arbitrary 2D
      images in the stars via star-size modulation.
    </p>

    <h3>Interactivity</h3>
    <p>
      While it appears flat at first glance, it is actually an example
      of the forced-perspective technique. The camera can be panned via
      click-and-drag, or zoomed via the mouse wheel, to get an outside
      view of the animation.
    </p>

  </ProjectCard>
</template>

<style lang="scss" scoped>
h3 {
  margin-top: 0.7rem;
}

p {
  margin-top: 0.7rem;
}

iframe {
  float: right;
  max-width: 30dvw;
  max-height: min(30dvw, 40dvh);
  margin-left: 1rem;
  margin-bottom: 1rem;
  border: 0.2rem solid hsla(160, 100%, 37%, 1);
  border-radius: 0.4rem;
}
</style>