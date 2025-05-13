const blogs = [
  {
    slug: "deepracer-win",
    title: "AWS DeepRacer - From Default Models to Double Wins",
    description: "How I won the UNSW DeepRacer competition and what I learned from it.",
    content: (
      <>
        <p>
          When I joined the <strong>AWS DeepRacer Challenge</strong>, I had zero background in machine learning—but a lot of curiosity.
        </p>
        <p>
          The idea? Train a virtual car to drive itself around a track using reinforcement learning and a custom Python-based <strong>reward function</strong>. The better your model, the faster and more consistent the lap. What started as a casual challenge quickly became one of the most technical and satisfying projects I've done.
        </p>
        <p>
          Here's the full breakdown of my DeepRacer journey—from early default models to racing-line optimization, reward shaping, and ultimately winning <strong>both the virtual and in-person races</strong>.
        </p>

        <hr />

        <h3>Step 1: The Default Model and the Path to Stability</h3>
        <p>
          Like most beginners, I started with the default reward function. It worked—but just barely. My first trained model managed to stay on the track <em>sometimes</em>, but was painfully slow and unpredictable, averaging around <strong>17 seconds per lap</strong>.
        </p>
        <p>
          I didn't want speed at first—I just wanted the car to drive cleanly.
        </p>
        <p>
          So I began tweaking the reward function little by little. I added parameters like:
        </p>
        <ul>
          <li><strong>all_wheels_on_track</strong></li>
          <li><strong>steering_angle</strong></li>
          <li><strong>heading</strong></li>
          <li><strong>speed</strong></li>
          <li><strong>position relative to center</strong></li>
        </ul>
        <p>
          I focused on <strong>stability</strong>—creating a function that would reinforce calm, centered, consistent driving. Over time, I learned how even small changes to the logic could drastically affect how the car behaved in corners, straightaways, and transitions.
        </p>

        <hr />

        <h3>Step 2: Discovering the Racing Line (K1999 Optimizer)</h3>
        <blockquote>
          <em>What if I stopped guessing and just trained the car to follow the best possible path?</em>
        </blockquote>
        <p>
          That's when I discovered <strong>K1999's racing line calculator</strong>—a community-built tool that generates the <strong>optimal path and turn angles</strong> through any DeepRacer track.
        </p>
        <p>
          I used it to generate a complete list of optimized waypoints for the <strong>re:Invent 2018</strong> track (17.6m long, 76cm wide), and rewrote parts of my reward function to align the car's heading with this racing line.
        </p>
        <p>
          This was a huge step forward. Now I wasn't just rewarding “centered driving”—I was rewarding <strong>precision</strong>: being at the right place, facing the right direction, at the right time.
        </p>

        <hr />

        <h3>Step 3: Locking in Stability - <code>slow.txt</code></h3>
        <p>
          Armed with the racing line, I built a new reward function: <code>slow.txt</code>.
        </p>
        <p>This version focused on:</p>
        <ul>
          <li><strong>Matching optimal heading angles</strong> at each waypoint</li>
          <li><strong>Staying on track</strong> with strict punishments for going off</li>
          <li>Encouraging correct positioning before turns</li>
          <li>Penalizing oversteering and speed drops in straight sections</li>
        </ul>
        <p>
          It was a precision driver—not fast, but <strong>reliably completed the track 100%</strong> during evaluation runs. This gave me the confidence that I had a stable base model—one that knew how to drive, follow the line, and stay safe.
        </p>

        <hr />

        <h3>Step 4: Enhancing with Speed - <code>fast.txt</code></h3>
        <p>
          With the stable <code>slow.txt</code> model trained and saved, I <strong>cloned it</strong> and began building a new reward function focused on performance.
        </p>
        <p>This version took all the good behavior from <code>slow.txt</code>—but introduced:</p>
        <ul>
          <li><strong>Strategic corner cutting</strong> using zone-based rewards</li>
          <li><strong>Speed zone logic</strong>—rewarding acceleration on straights and gentle deceleration into turns</li>
          <li><strong>More relaxed heading alignment</strong>, allowing more deviation in tight corners</li>
          <li>Tolerance for being slightly off track in high-gain sections</li>
          <li>Additional logic for <em>momentum-based</em> reward shaping (using previous speed)</li>
        </ul>
        <p>
          The result was a far more aggressive model that still knew how to drive cleanly—but now focused on <strong>time, not just survival</strong>.
        </p>

        <hr />

        <h3>Step 5: Test, Train, Tune</h3>
        <p>
          I trained in ~2 hour sessions, evaluated each version visually and numerically, and refined logic between runs.
        </p>
        <p>
          Some reward tweaks made the car overly cautious. Others caused it to spin out or miss turns. But with each revision, I got closer to a model that could <em>fly</em> through the course.
        </p>
        <p><strong>Lap times dropped steadily:</strong></p>
        <ul>
          <li>Default: ~17s</li>
          <li>Stable base (<code>slow.txt</code>): ~13-14s</li>
          <li>Optimized version (<code>fast.txt</code>): <strong>sub-9s</strong></li>
        </ul>

        <hr />

        <h3>Step 6: Results - 1st in Virtual and In-Person Races</h3>
        <p>
          When it came time to submit models for the virtual qualifying race, I used my final <code>fast.txt</code> model. The result?
        </p>
        <p><strong>1st Place</strong>, with a best virtual lap of <strong>00:08.576</strong>.</p>

        <table>
          <thead>
            <tr>
              <th>Racer</th>
              <th>Time (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Me</td><td><strong>00:08.576</strong></td></tr>
            <tr><td>Whatiswrongwith</td><td>00:08.598</td></tr>
            <tr><td>JeremyLi#2364</td><td>00:08.993</td></tr>
            <tr><td>FunctionalTest#0852</td><td>00:09.286</td></tr>
            <tr><td>Derrick5564</td><td>00:09.331</td></tr>
          </tbody>
        </table>

        <p>
          Then came the in-person final. AWS engineers loaded our models onto real DeepRacer cars and ran them on the same re:Invent 2018 track—but this time in the real world.
        </p>
        <p>
          Despite the natural drop in speed due to physical constraints (motors, sensors, grip), my car still came out <strong>on top again</strong>, with a winning physical time of <strong>13.49 seconds</strong>.
        </p>

        <hr />

        <h3>What I Learned</h3>
        <ul>
          <li><strong>Start with stability.</strong> Speed comes later.</li>
          <li><strong>The racing line matters.</strong> Don't teach the car to hug the center—teach it to drive like a racer.</li>
          <li><strong>Reward shaping is everything.</strong> If your model isn't learning, it's probably confused by your logic.</li>
          <li><strong>Simulation ≠ reality.</strong> What works virtually doesn't always transfer—but building robust logic gives you a better shot.</li>
          <li><strong>Every parameter matters.</strong> Position, heading, steering, speed—they all interact.</li>
        </ul>

        <hr />

        <h3>Final Thoughts</h3>
        <p>
          The DeepRacer Challenge turned out to be way more than a coding exercise. It gave me practical exposure to:
        </p>
        <ul>
          <li>Reinforcement learning theory</li>
          <li>Python-based behavioral programming</li>
          <li>Strategy, iteration, and debugging in an ML context</li>
        </ul>
        <p>
          If you've ever wanted to see your code come to life—literally—this is the place to start. And who knows? With the right reward function, you might just win a race too.
        </p>

        <hr />

        <p>
          Want to check out my reward functions? I'm happy to share <code>slow.txt</code>, <code>fast.txt</code>, and even the optimal waypoint setup. Just reach out!
        </p>
        <br></br>
      </>
    ),
    date: "June 2024"
  }
];

export default blogs;
