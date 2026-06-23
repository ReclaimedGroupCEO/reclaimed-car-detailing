# Photo & Video Shot List — Reclaimed Detailers

Every image slot below is currently showing a "Photo coming soon" placeholder on the live site. This list maps each one to the actual file/id so you (or Ray) can shoot the real thing and drop it straight into that slot. Shoot everything in landscape unless noted, and always get the customer's OK per the photo/video release in `liability-waiver.html` before posting a vehicle that isn't yours.

## General shooting tips
- **Light:** Golden hour (1hr after sunrise / before sunset) makes paint and ceramic coatings pop without harsh reflections. Avoid direct overhead noon sun — it flattens reflections and washes out color.
- **Background:** Plain backgrounds (driveway, garage, treeline) read more premium than a busy parking lot. Avoid other people's license plates, house numbers, or faces in frame unless you have permission.
- **Before/After pairs:** Lock the camera position (tripod or same spot/angle) and don't change lighting between shots — inconsistent lighting is the #1 reason before/afters look fake or unconvincing.
- **Phone is fine:** Modern phone cameras are plenty — shoot in good light, clean the lens, and avoid digital zoom (move closer instead).
- **Video:** A few 10-15 second clips of water beading, foam cannon action, or a slow pan around a finished vehicle go a long way for the "cinematic" feel — see UI/UX notes below.

## index.html (Homepage)
| Slot id | Placeholder | What to shoot |
|---|---|---|
| `hero-bg` | Dark luxury vehicle, low angle | Your best finished vehicle — low angle, dramatic light, ideally wet/glossy paint right after detail. This is the first thing every visitor sees. |
| `hero-aside-img` | Supporting hero image | A tighter detail shot — hands working, a microfiber pass, or a close-up reflection shot — to pair with the hero. |
| `show-exterior` | Exterior detail result | Finished exterior — full vehicle, clean background, good light. |
| `show-wheel` | Wheel/tire detail close-up | Close-up of a cleaned wheel/tire — show the wheel barrel and tire shine. |
| `show-engine` | Engine bay detail | Clean engine bay, dressed plastics, no harsh glare on metal. |
| `show-interior` | Interior detail result | Dash + seats wide shot, well-lit, no clutter in frame. |
| `ba1-before` / `ba1-after` | Before/after pair 1 | Same vehicle, same angle, same spot — dirty vs. detailed. |
| `ba2-before` / `ba2-after` | Before/after pair 2 | A second, different vehicle/angle (interior or paint correction works well here). |
| `mission-img` | Faith/community mission photo | Ray at work, or a community/church-adjacent moment — something personal, not just a car. |

## showcase.html (Gallery)
| Slot id | Placeholder | What to shoot |
|---|---|---|
| `gba1-b` / `gba1-a` | Before/after pair | Pick your most dramatic correction job (swirl removal, heavy interior restoration). |
| `gba2-b` / `gba2-a` | Before/after pair | A second strong before/after — variety in vehicle type/color helps. |
| `gal1` – `gal9` | Gallery grid (9 images) | Mix of: full exterior shots, wheel close-ups, interior shots, ceramic coating beading water, paint correction close-ups, engine bays, and 1-2 action shots (you mid-detail). Aim for variety — don't repeat the same angle nine times. |

## about.html
| Slot id | Placeholder | What to shoot |
|---|---|---|
| `about-ray` | Owner portrait | A real portrait of Ray — outdoors, near a vehicle or equipment, friendly/confident expression. This is the "trust" photo — worth getting professionally shot or at least shot with intention (good light, simple background). |

## services.html (Overview page)
| Slot id | Placeholder | What to shoot |
|---|---|---|
| `svc-ext` | Exterior detail thumbnail | Clean finished exterior shot. |
| `svc-int` | Interior detail thumbnail | Clean finished interior shot. |
| `svc-pc` | Paint correction thumbnail | Close-up paint reflection showing clarity/gloss. |
| `svc-cc` | Ceramic coating thumbnail | Water beading on a coated panel — the classic ceramic "money shot." |
| `svc-full` | Full package thumbnail | Full vehicle, exterior + interior implied (a hero-style shot works). |

## Each services-*.html subpage
| File | Slot id | What to shoot |
|---|---|---|
| `services-exterior.html` | `svc-hero-img` | Wide exterior detail hero shot. |
| `services-interior.html` | `svc-hero-img` | Wide interior detail hero shot. |
| `services-paint-correction.html` | `svc-hero-img` | Macro/close-up paint correction shot (ideally a swirl-before vs corrected-after split if you can get one). |
| `services-ceramic.html` | `svc-hero-img` | Water beading / sheeting shot on a ceramic-coated panel, ideally in motion (hose water beading off). |

## Priority order if you can only shoot a few sessions
1. One full "hero" vehicle session (clean, low-angle, golden hour) → covers `hero-bg`, `svc-full`, gallery filler.
2. One before/after session on a genuinely dirty vehicle → covers `ba1`, `ba2`, `gba1`, `gba2`.
3. Ceramic coating water-beading clip/photo → covers `svc-cc`, `services-ceramic.html` hero.
4. Ray's portrait → covers `about-ray`.
5. Wheel + engine bay close-ups → covers `show-wheel`, `show-engine`.
