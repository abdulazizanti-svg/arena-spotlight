# ARRENA premium Uzbek interface update

## What will change
- Replace the text-only brand with the uploaded ARRENA logo and remove the header’s sign-in and add-community actions.
- Restyle shared shadcn controls into a warm, compact, rounded system: pill inputs/selects/tabs/badges and orange primary buttons with a subtle darker offset shadow.
- Recompose the homepage as one continuous product surface without section divider lines.
- Separate the top three communities into a more prominent premium tier, with the remaining rankings in softer rounded rows.
- Add purposeful icons to navigation, filters, actions, ranking metrics, and dialogs.
- Translate all visible UI, metadata, community descriptions, form copy, empty/error states, and secondary routes into natural Uzbek.

## Technical details
- Upload the supplied logo through the project asset flow and import its asset pointer in the shared shell.
- Update semantic color/radius/shadow tokens in the global design system, then apply them through the existing Button, Input, Select, and Badge components.
- Keep existing routes and ranking behavior intact; this is a frontend and presentation update only.
- Verify desktop and mobile rendering, interaction states, horizontal overflow, and the current build result.
