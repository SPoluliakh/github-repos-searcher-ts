Single Page Application with React.

The app uses free hosting for the backend, so there may be a delay on first
load, or it may require a page reload as the server "falls asleep" if not in use

Home page contains:

1. Cards with article titles and descriptions for 100 characters. The user can
   click on the card to go to an article page that contains the title and full
   description of the selected article.

2. A field to filter by keyword. The user enters keywords into the field and the
   system displays all articles containing at least one of the keywords in the
   name or/and description.

The priority of fields: (1) names; and (2) description. The article with one
match in the name is higher than the article with one match in the description.

The matched keywords should be highlighted with yellow color.
