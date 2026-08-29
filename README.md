# Arena Prime

Redesign ARRENA completely.

The website must feel as polished, minimal, premium, and intentional as Apple.com — not like a gaming template, esports dashboard, cyberpunk UI, or AI-generated SaaS website.

Use shadcn/ui components throughout the interface.

Design language

Think:

Apple.com × premium product design × competitive community platform

Use:

clean whitespace

extremely strong typography

large editorial-style headings

subtle borders

restrained shadows

monochrome/neutral palette

precise spacing

smooth transitions

beautiful responsive layouts

minimal UI chrome

high-quality visual hierarchy

Avoid completely:

neon colors

gaming gradients

glowing borders

glassmorphism

excessive rounded cards

dashboard-style layouts

purple/blue AI SaaS aesthetics

random gaming illustrations

esports clichés

unnecessary icons everywhere

ARRENA should look expensive and calm, while the competition itself provides the energy.

Homepage

Make the homepage feel like an Apple product page.

Large opening statement:

Your community deserves to be seen.

Small supporting text:

ARRENA is where Minecraft servers, CS2 communities, Discord servers and Telegram groups compete for attention.

Then immediately transition into the actual Arena.

The leaderboard should feel like an Apple-designed product interface rather than a generic table.

Use large spacing, subtle separators, excellent typography and carefully aligned columns.

Leaderboard

Header:

Arena

Small description:

The communities people are watching right now.

Filters:

All · Minecraft · CS2 · Discord · Telegram

Time:

All Time · Today

Each ranking row should be extremely clean:

#01
Community name
Platform
Current bid
Clicks
24h movement

Use subtle hover states.

Top-ranked communities should not become giant trophy cards. Keep the ranking system elegant and consistent.

Community page

Make it feel like an Apple product detail page.

Large community name.

Minimal metadata.

Huge primary statistic:

#12

Then:

1,250,000 UZS current bid

8,421 clicks

↑ 4 positions today

A prominent but elegant CTA:

Challenge this position

The bidding interface should use shadcn Dialog, Input, Button, Tabs, Badge, Card and other appropriate primitives.

Add Community

Create a beautiful minimal onboarding flow.

Step 1:
Choose platform.

Step 2:
Enter community information.

Step 3:
Set starting bid.

Step 4:
Preview.

Step 5:
Enter ARRENA

Keep the forms extremely clean and spacious.

Today

Create a dedicated /today page.

Large heading:

Today's Arena

Supporting copy:

The communities making the biggest moves in the last 24 hours.

Show a beautiful ranking list with today's spending, clicks and position changes.

Navigation

Minimal Apple-style navigation.

Logo:

ARRENA

Links:

Arena
Today
Games

Right:

Add Community
Sign In

Use a subtle sticky navigation bar with backdrop blur only where appropriate.

Typography

Typography is extremely important.

Use a modern Apple-like system sans-serif.

Large headlines should feel editorial and confident.

Body text should be quiet and readable.

Do not use futuristic gaming fonts.

Color

Primarily:

black
white
off-white
neutral grays

Use accent colors only for meaningful states such as:

positive movement
negative movement
verified status

No neon gaming palette.

Animation

Use subtle Apple-like motion:

smooth page transitions

gentle hover states

number transitions

ranking movement

modal animations

section reveal

Animations should feel expensive, not flashy.

Responsive

Mobile must feel intentionally designed, not like a collapsed desktop version.

Use shadcn responsive components and layouts.

On mobile, ranking rows should become elegant compact layouts while keeping rank, community, bid and movement immediately visible.

Final rule

Do NOT make this look like:

"gaming website"

Make it look like:

"Apple designed a premium product for gaming communities."

Every spacing value, font size, border, button, card, transition and layout decision should be intentional.

The product and leaderboard are the hero, not decorative gaming visuals.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/32debbee-8fdc-4f7e-ae7b-949e91e79daf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
