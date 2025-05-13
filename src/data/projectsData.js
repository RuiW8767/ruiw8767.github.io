const projects = [
  {
    slug: "kinetic-magic",
    title: "The Academy of Kinetic Magic",
    description: "A 3D puzzle-platformer built in Unreal Engine focused on magical object manipulation and cloning.",
    content: (
      <>
        {/* Game Overview */}
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/RqzSm0QLkas"
            title="The Academy of Kinetic Magic - Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p>
          <strong>The Academy of Kinetic Magic</strong> is a 3D puzzle-platformer created in a team of 5 for UNSW's COMP3421 Computer Graphics course.
          Players explore a magical school, solving physics-based puzzles using various movement and manipulation mechanics.
        </p>

        <h3>My Role: Clone Module Design & Implementation</h3>
        <p>
          I was responsible for designing and implementing the entire Clone module, which spans three puzzle levels. These levels focused on progressively increasing player mastery of a magical cloning mechanic.
        </p>

        {/* Level 1 */}
        <h4>Level 1 - Magic Classroom</h4>
        <p>
          Players clone glowing runes and stack them on a reactive piston to trigger magic circles. This level introduces object duplication limits and spatial stacking mechanics.
        </p>
        <div className="video-wrapper">
          <iframe
            src="https://drive.google.com/file/d/1yXeb6iSloqijbWGG3jkzeSyVmOSje6Vc/preview"
            title="Level 1 - Classroom"
            allow="autoplay"
            frameBorder="0"
          ></iframe>
        </div>

        {/* Level 2 */}
        <h4>Level 2 - Mirror World</h4>
        <p>
          A room and its mirrored counterpart contain asymmetrical objects. Players must solve puzzles by observing what cannot be cloned or mirrored. This level introduces reflective thinking using clone-exclusion logic.
        </p>
        <div className="video-wrapper">
          <iframe
            src="https://drive.google.com/file/d/1_WyE8V81UF4OmOwYXEnvCxSstD5PuVci/preview"
            title="Level 2 - Mirror"
            allow="autoplay"
            frameBorder="0"
          ></iframe>
        </div>

        {/* Level 3 */}
        <h4>Level 3 - Remote Control Cubes</h4>
        <p>
          Players stand on a treadmill that controls remote cubes using movement and velocity. Walking, running, and crouching are all mapped to cube behaviors, allowing indirect environmental interaction.
        </p>
        <div className="video-wrapper">
          <iframe
            src="https://drive.google.com/file/d/1duGqSHlB0RZUyO28HMq1fkUy6yDrsw9T/preview"
            title="Level 3 - Treadmill"
            allow="autoplay"
            frameBorder="0"
          ></iframe>
        </div>

        <h3>Technical Highlights</h3>
        <ul>
          <li>
            <strong>Piston Safety Detection:</strong> Developed a recursive piston status checker that prevents stacking-induced jamming. If too many clones interfere with movement, the piston triggers a fail state and resets, ensuring consistent player experience across repeated attempts.
          </li>
          <li>
            <strong>Remote-Controlled Puzzle Objects:</strong> Built a velocity mapping system between the player and a remote cube. Player movement (walk/run/crouch) is translated to cube velocity in real time, allowing indirect remote control through treadmill input. This mechanic supports multiple activation triggers and physical feedback.
          </li>
          <li>
            <strong>Mirrored Room Logic:</strong> Implemented a dual-space puzzle using asymmetric mirror logic. Clone behavior is blocked in the mirrored space, forcing players to solve puzzles by reasoning through spatial offsets and non-symmetric environments. Mirrored objects were managed using dynamic offsets rather than traditional render reflections.
          </li>
        </ul>

        <h3>Afterword</h3>
        <p>
          This project pushed me to design complete puzzle arcs, implement interactive systems in Unreal Blueprint, and tune player feedback loops through iteration and playtesting.
        </p>
      </>
    ),
    link: {
      label: "Play on Itch.io",
      url: "https://infynidas.itch.io/the-academy-of-kinetic-magic"
    }
  }
];

export default projects;
