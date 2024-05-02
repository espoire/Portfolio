<script setup>
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <ProjectCard
    name="Pew-Pew Switcheroo"
    route="pew-pew-switcheroo"
    :tags="['game', 'published', '2024']"
  >
    <p>
      <b>Pew-Pew Switcheroo</b> is a match-three puzzle/RPG game built with Three.js and Vue.js. As
      of May 2024, the game is in active development, and includes multiple stages consisting of
      roleplay sequences and fantasy puzzle combat.
    </p>

    <h3>Gameplay</h3>
    <p>
      Players must rearrange the gem board to make groups of three-in-a-row of the same type of gem,
      to enable their party of summoned battle monsters to attack or heal. Unlike many match-three
      games, players can move the gem they pick up long distances, and even around corners -- the
      game has a time limit for movement, not a distance limit.
    </p>

    <p>
      The game also includes a team construction meta-puzzle. Different opponents are strong against
      or weak to different types of party members, and interact with the gem board in different
      ways. Players discover these enemy abilities, and design a team to foil them. Defeated enemies
      may become summonable as allies, and team members can level up and grow stronger through
      repeated use.
    </p>

    <h3>Plot</h3>
    <p>
      While not heavily plot-driven, the game includes frequent simple dialogue scenes. These scenes
      help beak up the game flow by offering choices and comic relief.
    </p>
  </ProjectCard>

  <ProjectCard
    name="Harvest Havoc"
    route="harvest-havoc"
    :tags="['ludum dare 55', 'game jam', 'published', '2024']"
    site="Itch.io"
    href="https://mortusnegati.itch.io/true-heir-warfare-harvesting-havoc"
  >
    <p>
      <b>Harvest Havoc</b> is a game jam submission made in the Godot game engine, completed for the
      Ludum Dare 55 game jam competition in April 2024. The game jam's theme was "summoning", and
      the game involves drawing runes (a la a phone unlock patterns) on a pentagram to summon
      animate vegetables to battle.
    </p>

    <h3>Gameplay</h3>
    <p>
      After a brief story intro, the player enters into battle over an empty farmyard with their
      sibling by summoning vegetables. -- the only problem? The game didn't tell them how to summon
      anything yet! The player can see the shapes the non-player opponent is drawing, or notice an
      environmental clue to discover the runes needed to do battle. If too many of either
      participant's summoned forces reach the opposing barn, the round ends. After up to 5 rounds,
      one of the siblings is declared the victor, and the credits roll.
    </p>

    <h3>Contributors</h3>
    <ul>
      <li>
        Vivian Lampman - Programming: Summoning Controls, Base Opponent Script, Bird Movement, Intro
        & Outro Sequences
      </li>
      <li>Gregary Pergrossi - Programming: Camera Controls, Base Mobs Movement</li>
      <li>
        JaggedRidge - Programming: Specific Mobs Movement, Opponent Script Specifics, Rune Drawing,
        Round Advancement
      </li>
      <li>Leo115 - Programming: 3D Modeling, Project Management</li>
      <li>Shawna Burns - 2D Art, Sound Effects, Story Design</li>
    </ul>
  </ProjectCard>

  <ProjectCard name="Monster Smash" route="monster-smash" :tags="['game', 'published', '2023']">
    <p>
      <b>Monster Smash</b> is a roguelike deck-building monster-battler game, built with vanilla
      JavaScript and HTML5. The game was built during late 2023, and at the time of writing
      development is no longer in progress. Monster Smash involves training a monster to battle
      other monsters, and hopefully become strong enough to defeat the end boss before time runs
      out.
    </p>

    <h3>Gameplay</h3>
    <p>
      Players alternate drawing and playing hands of Training cards, and then either visiting a shop
      or participating in monster battles. After the Shop or Battle, the player may gain a choice of
      new cards to add to their deck. Then, the player pre-selects their next event, the deck
      shuffles, and the cycle repeats.
    </p>
    <p>
      Cards have a wide variety of effects, including directly modifying a monster's stats, boosting
      future cards, permanently adding or removing cards from the deck, and granting temporary buffs
      or debuffs. Some cards can only be played when certain special conditions are met, or if a
      cost can be paid. Because the player preselects their upcoming battles and shop visits, the
      player can use cards differently based on their foreknowledge, for example, prioritizing
      healing before a tough battle.
    </p>

    <h3>Time Limit</h3>
    <p>
      During each game, players may only shuffle their deck 20 times. At the end of the final
      shuffle, the player must face a powerful dragon as a final test.
    </p>

    <h3>Contributors</h3>
    <ul>
      <li>Vivian Lampman - Programming, Animations, Card Design</li>
      <li>Shawna Burns - 2D Art, Sound Effects, Character Design</li>
    </ul>
  </ProjectCard>

  <ProjectCard name="Excel-Diff" route="excel-diff" :tags="['tool', 'published', '2023']">
    <p>
      <b>Excel-Diff</b> is a web-based difference finder for large unsorted Microsoft Excel tables,
      built in vanilla JavaScript. While many difference checking tools exist, none I could find at
      the time could handle matching different versions of the same record in shuffled Microsoft
      Excel tables. Faced with the need to audit multiple versions of several 50k+ record Excel
      tables, I built my own tool for the task.
    </p>
    <h3>Usage</h3>
    <p>
      The tool accepts copy/pastes of two versions of the same Excel table, and returns some
      formatted text which can be pasted back into Excel for a side-by-side comparison view,
      suitable for difference highlighting. The tool tolerates altered, added, and deleted records,
      as well as shuffled order, finding and matching up before and after records side-by-side. It's
      also performant enough to complete this find-match-sort process in milliseconds, even for
      datasets of 50,000+ records.
    </p>
  </ProjectCard>

  <ProjectCard
    name="Untitled JavaScript machine learning framework"
    route="Machine-Learning"
    :tags="['Code-Only', '2024']"
  >
    <p>
      To prove my grasp of the implementational details of neural networks and stochastic gradient
      descent, in 2022-2024, I built a vanilla-JavaScript neural networks and machine-learning
      framework from scratch, and tested it with the MNIST optical character recognition task. The
      framework is platform-agnostic, running in both Node and embedded in a web page, and runs fast
      enough to even train neural nets on a client machine while embedded in a web page.
    </p>
  </ProjectCard>

  <ProjectCard name="Auto-Minesweeper" route="Minesweeper" :tags="['game', 'published', '2022']">
    <div style="min-height: calc(200px + 1.4rem)">
      <div class="iframeFrame" style="--size: 200px">
        <iframe
          src="https://espoire.github.io/Minesweeper/"
          title="Live interactive demo of Auto-Minesweeper"
          width="500"
          height="500"
          style="scale: 40%"
        ></iframe>
        <div class="caption">Interactive</div>
      </div>

      <p>
        <b>Auto-Minesweeper</b> is a simple web-application version of the famous Minesweeper game
        bundled with many versions of Windows -- with a twist. The game automatically plays any
        simple safe moves -- moves deducible in a single step given the visible information. This
        leaves the player to solve only the more challenging deductions requiring multiple-step
        inference or probabilistic reasoning.
      </p>
      <p>Auto-Minesweeper is built in vanilla JavaScript.</p>

      <h3>Contributors</h3>
      <ul>
        <li>Vivian Lampman - Programming</li>
        <li>Shawna Burns - Visual Design</li>
      </ul>
    </div>
  </ProjectCard>

  <ProjectCard name="Starry Sky" route="starry-sky" :tags="['animation', 'published', '2021']">
    <div style="min-height: calc(150px + 1.4rem)">
      <div class="iframeFrame">
        <iframe
          src="https://espoire.github.io/starry-sky/"
          title="Live interactive demo of Starry Sky"
          width="150"
          height="150"
        ></iframe>
        <div class="caption">Interactive</div>
      </div>

      <p>
        <b>Starry Sky</b> is a programmatic art piece made with Three.js. It features an animated
        star field, and can display arbitrary 2D images in the stars via star-size modulation.
      </p>

      <h3>Interactivity</h3>
      <p>
        While it appears flat at first glance, it is actually an example of the forced-perspective
        technique. The camera can be panned via click-and-drag, or zoomed via the mouse wheel, to
        get an outside view of the animation.
      </p>
    </div>
  </ProjectCard>

  <ProjectCard name="Zen Fish Tank" route="Fish-Tank" :tags="['animation', 'published', '2021']">
    <div style="min-height: calc(150px + 0.4rem)">
      <div class="iframeFrame noninteractive">
        <iframe
          src="https://espoire.github.io/Fish-Tank/"
          title="Live interactive demo of Zen Fish Tank"
          width="500"
          height="501"
          style="scale: 30%; top: calc(50% - 1px)"
        ></iframe>
      </div>

      <p>
        <b>Zen Fish Tank</b> is a simple CSS-animated scene of some fish swimming in an ocean-like
        scene. I built this animation along with a student whom I was teaching the basics of
        JavaScript, CSS, HTML, and pixel-art.
      </p>

      <h3>Contributors</h3>
      <ul>
        <li>Vivian Lampman - Programming</li>
        <li>Gabrielle Vert - Programming, Pixel Art</li>
      </ul>
    </div>
  </ProjectCard>

  <ProjectCard name="DDOP" route="DDOP" :tags="['tool', 'Code-Only', '2020']">
    <p>
      <b>DDOP</b>, a portmanteau of 'DDO' (Dungeons and Dragons Online) and 'OP' (over-powered) is a
      gear-recommendation tool for the online MMORPG, Dungeons and Dragons Online. DDOP periodically
      gathers game data by parsing the player-edited DDO Wiki, and feeds that to a
      reverse-engineered combat simulator, to produce high-quality recommendations for Monk
      character's equipment loadouts. After code optimization and adopting the Simulated Annealing
      algorithm, DDOP was able to discover equipment sets vastly more powerful than those found by
      contemporary world-class players.
    </p>

    <p>DDOP is a multithreaded Java application, producing file and console output.</p>
  </ProjectCard>
</template>

<style lang="scss" scoped>
h3 {
  margin-top: 0.7rem;
}

p {
  margin-top: 0.7rem;
}

.iframeFrame {
  --size: 150px;
  position: relative;
  float: right;
  margin-left: 1rem;
  margin-bottom: 1rem;
  border: 0.2rem solid hsla(160, 100%, 37%, 1);
  border-radius: 0.4rem;
  width: calc(var(--size) + 0.4rem);
  height: calc(var(--size) + 0.4rem);

  &.noninteractive {
    border-color: var(--color-border);
  }
}

iframe {
  position: absolute;
  border: none;
  translate: -50% -50%;
  left: 50%;
  top: 50%;
}

.caption {
  position: relative;
  top: var(--size);
  color: hsla(160, 100%, 37%, 1);
  background-color: hsla(160, 100%, 37%, 10%);
  width: fit-content;
  translate: -50%;
  left: 50%;
  padding: 0.1em 0.5em;
  border-radius: 0 0 0.5em 0.5em;
}
</style>
