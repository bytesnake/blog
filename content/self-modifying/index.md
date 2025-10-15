+++
title = "Self-modifying configuration pattern"
date = "2025-06-05"

[extra]
mailtoken = "j32oyb3"

[extra.changelog]
5402284 = { title="Add blog post about self-modifying pattern", date = "5 June, 2025" }
6085a5b = { title = "Add more context to self-modying post; Add example file", date = "15 October, 2025" }

[[extra.readnext]]
title = "People actually do this for fun?"
url = "https://ginoz.bearblog.dev/people-actually-do-this-for-fun/"
desc = "Leaving my house is in the top three things I stopped doing since the pandemic began, almost five years ago."
via = "bearblog.dev"
date = "01 Sept, 2025"

+++

One of the interesting, and hard aspect of calisthenics, is the ability to
progress[^1] between movements in [many different ways](https://docs.google.com/spreadsheets/d/1a8tlZ-zbF695HA3Lmm20OIYeYYxo1lmUOczUXKLoL4s/edit?gid=1833143925#gid=1833143925).
In contrast to classical weight training, the target is not being able to lift
a _certain_ amount of weight over a _certain_ amount of repetitions -- but being
able to move into a position and hold for some time.


[^1]: Classical axes of movements are divided into pulling vs. pushing and
    vertically vs. horizontally. For example, handstand is a vertical pushing
    movement.

I was recently loooking for ways to track exercise progressions long-term. As I
found existing applications not customizable enough for my needs, I instead
implemented a simple interval timer. What set it aparts from others, is that
executions is sourced from [TOML](https://toml.io/en/) files. Especially for
intra-exercise progressions, I found a self-modifying pattern useful, where
configuration keys can act on themselves.

<!-- more -->

To keep implementation complexity low, I've written a small, static webapp,
where you can upload a set of exercises of TOML files. It then executes them
and offers a progressed version at the end, for the next session.

For example, the Tuck Lever exercise is defined with a header of
```toml,name=https://github.com/bytesnake/blog/blob/master/content/self-modifying/pure-bodyweight.toml#L198-L206
[tuck-front-lever]
tags = [ "bodyweight" ]
text = """
## Tuck Front Lever
 
 - begin in a hang position and pull up into front lever position
 - pull should blades down, packed shoulder feeling
"""
media = "https://workout-temple.com/wp-content/uploads/2022/11/sideview-tucked-front-lever.jpg"
```

This renders a simple start screen with all information needed:

{% figure(caption="
    Example start screen for the Tuck Front Lever exercise. Tapping on start displays interval 
    timer for this isometric exercise. Link on the left side, initiates a download with updated
    configuration set for next session.
", id="1") %}
<img src="example.png" />
{% end %}

A main design question is how to implement all the specific progression for
exercises. Some consists of simple on-off phases, others have multi-stage
exercises, again other progress in changing the movement altogether. To
accommodate all of these possible progressions, I quickly realized that no
built-in system would suffice.

Instead, I moved the programmatic part from the webapp to the configuration
file, and described the possible progression actions as fields with associated
JS snippets. The file acts on itself, is hence self-modifying. 
Again for the Tuck Front Lever, we have only a single action, that of
decreasing pause between sets:

```toml
[tuck-front-lever.mods.decrease-pause]
name = "Decrease Pause"
action = """
for (const elm of cfg["config"]["conduct"]) {
\tif(elm["kind"] != "pause")
\t\tcontinue;

\telm["length"] *= 0.75;
}
"""
```

After the exercises ends, you can select whether to progress, or not:

{% figure(id="2", caption=" Finish screen for Tuck Front Lever progression.
'Decrease Pause' executes associated snippets and modifies the configuration
file. 'Do Nothing' keeps the current state and does not modify content.") %}
<img src="example2.png" />
{% end %}

The link on the left downloads the modified file. Pretty simple and flexible.

<!-- vim: set linewidth=60 nowrap -->
